import axios from "axios";
import { useEffect, useState } from "react";
import React from "react"
import Header from "../header";
import Footer from "../footer";
import { NavLink } from "react-router-dom";

const ViewProfile = () => {
  const [profile_pic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDoB] = useState("");
  const [gender, setGender] = useState("");
  const [_id, setID] = useState("");
  const [recipeData, setRecipeData]=useState([]);
  const [dietMealData, setDietMealData] = useState([]);

  const editProfile = (e) => {
    e.preventDefault();
    window.location.replace("/updateProfile");
  };
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:4001/profile", config)
      .then((result) => {
        console.log(result.data);
        setProfilePic(result.data.profile_pic);
        setEmail(result.data.email);
        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setBio(result.data.bio);
        setAddress(result.data.address);
        setDoB(result.data.dob);
        setGender(result.data.gender);
        setPhoneNo(result.data.phone_no);
        setID(result.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/recipes", config)
      .then((result) => {
        console.log(result.data.data);
        setRecipeData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4001/get/all/sendDiet",config)
    .then((result) => {
        console.log(result.data);
        setDietMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
}, [])

  return (
    <>

      <Header></Header>
      <div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <h3 className="mt-5 mb-3" style={{ textAlign: "center" }}>
            My Profile
          </h3>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <img
                src={"http://localhost:4001/user/" + profile_pic}
                className="img rounded-circle"
                alt="..."
                style={{
                  width: "150px",
                  height: "150px",
                  float: "left",
                  "margin-right": "50px",
                }}
              />
              <p style={{ "font-size": "30px", "margin-top": "20px" }}>
                {firstName}
              </p>
              <span style={{ "font-size": "15px", "margin-top": "0px" }}>
                {bio}
              </span>
                <div>
              <button
                        type="submit"
                        className="btn btn-primary mt-4"
                        style={{ backgroundColor: "#FF7800", border: "none" }}
                        onClick={editProfile}
                      >
                        Edit Profile

                      </button>
                      </div>
            </div>
          </div>
            </div>
          </div>
          {/* Tabs */}
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a className="nav-link active recipe" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Recipes</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link diets" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Diet Meals</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="container">
          <div class="row row-cols-1 row-cols-md-4">
          {recipeData.map((singleData)=>{
                return(
                  <NavLink to= {"/viewDetailRecipe/"+ singleData._id}>
            <div class="col mb-4">
                  <div class="card" style={{width:"265px"}}>
                  <img src={"http://localhost:4001/recipe/" + singleData.recipePic}></img>
                </div>
            </div>
            </NavLink>
               );
              })} 
              </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div className="container">
          <div class="row row-cols-1 row-cols-md-4">
          {dietMealData.map((singleData)=>{
                return(
                  <NavLink to= {"/viewDetailDiet/"+ singleData.dietMeal_id._id}>
            <div class="col mb-4">
                  <div class="card" style={{width:"265px"}}>
                  <img src={"http://localhost:4001/preferences/"+singleData.dietMeal_id.dietImage}></img>
                </div>
            </div>
            </NavLink>
               );
              })} 
              </div>
              </div>
            </div>
            
          </div>
          <br/><br/>
      <br/>
      <Footer></Footer>
    </>
  );
};
export default ViewProfile;