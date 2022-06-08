import axios from "axios";
import { useEffect, useState } from "react";
import React from "react"

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
  const [message, setMessage] = useState("");

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

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <i
          className="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white" }}
        ></i>
        <p className="i-1">portiondoc@gmail.com</p>
        <i
          className="fas fa-solid fa-phone"
          style={{ height: "40px", marginLeft: "100px", color: "white" }}
        ></i>
        <p className="i-1">+977 983142567</p>
      </nav>
      <div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <h3 className="mt-5 mb-3" style={{ textAlign: "center" }}>
            My Profile
          </h3>
          {message}
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
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-6">
                <div
                  className="container editProfile"
                  style={{ "margin-left": "100px" }}
                >
                  <div className="form-group editProfileForm row">
                    <label for="inputFname" className="col-sm-3 col-form-label">
                      First Name
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark">{firstName}</p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label for="inputLname" className="col-sm-3 col-form-label">
                      Last Name
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark" id="inputLname">
                        {lastName}
                      </p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label
                      for="inputEmail3"
                      className="col-sm-3 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark" id="inputEmail3">
                        {email}
                      </p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label for="inputBio" className="col-sm-3 col-form-label">
                      Bio
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark" id="inputBio">
                        {bio}
                      </p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label for="inputDob" className="col-sm-3 col-form-label">
                      DoB
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark" id="inputDob">
                        {dob}
                      </p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label
                      for="inputGender"
                      className="col-sm-3 col-form-label"
                    >
                      Gender
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark">{gender}</p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label for="inputPhone" className="col-sm-3 col-form-label">
                      Phone No.
                    </label>
                    <div className="col-sm-9">
                      <p className="form-control border-dark" id="inputPhone">
                        {phone_no}
                      </p>
                    </div>
                  </div>
                  <div className="form-group editProfileForm row">
                    <label
                      for="inputAddress"
                      className="col-sm-3 col-form-label"
                    >
                      Address
                    </label>
                    <div className="col-sm-9">
                      <p
                        type="text"
                        maxLength="10"
                        className="form-control border-dark"
                        id="inputAddress"
                      >
                        {address}
                      </p>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProfile;
