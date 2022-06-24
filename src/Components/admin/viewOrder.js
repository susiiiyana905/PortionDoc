import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";


const ViewOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [message, setMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/order/get", config)
      .then((result) => {
        
        setOrderData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
                            Delivery
                          </th>
                          <th scope="col " colSpan="6">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {orderData.map((singleData)=>{
                        return(
                            <tr key={singleData._id}>
                              <th scope="row"></th>
                              <td colSpan="2"> {singleData.user_id.firstName} {singleData.user_id.lastName}</td>
                              <td colSpan="6"> {singleData.user_id.address} </td>
                              <td colSpan="6"> {singleData.user_id.phone_no} </td>
                              <td colSpan="6">
                                <p>{singleData.addToCart} </p>
                                </td>
                              <td colSpan="6" style={{"textAlign":"center"}}> 
                              <p>{singleData.serving} </p>
                              
                              </td>
                              <td colSpan="6">{singleData.total} </td>
                              <td colSpan="6"> {singleData.delivery} </td>
                              <td colSpan="6">
                                <div style={{float:"left"}}>
                                <button
                                      className="btn btn-warning mb-2"
                                      style={{
                                       
                                        border: "none",
                                      }}
                                    >
                                     {singleData.status} 
                                    </button>
                                </div>
                                 </td>
                            </tr>
                             )
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
};
export default ViewOrders;
