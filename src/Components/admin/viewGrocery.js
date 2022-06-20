import React from "react";
import AdminDashboard from "../adminDashbaord";

const ViewGrocery =()=>{
    return(
        <>
        <AdminDashboard>
        <div className="container">
          <button
            className="btn btn-primary mb-2"
            style={{
              backgroundColor: "#FF7800",
              border: "none",
              float: "right",
            }}
          >
            Add New Grocery
          </button>
      </div>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-8">
            <div class="container">
              <div class="row">
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
                            Price
                          </th>
                          <th scope="col" colSpan="6">
                            Category
                          </th>
                          <th scope="col" colSpan="6">
                            Edit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                            <tr>
                              <th scope="row"></th>
                              <td>
                                <img
                                  src= "images/1.png"
                                   height="100px"
                                />
                              </td>
                              <td colSpan="6">Chicken</td>
                              <td colSpan="6">Rs.450</td>
                              <td colSpan="6">meat</td>
                              <td colSpan="6">
                                <div style={{ float: "left" }}>
                                    <button
                                      className="btn btn-primary mb-2"
                                      style={{
                                        backgroundColor: "#FF7800",
                                        border: "none",
                                      }}
                                    >
                                      Update
                                    </button>
                                  

                                  <button
                                    className="btn btn-primary mb-2"
                                    style={{
                                      backgroundColor: "#FF7800",
                                      border: "none",
                                      marginLeft: "10px",
                                    }}

                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                      </tbody>
                  </table>
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
export default ViewGrocery;