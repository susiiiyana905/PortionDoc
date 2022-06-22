import React from "react"
import AdminDashboard from "../adminDashbaord";

const AddGrocery = () => {
    return(  
        <>
        <AdminDashboard>
        <div className="container">

<div
    className="suggestion-message text-center mb-2"
    style={{ color: "red", fontWeight: "bold" }}
  >
  </div>
  <h2 className="heading-h2-all">Add Grocery:</h2>
  <form>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Image</label>
      <div class="col-sm-10">
        <input
          type="file"
          class="form-control"
        ></input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
        ></input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Price</label>
      <div class="col-sm-10">
        <input
          type="number"
          class="form-control"
        ></input>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Grocery Description</label>
      <div class="col-sm-10">
        <textarea
          type="text"
          class="form-control"
          style={{ float: "left", marginRight: "5px" }}
        ></textarea>
      </div>
    </div>
   
    <p>
      <button
        type="submit"
        className="btn btn-primary addMeal"
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
