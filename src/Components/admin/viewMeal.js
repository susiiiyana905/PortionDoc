import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./navbar";

const ViewMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [message, setMessage] = useState("");

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

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <i
          className="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white" }}
        ></i>
        <p className="i-1">portiondoc@gmail.com</p>
        <i
          className="fas fa-solid fa-phone"
          style={{ height: "40px", marginLeft: "100px", color: "white" }}
        ></i>
        <p className="i-1">+977 983142567</p>
      </nav>
      <br />
      <div className="container">
        <NavLink to={"/addMeal"}>
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
        </NavLink>
      </div>
      <br />
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="container">
                <div class="row">
                  <div>
                    <table class="table">
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
                                  <NavLink to="/addIngredient">
                                  <button className="btn btn-primary mb-2"
                                   style={{
                                    backgroundColor: "#FF7800",
                                    border: "none",
                                    marginLeft: "10px",
                                  }}
                                  >Add Ingredients</button>
                                  </NavLink>
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
    </>
  );
};
export default ViewMeals;
