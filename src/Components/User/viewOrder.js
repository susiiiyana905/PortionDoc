import React from "react";
import Footer from "../footer";
import Header from "../header";

const ViewOrder = () => {
  return (
    <>
      <Header></Header>
      <br />
      <div className="container">
        <h1 style={{ textAlign: "center" }}> Order Details </h1>
        <div className="mb-2">
          <div className="suggestion-message text-center"></div>
          <div
            className="success-message text-center"
            style={{ color: "green", fontWeight: "bold" }}
          >
          </div>
        </div>
        <div className="container">
          <div className="card">
          <h4> Date: 2022/06/14</h4>
            <div class="card mb-3" style={{height: "210px",marginRight:"70px ",marginTop:"20px", marginLeft:"70px" }}>
          
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="/images/1.png" height="180px" style={{marginTop:"10px", marginLeft:"10px"}}
                  ></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                   
                      <h5 class="card-title">Chicken Pizza</h5>
                   
                    <p class="card-text">Serving: 4</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ height: "210px",marginRight:"70px ", marginTop:"10px", marginLeft:"70px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="/images/1.png" height="180px" style={{marginTop:"10px", marginLeft:"10px"}}
                  ></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                   
                      <h5 class="card-title">Chicken Pizza</h5>
                   
                    <p class="card-text">Serving: 4</p>
                    
                   
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="card mb-3" style={{ height: "210px",marginRight:"70px ", marginTop:"10px", marginLeft:"70px" }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="/images/1.png" height="180px" style={{marginTop:"10px", marginLeft:"10px"}}
                  ></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                   
                      <h5 class="card-title">Chicken Pizza</h5>
                   
                    <p class="card-text">Serving: 4</p>
                    
                   
                  </div>
                  
                </div>
              </div>
            </div>
            <button
                        className="btn btn-danger"
                        style={{marginBottom:"20px", marginLeft:"900px"}}
                      >
                    Cancel Order
                      </button>
           
            </div>
            </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ViewOrder;
