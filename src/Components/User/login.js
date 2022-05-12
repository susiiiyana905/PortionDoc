import { Component } from "react";

class Login extends Component{
    render(){
        return(
            <div>
                 <div className="col-md-6 d-flex justify-content-center mx-auto ">
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
                            <button type="Submit" className="btn btn-light"  style={{width:'100px'}}>Login</button>
                        </div>
                    </form>
                    </div>

            </div>
        )
    }
}

export default Login;