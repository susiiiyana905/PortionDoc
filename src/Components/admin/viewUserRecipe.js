import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react"
import AdminDashboard from "../adminDashbaord";

const ViewUserRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/user/recipe", config)
      .then((result) => {
        console.log(result.data.data);
        setRecipeData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addRecipeIngredient = (recipe_id) => {
    localStorage.setItem('recipe_id', recipe_id);
    navigate("/addRecipeIngredient");
  };

  return (
    <>
    <AdminDashboard>
      <div className="container">
        <h1 style={{ textAlign: "center" }}> User Recipes </h1>
        {recipeData.map((singleData) => {
          return (
            
            <div
              class="card mb-3 text-align-center"
              //   style={{  height: "260px" }}
              key={singleData._id}
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={
                      "http://localhost:4001/user/" +
                      singleData.user_id.profile_pic
                    }
                    className="img rounded-circle"
                    height="200px"
                    style={{ marginLeft: "30px" }}
                  />

                  <div>
                    <p style={{ marginLeft: "35px", fontSize: "20px" }}>
                      {singleData.user_id.firstName}{" "}
                      {singleData.user_id.lastName}
                    </p>
                  </div>
                </div>

                <div class="col-md-8">
                  <div
                    className="card"
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      height: "230px",
                    }}
                  >
                    <div class="card-body">
                    <NavLink to={"/userRecipeDetail/" + singleData._id} style={{textDecoration:"none"}}>
                      <div>
                        <h5>{singleData.title}</h5>
                      </div>
                      </NavLink>
                      <div>
                        <p>{singleData.description}</p>
                      </div>
                    </div>
                    
                  </div>
                  <button
                                    className="btn btn-primary mb-2"
                                    style={{
                                      backgroundColor: "#FF7800",
                                      border: "none",
                                      marginLeft: "10px",
                                      marginTop:"10px",

                                    }}
                                    onClick={() => {
                                      addRecipeIngredient(singleData._id);
                                    }}
                                  >
                                    Add Ingredients
                                  </button>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
      </AdminDashboard>
    </>
  );
};
export default ViewUserRecipe;
