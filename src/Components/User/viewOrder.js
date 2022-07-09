import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [_id, setID] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken")
    }
  }



  useEffect(() => {
    axios
      .get("http://localhost:4001/order/user/get", config)
      .then((result) => {

        setOrderData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteOrder = (id) => {
    console.log(id)
    axios
      .post("http://localhost:4001/order/cancel", { id: id }, config)
  };


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
          {orderData.map((singleData) => {
            return (
              <div className="card">

                <div class="card mb-3" style={{ height: "300px", marginRight: "70px ", marginTop: "20px", marginLeft: "70px" }}>

                  <div class="row no-gutters">
                    <div class="col-md-8">
                      <div class="card-body">

                        <p
                          class="card-text"
                          style={{fontSize: "25px", color: "black" }}
                        >
                          <label class="text mr-5">
                           <span style={{fontWeight:"bold"}}>Item Name:</span>  {
                              singleData.addToCart.map((item) =>
                                <p>{item.name}</p>)
                            }
                          </label>
                          <label
                            class="text"
                            style={{ float: "right", marginTop: "1px" }}
                          >
                            <i class="fas fa-solid fa-timer"></i>
                            <span style={{fontWeight:"bold"}}>Quantity: </span>   {
                              singleData.addToCart.map((item) =>
                                <p>{item.qty}</p>)
                            }
                          </label>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
           
                {singleData.status === "Cancel" ?
                  <button
                    className="btn btn-danger"
                    style={{ marginBottom: "20px", marginLeft: "800px", marginRight: "20px" }}


                  >
                    Order Canceled
                  </button> :
                  <button
                    className="btn btn-danger"
                    style={{ marginBottom: "20px", marginLeft: "800px", marginRight: "20px" }}
                    onClick={() => {
                      deleteOrder(singleData._id);
                    }}
                  >
                    Cancel Order
                  </button>
                }
              </div>
            )
          })}

        </div>

      </div>

      <br />
      <Footer></Footer>
    </>
  );
};
export default ViewOrder;
