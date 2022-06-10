import axios from "axios";
import React, { Component } from "react";
import Header from "../header";



const OrderMeal = () => {

  return (
    <>
      <Header></Header>
      <div className="container  mt-5">
        <div className="container" style={{ width: "50%", float: "left" }}>
          <div className="card border">
            <h1 style={{ textAlign: "center" }}>Shipping Details</h1>

            <form className="m-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  style={{ backgroundColor: "blue" }}
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="Inside Ringroad"
                  checked
               
                />
                <label class="form-check-label" for="exampleRadios1">
                  Inside Valley
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Outside Ringroad"
                
                />
                <label class="form-check-label" for="exampleRadios2">
                  Outside Valley
                </label>
              </div>

              <div class="form-group">
                <label style={{ fontWeight: "bold" }} for="exampleInputEmail1">
                  Address:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your address"
                />
              </div>
              <div class="form-group">
                <label
                  style={{ fontWeight: "bold" }}
                  for="exampleInputPassword1"
                >
                  Phone No:
                </label>
                <input
                  type="number"
                  maxLength="10"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your phone number"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="container" style={{ width: "50%", float: "right" }}>
          <div className="card border">
            <h1 style={{ textAlign: "center" }}>Order Summary</h1>
            <div className="mt-3">
              <div className="row ml-1 mb-2">
                <h5 className="col">Sub Total:</h5>
                <h6
                  className="col"
                  style={{ float: "right", fontSize: "20px" }}
                >
                  Rs. 1200
                </h6>
              </div>
              <div className="row ml-1 mb-2">
                <h5 className="col" style={{}}>
                  Discount:
                </h5>
                <h6
                  className="col"
                  style={{ float: "right", fontSize: "20px" }}
                >
                  Rs. 150
                </h6>
              </div>
              <div className="row ml-1">
                <h5 className="col" style={{}}>
                  Total:
                </h5>
                <h6
                  className="col"
                  style={{ float: "right", fontSize: "20px" }}
                >
                  Rs.1050
                  {/* {
                    this.state.carts.map(cart => {
                      total += cart.total
                    })
                  }
                  {total} */}
                </h6>
              </div>
              <button
                className="btn btn-primary m-4" 
                // onClick={() => this.checkout(total)}
                style={{ float: "right", backgroundColor: "#FF7800", border:"none" }}
              >
                Proceed To Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }


export default OrderMeal;
