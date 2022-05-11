import { Component } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./home";
import Login from "./login";

class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path = "/login" element = {<Login></Login>}></Route>
                </Routes>
            </div>
        )
    }
}

export default Mid;