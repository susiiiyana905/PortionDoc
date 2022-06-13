import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UpdateMeals from "./updateMeals";
import React from "react"
import AdminDashboard from "../adminDashbaord"

const ViewRecipies = () => {
  const [mealData, setMealData] = useState([]);
  const [message, setMessage] = useState("");
  const [sMessage, setSMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/meals/all", config)
      .then((result) => {
        console.log(result.data.data);
        setMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteMeal = (mid) => {
    axios
      .delete("http://localhost:4001/meals/delete/" + mid, config)
      .then((result) => {
        axios.get(`http://localhost:4001/meals/all`, config)
        .then((result1) => {
          setMealData(result1.data.data);
        });
        console.log(result.data.message);
        setSMessage(result.data.message);
      })
      .catch((e) => {
        setMessage(e.response.data.message);
      });
  };

  return (
    <>
    <AdminDashboard>
      <nav
        className="navbar navbar-expand-lg mainNav"
        style={{ height: "35px" }}
      >
        <i
          class="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white", marginTop: "20px" }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          portiondoc@gmail.com
        </p>
        <i
          class="fas fa-solid fa-phone"
          style={{
            height: "40px",
            marginLeft: "100px",
            color: "white",
            marginTop: "20px",
          }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          +977 983142567
        </p>
      </nav>
      <br />
      <div className="container">
        <NavLink to={"/addMeal"}>
          <button
            className="btn btn-primary mb-2"
            style={{
              backgroundColor: "#FF7800",
              border: "none",
              float: "right",
            }}
          >
            Add New Meal
          </button>
        </NavLink>
      </div>
      <div className="container">
        <h1 style={{ textAlign: "center" }}> Meals </h1>
        <div className="mb-2">
          <div className="suggestion-message text-center">{message}</div>
          <div
            className="success-message text-center"
            style={{ color: "green", fontWeight: "bold" }}
          >
            {sMessage}
          </div>
        </div>

        {mealData.map((singleData) => {
          return (
            <div class="card mb-3" style={{ width: "1200px", height: "350px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={"http://localhost:4001/meal/" + singleData.mealImage}
                    height="348px"
                  ></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <NavLink to={"/updateMeal/" + singleData._id}>
                      <h5 class="card-title">{singleData.mealName}</h5>
                    </NavLink>
                    <i
                      class="fas fa-solid fa-trash"
                      style={{ marginLeft: "600px", marginTop: "0px" }}
                      onClick={() => {
                        deleteMeal(singleData._id);
                      }}
                    ></i>
                    <hr />
                    <p class="card-text">{singleData.mealDescription}</p>

                    <NavLink to="/addIngredient">
                      <button
                        className="btn btn-primary"
                        style={{ marginLeft: "600px" }}
                      >
                        Add Ingredient
                      </button>
                    </NavLink>
                  </div>
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
export default ViewRecipies;
