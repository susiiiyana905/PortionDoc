import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react";
const Meals = () => {
  const [mealData, setMealData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [meals, setMeals] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  function searchMeal(mealName){
    if(mealName.trim()===""){
      return
    }
    axios.post("http://localhost:4001/search/meal", {mealName}, config)
    .then(result=>{
      console.log(result)
      setMeals(result.data)
    })
    .catch(e=>{
      console.log(e);
    })
  }
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
            <div class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{borderColor:"grey"}}
                onChange={(e)=>searchMeal(e.target.value)}
              ></input>
              
            </div>
            <div className="d-flex flex-column">
                {meals.map((singleData)=>{
                  return(
                    <div className="d-flex justify-content-between align-items-center">
                      <NavLink to={"/viewRecipe/"+singleData._id}>
                      <div className="d-flex justify-content-start align-items-center my-2" key={singleData._id}>
                        <img src={"http://localhost:4001/meal/"+singleData.mealImage} className="me-3" style={{width:"100px", height:"100px", borderRadius:"50%"}} alt=""/>
                        <label>{singleData.mealName}</label>
                      </div>
                      </NavLink>
                      </div>
                  )
                })}
            </div>
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
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={"http://localhost:4001/meal/" + singleData.mealImage}
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px"}}>{singleData.mealName}</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px" }}
                      >
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
                </NavLink>
                <div className="card-footer">
                <button className="btn sendMeal">Add To Cart</button>
                </div>
              </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* </div> */}
      <Footer></Footer>
    </>
  );
};
export default Meals;
