import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react";
const Grocery = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div id="front">
          <div id="one">
          <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" 
          type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            Categories 
          </button>
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
                // onChange={(e)=>searchMeal(e.target.value)}
              ></input>
            </div>
            {/* <div className="d-flex flex-column">
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="meal-data container">
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div className="card">
                {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
                  <img
                    src='/images/bibim.jpg'
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                 <div class="card-body">
                      <p class="card-title" style={{fontSize:"14px", color:"black"}}>grocery</p> <hr />
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px", color:"black" }}
                      >
                        <label class="text mr-5">
                          Price:
                        </label>
                        <label
                          class="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          Time: 
                        </label>
                      </p>
                    </div>
                {/* </NavLink> */}
                <div className="card-footer">
                  <Link to="/cart">
                <button className="btn sendMeal" >Add To Cart</button>
                </Link>
                </div>
              </div>
              </div>
            </div>
      </div>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
};
export default Grocery;
