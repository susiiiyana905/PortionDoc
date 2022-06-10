import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react"

const UpdateProfile = () => {
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
  const navigate = useNavigate();

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

  const editProfile = (e) => {
    e.preventDefault();
    const profileData = {
      firstName,
      lastName,
      bio,
      dob,
      gender,
      phone_no,
      address,
    };
    axios
      .put("http://localhost:4001/user/update", profileData, config)
      // .then(result=>console.log(result))
      .then((result) => {
        if (result.data.success) {
          setMessage(result.data.message);
          navigate("/viewProfile");
        } else {
          setMessage(e);
        }
      })
      .catch((e)=>{
        setMessage(e.response.data.message);
      });
  };
  const profilePicUpdate = (e) => {
    // e.preventDefault();
    const profilePic = new FormData();
    profilePic.append("profilePic", profile_pic);
    axios
      .put("http://localhost:4001/update/profilePic", profilePic, config)
      .then((result) => {
        if (result.data.success) {
          setMessage("Profile Edited Successfully!");
        } else {
          setMessage(e);
        }
      })
      .catch((e)=>{
        setMessage(e.response.data.message);
      });
  };

  return (
    <>
      <Header></Header>
      <div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <h3 className="mt-5 mb-3" style={{ textAlign: "center" }}>
            Update Profile
          </h3>
          <div className="mb-2">        
                        <div className="success-message text-center" style={{color:"red", fontWeight:"bold"}}>{message}</div>  
                    </div>
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
              <div>
                <button
                  className="btn btn-outline-dark btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Change profile picture
                </button>
                <div
                  className="modal fade text-center"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content d-flex justify-content-center">
                      <div className="modal-body">
                        <h5
                          className="modal-title text-center"
                          id="exampleModalLabel"
                        >
                          Change Profile Photo
                        </h5>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="modal-body">
                        <input
                          type="file"
                          className="custom-file-input"
                          style={{ color: "black" }}
                          onChange={(e) => setProfilePic(e.target.files[0])}
                        />
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="modal-body">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-bs-dismiss="modal"
                          onClick={profilePicUpdate}
                        >
                          Update
                        </button>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="modal-body">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-6">
                <div
                  className="container editProfile"
                  style={{ "margin-left": "100px" }}
                >
                  <form id="updateProfileForm">
                    <div className="form-group editProfileForm row">
                      <label
                        for="inputFname"
                        className="col-sm-3 col-form-label"
                      >
                        First Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control border-dark"
                          id="fName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group editProfileForm row">
                      <label
                        for="inputLname"
                        className="col-sm-3 col-form-label"
                      >
                        Last Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control border-dark"
                          id="lName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
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
                        <input
                          type="email"
                          className="form-control border-dark"
                          id="email"
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="form-group editProfileForm row">
                      <label for="inputBio" className="col-sm-3 col-form-label">
                        Bio
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          maxLength="10"
                          className="form-control border-dark"
                          id="bio"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group editProfileForm row">
                      <label for="inputDob" className="col-sm-3 col-form-label">
                        DoB
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          className="form-control border-dark"
                          id="dob"
                          value={dob}
                          onChange={(e) => setDoB(e.target.value)}
                        />
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
                        <select
                          className="custom-select custom-select-lg"
                          style={{ width: "100%" }}
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group editProfileForm row">
                      <label
                        for="inputPhone"
                        className="col-sm-3 col-form-label"
                      >
                        Phone No.
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          maxLength="10"
                          className="form-control border-dark"
                          id="phone"
                          value={phone_no}
                          onChange={(e) => setPhoneNo(e.target.value)}
                        />
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
                        <input
                          type="text"
                          maxLength="10"
                          className="form-control border-dark"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9">
                        <button
                          type="submit"
                          className="btn btn-primary mt-4"
                          style={{ backgroundColor: "#FF7800", border: "none" }}
                          id="updateProfileButton"
                          onClick={editProfile}
                        >
                          Save change{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default UpdateProfile;
