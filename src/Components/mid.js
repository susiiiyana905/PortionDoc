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
import ViewRecipe from "./User/viewRecipe";

import Review from "./User/review";
import ViewUserRecipe from "./admin/viewUserRecipe";
import UserRecipeDetail from "./admin/userRecipeDetail";
import ViewReview from "./admin/viewReview";
import UserPrivateRoute from "./UserProtectedRoute";
import AdminPrivateRoute from "./AdminProtectedRoute";

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
            element={
              <UserPrivateRoute>
                <UpdateProfile />
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewProfile"
            element={
              <UserPrivateRoute>
                <ViewProfile />
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewMeal"
            element={
              <AdminPrivateRoute>
                <ViewMeals />
              </AdminPrivateRoute>
            }
          ></Route>

          <Route
            path="/addMeal"
            element={
              <AdminPrivateRoute>
                <AddMeal />
              </AdminPrivateRoute>
            }
          ></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/ourMenu" element={<Meals></Meals>}></Route>
          <Route
            path="/updateMeal/:mid"
            element={
              <AdminPrivateRoute>
                <UpdateMeal />
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/addCategory"
            element={
              <AdminPrivateRoute>
                <AddCategory />
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewCategory"
            element={
              <AdminPrivateRoute>
                <ShowCategory />
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/addRecipe"
            element={
              <AdminPrivateRoute>
                <AddRecipes />
              </AdminPrivateRoute>
            }
          ></Route>

          <Route
            path="/addIngredient"
            element={
              <AdminPrivateRoute>
                <AddIngredient />
              </AdminPrivateRoute>
            }
          ></Route>
          <Route path="/listmeal" element={<ListMeals></ListMeals>}></Route>

          <Route
            path="/viewRecipe/:mid"
            element={<ViewRecipe></ViewRecipe>}
          ></Route>
          {/* <Route path="contact" element={<Contact></Contact>}></Route> */}
          <Route
            path="/review"
            element={
              <UserPrivateRoute>
                <Review />
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewReview"
            element={
              <AdminPrivateRoute>
                <ViewReview />
              </AdminPrivateRoute>
            }
          ></Route>

          <Route
            path="/userRecipe"
            element={
              <AdminPrivateRoute>
                <ViewUserRecipe />
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/userRecipeDetail/:rid"
            element={
              <AdminPrivateRoute>
                <UserRecipeDetail />
              </AdminPrivateRoute>
            }
          ></Route>

          <Route path="/add" element={<AddDiet></AddDiet>}></Route>
          <Route path="/viewDietRequest" element={<Table></Table>}></Route>
          <Route path="/updateDiet" element={<UpdateDiet></UpdateDiet>}></Route>
        </Routes>
      </div>
    );
  }
}

export default Mid;
