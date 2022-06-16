import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

const RequestDietary = () => {
  const [gender, setGender] = useState("Male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [preference, setPreference] = useState("");
  const [foodAllergies, setFoodAllergies] = useState("");
  const [message, setMessage] = useState("");
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
    })
    .catch((e)=>{
      setMessage(e.response.data.message);
    });
  }
  return (
    <>
      <Header></Header>
      <div>
        
        <div>
          <h3 id="hi">Dietary Form</h3>
          <div
          className="suggestion-message text-center mb-2"
          style={{ color: "red", fontWeight: "bold" }}
        >
          {message}
        </div>

          <select placeholder="Gender" id="s"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input placeholder="Weight" id="t"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          ></input>
          <input placeholder="Height" id="u"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          ></input>
          <select placeholder="Choose your preferences" id="v"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
          >
            <option>Choose Your Preferences</option>
            <option>Weight Loss</option>
            <option>Weight Gain</option>
            <option>Muscle Gain</option>
          </select>
          <input placeholder="Food Allergy" id="w"
          value={foodAllergies}
          onChange={(e) => setFoodAllergies(e.target.value)}
          ></input>
          <button id="z"
          onClick={requestDietary}
          >Submit</button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default RequestDietary;

