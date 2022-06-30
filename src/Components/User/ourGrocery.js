import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react";
import { addToCart } from "./product_functions";
const Grocery = () => {
  const [groceryData, setGroceryData] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [groceryImage, setGroceryImage] = useState("");
  const [groceryName, setGroceryName] = useState("");
  const [groceryDescription , setGroceryDescription] = useState("");
  const [groceryPrice, setGroceryPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const localCart = localStorage.getItem("cart")
  const [cartData, setCartData] = ('');
  const [cart, setCart] = useState([]);
  


  const addCart = (item) => {
    const data = {
      _id: item._id,
      // image: "http://localhost:4001/meal/" + item.mealImage,
      name: item.groceryName,
      price: item.groceryPrice,
      type: 'grocery'
    }
    addToCart(data, 1)
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(cart))
  }, [cart]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:4001/all/grocery")
      .then((result) => {
        setGroceryData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  function searchGrocery(groceryName) {
    if (groceryName.trim() === "") {
      return;
    }
    axios
      .post("http://localhost:4001/search/grocery", { groceryName })
      .then((result) => {
        setGroceries(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function singleGrocery(gid){
    axios.post("http://localhost:4001/grocery/single/view",{gid})
    .then((result)=>{
      setGroceryImage(result.data.data.groceryImage);
      setGroceryName(result.data.data.groceryName);
      setGroceryPrice(result.data.data.groceryPrice);
      setGroceryDescription(result.data.data.groceryDescription);
      setQuantity(result.data.data.quantity);
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  return (
    <>
      <Header></Header>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Grocery</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div id="front">
          <div id="two">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ borderColor: "grey" }}
                onChange={(e) => searchGrocery(e.target.value)}
              ></input>
            </div>
            <div className="d-flex flex-column">
              {groceries.map((singleData) => {
                return (
                  <div className="d-flex justify-content-between align-items-center" key={singleData._id}>
                  
                    <div
                      className="d-flex justify-content-start align-items-center my-2"
                      key={singleData._id}
                    >
                      <img
                        src={
                          "http://localhost:4001/grocery/" +
                          singleData.groceryImage
                        }
                        className="me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <label>{singleData.groceryName}</label>
                    </div>
                    {/* </NavLink> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="grocery-data container">
        {groceryData.map((singleData) => {
          return (
            <div className="container py-3" style={{ width: "275px" }}>
              <div className="card-deck">
                <div
                  className="card"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={()=>singleGrocery(singleData._id)}
                >
                  <img
                    src={
                      "http://localhost:4001/grocery/" + singleData.groceryImage
                    }
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                  <div className="card-body">
                    <p
                      className="card-title"
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      {singleData.groceryName}
                    </p>{" "}
                    <hr />
                    <p
                      className="card-text"
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                      }}
                    >
                      <label className="text mr-5">
                        Price: {singleData.groceryPrice}
                      </label>
                    </p>
                  </div>
                  <div className="card-footer">
                    <Link to="/cart">
                      <button className="btn sendMeal" onClick={()=> addCart(singleData)}>
                        Add To Cart
                      </button>
                    </Link>
                  </div>

                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    {/* {singleGroceryData.map((singleData)=>{
                          return( */}
                    <div class="modal-dialog">
                    
                            <div class="modal-content">
                        
                        <div class="modal-header">
                          <img
                            src={
                              "http://localhost:4001/grocery/" + groceryImage
                            }
                            style={{
                              height: "200px",
                              width: "200px",
                              marginLeft: "120px",
                            }}
                          ></img>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <h2> {groceryName}</h2>
                          <p>
                            {groceryDescription}
                          </p>
                          <div>
                            <label style={{ fontWeight: "bold" }}>
                              Price:{" "}
                              <text style={{ fontWeight: "normal" }}>
                                Rs. {groceryPrice}
                              </text>
                            </label>
                            <br />
                            <label style={{ fontWeight: "bold" }}>
                              Quantity:{" "}
                              <text style={{ fontWeight: "normal" }}>{quantity}</text>
                            </label>
                          </div>
                        </div>
                        <div class="modal-footer">
                        
                          <button
                            type="button"
                            className="btn sendMeal"
                            data-dismiss="modal"
                            style={{ marginRight: "180px" }}
                            onClick={addCart}
                          >
                            Add to cart
                          </button>
                          
                        </div>
                      </div>
                        
                      
                    </div>
                    
                  </div>

      <Footer></Footer>
    </>
  );
};
export default Grocery;
