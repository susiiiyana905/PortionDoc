import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

const CategoryMeal = () => {
  const [mealData, setMealData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    axios
      .get("http://localhost:4001/meals/category/" + category, config)
      .then((result) => {
        console.log(result.data);
        setMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Header></Header>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>{category}</h1>
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
                        fontSize: "17px",
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      {singleData.mealName}
                    </p>
                  </div>
                </NavLink>
                <div className="card-footer">
                  <p class="card-text" style={{ fontWeight: "bold" }}>
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

export default CategoryMeal;
