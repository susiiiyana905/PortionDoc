import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import React from "react";
const Grocery = () => {
  const [groceryData, setGroceryData] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [cartData, setCartData] = useState("");
  const [cart, setCart] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  const addCart = () => {
    if (!cartData) {
    } else {
      setCart([...cart, cartData]);
      setCartData("");
    }
  };
  //add to localstorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    axios
      .get("http://localhost:4001/all/grocery")
      .then((result) => {
        console.log(result.data.data);
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
        console.log(result);
        setGroceries(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <NavLink to={"/viewRecipe/"+singleData._id}> */}
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
                <div className="card" data-toggle="modal" data-target="#exampleModal">
                  {/* <NavLink
                  to={"/viewRecipe/" + singleData._id}
                  style={{ textDecoration: "none" }}
                > */}
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
                  {/* </NavLink> */}
                  <div className="card-footer">
                    <Link to="/cart">
                      <button className="btn sendMeal" onClick={addCart}>
                        Add To Cart
                      </button>
                    </Link>
                  </div>
                   
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <img src="images/bibim.jpg" style={{height:"200px", width:"200px", marginLeft:"120px"}}></img>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h2> Ginger</h2>
     <p> Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.</p>
     <div>
              <label style={{fontWeight:"bold"}}>Price: <text style={{fontWeight:"normal"}}>Rs.123</text></label>
              <br />
              <label style={{fontWeight:"bold"}}>Quantity: <text style={{fontWeight:"normal"}}>1gm</text></label>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn sendMeal" data-dismiss="modal"style={{marginRight:"180px"}}>Add to cart</button>
        
      </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* </div> */}
      <Footer></Footer>
    </>
  );
};
export default Grocery;