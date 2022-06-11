import React, { useState } from "react"
import AdminDashboard from "../adminDashbaord";
const UpdateDiet =()=> {
  // const [dietImage, setDietImage] = useState("");
  // const[dietName, setDietName] = useState("");
  // const[dietPrice, setDietPrice] = useState("");
  // const[dietDescription, setDietDescription] = useState("");
  // const[time, setTime] = useState("");
  // const[calory,setCalory]=useState("");
  // const[difficulty, setDifficulty] = useState("");
  // const [steps, setSteps] = useState([]);
  // const [singleStep, setSingleStep] = useState("");
  // const [response, setResponse] = useState("");
  // const [sResponse, setSResponse] = useState("");
  // const [_id, setID] = useState("");
  // const [dietMealData, setDietMealData] = useState("");
  // const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  // const config = {
  //   headers: {
  //     Authorization: "Bearer " + localStorage.getItem("adminToken"),
  //   },
  // };

  // const { did } = useParams();
  // function addSteps(step) {
  //   setResponse("");
  //   setSResponse("");

  //   var tempSteps = steps;
  //   tempSteps.push(step);

  //   setSteps(tempSteps);
  //   console.log(steps);
  // }

  // function removeSteps(step) {
  //   setResponse("");
  //   setSResponse("");

  //   var tempSteps = steps;
  //   tempSteps.splice(tempSteps.indexOf(step), 1);
  //   setSteps(tempSteps);
  // }
    return (
        <>
        <AdminDashboard>
        <div className="container">

          <h2 className="heading-h2-all">Update Meal:</h2>


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
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Price</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Meal Category</label>
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
                  
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Time</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Calory</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Difficulty</label>
              <div class="col-sm-10">
                <select
                  className="custom-select custom-select-lg"
                  style={{ width: "100%" }}
                  
                >
                  <option value="Difficult">Difficult</option>
                  <option value="Medium">Medium</option>
                  <option value="Easy">Easy</option>
                </select>
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
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan="2">
                  Steps
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">Step 1: Vegetables</td>
                {/* <td> 
                                <button className="btn btn-primary mb-3">Delete Ingredient</button>
                                    </td> */}
              </tr>
              <tr>
                <td colSpan="2">Step 2: Vegetables</td>
                {/* <td> 
                                <button className="btn btn-primary mb-3">Delete</button>
                                    </td> */}
              </tr>
            </tbody>
          </table>
        </div>
            {/* <div className="form-group row">
              <label className="col-sm-2 col-form-label">Steps</label>
              <form  onSubmit={this.handleSubmit}>
        <div><label>Steps</label></div>
                  {this.state.formValues.map((element, index) => (
                  <div> 
                    <div class="form-group row">
                    <div class="col-sm-11">
                      <textarea type="text" class="form-control" id="inputText" style={{float:"left"}}></textarea>
                    </div>
                    <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{width:"40px"}} ><i class="fas fa-solid fa-trash"></i></button> 
                   </div>
                    </div>
                  ))}
                  <div className="button-section">
                      <button className="button add" type="button" onClick={() => this.addFormFields()} style = {{marginLeft:"450px", backgroundColor:"#4CBA19", height:"50px", width:"50px", color:"white"}}><i class="fas fa-solid fa-plus"></i></button>
                  </div>
              </form>
          </div> */}
            <p>
              <button
                type="submit"
                className="btn btn-primary addMeal"
                
              >
                Update Meal
              </button>
            </p>
          </form>
        </div>
        </AdminDashboard>
      </>
    );
  };

export default UpdateDiet;

