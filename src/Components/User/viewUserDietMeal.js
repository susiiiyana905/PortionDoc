import {Component, useEffect, useState} from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";

const ViewUserDietMeals =()=> {
  const [dietMealData, setDietMealData] = useState([]);
  // const [serving, setServing] = useState(1);
   const config = {
      headers:{
          Authorization: "Bearer " + localStorage.getItem("userToken"),
      }
  }

  useEffect(() => {
      axios.get("http://localhost:4001/get/all/sendDiet",config)
      .then((result) => {
          console.log(result.data);
          setDietMealData(result.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
  }, [])


        return(
            <>
            <Header></Header>
                <div className="container py-5">
            <div className="row">
            <div className="col-12 text-center" style={{marginTop:"2px"}}>
                <h1>Diet Meals</h1>
                <hr />
            </div>
            </div>
        </div>

        <div className="dietmeal-data container">
        {dietMealData.map((singleData) => {
          return (
            <div className="container py-3 " style={{width:"270px"}}>
        <div class="card-deck">
        <div class="card">
           
            <img src={"http://localhost:4001/preferences/"+singleData.dietMeal_id.dietImage}></img>
           
            <div class="card-body">
            <NavLink to = {"/viewDetailDiet/"+singleData.dietMeal_id._id}>
            <div>
            
            <h5 class="card-title">
                
                {singleData.dietMeal_id.dietName}
            </h5> <hr/>
            </div>
            </NavLink>
            
            <p class="card-text" style={{ fontWeight: "bold", fontSize:"12px" }}>
                            <label class="text mr-5">
                            Price: {singleData.dietMeal_id.dietPrice}
                            </label>
                            <label
                            class="text"
                            style={{ float: "right", marginTop: "1px" }}
                            >
                            <i class="fas fa-solid fa-timer"></i>
                            Time: {singleData.dietMeal_id.time}
                           
                            </label>
                        </p>
           
            </div>
        

        <div className="card-footer ">
        <button className="btn sendMeal"
          >
            Add to Cart
          </button>
                        </div>
        </div>
 
 

        </div>
        </div>
           )
        })} 
</div>
<Footer></Footer>

            </>

            )
            }

export default ViewUserDietMeals;