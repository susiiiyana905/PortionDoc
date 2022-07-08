import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../footer";
import { useParams } from "react-router-dom";
import React from "react"
import Header from "../header";
import { addToCart } from "./product_functions";

const ViewRecipe = () => {
  const [mealImage, setMealImage] = useState([]);
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [steps, setSteps] = useState([]);
  const [time, setTime] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [calory, setCalory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredientData, setIngredientData] = useState([]);
  const [message, setMessage] = useState("");
  const [serving, setServing] = useState(1);
  const [mealPrice, setMealPrice] = useState(0);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  const { mid } = useParams();

  const addCart = () => {
    const data = {
      _id: mid,
      image: "http://localhost:4001/meal/" + mealImage,
      name: mealName,
      price: mealPrice,
    }
    addToCart(data, serving)
  }

  useEffect(() => {
    axios
      .get("http://localhost:4001/meals/single/view/" + mid, config)
      .then((result) => {
        console.log(result.data.data);
        setMealImage(result.data.data.mealImage);
        setMealName(result.data.data.mealName);
        setMealPrice(result.data.data.mealPrice);
        setMealDescription(result.data.data.mealDescription);
        setSteps(result.data.data.steps);
        setMealCategory(result.data.data.mealCategory);
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
      .get("http://localhost:4001/get/all/ingredients/users/" + mid, config)
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
            src={"http://localhost:4001/meal/" + mealImage}
            alt=""
            style={{ height: "500px" }}
          ></img>
        </div>
        <div class="container card">
          <div class="card-body">
            <h5 class="card-title" style={{ fontSize: "55px" }}>
              {mealName}
            </h5>
            <hr />
            <div style={{fontSize: "20px" }}>
            <div style={{fontSize: "20px" }}>
              <p>{mealDescription}</p>
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
                          "http://localhost:4001/ingredients/" +
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
        <div>
       
          <button
            className="btn cart"
            onClick={addCart}
            >
            Add To Cart
          </button>
        
        </div>
      </div>
      </div>
      <br/>
      <Footer></Footer>
    </>
  );
};
export default ViewRecipe;