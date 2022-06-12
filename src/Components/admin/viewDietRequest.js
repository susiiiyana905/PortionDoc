import React from 'react';
import axios from "axios";
import { Component, useEffect, useState } from "react";
import AdminDashboard from "../adminDashbaord"
const Table = () => {
  const [dietaryData, setDietaryData] = useState([]);
  const [message, setMessage] = useState("");


  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/user/diet", config)
      .then((result) => {
        console.log(result.data.data);
        setDietaryData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
    <AdminDashboard>
      <div className='container'>
        <div className="ip">
          <p id="iq">Images</p>
          <p className="i0">Name</p>
          <p className="ir">Gender</p>
          <p className="ir">Height</p>
          <p className="ir">Weight</p>
          <p className="ir">Prefereces</p>
          <p className="ir">Food Allergy</p>
          <p className="ir">Approve</p>
        </div>

        <hr id="hr"></hr>
        {dietaryData.map((singleData) => {
          return (
            <div className="ip">
              <div>
                <img
                  src={
                    "http://localhost:4001/user/" +
                    singleData.user_id.profile_pic
                  }
                  id="img"
                ></img>
              </div>
              <p className="iz">{singleData.user_id.firstName}</p>
              <p className="i1">{singleData.gender}</p>
              <p className="i2">{singleData.height}</p>
              <p className="i3">{singleData.weight}</p>
              <p className="i4">{singleData.preference}</p>
              <p className="i5">{singleData.foodAllergies}</p>
              <div>
                <button className="acc">Accept</button>
                <button className="dcc">Decline</button>
              </div>
            </div>
          );
        })}
      </div>
      </AdminDashboard>
    </>
  );
};

export default Table;
