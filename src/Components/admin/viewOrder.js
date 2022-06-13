import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";


const ViewOrders = () => {
  return (
    <>
    <AdminDashboard>
        <h1 style={{"textAlign":"center"}}>Order Details</h1>
      <div style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="8">
                            Name
                          </th>
                          <th scope="col" colSpan="6">
                            Address
                          </th>
                          <th scope="col" colSpan="6">
                            Phone Number
                          </th>
                          <th scope="col" colSpan="6">
                            Meal Name
                          </th>
                          <th scope="col " colSpan="6">
                            Serving
                          </th>
                          <th scope="col " colSpan="6">
                            Total
                          </th>
                          <th scope="col " colSpan="6">
                            Payment
                          </th>
                          <th scope="col " colSpan="6">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      
                            <tr>
                              <th scope="row"></th>
                             
                              <td colSpan="2"> Sadikshya Shrestha</td>
                              <td colSpan="6"> Baneshwor</td>
                              <td colSpan="6"> 98745856245</td>
                              <td colSpan="6">
                                <p>Cocount Curry with Rice</p>
                                <p>Cocount Curry with Rice</p>
                                <p>Cocount Curry with Rice</p>
                                </td>
                              <td colSpan="6" style={{"textAlign":"center"}}> 
                              <p>4</p>
                              <p>2</p>
                              <p>4</p>
                              </td>
                              <td colSpan="6"> Rs.8000</td>
                              <td colSpan="6"> COD</td>
                              <td colSpan="6">
                                <div style={{float:"left"}}>
                                <button
                                      className="btn btn-warning mb-2"
                                      style={{
                                       
                                        border: "none",
                                      }}
                                    >
                                      On Progress
                                    </button>
                                </div>
                                 </td>
                            </tr>

                            <tr>
                              <th scope="row"></th>
                             
                              <td colSpan="2"> Sadikshya Shrestha</td>
                              <td colSpan="6"> Baneshwor</td>
                              <td colSpan="6"> 98745856245</td>
                              <td colSpan="6">
                                <p>Cocount Curry with Rice</p>
                                <p>Cocount Curry with Rice</p>
                                <p>Cocount Curry with Rice</p>
                                </td>
                              <td colSpan="6" style={{"textAlign":"center"}}> 
                              <p>4</p>
                              <p>2</p>
                              <p>4</p>
                              </td>
                              <td colSpan="6"> Rs.8000</td>
                              <td colSpan="6"> Khalti</td>
                              <td colSpan="6">
                                <div style={{float:"left"}}>
                                <button
                                      className="btn btn-success mb-2"
                                      style={{
                                       
                                        border: "none",
                                      }}
                                    >
                                     Delivered
                                    </button>
                                </div>
                                 </td>
                            </tr>

                            <tr>
                              <th scope="row"></th>
                             
                              <td colSpan="2"> Sadikshya Shrestha</td>
                              <td colSpan="6"> Baneshwor</td>
                              <td colSpan="6"> 98745856245</td>
                              <td colSpan="6">
                                <p>Cocount Curry with Rice</p>
                                <p>Cocount Curry with Rice</p>
                                <p>Cocount Curry with Rice</p>
                                </td>
                              <td colSpan="6" style={{"textAlign":"center"}}> 
                              <p>4</p>
                              <p>2</p>
                              <p>4</p>
                              </td>
                              <td colSpan="6"> Rs.8000</td>
                              <td colSpan="6"> Khalti</td>
                              <td colSpan="6">
                                <div style={{float:"left"}}>
                                <button
                                      className="btn btn-danger mb-2"
                                      style={{
                                       
                                        border: "none",
                                      }}
                                    >
                                     Canceled
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
};
export default ViewOrders;
