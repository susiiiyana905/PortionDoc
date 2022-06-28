import React, { useState } from "react";
import axios from "axios";
import AdminDashboard from "../adminDashbaord";
import { useNavigate } from "react-router-dom";

const AddGrocery = () => {
  const [groceryImage, setGroceryImage] = useState("");
  const [groceryName, setGroceryName] = useState("");
  const [groceryPrice, setGroceryPrice] = useState("");
  const [groceryDescription, setGroceryDescription] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  const addGrocery = (e) => {
    e.preventDefault();
    const priceRegex = new RegExp("^[0-9]+$");
    const numberRegex = new RegExp("[0-9]");
    const specialCharacterRegex = new RegExp('[!@#$%^&*(),.?":{}|<>]');
    if (
      groceryName.trim() === "" ||
      groceryPrice.trim() === "" ||
      groceryDescription.trim() === "" 
      
    ) {
      setMessage("Empty field found. Fill up the form completely.");
      return;
    } else if (groceryName.length < 2) {
      setMessage("Meal Name most contain at least two characters.");
      return;
    } 
    else if (groceryDescription.length < 2) {
      setMessage("Description most contain at least two characters.");
      return;
    } 
    else if (
      numberRegex.test(groceryName) ||
      specialCharacterRegex.test(groceryName)
    ) {
      setMessage(
        "Any numbers or special characters are not allowed in the meal name."
      );
      return;

    } else if (!priceRegex.test(groceryPrice)) {
      setMessage("Invalid meal price.");
      return;
    }
    const groceryData = new FormData();
    groceryData.append("groceryImage", groceryImage);
    groceryData.append("groceryName", groceryName);
    groceryData.append("groceryPrice", groceryPrice);
    groceryData.append("groceryDescription", groceryDescription);
    // groceryData.append("quantity", quantity);

    // if (this.state.unit === undefined) {
    //   groceryData.append("quantity", this.state.quantity + " Unit");
    // } else {
    //  groceryData.append(
    //     "quantity",
    //     this.state.quantity + " " + this.state.unit
    //   );
    // }
  
    axios
      .post("http://localhost:4001/add/grocery", groceryData, config)
      .then((result) => {
        console.log(result.data.data);
        if (result.data.success) {
          localStorage.setItem("_id", result.data.data._id);
          setMessage(result.data.message);
          navigate("/viewGrocery", { state: { _id: result.data.data._id } });
        }
      })
      .catch((e) => {
        setMessage(e.response.data.message);
      });
  };

 
  
    return(  
        <>
        <AdminDashboard>
        <div className="container">

<div
    className="suggestion-message text-center mb-2"
    style={{ color: "red", fontWeight: "bold" }}
  >
    {message}
  </div>
  <h2 className="heading-h2-all">Add Grocery:</h2>
  <form>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Image</label>
      <div class="col-sm-10">
        <input
          type="file"
          class="form-control"
          onChange={(e) => setGroceryImage(e.target.files[0])}
        ></input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          value={groceryName}
          onChange={(e) => setGroceryName(e.target.value)}
        ></input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Price</label>
      <div class="col-sm-10">
        <input
          type="number"
          class="form-control"
          value={groceryPrice}
          onChange={(e) => setGroceryPrice(e.target.value)}
        ></input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Description</label>
      <div class="col-sm-10">
        <textarea
          type="text"
          class="form-control"
          value={groceryDescription}
          onChange={(e) => setGroceryDescription(e.target.value)}
          style={{ float: "left", marginRight: "5px" }}
        ></textarea>
      </div>
    </div>

    {/* <div class="form-group row">
      <label class="col-sm-2 col-form-label">Quantity</label>
      <div class="col-sm-10">
      <div className="form-row">
      <div className="form-group col-md-6">
        <input
           type="text"
            className="form-control"
             id="inputCity"
              onChange={(e) =>
              setState({ quantity: e.target.value })
               }
               ></input>
               </div>
               <div className="form-group col-md-4">
                              <select
                                id="inputState"
                                className="form-control"
                                onChange={(e) =>
                                  this.setState({ unit: e.target.value })
                                }
                              >
                                <option selected>Unit</option>
                                <option>Kg</option>
                                <option>Ltr</option>
                                <option>Gm</option>
                                <option>Ml</option>
                              </select>
                            </div>
      </div>
      </div>
    </div> */}

   
   
    <p>
      <button
        type="submit"
        className="btn btn-primary addMeal"
        onClick={addGrocery}
      >
        Add Grocery
      </button>
    </p>
    </form>
    </div>
    </AdminDashboard>
   </>
  
    )
};
export default AddGrocery;
