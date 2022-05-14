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
          {message}
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