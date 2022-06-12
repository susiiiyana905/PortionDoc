import React from 'react';
import { useState } from "react";
import axios from "axios";


import AdminDashboard from "../adminDashbaord";
import { useNavigate } from "react-router-dom";

const AddPreferenceCategory = () => {
  const [dietCategoryName, setdietCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [sMessage, setSMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  const addpreferencecategory = (e) => {
    e.preventDefault();

    const dietCategoryData = new FormData();
    dietCategoryData.append("dietCategoryName", dietCategoryName);
  

    axios
      .post("http://localhost:4001/preferenceCategory/insert", dietCategoryData, config)
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          setSMessage(result.data.message);
          navigate('/showPreferenceCategory')
        }
      })
      .catch((e) => {
        setMessage(e.response.data.message);
      });
  };

  return (
    <>
    <AdminDashboard>

      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <div className="mb-2">
                            <div className="suggestion-message text-center">{message}</div>           
                            <div className="success-message text-center" style={{color:"green", fontWeight:"bold"}}>{sMessage}</div>  
                        </div> 
              <h2 className="heading-h2-all">Add Category Details </h2>

    

              <form id="addCategoryForm">
                <div className="form-group">
                  <label>Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    value={dietCategoryName}
                    onChange={(e) => {
                      setdietCategoryName(e.target.value);
                    }}
                  />
                </div>
                <p>
                  <input
                    type="submit"
                    id="addCategoryButton"
                    className="btn btn-primary"
                    onClick={addpreferencecategory}
                  />
                </p>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

    
      </AdminDashboard>
    </>
  );
};

export default AddPreferenceCategory;
