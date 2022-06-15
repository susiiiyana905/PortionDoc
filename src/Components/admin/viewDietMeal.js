import {useEffect, useState} from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AdminDashboard from "../adminDashbaord";
const ViewDietMeals =()=> {
  const [dietMealData, setdietMealData] = useState([]);
   const config = {
      headers:{
          Authorization: "Bearer " + localStorage.getItem("adminToken"),
      }
  }

  useEffect(() => {
      axios.get("http://localhost:4001/diet/all",config)
      .then((result) => {
          console.log(result.data);
          setdietMealData(result.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
  }, [])
        return(
            <>
        <AdminDashboard>
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
           
            <img src={"http://localhost:4001/preference/"+singleData.dietImage}></img>
            <div class="card-body">
            <h5 class="card-title">
                {singleData.dietName}
            </h5> <hr/>
            <p class="card-text" style={{ fontWeight: "bold", fontSize:"12px" }}>
                            <label class="text mr-5">
                            Price: {singleData.dietPrice}
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
        

        <div className="card-footer ">
        <button className="btn sendMeal"
          >
            Send
          </button>
                        </div>
        </div>
 
 

        </div>
        </div>
          )
        })}
</div>
</AdminDashboard>
            </>

            )
            }

export default ViewDietMeals;