import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";
const UpdateGrocery = () => {
  const [groceryImage, setGroceryImage] = useState("");
  const [groceryName, setGroceryName] = useState("");
  const [groceryPrice, setGroceryPrice] = useState("");
  const [groceryDescription, setGroceryDescription] = useState("");
  const [response, setResponse] = useState("");
  const [sResponse, setSResponse] = useState("");
  const [message, setMessage] = useState("");
  const [_id, setID] = useState("");
  const [groceryData, setGroceryData] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  const { gid } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4001/grocery/single/" + gid, config)
      .then((result) => {
        console.log(result.data.data);
        setGroceryImage(result.data.data.groceryImage);
        setGroceryName(result.data.data.groceryName);
        setGroceryPrice(result.data.data.groceryPrice);
        setGroceryDescription(result.data.data.groceryDescription);
        setID(result.data.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const updateGroceryImage = (e) => {
    e.preventDefault();

    const groceryData = new FormData();
    groceryData.append("groceryImage", groceryImage);

    axios
      .put("http://localhost:4001/update/grocery/image/" + gid, groceryData, config)
      .then((result) => {
        // console.log(result.data)
        if (result.data.success) {
          setMessage(result.data.message);
          axios
            .get("http://localhost:4001/grocery/single/" + gid, config)
            .then((result) => {
              setGroceryImage(result.data.data.groceryImage);
            });
        } else {
          setMessage("Something is wrong!!!");
        }
      })
      .catch(e);
  };

  const updateGrocery = (e) => {
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

    axios
    .put("http://localhost:4001/update/grocery/" + gid, groceryData, config)
    .then((result) => {
      if (result.data.success) {
        setMessage(result.data.message);
        navigate("/viewGrocery");
        axios
          .get(`http://localhost:4001/grocery/all`, config)
          .then((result1) => {
            setGroceryData(result1.data.data);
          });
      } else {
        setMessage("Something is wrong!!!");
      }
    })
    .catch(e);
  };

    return(
        <>
        <AdminDashboard>
        <div className="container">
        <div className="row">
        <div
          className="suggestion-message text-center mb-2"
          style={{ color: "red", fontWeight: "bold" }}
        >
        </div>
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <div className="mb-2">         
                        <div className="success-message text-center"></div>  
                    </div>
            <h2 className="heading-h2-all">Update Grocery</h2>

            <form id="updateGroceryForm">
              <div className="form-group row">
                <label htmlFor="groceryImage" className="col-sm-3 col-form-label">
                Grocery Image
                </label>
                <img
                   src={"http://localhost:4001/grocery/" + groceryImage}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  height="200px"
                />

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setGroceryImage(e.target.files[0])}
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={updateGroceryImage}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="groceryName" className="col-sm-3 col-form-label">
                Grocery Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="groceryName"
                    value={groceryName}
                    onChange={(e) => setGroceryName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="groceryPrice" className="col-sm-3 col-form-label">
                Grocery Price
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    value={groceryPrice}
                    onChange={(e) => setGroceryPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="groceryDescription"
                  className="col-sm-3 col-form-label"
                >
                 Grocery Description
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="text"
                    className="form-control"
                    value={groceryDescription}
                    onChange={(e) => setGroceryDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#FF7800" }}
                    onClick={updateGrocery}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </AdminDashboard>
        </>
    )
}
export default UpdateGrocery;