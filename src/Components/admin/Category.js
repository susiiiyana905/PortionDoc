import React from 'react';
import { useState } from "react";
import axios from "axios";


import AdminDashboard from "../adminDashbaord";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [message, setMessage] = useState("");
  const [sMessage, setSMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  const addCategory = (e) => {
    e.preventDefault();

    const numberRegex = new RegExp("[0-9]");
    const specialCharacterRegex = new RegExp('[!@#$%^&*(),.?":{}|<>]');

    if (
      categoryName.trim() === "" 
    ) {
      setMessage("Empty field found. Fill up the form completely.");
      return;
    } else if (categoryName.length < 2) {
      setMessage("Title most contain at least two characters.");
      return;
    } else if (numberRegex.test(categoryName) || specialCharacterRegex.test(categoryName)) {
      setMessage(
        "Any numbers or special characters are not allowed in the name."
      );
      console.log("numbers");
      return;
    }

    const categoryData = new FormData();
    categoryData.append("categoryName", categoryName);
    categoryData.append("categoryImage", categoryImage);

    axios
      .post("http://localhost:4001/category/insert", categoryData, config)
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          setSMessage(result.data.message);
          navigate('/viewCategory')
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
                            <div className="suggestion-message text-center" style={{color:"red", fontWeight:"bold"}}>{message}</div>           
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
                    value={categoryName}
                    onChange={(e) => {
                      setCategoryName(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Category Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setCategoryImage(e.target.files[0])}
                  />
                </div>

                <p>
                  <input
                    type="submit"
                    id="addCategoryButton"
                    className="btn btn-primary"
                    onClick={addCategory}
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

export default AddCategory;
