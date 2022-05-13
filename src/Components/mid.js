import { Component } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./User/home";
import Login from "./User/login";
import SignupForm from "./User/Signupform";
<<<<<<< HEAD
// import VerifyUser from "./admin/userverfication";
=======
import VerifyUser from "./admin/userverfication";
>>>>>>> e7a8ed665ac5714df92b865c239ebf6c1cdd830f
import OtpPage from "./User/otppage";


class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path="/signup" element = {<SignupForm></SignupForm>} />
                    <Route path = "/login" element = {<Login></Login>}></Route>

<<<<<<< HEAD
                    {/* <Route path= "/verifyuser" element={<VerifyUser></VerifyUser>}></Route> */}
=======
                    <Route path= "/verifyuser" element={<VerifyUser></VerifyUser>}></Route>
>>>>>>> e7a8ed665ac5714df92b865c239ebf6c1cdd830f
                    <Route path="/otppage" element={<OtpPage></OtpPage>}></Route>

                </Routes>
            </div>
        )
    }
}

export default Mid;