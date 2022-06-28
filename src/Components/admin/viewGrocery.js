import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";


const ViewGrocery =()=>{
  const[groceryData, setGroceryData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/grocery/all", config)
      .then((result) => {
        // console.log(result.data.data);
        setGroceryData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteGrocery = (gid) => {
    axios
      .delete("http://localhost:4001/grocery/delete/" + gid, config)
      .then((result) => {
        axios.get(`http://localhost:4001/grocery/all`, config).then((result1) => {
          setGroceryData(result1.data.data);
        });
        // console.log(result.data);
      })
      .catch();
  };

    return(
        <>
        <AdminDashboard>
        <div className="container">
          <NavLink to = "/addGrocery">
          <button
            className="btn btn-primary mb-2"
            style={{
              backgroundColor: "#FF7800",
              border: "none",
              float: "right",
            }}
          >
            Add New Grocery
          </button>
          </NavLink>
      </div>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-8">
            <div class="container">
              <div class="row">
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
                            Quantity
                          </th>
                          <th scope="col" colSpan="6">
                            Price
                          </th>
                          <th scope="col" colSpan="6">
                            Edit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {groceryData.map((singleData)=>{
                          return(
                             <tr key={singleData._id}>
                              <th scope="row"></th>
                              <td>
                                <img
                                  src= {
                                    "http://localhost:4001/grocery/" +
                                    singleData.groceryImage
                                  }
                                   height="100px"
                                />
                              </td>
                              <td colSpan="6">{singleData.groceryName}</td>
                              <td colSpan="6">{singleData.quantity}</td>
                              <td colSpan="6">{singleData.groceryPrice}</td>
                              <td colSpan="6">
                                <div style={{ float: "left" }}>
                                  <NavLink to = {"/updateGrocery/"+singleData._id}>
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
                                      border: "none",
                                      marginLeft: "10px",
                                    }}
                                    onClick={() => {
                                      deleteGrocery(singleData._id);
                                    }}

                                  >
                                    Delete
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
      
      </AdminDashboard>
      </>
      
    );
};
export default ViewGrocery;