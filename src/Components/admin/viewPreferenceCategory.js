import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import React from 'react';
import AdminDashboard from "../adminDashbaord";

const ViewPreferenceCategory = () => {
    const [dietCategoryData,setDietCategoryData] = useState([]);
    const [message, setMessage] = useState("");
    const [sMessage, setSMessage] = useState("");
  
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    };
    console.log(config);
  
    useEffect(() => {
      axios
        .get(`http://localhost:4001/preference/category/single`, config)
        .then((dietCategory) => {
          setDietCategoryData(dietCategory.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
  
      // getProduct()
    }, []);
  

  const deleteCategory = (pid) => {
    axios
      .delete("http://localhost:4001/preference/category/delete/" + pid, config)
      .then((result) => {
        axios
          .get(`http://localhost:4001/preference/category/single`, config)
          .then((dietcategory) => {
            setDietCategoryData(dietcategory.data.data);
          });
          
          setSMessage(result.data.message);
      })
      .catch((e) => {
        setMessage(e.response.data.message);
      });
  };

  return (
    <div>

    
     <AdminDashboard>


      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          
          <div className="col-md-8">
            
            <div class="container">
              <div class="row">
                
                <div>
                <div className="mb-2">
              <div className="suggestion-message text-center">{message}</div>
              <div
                className="success-message text-center"
                style={{ color: "green", fontWeight: "bold" }}
              >
                {sMessage}
              </div>
            </div>
                  <table className="table">
                    
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2">
                          Category Name
                        </th>
                        <th scope="col" colSpan="2">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dietCategoryData.map((singleData) => {
                        return (
                          //  <tr>
                          <tr key={singleData._id}>
                            <td colSpan="2"> {singleData.dietCategoryName}</td>
                            <td>
                              <button
                                className="btn btn-danger mb-2"
                                onClick={() => {
                                  deleteCategory(singleData._id);
                                }}
                              >
                                Delete Category
                              </button>
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
      </AdminDashboard>
    </div>
  );
};

export default ViewPreferenceCategory;
