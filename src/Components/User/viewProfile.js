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

          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary recipe-btn">Recipes</button>
            <button type="button" class="btn btn-primary diet-btn">Diet Meals</button>
          </div>
          <br/><br/>
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
      <br/>
      <Footer></Footer>
    </>
  );
};
export default ViewProfile;