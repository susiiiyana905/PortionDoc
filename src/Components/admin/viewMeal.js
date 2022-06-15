import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";
// import Navbar from "./navbar";

const ViewMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/meals/all", config)
      .then((result) => {
        // console.log(result.data.data);
        setMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteMeal = (mid) => {
    axios
      .delete("http://localhost:4001/meals/delete/" + mid, config)
      .then((result) => {
        axios.get(`http://localhost:4001/meals/all`, config).then((result1) => {
          setMealData(result1.data.data);
        });
        // console.log(result.data);
      })
      .catch();
  };

  const addIngredient = (meals_id) => {
    localStorage.setItem('meals_id', meals_id);
    navigate("/addIngredient");
  };

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
                            Category
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
                        {mealData.map((singleData) => {
                          return (
                            <tr key={singleData._id}>
                              <th scope="row"></th>
                              <td>
                                <img
                                  src={
                                    "http://localhost:4001/meal/" +
                                    singleData.mealImage
                                  }
                                  height="100px"
                                />
                              </td>
                              <td colSpan="6"> {singleData.mealName}</td>
                              <td colSpan="6"> {singleData.mealPrice}</td>
                              <td colSpan="6"> {singleData.mealCategory}</td>
                              <td colSpan="6">{singleData.time}</td>
                              <td colSpan="6"> {singleData.calory}</td>
                              <td colSpan="6"> {singleData.difficulty}</td>

                              <td colSpan="6">
                                <div style={{ float: "left" }}>
                                  <NavLink to={"/updateMeal/" + singleData._id}>
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
                                      deleteMeal(singleData._id);
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
                                      addIngredient(singleData._id);
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
};
export default ViewMeals;
