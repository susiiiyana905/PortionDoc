import React from "react";

const ViewOrder = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg mainNav"
        style={{ height: "35px" }}
      >
        <i
          class="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white", marginTop: "20px" }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          portiondoc@gmail.com
        </p>
        <i
          class="fas fa-solid fa-phone"
          style={{
            height: "40px",
            marginLeft: "100px",
            color: "white",
            marginTop: "20px",
          }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          +977 983142567
        </p>
      </nav>
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
    </>
  );
};
export default ViewOrder;
