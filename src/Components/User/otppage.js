import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [sResponse, setSResponse] = useState("");

  const location = useLocation();

  useEffect(() => {
    try {
      if (localStorage.getItem("email")) {
        console.log(location.state.email);
        setSResponse(location.state.email);
      }
    } catch (error) {
      console.log("Email not recognized.", error);
    }
  }, []);

  const verifyOtp = (e) => {
    e.preventDefault();
    const otpData = {
      otp: otp,
      email: sResponse,
    };

    axios
      .post("http://localhost:4001/user/verify", otpData)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setMessage("User Verification successfully!!!");
          window.location.replace("/login");
        } else {
          setMessage(result.data.message);
        }
      })
      .catch();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg mainNav"
        style={{ height: "35px" }}
      >
        <i
          class="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white", marginTop: "20px" }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          portiondoc@gmail.com
        </p>
        <i
          class="fas fa-solid fa-phone"
          style={{
            height: "40px",
            marginLeft: "100px",
            color: "white",
            marginTop: "20px",
          }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          +977 983142567
        </p>
      </nav>
      <div
        className="col-md-6 d-flex justify-content-center mx-auto "
        style={{ marginTop: "80px" }}
      >
        <div className="panel panel-info">
          <div className="panel-heading">
            <div
              className="panel-title"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Enter OTP
            </div>
          </div>
          <div style={{ paddingTop: "30px" }} className="panel-body">
            <form>
              <div style={{ marginBottom: "25px" }}>
                <label className="text-success">Check your email for OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  name="otp"
                  placeholder="One Time Password"
                  style={{ width: "600px" }}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "10px" }} className="form-group">
                <div className="col-sm-12 controls">
                  <input
                    type="submit"
                    name="authenticate"
                    value="Submit"
                    className="btn-success"
                    style={{ borderRadius: "10px" }}
                    onClick={verifyOtp}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
