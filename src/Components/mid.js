import { Component } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./User/home";
import Login from "./User/login";
import SignupForm from "./User/Signupform";



//import VerifyUser from "./admin/userverfication";

import OtpPage from "./User/otppage";


class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path="/signup" element = {<SignupForm></SignupForm>} />
                    <Route path = "/login" element = {<Login></Login>}></Route>


                    {/* <Route path= "/verifyuser" element={<VerifyUser></VerifyUser>}></Route> */}

   
                    <Route path="/otpPage" element={<OtpPage></OtpPage>}></Route>

                </Routes>
            </div>
        )
    }
}

export default Mid;