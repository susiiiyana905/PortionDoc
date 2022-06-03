import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./User/home";
import Login from "./User/login";
import SignupForm from "./User/Signupform";
import UpdateProfile from "./User/updateProfile";
import ViewProfile from "./User/viewProfile";
import ViewMeals from "./admin/viewMeal";
import OtpPage from "./User/otppage";
import AddMeal from "./admin/add";
import Meals from "./User/ourmenu";
import Menu from "./User/viewMenu";
import UpdateMeal from "./admin/updateMeals";
import ShowCategory from "./admin/CategoryList";
import AddCategory from "./admin/Category";

import AddRecipes from "./User/addRecipe";
import AddIngredient from "./admin/ingredient";
import ListMeals from "./admin/listViewMeal";
import AddDiet from "./admin/addDietMeal";
import UpdateDiet from "./admin/updateDietMeal";
import Table from "./admin/viewDietRequest";




import UpdateMeals from "./admin/updateMeals";
import ViewRecipe from "./User/viewRecipe";

import Review from "./User/review";
import ViewUserRecipe from "./admin/viewUserRecipe";
import UserRecipeDetail from "./admin/userRecipeDetail";
import ViewReview from "./admin/viewReview";




class Mid extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<SignupForm></SignupForm>} />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/otpPage" element={<OtpPage></OtpPage>}></Route>
          <Route
            path="/updateProfile"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          <Route
            path="/viewProfile"
            element={<ViewProfile></ViewProfile>}
          ></Route>
          <Route path="/viewMeal" element={<ViewMeals></ViewMeals>}></Route>

          <Route path="/addMeal" element={<AddMeal></AddMeal>}></Route>
          <Route path="/menu" element={<Menu></Menu>}>
            {" "}
          </Route>
          <Route path="/ourMenu" element={<Meals></Meals>}>
            {" "}
          </Route>
          <Route
            path="/updateMeal/:mid"
            element={<UpdateMeal></UpdateMeal>}
          ></Route>
          <Route
            path="/addCategory"
            element={<AddCategory></AddCategory>}
          ></Route>
          <Route
            path="/viewCategory"
            element={<ShowCategory></ShowCategory>}
          ></Route>
          <Route path="/addRecipe" element={<AddRecipes></AddRecipes>}></Route>

          <Route
            path="/addIngredient"
            element={<AddIngredient></AddIngredient>}
          ></Route>
          <Route path="/listmeal" element={<ListMeals></ListMeals>}></Route>
          <Route
            path="/mealUpdate/:mid"
            element={<UpdateMeals></UpdateMeals>}
          ></Route>
          <Route path="/viewRecipe/:mid" element={<ViewRecipe></ViewRecipe>}></Route>
          {/* <Route path="contact" element={<Contact></Contact>}></Route> */}
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/viewReview" element={<ViewReview></ViewReview>}></Route>

          <Route path="/userRecipe" element={<ViewUserRecipe></ViewUserRecipe>}></Route>
          <Route path="/userRecipeDetail" element={<UserRecipeDetail></UserRecipeDetail>}></Route>
          <Route path="/add" element={<AddDiet></AddDiet>}></Route>
                    <Route path="/viewDietRequest" element={<Table></Table>}></Route>
                    <Route path="/updateDiet" element={<UpdateDiet></UpdateDiet>}></Route>
        </Routes>
      </div>
    );
  }

}

export default Mid;
