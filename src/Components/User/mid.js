import { Component } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./home";

class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                </Routes>
            </div>
        )
    }
}

export default Mid;