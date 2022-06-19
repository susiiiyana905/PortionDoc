import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../footer";

import { useParams } from "react-router-dom";
import React from "react"
import Header from "../header";

const ViewDetailDiet = () => {
  const [dietImage, setDietImage] = useState([]);
  const [dietName, setDietName] = useState("");
  const [dietDescription, setDietDescription] = useState("");
  const [steps, setSteps] = useState([]);
  const [time, setTime] = useState("");
  const [preference, setPreference] = useState("");
  const [calory, setCalory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredientData, setIngredientData] = useState([]);
  const [message, setMessage] = useState("");
  const [serving, setServing] = useState(1);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  const { did } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4001/diet/single/view/" + did, config)
      .then((result) => {
        console.log(result.data.data);
        setDietImage(result.data.data.dietImage);
        setDietName(result.data.data.dietName);
        setDietDescription(result.data.data.dietDescription);
        setSteps(result.data.data.steps);
        setPreference(result.data.data.preference);
        setCalory(result.data.data.calory);
        setDifficulty(result.data.data.difficulty);
        setTime(result.data.data.time);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/diet/ingredients/users/" + did, config)
      .then((result) => {
        console.log(result.data.data);
        setIngredientData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div>
        <div
          className="container"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <img
            src={"http://localhost:4001/preferences/" + dietImage}
            alt=""
            style={{ height: "500px" }}
          ></img>
        </div>
        <div class="container card">
          <div class="card-body">
            <h5 class="card-title" style={{ fontSize: "55px" }}>
              {dietName}
            </h5>
            <hr />

            <div style={{fontSize: "20px" }}>

            <div style={{fontSize: "20px" }}>

              <p>{dietDescription}</p>
            </div>
            <div>
              <label style={{fontWeight:"bold"}}>Time: <text style={{fontWeight:"normal"}}>{time}</text></label>
              <br />
              <label style={{fontWeight:"bold"}}>Cooking Difficulty: <text style={{fontWeight:"normal"}}>{difficulty}</text></label>
            </div>
          </div>
        </div>
        <div
          class="container card text-align-center"
          style={{ marginTop: "10px" }}
        >
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
                          "http://localhost:4001/dietIngredients/" +
                          singleData.image
                        }
                        style={{ height: "70px", width:"70px" }}
                      ></img>
                    </div>
                    <div class="col-md-4 ml-3">
                      <div class="body">
                        <label className="m-0 mt-3">{parseInt(singleData.quantity)*serving}</label>
                        <br/>
                        <label className="m-0">{singleData.name}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="container card"
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="card-body">
            <h5>Steps</h5>
            <div>
              {steps.map((steps, indexOf)=>{
                return(
                  <div
                      className="d-flex align-items-center ml-5 "
                      key={steps}
                    >
                      <label
                        className="report-options mr-2"
                        style={{ fontWeight: "bold"}}
                      >
                        {indexOf + 1}
                        {"."}
                      </label>
                      <br />
                      <label className="report-options">{steps}</label>
                    </div>
                )
              })}
              <hr />
            </div>
          </div>
        </div>

        {/* <div>
          <button
            className="btn cart"
          >
            Add To Cart
          </button>
        </div> */}
       
      </div>
      </div>
      <br/>
      <Footer></Footer>
    </>
  );
};

export default ViewDetailDiet;


