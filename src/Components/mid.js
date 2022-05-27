import { Component } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./User/home";
import Login from "./User/login";
import SignupForm from "./User/Signupform";
import UpdateProfile from "./User/updateProfile"
import ViewProfile from "./User/viewProfile";
import ViewMeals from "./admin/viewMeal";
import OtpPage from "./User/otppage";

import ViewRecipies from "./admin/viewRecipies";

import AddMeal from "./admin/add";
import Menu1 from "./User/ourmenu";
import Menu from "./User/viewMenu";
import UpdateMeal from "./admin/updateMeal";
import ShowCategory from "./admin/CategoryList";
import AddCategory from "./admin/Category";
import AddRecipes from "./User/addRecipe";
import AddIngredient from "./admin/ingredient";


class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path="/signup" element = {<SignupForm></SignupForm>} />
                    <Route path = "/login" element = {<Login></Login>}></Route>
                    <Route path="/otpPage" element={<OtpPage></OtpPage>}></Route>
                    <Route path="/updateProfile" element={<UpdateProfile></UpdateProfile>}></Route> 
                    <Route path="/viewProfile" element={<ViewProfile></ViewProfile>}></Route>
                    <Route path="/viewMeal" element={<ViewMeals></ViewMeals>}></Route>

                    <Route path="/viewRecipies"element={<ViewRecipies></ViewRecipies>}></Route>


                    <Route path="/addMeal" element={<AddMeal></AddMeal>}></Route>
                    <Route path="/menu" element = {<Menu></Menu>}> </Route>
                    <Route path="/ourmenu" element = {<Menu1></Menu1>}> </Route>
                    <Route path="/updateMeal/:mid" element={<UpdateMeal></UpdateMeal>}></Route>
                    <Route path="/addCategory" element={<AddCategory></AddCategory>}></Route>
                    <Route path ="/viewCategory" element={<ShowCategory></ShowCategory>}></Route>
                    <Route path = "/addRecipe" element={<AddRecipes></AddRecipes>}></Route>

                    <Route path ="/addIngredient" element={<AddIngredient></AddIngredient>}></Route>

                </Routes>
            </div>
        )
    }
}

export default Mid;