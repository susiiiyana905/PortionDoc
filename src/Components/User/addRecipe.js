import axios from "axios";
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react"

const AddRecipes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipePic, setRecipePic] = useState("");
  const [steps, setSteps] = useState([]);
  const [singleStep, setSingleStep] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
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
  const addRecipe=(e)=>{
    e.preventDefault();

    const recipeData = new FormData();
    recipeData.append("title", title);
    recipeData.append("description", description);
    recipeData.append("recipePic", recipePic);
    recipeData.append("steps", steps);
    
    axios.post("http://localhost:4001/add/recipe", recipeData, config)
    .then((result)=>{
      if(result.data.success) {
        console.log(result.data)
        navigate('/');
        setMessage(result.data.message);
      }
    })
    .catch((e)=>{
      console.log(e.response.data);
      setMessage(e.response.data.message);
    });
  }

  return (
    <>
      <Header></Header>
      {/* <div style={{backgroundColor:"#FAFAFA"}}> */}
      <div
          className="suggestion-message text-center mt-3"
          style={{ color: "red", fontWeight: "bold" }}
        >
          {message}
        </div>
      <div
        className="col-md-6 d-flex justify-content-center mx-auto"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        
        <div class="card w-100">
          <div class="card-body">
            <h2 style={{ textAlign: "center" }}>Add Recipes</h2>
            <div className="container">
              <form style={{ marginTop: "20px" }}>
              <div class="form-group row">
            <label class="col-sm-2 col-form-label">Recipe Image</label>
            <div class="col-sm-10">
              <input
                type="file"
                class="form-control"
                onChange={(e) => setRecipePic (e.target.files[0])}
              ></input>
            </div>
          </div>
                <div class="form-group row">
                  <label className="col-sm-2" for="exampleFormControlInput1">Recipe Title</label>
                  <div className="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Recipe Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  ></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label className="col-sm-2" for="exampleFormControlTextarea1">
                    Short Description
                  </label>
                  <div className="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write short description of recipe"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  ></textarea>
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
                
                <button
              type="submit"
              className="btn btn-primary addMeal"
              onClick={addRecipe}
            >
              Add Recipe
            </button>
                {/* <form onSubmit={this.handleSubmit}>
                    <div>
                      <label>Steps</label>
                    </div>
                    {this.state.formValues.map((element, index) => (
                      <div>
                        <div class="form-group row">
                          <div class="col-sm-11">
                            <textarea
                              type="text"
                              class="form-control"
                              id="inputText"
                              style={{ float: "left" }}
                            ></textarea>
                          </div>
                          <button
                            type="button"
                            className="button remove"
                            onClick={() => this.removeFormFields(index)}
                            style={{ width: "40px" }}
                          >
                            <i class="fas fa-solid fa-trash"></i>
                          </button>
                          {/*                   
                  {
                  index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                  : null
                  } */}
                {/* </div>
                      </div>
                    ))}
                    <div className="button-section">
                      <button
                        className="button add"
                        type="button"
                        onClick={() => this.addFormFields()}
                        style={{
                          marginLeft: "450px",
                          backgroundColor: "#4CBA19",
                          height: "50px",
                          width: "50px",
                          color: "white",
                        }}
                      >
                        <i class="fas fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </form> */}
              </form>
            </div>

            {/* <a href="#" class="btn btn-primary">Button</a> */}
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
};

export default AddRecipes;
