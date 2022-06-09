import React from "react";
import axios from "axios";
import { Component, useEffect, useState } from "react";
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
      <div>
        <div class="ip">
          <p id="iq">Images</p>
          <p class="i0">Name</p>
          <p class="ir">Gender</p>
          <p class="ir">Height</p>
          <p class="ir">Weight</p>
          <p class="ir">Prefereces</p>
          <p class="ir">Food Allergy</p>
          <p class="ir">Approve</p>
        </div>

        <hr id="hr"></hr>
        {dietaryData.map((singleData) => {
          return (
            <div class="ip">
              <div>
                <img
                  src={
                    "http://localhost:4001/user/" +
                    singleData.user_id.profile_pic
                  }
                  id="img"
                ></img>
              </div>
              <p class="iz">{singleData.user_id.firstName}</p>
              <p class="i1">{singleData.gender}</p>
              <p class="i2">{singleData.height}</p>
              <p class="i3">{singleData.weight}</p>
              <p class="i4">{singleData.preference}</p>
              <p class="i5">{singleData.foodAllergies}</p>
              <div>
                <button class="acc">Accept</button>
                <button class="dcc">Decline</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
