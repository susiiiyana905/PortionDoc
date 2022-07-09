import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";
const AddMeal = () => {
  const [mealImage, setMealImage] = useState("");
  const [mealName, setMealName] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [time, setTime] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [calory, setCalory] = useState("");
  const [difficulty, setDifficulty] = useState("Difficult");
  const [steps, setSteps] = useState([]);
  const [singleStep, setSingleStep] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [message, setMessage] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
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
  const addMeal = (e) => {
    e.preventDefault();
    const priceRegex = new RegExp("^[0-9]+$");
    const numberRegex = new RegExp("[0-9]");
    const specialCharacterRegex = new RegExp('[!@#$%^&*(),.?":{}|<>]');
    if (
      mealName.trim() === "" ||
      mealCategory.trim() === "" ||
      mealPrice.trim() === "" ||
      time.trim() === "" ||
      calory.trim() === "" ||
      mealDescription.trim() === "" ||
      difficulty.trim() === ""
    ) {
      setMessage("Empty field found. Fill up the form completely.");
      return;
    } else if (mealName.length < 2) {
      setMessage("Meal Name most contain at least two characters.");
      return;
    } else if (mealDescription.length < 2) {
      setMessage("Description most contain at least two characters.");
      return;
    } else if (
      numberRegex.test(mealName) ||
      specialCharacterRegex.test(mealName)
    ) {
      setMessage(
        "Any numbers or special characters are not allowed in the meal name."
      );
      return;
    } else if (specialCharacterRegex.test(time)) {
      setMessage(
        "Any numbers or special characters are not allowed in the time."
      );
      return;
    } else if (specialCharacterRegex.test(calory)) {
      setMessage(
        "Any numbers or special characters are not allowed in the calory."
      );
      return;
    } else if (!priceRegex.test(mealPrice)) {
      setMessage("Invalid meal price.");
      return;
    }
    const mealData = new FormData();
    mealData.append("mealImage", mealImage);
    mealData.append("mealName", mealName);
    mealData.append("mealPrice", mealPrice);
    mealData.append("mealDescription", mealDescription);
    mealData.append("time", time);
    mealData.append("mealCategory", mealCategory);
    mealData.append("calory", calory);
    mealData.append("difficulty", difficulty);
    for (let i = 0; i < steps.length; i++) {
      mealData.append("steps[" + i + "]", steps[i]);
    }
    axios
      .post("http://localhost:4001/add/meals", mealData, config)
      .then((result) => {
        console.log(result.data.data);
        if (result.data.success) {
          localStorage.setItem("_id", result.data.data._id);
          setSteps([]);
          setMessage(result.data.message);
          navigate("/viewMeal", { state: { _id: result.data.data._id } });
        }
      })
      .catch((e) => {
        setMessage(e.response.data.message);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4001/category/single", config)
      .then((category) => {
        console.log(category.data.data);
        setCategoryData(category.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
          <h2 className="heading-h2-all">Add Meal:</h2>
          <form>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Image</label>
              <div class="col-sm-10">
                <input
                  type="file"
                  class="form-control"
                  onChange={(e) => setMealImage(e.target.files[0])}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  value={mealName}
                  onChange={(e) => setMealName(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Price</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  value={mealPrice}
                  onChange={(e) => setMealPrice(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Category</label>
              <div class="col-sm-10">
                <select
                  className="custom-select custom-select-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setMealCategory(e.target.value)}
                >
                  {categoryData.map((category) => {
                    return <option value={category.categoryName}>{category.categoryName}</option>;
                  })}
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Description</label>
              <div class="col-sm-10">
                <textarea
                  type="text"
                  class="form-control"
                  value={mealDescription}
                  onChange={(e) => setMealDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Time</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Calory</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
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
              <button
                type="submit"
                className="btn btn-primary addMeal"
                onClick={addMeal}
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
export default AddMeal;
