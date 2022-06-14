import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react"
import Header from "../header";
import Footer from "../footer";

const RecipeDetail = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [message, setMessage] = useState("");
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
