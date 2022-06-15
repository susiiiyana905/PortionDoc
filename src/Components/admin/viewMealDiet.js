import React from "react";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";



const ViewMealDiet=()=>{
  const [dietMealData, setdietMealData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

    const config = {
        headers:{
            Authorization: "Bearer " + localStorage.getItem("adminToken"),
        }
    }

    useEffect(() => {
      console.log(config.headers.Authorization);
        axios.get("http://localhost:4001/diet/all", config)
        .then((result) => {
            console.log(result.data.data[0].dietImage);
            setdietMealData(result.data.data);
          })
          .catch((e) => {
            console.log(e);
          });
    }, []);

    const deleteDiet= (did) => {
      axios
        .delete("http://localhost:4001/diet/delete/" + did, config)
        .then((result) => {
          axios.get(`http://localhost:4001/diet/all`, config).then((result1) => {
            setdietMealData(result1.data.data);
          });
       
        })
        .catch();
    };

    const addDietIngredient = (dietMeals_id) =>{
      localStorage.setItem('dietMeals_id', dietMeals_id);
      navigate("/diet/addIngredients");
    }

  return (
    <>
    <AdminDashboard>
    
      <br />
    
      <br />
      
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="6">
                            Image
                          </th>
                          <th scope="col" colSpan="6">
                            Name
                          </th>
                          <th scope="col" colSpan="6">
                            Price
                          </th>
                          <th scope="col" colSpan="6">
                            Preferences
                          </th>
                          <th scope="col " colSpan="6">
                            Time
                          </th>
                          <th scope="col " colSpan="6">
                            Calory
                          </th>
                          <th scope="col " colSpan="6">
                            Difficulty
                          </th>
                          <th scope="col" colSpan="6">
                            Edit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dietMealData.map((singleData)=>{
                          return(
                            <tr key={singleData._id}>
                              <th scope="row"></th>
                              <td>
                                <img
                                  src={
                                    "http://localhost:4001/preferences/" +
                                    singleData.dietImage
                                  }
                                  height="100px"
                                />
                              </td>
                              <td colSpan="6">{singleData.dietName}</td>
                              <td colSpan="6">{singleData.dietPrice}</td>
                              <td colSpan="6">{singleData.preference}</td>
                              <td colSpan="6">{singleData.time}</td>
                              <td colSpan="6"> {singleData.calory}</td>
                              <td colSpan="6"> {singleData.difficulty}</td>

                              <td colSpan="6">
                                <div style={{ float: "left" }}>
                                 <NavLink to ={"/updateDiet/"+singleData._id}>
                                    <button
                                      className="btn btn-primary mb-2"
                                      style={{
                                        backgroundColor: "#FF7800",
                                        border: "none",
                                      }}
                                    >
                                      Update
                                    </button>
                                    </NavLink>

                                  <button
                                    className="btn btn-primary mb-2"
                                    style={{
                                      backgroundColor: "#FF7800",
                                      color:"white",
                                      border: "none",
                                      marginLeft: "10px",
                                    }}
                                    onClick={() => {
                                      deleteDiet(singleData._id);
                                    }}
                                    
                                  >
                                    Delete
                                  </button>

                                  <button
                                    className="btn btn-primary mb-2"
                                    style={{
                                      backgroundColor: "#FF7800",
                                      border: "none",
                                      marginLeft: "10px",
                                    }}
                                    onClick={() => {
                                      addDietIngredient(singleData._id);
                                    }}
                                  >
                                    Add Ingredients
                                  </button>

                                  
                                </div>
                              </td>
                            </tr>
                          
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AdminDashboard>
    </>
  );
}

export default ViewMealDiet;