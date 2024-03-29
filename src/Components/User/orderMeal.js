import axios from "axios";
import { Button } from "bootstrap";
import React, { Component, useEffect, useState } from "react";
import Header from "../header";
import khaltiConfig  from "../khalti/khaltiConfig";
import KhaltiCheckout from "khalti-checkout-web";
import { NavLink } from "react-router-dom";

const OrderMeal = () => {
  const [delivery, setDelivery] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [sMessage, setSMessage] = useState("");
  const [_id, setID] = useState("");
  const [cartItem, setCartItem] = useState([])
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('')

  let totalC = 0
const localCart = localStorage.getItem("cart")

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  
  const checkout = new KhaltiCheckout(khaltiConfig);

  const sendOrder = () => {
    // e.preventDefault();

    const orderData = {
      delivery: delivery || "Inside RingRoad",
      total: totalC,
      addToCart: cartItem
    }
    console.log(orderData);
      axios.post("http://localhost:4001/order/insert", orderData, config)
    .then((result) => {
      if(result.data.success){
        setSMessage(result.data.message);
      }
    })
    .catch((e) => {
      setMessage(e.response.message);
    });
  }

  const handlePaymentOption = (e) => {
    console.log(e.target.value);
    setPaymentMethod(e.target.value)
  }

  useEffect(() => {
    axios
      .get("http://localhost:4001/profile", config)
      .then((result) => {
        setAddress(result.data.address);
        setPhoneNo(result.data.phone_no);
        setID(result.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
      setCartItem(JSON.parse(localCart))
      
      // setTotal(totalC)
  }, []);
      cartItem.map((item)=>{
        totalC += item.price*item.qty;
      })

  // const editProfile = (e) => {
  //   e.preventDefault();
  //   const profileData = {
  //     phone_no,
  //     address,
  //   };
  //   axios
  //     .put("http://localhost:4001/user/update", profileData, config)
  //     // .then(result=>console.log(result))
  //     .then((result) => {
  //       if (result.data.success) {
  //         setMessage(result.data.message);
  //         navigate("/viewProfile");
  //       } else {
  //         setMessage(e);
  //       }
  //     })
  //     .catch((e)=>{
  //       setMessage(e.response.data.message);
  //     });
  // };
  return (
    <>
      <Header></Header>
      <div className="container  mt-5">
        <div className="container" style={{ width: "50%", float: "left" }}>
          <div className="card border">
            <h1 style={{ textAlign: "center" }}>Shipping Details</h1>

            <form className="m-3">
              <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  style={{ backgroundColor: "blue" }}
                  name="exampleRadios"
                  id="exampleRadios1"
                  value={delivery}
                  onChange={(e) => {
                    setDelivery(e.target.value);
                  }}
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
                  value={delivery}
                  onChange={(e) => {
                    setDelivery(e.target.value);
                  }}
                
                />
                <label class="form-check-label" for="exampleRadios2">
                  Outside Valley
                </label>
              </div>
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={phone_no}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="container" style={{ width: "50%", float: "right" }}>
          <div className="card border">
            <h1 style={{ textAlign: "center" }}>Order Summary</h1>
            <div className="mt-3">
              <div className="row ml-1">
                <h5 className="col" style={{}}>
                  Total:
                </h5>
                <h6
                  className="col"
                  style={{ float: "right", fontSize: "20px" }}
                >
                  Rs.{totalC}
                  {/* {
                    this.state.carts.map(cart => {
                      total += cart.total
                    })
                  }
                  {total} */}
                </h6>
              </div>

             {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Payment Method
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Cash on Delivery</a>
          <a onClick={()=>{checkout.show({ amount: 105000 })}} class="dropdown-item" href="#">Pay Via Khalti</a>
              
            </div>
          </div> */}

              <div style={{marginLeft:"20px"}}>
              <h3>Payment Method</h3>
              
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  style={{ backgroundColor: "blue" }}
                  name="exampleRadios"
                  id="exampleRadios1"
                  // checked
                  value='cod'
                  onChange={handlePaymentOption}
                />
                <label class="form-check-label" for="exampleRadios1" checked>
                  Cash on Delivery
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value='khalti'
                  onChange={handlePaymentOption}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Pay Via Khalti
                </label>
              </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center mx-auto ">
          <NavLink to = {"/"}>
        <button 
        className="btn start order-btn"
        onClick={() => {
          if (paymentMethod === 'khalti') {

            checkout.show({amount: totalC * 100})

            

          } else {
            console.log("cod");
            sendOrder()
          }
        }}
        > Place an Order
        </button>
        </NavLink>
        </div>
      </div>
    </>
  );
  }


export default OrderMeal;
