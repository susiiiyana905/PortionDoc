import React from "react";
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
import ViewRecipe from "./User/viewRecipe";
import Review from "./User/review";
import ViewUserRecipe from "./admin/viewUserRecipe";
import UserRecipeDetail from "./admin/userRecipeDetail";
import ViewReview from "./admin/viewReview";
import UserPrivateRoute from "./UserProtectedRoute";
import AdminPrivateRoute from "./AdminProtectedRoute";
import RequestDietary from "./User/requestDiet";
import OrderMeal from "./User/orderMeal";
import CategoryMeal from "./User/categoryMealView";
import ViewDietMeals from "./admin/viewDietMeal";
import ViewUserDietMeal from "./User/viewUserDietMeal";
import Cart from "./User/cart";
import ViewDietRequest from "./admin/viewDietRequest";
import ViewMealDiet from "./admin/viewMealDiet";
import AddDietIngredient from "./admin/dietIngredient";
import ShowPreferenceCategory from "./admin/preferenceCategory";
import AddPreferenceCategory from "./admin/addPreferenceCategory";
import ViewPreferenceCategory from "./admin/viewPreferenceCategory";
import ViewDetailDiet from "./User/viewDetailDietMeal";
import ViewOrders from './admin/viewOrder';
import RecipeDetail from './User/viewDetailRecipe';
import AddRecipeIngredient from './admin/recipeIngredient';
import OrderView from './User/viewOrder';
import ViewGrocery from './admin/viewGrocery';
import Grocery from './User/ourGrocery';
import AddGrocery from './admin/addGrocery';
import UpdateGrocery from './admin/updateGrocery';


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
              <UserPrivateRoute>
                <AddRecipes />
              </UserPrivateRoute>
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
          <Route path="/listMeal" element={<ListMeals></ListMeals>}></Route>

          <Route
            path="/viewRecipe/:mid"
            element={
              
                <ViewRecipe></ViewRecipe>
              
            }
          ></Route>

          <Route
            path="/review"
            element={
                <Review />
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

          <Route
            path="/add"
            element={
              <AdminPrivateRoute>
                <AddDiet></AddDiet>
              </AdminPrivateRoute>
            }
          ></Route>

          <Route
            path="/viewDietRequest"
            element={
              <AdminPrivateRoute>
                <ViewDietRequest></ViewDietRequest>
              </AdminPrivateRoute>
            }
          ></Route>


          <Route
            path="/updateDiet/:did"
            element={
              <AdminPrivateRoute>
                <UpdateDiet></UpdateDiet>
              </AdminPrivateRoute>
            }
          ></Route>

          <Route
            path="/requestDiet"
            element={
                <RequestDietary></RequestDietary>
            }
          ></Route>
          <Route
            path="/orderMeal"
            element={
              <UserPrivateRoute>
                <OrderMeal></OrderMeal>
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/categoryMeals/:category"
            element={<CategoryMeal></CategoryMeal>}
          ></Route>
          <Route
            path="/viewDietMeal/:preference"
            element={
              <AdminPrivateRoute>
                <ViewDietMeals></ViewDietMeals>
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewUserDietMeal"
            element={
              <UserPrivateRoute>
                <ViewUserDietMeal></ViewUserDietMeal>
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <UserPrivateRoute>
                <Cart></Cart>
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/showPreferenceCategory/:uid"
            element={
              <AdminPrivateRoute>
                <ShowPreferenceCategory></ShowPreferenceCategory>
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewPreferenceCategory"
            element={
              <AdminPrivateRoute>
                <ViewPreferenceCategory></ViewPreferenceCategory>
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/addPreferenceCategory"
            element={
              <AdminPrivateRoute>
                <AddPreferenceCategory></AddPreferenceCategory>
              </AdminPrivateRoute>
            }
          ></Route>
          
          <Route
            path="/viewDetailDiet/:did"
            element={
              <UserPrivateRoute>
                <ViewDetailDiet></ViewDetailDiet>
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/diet/addIngredients"
            element={
              <AdminPrivateRoute>
                <AddDietIngredient></AddDietIngredient>
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewOrders"
            element={
              <AdminPrivateRoute>
                <ViewOrders></ViewOrders>
              </AdminPrivateRoute>
            }
          ></Route>

          <Route
            path="/viewDetailRecipe/:rid"
            element={
              <UserPrivateRoute>
                <RecipeDetail></RecipeDetail>
              </UserPrivateRoute>
            }
          ></Route>
          <Route
            path="/addRecipeIngredient"
            element={
              <AdminPrivateRoute>
                <AddRecipeIngredient></AddRecipeIngredient>
              </AdminPrivateRoute>
            }
          ></Route>
          <Route
            path="/viewMealDiet"
            element={<ViewMealDiet></ViewMealDiet>}
          ></Route>
          <Route path="user/viewOrder" element={<UserPrivateRoute><OrderView></OrderView></UserPrivateRoute>}></Route>

          <Route path="/viewGrocery" element ={<AdminPrivateRoute><ViewGrocery></ViewGrocery></AdminPrivateRoute>}></Route>
          <Route path="/ourGrocery" element ={<UserPrivateRoute><Grocery></Grocery></UserPrivateRoute>}></Route>
          <Route path ="/addGrocery" element ={<AdminPrivateRoute><AddGrocery></AddGrocery></AdminPrivateRoute>}></Route>
          <Route path="/updateGrocery/:gid" element={<AdminPrivateRoute><UpdateGrocery></UpdateGrocery></AdminPrivateRoute>}></Route>
        </Routes>
      </div>
    );
  }
}

export default Mid;
