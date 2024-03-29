import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

const RequestDietary = () => {
  const [gender, setGender] = useState("Male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [preference, setPreference] = useState("Weight Loss");
  const [foodAllergies, setFoodAllergies] = useState("None");
  const [message, setMessage] = useState("");
  const [preferenceData, setPreferenceData] = useState([]);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };

  const requestDietary=(e)=>{
    e.preventDefault();

    if (gender.trim()==="" || weight.trim()==="" || height==="" || preference==="") {
      setMessage("Empty field found. Fill up the form completely.");          
      return;             
  } 

    const dietaryData = {
      gender, weight, height, preference, foodAllergies
    }

    axios.post("http://localhost:4001/request/diet", dietaryData, config)
    .then(result=>{
      if(result.data.success){
        navigate("/");
        setMessage(result.data.message);
      }
      else if(!localStorage.getItem("userToken")){
        setMessage("You need to login first!")
        navigate("/login");
        
    }
    })
    .catch((e)=>{
      setMessage(e.response.data.message);
    });
  }

  useEffect(()=>{
    axios.get("http://localhost:4001/preference/category/all")
    .then((preference)=>{
      console.log(preference.data);
      setPreferenceData(preference.data.data);
    })
    .catch((e)=>{
      console.log(e);
    });
  }, [])
  return (
    <>
      <Header></Header>
     
          <div
          className="suggestion-message text-center mb-2"
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
        <h3 style={{ textAlign: "center" }}>Dietary Form</h3>
        <div className="container">
        <form style={{ marginTop: "20px" }}>
        <div class="form-group row">
              <div class="col-sm-12">
                <select
                  className="custom-select custom-select-lg"
                  style={{ width: "100%" }}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-12">
                <input
                placeholder='Weight'
                  type="text"
                  class="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                ></input>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-12">
                <input
                placeholder='Height'
                  type="text"
                  class="form-control"
                  value={height}
                 onChange={(e) => setHeight(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <select
                  className="custom-select custom-select-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setPreference(e.target.value)}
                >
                  {preferenceData.map((singleData)=>{
                    return(
                      <option>{singleData.dietCategoryName}</option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-12">
                <input
                placeholder='Allergy'
                  type="text"
                  class="form-control"
                  onChange={(e) => setFoodAllergies(e.target.value)}
                ></input>
              </div>
            </div>
            <button className='diet'

          onClick={requestDietary}
          >Submit</button>
        </form>
        </div>
        </div>
        </div>
        </div>

   
 <br/>
      <Footer></Footer>
    </>
  );
};

export default RequestDietary;

