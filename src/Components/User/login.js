import { Component } from "react";

class Login extends Component{
    render(){
        return(
            <> 
             <nav class="navbar navbar-expand-lg ">
               
               <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
               
               <i class="fas fa-solid fa-phone" style={{height: "40px", float:"right", color:"white"}} ></i><p className="i-1">+977 983142567</p>
               </nav>
            <div>
               <div className="container">
                 {/* <div className="col-md-6 d-flex justify-content-center mx-auto "> */}
                 <img src="images/logo.png" className="log"></img>
                 {/* <div className="contianer"> */}
                 <form>
                     
                        <div className="form-group mt-4">
                            <label>Email</label>
                            <input type="text" className="form-control" style={{width:"600px"}}/>
                        </div>

                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control" style={{width:"600px"}}/>
                            
                        </div>

                        <div>
                            <div class = "form-group form-check mt-2">
                                <input type ="checkbox" class="form-check-input" id="rememberme"></input>
                                <label class = "form-check-label" for="rememberme">Remember Me</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="Submit" className="btn btn-light"  style={{width:'fit-content'}}>Login</button>
                        </div>
                    </form>
                    {/* </div> */}
                    </div>

            </div>
            </>
        )
    }
}

export default Login;