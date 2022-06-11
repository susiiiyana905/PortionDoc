import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react";
const Meals = () => {
  const [mealData, setMealData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:4001/meal/all", config)
      .then((result) => {
        console.log(result.data);
        setMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4001/category/all", config)
      .then((category) => {
        console.log(category.data.data);
        setCategoryData(category.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Header></Header>
      {/* <div> */}
      <div className="container">
        <div id="front">
          <div id="one">
            <div class="dropdown">
              <button
                id="search"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {categoryData.map((category) => {
                  return (
                    <Link
                      class="dropdown-item"
                      to={"/categoryMeals/" + category.categoryName}
                    >
                      {category.categoryName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="two">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Meals</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="meal-data container">
        {mealData.map((singleData) => {
          return (
            <div className="container py-3" style={{ width: "15.2rem" }}>
              <div className="card-deck card">
                <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={"http://localhost:4001/meal/" + singleData.mealImage}
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                  <div className="card-body">
                    <p
                      class="first"
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      {singleData.mealName}
                    </p>
                  </div>
                </NavLink>
                <div className="card-footer">
                  <p class="card-text" style={{ fontWeight: "bold", fontSize:"12px" }}>
                    <label class="text mr-5">
                      Price: {singleData.mealPrice}
                    </label>
                    <label
                      class="text"
                      style={{ float: "right", marginTop: "1px" }}
                    >
                      <i class="fas fa-solid fa-timer"></i>
                      Time: {singleData.time}
                    </label>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <button
            id="mybutton"
            type="button"
            class="btn btn-primary btn-medium"
          >
            Get Cooking
          </button>
        </div>
      </div>

      {/* </div> */}
      <Footer></Footer>
    </>
  );
};
export default Meals;
