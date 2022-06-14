import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react"
import AdminDashboard from "../adminDashbaord";

const UserRecipeDetail = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [message, setMessage] = useState("");
  const [ingredientData, setIngredientData] = useState([]);
  const { rid } = useParams();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/single/recipe/" + rid, config)
      .then((result) => {
        setRecipeData(result.data.data);
        setMessage(result.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/recipe/ingredients/" + rid, config)
      .then((result) => {
        // console.log(result.data.data.name);
        setIngredientData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteIngredient = (riid) => {
    axios
      .delete("http://localhost:4001/delete/recipe/ingredient/" + riid, config)
      .then((result) => {
        // axios.get(`http://localhost:4001/get/all/ingredients/`+mid, config)
        // .then((result1)=> {
        //   setIngredientData(result.data.data);
        // })
        
      })
      .catch((e)=>{
        setMessage(e.response.data.message);
      });
  };
  return (
    <>
    <AdminDashboard>
      <nav
        className="navbar navbar-expand-lg mainNav"
        style={{ height: "35px" }}
      >
        <i
          class="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white", marginTop: "20px" }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          portiondoc@gmail.com
        </p>
        <i
          class="fas fa-solid fa-phone"
          style={{
            height: "40px",
            marginLeft: "100px",
            color: "white",
            marginTop: "20px",
          }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          +977 983142567
        </p>
      </nav>
      {recipeData.map((singleData) => {
        return (
          <div
            className="container"
            style={{ marginTop: "20px" }}
            key={singleData._id}
          >
            <div className="text-center">
            <img
              className="rounded"
              src={"http://localhost:4001/recipe/" + singleData.recipePic}
              style={{
                height: "400px",
                width: "400px",
                marginBottom:"20px",
                marginTop: "20px",
              }}
            ></img>
            </div>
            <div className="card">
              <div
                className="card-body"
                style={{ marginLeft: "15px", marginRight: "20px" }}
              >
                <div>
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                    {singleData.title}{" "}
                  </p>
                </div>
                <hr />

                <div>
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                    Description
                  </p>
                  <p>{singleData.description}</p>
                </div>
                <hr />

                <div className="form-group row">
                
                <table className="table col-sm-12">
                  <thead>
                    <tr>
                      <th scope="col" colSpan="2">
                        Ingredient Image
                      </th>
                      <th scope="col" colSpan="2">
                        Ingredient Name
                      </th>
                      <th scope="col" colSpan="2">
                        Quantity
                      </th>
                      <th scope="col" colSpan="2">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredientData.map((singleData) => {
                      return (
                        <tr>
                          <td>
                            <img
                              src={
                                "http://localhost:4001/recipeIngredients/" +
                                singleData.image
                              }
                              height="100px"
                            />
                          </td>
                          <td colSpan="2">{singleData.name}</td>
                          <td colSpan="2">{singleData.quantity}</td>
                          <td colSpan="2">
                            <span
                              className="remove-report bi bi-dash-circle-fill fw-bold me-2"
                              onClick={() => {
                                deleteIngredient(singleData._id);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

                <div style={{ fontSize: "22px", fontWeight: "bold" }}>
                  Steps
                </div>
                {singleData.steps.map((steps, indexOf) => {
                  return (
                    <div
                      className="d-flex align-items-center ml-5 "
                      key={steps}
                    >
                      <label
                        className="report-options mr-2"
                        style={{ fontWeight: "bold" }}
                      >
                        {indexOf + 1}
                        {"."}
                      </label>
                      <br />
                      <label className="report-options">{steps}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      </AdminDashboard>
    </>
  );
};

export default UserRecipeDetail;
