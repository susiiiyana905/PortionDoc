import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react";
import { addToCart } from "./product_functions";

const Meals = () => {
  const [mealData, setMealData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [meals, setMeals] = useState([]);
  const localCart = localStorage.getItem("cart")
  const [cartData, setCartData] = ('');
  const [cart, setCart] = useState([]);

 
  const addCart = (item) => {
    const data = {
      _id: item._id,
      image: "http://localhost:4001/meal/" + item.mealImage,
      name: item.mealName,
      price: item.mealPrice,
    }
    addToCart(data, 1)
  }

  //add to localstorage

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(cart))
  }, [cart]);


  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  function searchMeal(mealName){
    if(mealName.trim()===""){
      return
    }
    axios.post("http://localhost:4001/search/meal", {mealName})
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
      .get("http://localhost:4001/meal/all")
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
      .get("http://localhost:4001/category/all")
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
      
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Meals</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div id="front">
          <div id="one">
          <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" 
          type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
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
          <div className="container">
            <form className="form-inline my-2 my-lg-0 search-box">
              <input
                class="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{borderColor:"grey"}}
                onChange={(e)=>searchMeal(e.target.value)}
              ></input>
              
            </form>
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
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>{singleData.mealName}</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
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
                  
                <button className="btn sendMeal" onClick={() => addCart(singleData)}>Add To Cart</button>
               
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
