import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from "react"
const UpdateMeal = () => {
  const [mealImage, setMealImage] = useState("");
  const [mealName, setMealName] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [time, setTime] = useState("");
  const [mealCategory, setMealCategory] = useState("");
  const [calory, setCalory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [steps, setSteps] = useState([]);
  const [singleStep, setSingleStep] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [_id, setID] = useState("");
  const [mealData, setMealData] = useState([]);
  const [ingredientData, setIngredientData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  const { mid } = useParams();
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
  useEffect(() => {
    axios
      .get("http://localhost:4001/meals/single/" + mid, config)
      .then((result) => {
        console.log(result.data.data);
        setMealImage(result.data.data.mealImage);
        setMealName(result.data.data.mealName);
        setMealPrice(result.data.data.mealPrice);
        setMealCategory(result.data.data.mealCategory);
        setMealDescription(result.data.data.mealDescription);
        setTime(result.data.data.time);
        setCalory(result.data.data.calory);
        setDifficulty(result.data.data.difficulty);
        setID(result.data.data._id);
        setSteps(result.data.data.steps);
        // setMealsData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/ingredients/" + mid, config)
      .then((result) => {
        // console.log(result.data.data.name);
        setIngredientData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const deleteIngredient = (iid) => {
    axios
      .delete("http://localhost:4001/delete/ingredient/" + iid, config)
      .then((result) => {
        // axios.get(`http://localhost:4001/get/all/ingredients/`+mid, config)
        // .then((result1)=> {
        //   setIngredientData(result.data.data);
        // })
      })
      .catch();
  };
  const updateMealImage = (e) => {
    e.preventDefault();

    const mealData = new FormData();
    mealData.append("mealImage", mealImage);

    axios
      .put("http://localhost:4001/update/meal/image/" + mid, mealData, config)
      .then((result) => {
        // console.log(result.data)
        if (result.data.success) {
          setMessage(result.data.message);
          axios
            .get("http://localhost:4001/meals/single/" + mid, config)
            .then((result) => {
              setMealImage(result.data.data.mealImage);
            });
        } else {
          setMessage("Something is wrong!!!");
        }
      })
      .catch(e);
  };
  const updateMeal = (e) => {
    e.preventDefault();

    const mealData = new FormData();

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
      .put("http://localhost:4001/update/meals/" + mid, mealData, config)
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          setMessage(result.data.message);
          navigate("/viewMeal");
          axios
            .get(`http://localhost:4001/meals/all`, config)
            .then((result1) => {
              setMealData(result1.data.data);
            });
        } else {
          setMessage("Something is wrong!!!");
        }
      })
      .catch(e);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2 className="heading-h2-all">Update Meal</h2>
            <form id="updateMealForm">
              <div className="form-group row">
                <label htmlFor="mealImage" className="col-sm-3 col-form-label">
                  Meal Image
                </label>
                <img
                  src={"http://localhost:4001/meal/" + mealImage}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  height="200px"
                />

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setMealImage(e.target.files[0])}
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={updateMealImage}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="mealName" className="col-sm-3 col-form-label">
                  Meal Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="mealName"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="mealPrice" className="col-sm-3 col-form-label">
                  Meal Price
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="mealPrice"
                    value={mealPrice}
                    onChange={(e) => setMealPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="mealCategory"
                  className="col-sm-3 col-form-label"
                >
                  Meal Category
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="mealCategory"
                    value={mealCategory}
                    onChange={(e) => setMealCategory(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="mealDescription"
                  className="col-sm-3 col-form-label"
                >
                  Meal Description
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="text"
                    className="form-control"
                    id="mealDescription"
                    value={mealDescription}
                    onChange={(e) => setMealDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="time" className="col-sm-3 col-form-label">
                  Time
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="calory" className="col-sm-3 col-form-label">
                  Calory
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="calory"
                    value={calory}
                    onChange={(e) => setCalory(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="difficulty" className="col-sm-3 col-form-label">
                  Difficulty
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3">Ingredient</label>
                <table className="table col-sm-9">
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
                                "http://localhost:4001/ingredients/" +
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

              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Steps</label>
                <div className="col-sm-9">
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
              
                <div className="col-sm-3"></div>
                <div class="col-sm-9">
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

              <div className="form-group row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#FF7800" }}
                    id="updateMealButton"
                    onClick={updateMeal}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateMeal;
