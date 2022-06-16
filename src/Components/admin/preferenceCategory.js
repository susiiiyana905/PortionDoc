import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";

const ShowPreferenceCategory = () => {
  const [dietCategoryData, setDietCategoryData] = useState([]);
  const [message, setMessage] = useState("");
  const [sMessage, setSMessage] = useState("");
  const navigate = useNavigate();
  const { uid } = useParams();
  console.log(uid);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4001/preference/category/single`, config)
      .then((dietCategory) => {
        setDietCategoryData(dietCategory.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const viewPreferenceMeal = (uid) => {
    localStorage.setItem("uid", uid);
    navigate("/viewDietMeal");
  };

  return (
    <>
      <AdminDashboard>
        <br />
        <div className="container">
          <h1 style={{ textAlign: "center" }}> Preference Category</h1>
          {dietCategoryData.map((singleData) => {
            return (
              <div className="card w-75 container">
                <div className="card-body">
                  <Link
                    to={
                      "/viewDietMeal/" +
                      singleData.dietCategoryName.replace(" ", "+")
                    }
                  >
                    <h5
                      style={{ fontSize: "30px", textDecoration: "none" }}
                      className="card-title"
                      onClick={()=>{
                        viewPreferenceMeal(uid);
                      }}
                    >
                      {singleData.dietCategoryName}
                    </h5>
                  </Link>
                </div>
              </div>
            );
          })}
          <br />
        </div>
      </AdminDashboard>
    </>
  );
};
export default ShowPreferenceCategory;
