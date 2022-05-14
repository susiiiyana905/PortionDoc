import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const userLogin = (e)=>{
        e.preventDefault();
        const userData = {
            email, password
        }
        axios.post("http://localhost:4001/user/login", userData)
        .then(result1=>{
            if(result1.data.token){
                //login success
                localStorage.setItem('token', result1.data.token)
                console.log(result1.data);
                window.location.replace('/');
            }
            else{
                //login failed
                setMessage("Invalid Credentials")
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
                <div>
                    <div className="col-md-6 d-flex justify-content-center mx-auto ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="images/logo.png" className="log"></img>

                                    <form>
                                        <div className="form-group mt-4">
                                            <label>Email</label>
                                            <input type="text" className="form-control" style={{width:"600px"}}
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group mt-3">
                                            <label>Password</label>
                                            <input type="password" className="form-control" style={{width:"600px"}}
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            />
                                            
                                        </div>

                                        <div>
                                            <div className = "form-group form-check mt-2">
                                                <input type ="checkbox" className="form-check-input" id="rememberme"></input>
                                                <label className = "form-check-label" for="rememberme">Remember Me</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button type="Submit" className="btn btn-light login"  style={{width:'fit-content'}}
                                            onClick={userLogin}
                                            >Login</button>

                                        </div>
                                    </form>
                                    <div className="card mt-4 border-0" style={{width:"25rem"}}>
                                        <div className="card-body">
                                            <div className="text-center">Don't have an account? <Link className="link" to="/signup">SignUp</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </>
        )
    
}

export default Login;