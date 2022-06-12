import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [dietMealData, setDietMealData] = useState("");
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();

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


  }
    return (
        <>
        <AdminDashboard>
        <div className="container">

          <h2 className="heading-h2-all">Update Diet Meal:</h2>


          <form>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Image</label>
              <div class="col-sm-10">
                <input
                  type="file"
                  class="form-control"
                 
                ></input>
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
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Steps</label>
  
              <div class="col-sm-10">
                <textarea
                  type="text"
                  class="form-control"
                  style={{ float: "left", width: "880px", marginRight: "5px" }}
                  
                ></textarea>
                <span
                  className="add-report bi bi-plus-circle-fill fw-bold me-2 fa-2x"
                  
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
              <tr>
                <td>
                  <img src="images/1.png" height="100px" />
                </td>
                <td colSpan="2">Vegetables</td>
                <td colSpan="2">1kg</td>
                <td>
                  <button className="btn btn-primary mb-3">
                    Delete Ingredient
                  </button>
                </td>
              </tr>
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

