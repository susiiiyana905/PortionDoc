import React from "react";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";
import { findRenderedComponentWithType } from "react-dom/test-utils";


const ViewMealDiet=()=>{

  return (
    <>
    <AdminDashboard>
    
      <br />
    
      <br />
      <div className="container">
       
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
       
      </div>
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
                        
                            <tr>
                              <th scope="row"></th>
                              <td>
                                <img
                                  src="images/1.png"
                                  height="100px"
                                />
                              </td>
                              <td colSpan="6">Isha Pokharel</td>
                              <td colSpan="6"> Female</td>
                              <td colSpan="6"> 5.11</td>
                              <td colSpan="6">45kg</td>
                              <td colSpan="6"> Weight Gain</td>
                              <td colSpan="6"> Meat</td>

                              <td colSpan="6">
                                <div style={{ float: "left" }}>
                                 
                                    <button
                                      className="btn btn-primary mb-2"
                                      style={{
                                        backgroundColor: "#FF7800",
                                        border: "none",
                                      }}
                                    >
                                      Update
                                    </button>
                                 

                                  <button
                                    className="btn btn-primary mb-2"
                                    style={{
                                      backgroundColor: "#FF7800",
                                      color:"white",
                                      border: "none",
                                      marginLeft: "10px",
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
                                
                                  >
                                    Add Ingredients
                                  </button>

                                  
                                </div>
                              </td>
                            </tr>
                          
                      
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