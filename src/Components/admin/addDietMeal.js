import axios from "axios";
import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";

const AddDiet = () => {
  const [dietMealImage, setDietMealImage] = useState("");
  const [dietMealName, setDietMealName] = useState("");
  const [dietMealPrice, setDietMealPrice] = useState("");
  const [dietMealDescription, setDietMealDescription] = useState("");
  const [time, setTime] = useState("");
  const [calory, setCalory] = useState("");
  const [difficulty, setDifficulty] = useState("Difficult");
  const [preference, setPreference] = useState("Weight loss");
  const [steps, setSteps] = useState([]);
  const [singleStep, setSingleStep] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [message, setMessage] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  function addSteps(step) {
    setResponse("");
    setSResponse("");

    var tempSteps = steps;
    tempSteps.push(step);

    setSteps(tempSteps);
    console.log(steps);
  }

  function removeSteps(step) {
    setResponse("");
    setSResponse("");

    var tempSteps = steps;
    tempSteps.splice(tempSteps.indexOf(step), 1);
    setSteps(tempSteps);
  }

  const addDietMeal = (e) => {
    e.preventDefault();
    const mealNameRegex = new RegExp('^[a-zA-Z0-9]+$');
    const priceRegex = new RegExp('^(?:[+0]9)?[0-9]{10}$');
    if (
      dietMealName.trim() === "" ||
      preference.trim() === "" ||
      dietMealPrice.trim() === "" ||
      time.trim() === "" ||
      calory.trim() === "" ||
      dietMealDescription.trim() === "" ||
      difficulty.trim() === "" 
    ) {
      setMessage("Empty field found. Fill up the form completely.");
      return;
    }  else if (!mealNameRegex.test(dietMealName)) {
      setMessage("Special characters and white spaces not allowed in name.");
      return;
    } 
    // else if (!priceRegex.test(dietMealPrice)) {
    //   setMessage("Invalid meal price.");
    //   return;
    // }

    const dietMealData = new FormData();
    dietMealData.append("dietImage", dietMealImage);
    dietMealData.append("dietName", dietMealName);
    dietMealData.append("dietPrice", dietMealPrice);
    dietMealData.append("dietDescription", dietMealDescription);
    dietMealData.append("time", time);
    dietMealData.append("calory", calory);
    dietMealData.append("difficulty", difficulty);
    dietMealData.append("preference", preference);
    for (let i = 0; i < steps.length; i++) {
      dietMealData.append("steps[" + i + "]", steps[i]);
    }
    axios
      .post("http://localhost:4001/add/dietPreference", dietMealData, config)
      .then((result) => {
        if(result.data.success){
          setMessage(result.data.message);
        }
      })
      .catch((e)=>{
        setMessage(e.response.data.message);
      });
  };

  return (
    <>
    <AdminDashboard>
      <div className="container">
      <div
          className="suggestion-message text-center mb-2"
          style={{ color: "red", fontWeight: "bold" }}
        >
          {message}
        </div>
        <h2 className="heading-h2-all">Add Diet Meal</h2>
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Diet Meal Image</label>
            <div class="col-sm-10">
              <input type="file" class="form-control"
              onChange={(e) => setDietMealImage(e.target.files[0])}
              ></input>

            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Diet Meal Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"
              value={dietMealName}
              onChange={(e) => setDietMealName(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Diet Meal Price</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"
              value={dietMealPrice}
              onChange={(e) => setDietMealPrice(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Diet Meal Preference</label>
            <div class="col-sm-10">
              <select
                className="custom-select custom-select-lg"
                style={{ width: "100%" }}
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
              >
                <option value="Weight Loss">Weight Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="Weight Loss">Muscle Gain</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Diet Meal Description</label>
            <div class="col-sm-10">
              <textarea type="text" class="form-control"
              value={dietMealDescription}
              onChange={(e) => setDietMealDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Time</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Calory</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"
              value={calory}
              onChange={(e) => setCalory(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Difficulty</label>
            <div class="col-sm-10">
              <select
                className="custom-select custom-select-lg"
                style={{ width: "100%" }}
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="Difficult">Difficult</option>
                <option value="Medium">Medium</option>
                <option value="Easy">Easy</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Steps</label>
            <div className="col-sm-10">
            <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((steps) => {
              return (
                <div className="d-flex align-items-center" key={steps}>
                  <span
                    className="remove-report bi bi-dash-circle-fill fw-bold me-2"
                    onClick={() => {
                      removeSteps(steps);
                    }}
                  />
                  <label className="report-options">{steps}</label>
                </div>
              );
            })}
          </div>
          </div>
          <div className="col-sm-2"></div>
            <div class="col-sm-10">
              <textarea
                type="text"
                class="form-control"
                style={{ float: "left", marginRight: "5px" }}
                onChange={(e) => setSingleStep(e.target.value)}
              ></textarea>
              <span
                className="add-report bi bi-plus-circle-fill fw-bold me-2 fa-2x"
                style={{ float: "right" }}
                onClick={() => {
                  addSteps(singleStep);
                }}
              />
            </div>
          </div>
          <p>
            <button type="submit" className="btn btn-primary addMeal"
            onClick={addDietMeal}
            >
            
              Add Meal
            </button>
          </p>
        </form>
      </div>
      </AdminDashboard>
    </>
  );
};

export default AddDiet;
