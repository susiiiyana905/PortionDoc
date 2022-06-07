import {Component} from "react";
import Footer from "../footer";
import Header from "../header";
import React from "react"
const Mine =()=> {
        return(
            <>
            <Header></Header>
            <div>
<div  class= "m">
<div class="n" style={{width: "18rem"}}>
  <img src="images/1.png"  class="card-img-top" alt="..."/>
  </div>

  <div>
    <h3 id="head">Your Goals That Match 
    <p>Your Lifestyle </p></h3>
    <button id="o">I want to lose weight</button>
    <button id="q">I need accelerated result</button>
    <button id="p"> I am vegan </button>
     <button id="bt">Start Program</button>
   
  </div>

  </div>

  <div>
      <h3 id="hi">Dietary Form</h3>
      
      <select placeholder="Gender" id="s">
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input  placeholder="Weight" id="t"></input>
      <input placeholder="Height" id="u"></input>
      <select  placeholder="Choose your preferences" id="v">
        <option>Choose Your Preferences</option>
        <option>Veg</option>
        <option>Non-veg</option>
      </select>
      <input  placeholder="Food Allergy" id="w"></input>
      <button id="z">Submit</button>
  </div>








 </div>
 
           
            <Footer></Footer>
            </>
          



        )

    
}

export default Mine;