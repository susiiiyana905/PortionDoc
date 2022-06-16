import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

import AdminDashboard from "../adminDashbaord";
import { NavLink } from "react-router-dom";

const ViewDietRequest = () => {
  const [dietaryData, setDietaryData] = useState([]);
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  const accept = (mid) => {
    // e.preventDefault();
    const acceptData = {
      mid,
    };
    console.log(mid);
    axios
      .put("http://localhost:4001/accepted", acceptData, config)
      .then((result) => {
        if (result.data.success) {
          axios
            .get("http://localhost:4001/get/all/user/diet", config)
            .then((result) => {
              setDietaryData(result.data.data);
            })
        }
      })
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/user/diet", config)
      .then((result) => {
        setDietaryData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <AdminDashboard>
        <br />

        <br />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col" colSpan="6">
                              Image
                            </th>
                            <th scope="col" colSpan="6">
                              Name
                            </th>
                            <th scope="col" colSpan="6">
                              Gender
                            </th>
                            <th scope="col" colSpan="6">
                              Height
                            </th>
                            <th scope="col " colSpan="6">
                              Weight
                            </th>
                            <th scope="col " colSpan="6">
                              Preferences
                            </th>
                            <th scope="col " colSpan="6">
                              Food Allergy
                            </th>
                            <th scope="col" colSpan="6">
                              Approve
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dietaryData.map((singleData) => {
                            return (
                              <tr>
                                <th scope="row"></th>
                                <td>
                                  <img
                                    src={
                                      "http://localhost:4001/user/" +
                                      singleData.user_id.profile_pic
                                    }
                                    height="100px"
                                  />
                                </td>
                                <td colSpan="6">
                                  {singleData.user_id.firstName}
                                </td>
                                <td colSpan="6">{singleData.gender}</td>
                                <td colSpan="6"> {singleData.height}</td>
                                <td colSpan="6">{singleData.weight}</td>
                                <td colSpan="6"> {singleData.preference}</td>
                                <td colSpan="6">{singleData.foodAllergies}</td>

                                <td colSpan="6">
                                  <div style={{ float: "left" }}>
                                    <NavLink
                                      to={
                                        "/showPreferenceCategory/" +
                                        singleData.user_id._id
                                      }
                                    >
                                      <button
                                        className="btn btn-success mb-2"
                                        style={{
                                          backgroundColor: "green",
                                          border: "none",
                                        }}
                                      >
                                        View
                                      </button>
                                    </NavLink>

                                    {singleData.accepted ? (
                                      <button
                                        className="btn btn-warning mb-2"
                                        style={{
                                          backgroundColor: "green",
                                          color: "white",
                                          border: "none",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Accepted
                                      </button>
                                    ) : (
                                      <button
                                        className="btn btn-warning mb-2"
                                        style={{
                                          backgroundColor: "orange",
                                          color: "white",
                                          border: "none",
                                          marginLeft: "10px",
                                        }}
                                        onClick={() => {
                                          accept(singleData._id);
                                        }}
                                      >
                                        Accept
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminDashboard>
    </>
  );
};

export default ViewDietRequest;
