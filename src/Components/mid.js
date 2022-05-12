import { Component } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./User/home";
import Login from "./User/login";
<<<<<<< HEAD

=======
>>>>>>> e7ceb894ff74b74fe4411bce2b7500f1c853b34e
import SignupForm from "./User/Signupform";

class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path="/signup" element = {<SignupForm></SignupForm>} />
                    <Route path = "/login" element = {<Login></Login>}></Route>

                </Routes>
            </div>
        )
    }
}

export default Mid;