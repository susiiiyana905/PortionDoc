import React from 'react';
import { useState } from "react";
import axios from "axios";

import AdminDashboard from "../adminDashbaord";



const AddCategory = () => {
  const [categoryName, setcategoryName] = useState("");
  const [categoryImage, setcategoryImage] = useState("");
  const [message, setMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  const addcategory = (e) => {
    e.preventDefault();

    const categoryData = new FormData();
    categoryData.append("categoryName", categoryName);
    categoryData.append("categoryImage", categoryImage);

    axios
      .post("http://localhost:4001/category/insert", categoryData, config)
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          setMessage("Category inserted successfully");
        } else {
          setMessage("Something went wrong!!");
        }
      })
      .catch((e) => {
        setMessage("Error!!");
      });
  };

  return (
    <>

    <AdminDashboard>

    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2 className="heading-h2-all">Add Category Details </h2>
            <p>{message}</p>
            <form id="addCategoryForm">
              <div className="form-group">
                <label>Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => {
                    setcategoryName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Category Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setcategoryImage(e.target.files[0])}
                />
              </div>

              <p>
                <input
                  type="submit"
                  id="addCategoryButton"
                  className="btn btn-primary"
                  onClick={addcategory}
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
