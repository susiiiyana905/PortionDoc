import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const userRegister = (e) =>{
      e.preventDefault();
      setMessage("");
      const nameRegex = new RegExp('^[a-zA-Z0-9]+$');
      const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{5,15}$');
      const emailRegex = new RegExp("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
      if (email.trim()==="" || password.trim()==="" || firstName.trim()==="" || lastName.trim()==="") {
        setMessage("Empty field found. Fill up the form completely.");          
        return;             
      } else if (firstName.length<=2 || firstName.length>=16) {
          setMessage("FirstName most contain 3 to 15 characters.");          
          return;                 
      } else if (lastName.length<=2 || lastName.length>=16) {
          setMessage("LastName most contain 3 to 15 characters.");
          return;  
      } else if (!nameRegex.test(firstName, lastName)) {
          setMessage("Special characters and white spaces not allowed in name.");          
          return;                
      } else if (!passwordRegex.test(password)) {
          setMessage("Provide at least one uppercase, lowercase, number, special character in password and it accepts only 5 to 15 characters.");          
          return;             
      } else if (!emailRegex.test(email)) {
          setMessage("Invalid email address.");          
          return;        
      }

        const userData = {firstName, lastName, email, password};
        axios.post("http://localhost:4001/signup", userData)
        .then(result=>{
          console.log(result);
          if(result.data.success){
            localStorage.setItem("email", email);
            // window.location.replace('/otpPage');
            navigate("/otpPage", {state: {email: email}})
          }
          else{
            setMessage();
          }
        })
      .catch(e)
    }
    return(
      <>
        <nav className="navbar navbar-expand-lg ">
          <i className="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>

          <i className="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
        </nav>
        <div className="container" style={{"marginTop": "100px"}}>
        <div className="suggestion-message text-center mb-2" style={{color: "red", fontWeight:"bold"}}>{message}</div>
          <h1 style={{ color: "black", textAlign:"center", fontSize:"60px", fontFamily:"sans-serif"  }}>Create an Account</h1>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputFirstName4">First Name</label>
                <input type="First Name" className="form-control" id="inputFirstName4"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputLastName4">Last Name</label>
                <input type="Last Name" className="form-control" id="inputLastName4"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="text" className="form-control" id="inputEmail"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Password</label>
              <input type="password" className="form-control" id="inputPassword2"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2"> Confirm Password</label>
              <input type="password" className="form-control" id="inputConfirmPassword2"/>
            </div>
            <button type="submit" className="btn btn-primary sign-btn" style = {{"backgroundColor":'#FF7800' }} 
            onClick={userRegister}
            >Sign Up</button>
          </form>
        </div>
      </>
    )
  }
export default SignupForm;