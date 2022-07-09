import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react"
import Header from "../header";
import Footer from "../footer";
const RecipeDetail = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [message, setMessage] = useState("");
  const [serving, setServing] = useState(1);
  const[ingredientData,setIngredientData] = useState("");

  const { rid } = useParams();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:4001/get/recipe/detail/" + rid, config)
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
      .get("http://localhost:4001/get/recipe/ingredients/users/" + rid, config)
      .then((result) => {
        // console.log(result.data.data.name);
        setIngredientData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
    <Header></Header>
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

                <div class="card-body">
          <div id="front">
          <div>
          <h5 class="card-title" style={{ fontSize: "45px" }}>
              Ingredients
            </h5>
          </div>
          <div id="two">
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <h6 style={{marginRight:"20px", marginTop:"15px"}}>Serving Amount</h6>
            <button onClick={()=>{ setServing(1) }} type="button" class="btn btn-success serving">2</button>
            <button onClick={()=>{ setServing(2) }} type="button" class="btn btn-success serving">4</button>
          </div>
          </div>
        </div>
            {ingredientData.map((singleData) => {
              return (
                <div class=" mb-3">
                  <div class="row no-gutters">
                    <div>
                      <img
                        className="rounded-circle"
                        src={
                          "http://localhost:4001/recipeIngredients/" +
                          singleData.image
                        }
                        style={{ height: "70px", width:"70px" }}
                      ></img>
                    </div>
                    <div class="col-md-4 ml-3">
                      <div class="body">
                      <label className="m-0 mt-3">{parseInt(singleData.quantity)*serving} {singleData.quantity.split(" ")[1]}</label>
                        <br/>
                        <label className="m-0">{singleData.name}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
      <br/>
      <Footer></Footer>
    </>
  );
};
export default RecipeDetail;