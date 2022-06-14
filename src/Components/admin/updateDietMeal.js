import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react"
import AdminDashboard from "../adminDashbaord";
const UpdateDiet =()=> {
  const [dietImage, setDietImage] = useState("");
  const[dietName, setDietName] = useState("");
  const[dietPrice, setDietPrice] = useState("");
  const[dietDescription, setDietDescription] = useState("");
  const[preference,setPreference] = useState("");
  const[time, setTime] = useState("");
  const[calory,setCalory]=useState("");
  const[difficulty, setDifficulty] = useState("");
  const [steps, setSteps] = useState([]);
  const [singleStep, setSingleStep] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [_id, setID] = useState("");
  const [ingredientData, setIngredientData] = useState([]);
  const [dietMealData, setDietMealData] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  const { did } = useParams();
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
  useEffect(()=>{
    axios.get("http://localhost:4001/diet/single/"+ did,config)
    .then((result)=>{
      console.log(result.data.data);
      setDietImage(result.data.data.dietImage);
      setDietName(result.data.data.dietName);
      setDietPrice(result.data.data.dietPrice);
      setPreference(result.data.data.preference);
      setDietDescription(result.data.data.dietDescription);
      setTime(result.data.data.time);
      setCalory(result.data.data.calory);
      setDifficulty(result.data.data.difficulty);
      setID(result.data.data._id);
      setSteps(result.data.data.steps);

    })
    .catch((e)=>{
      console.log(e);
    });
  },[]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/dietingredients/" + did, config)
      .then((result) => {
        // console.log(result.data.data.name);
        setIngredientData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteDietIngredient = (diid) => {
    axios
      .delete("http://localhost:4001//delete/dietingredient/" + diid, config)
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

  const updateDietMeal = (e) =>{
    e.preventDefault();

    const dietData = new FormData();

    dietData.append("dietName",dietName);
    dietData.append("dietPrice",dietPrice);
    dietData.append("dietDescription",dietDescription);
    dietData.append("preference",preference);
    dietData.append("calory", calory);
    dietData.append("difficulty", difficulty);
    dietData.append("time",time);
    for (let i = 0; i < steps.length; i++) {
      dietData.append("steps[" + i + "]", steps[i]);
    }
    axios
    .put("http://localhost:4001/update/dietMeals/" + did, dietData, config)
    .then((result) => {
      console.log(result.data);
      if (result.data.success) {
        setMessage(result.data.message);
        axios
          .get(`http://localhost:4001/diet/all`, config)
          .then((result1) => {
            setDietMealData(result1.data.data);
          });
      } else {
        setMessage("Something is wrong!!!");
      }
    })
    .catch(e);
    navigate("/viewMealDiet")
  };

  const updateDietImage = (e) => {
    e.preventDefault();

    const dietData = new FormData();
    dietData.append("dietImage", dietImage);

    axios
      .put("http://localhost:4001/update/preference/image/" + did, dietData, config)
      .then((result) => {
        // console.log(result.data)
        if (result.data.success) {
          setMessage(result.data.message);
          axios
            .get("http://localhost:4001/diet/single/" + did, config)
            .then((result) => {
              setDietImage(result.data.data.dietImage);
            });
        } else {
          setMessage("Something is wrong!!!");
        }
      })
      .catch(e);
  };

  
    return (
        <>
        <AdminDashboard>
        <div className="container">

          <h2 className="heading-h2-all">Update Diet Meal:</h2>


          <form>
          <div className="form-group row">
                <label htmlFor="mealImage" className="col-sm-2 col-form-label">
                  Meal Image
                </label>
                <img
                  src={"http://localhost:4001/preference/" + dietImage}
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
                          onChange={(e) => setDietImage(e.target.files[0])}
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
                          onClick={updateDietImage}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  value={dietName}
                  onChange={(e) => setDietName(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Price</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  value={dietPrice}
                  onChange={(e) => setDietPrice(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Preference</label>
              <div class="col-sm-10">
                <select
                  className="custom-select custom-select-lg"
                  style={{ width: "100%" }}
                  
                >
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Weight Gain">Weight Gain</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Description</label>
              <div class="col-sm-10">
                <textarea
                  type="text"
                  class="form-control"
                  value={dietDescription}
                  onChange={(e) => setDietDescription(e.target.value)}
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
            <div className="form-group row">
                <label htmlFor="difficulty" className="col-sm-2 col-form-label">
                  Difficulty
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
                </div>
              </div>
            <div>
          <label>Ingredient</label>
          <table className="table">
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
              </tr>
            </thead>
            <tbody>
              {ingredientData.map((singleData)=>{
                return(
              <tr>
                <td>
                  <img src={"http://localhost:4001/dietIngredients/" +
                                singleData.image}/>
                </td>
                <td colSpan="2">{singleData.name}</td>
                <td colSpan="2">{singleData.quantity}</td>
                <td>
                  <button className="btn btn-primary mb-3">
                    Delete Ingredient
                  </button>
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
                    onClick={updateDietMeal}
                  >
                    Update
                  </button>
                </div>
              </div>
          </form>
        </div>
        </AdminDashboard>
      </>
    );
  };

export default UpdateDiet;

