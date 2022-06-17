import { useEffect, useState } from "react";
import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminDashboard from "../adminDashbaord";
const ViewDietMeals = () => {
  const [dietMealData, setDietMealData] = useState([]);
  const [message, setMessage] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  const uid = localStorage.getItem("uid");
  const useParam = useParams();
  const navigate = useNavigate();

  const sendDiet = (meals_id) =>{
    const sendDietData = {
      user_id: uid, dietMeal_id: meals_id
    }
    console.log(meals_id);
    axios.post("http://localhost:4001/send/dietMeal", sendDietData, config)
    .then((result)=>{
      console.log("dddddd");
      if(result.data.success){
        console.log(result.data)
        navigate('/viewDietRequest')
      }
    })
    .catch(e=>{
      console.log(e);
      setMessage(e.response.data.message);
    })
  }

  
  useEffect(() => {
    axios
      .post("http://localhost:4001/preference/" , {preference: useParam.preference.replace("+"," ")}, config)

      .then((result) => {
        setDietMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  
  return (
    <>
      <AdminDashboard>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center" style={{ marginTop: "2px" }}>
              
                 <h1>{useParam.preference.replace("+", " ")}</h1>;
              

              <hr />
            </div>
          </div>
        </div>

        <div className="dietmeal-data container">
          {dietMealData.map((singleData) => {
            return (
              <div className="container py-3 " style={{ width: "270px" }}>
                <div className="card-deck" key={singleData._id}>
                  <div className="card">
                    <img
                      src={
                        "http://localhost:4001/preferences/" +
                        singleData.dietImage
                      }
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{singleData.dietName}</h5> <hr />
                      <p
                        className="card-text"
                        style={{ fontWeight: "bold", fontSize: "12px" }}
                      >
                        <label className="text mr-5">
                          Price: {singleData.dietPrice}
                        </label>
                        <label
                          className="text"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i className="fas fa-solid fa-timer"></i>
                          Time: {singleData.time}
                        </label>
                      </p>
                    </div>

                    <div className="card-footer ">
                      <button className="btn sendMeal" onClick={()=>{sendDiet(singleData._id)}}>Send</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AdminDashboard>
    </>
  );
};

export default ViewDietMeals;
