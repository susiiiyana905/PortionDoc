import React from "react";
import axios from "axios";
import { Component } from "react";
import AdminDashboard from "../adminDashbaord";

class AddIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: [{ ingredient: "" }],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.ingredient] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { ingredient: "" }],
    });
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  }
  state = {
    name: "",
    quantity: "",
    unit: "",
    image: "",
    message: "",
    sMessage: "",
  };

  addIngredient = () => {
    const meals_id = localStorage.getItem("meals_id");
    const ingredientData = new FormData();
    ingredientData.append("name", this.state.name);
    ingredientData.append("image", this.state.image);
    ingredientData.append("meals_id", meals_id);

    if (this.state.unit === undefined) {
      ingredientData.append("quantity", this.state.quantity + " Unit");
    } else {
      ingredientData.append(
        "quantity",
        this.state.quantity + " " + this.state.unit
      );
    }
    const numberRegex = new RegExp("[0-9]");
    const specialCharacterRegex = new RegExp('[!@#$%^&*(),.?":{}|<>]');

    if (
      this.state.name.trim() === "" ||
      this.state.quantity.trim() === "" 
    ) {
      this.setState({message: "Empty field found. Fill up the form completely."});
      return;
    } else if (this.state.name.length < 2) {
      this.setState({message: "Meal Name most contain at least two characters."});
      return;
    } else if (
      numberRegex.test(this.state.name) ||
      specialCharacterRegex.test(this.state.name)
    ) {
      this.setState({message:
        "Any numbers or special characters are not allowed in the meal name."
    });
      return;
    } 


    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"),
      },
    };
    axios
      .post("http://localhost:4001/add/ingredients", ingredientData, config)
      .then((result) => {
        if (result.data.success) {
          this.setState({
            sMessage: result.data.message,
          });
        }
      })
      .catch((e) => {
        this.setState({
          message: e.response.data.message,
        });
      });
  };
  render() {
    return (
      <>
        <AdminDashboard>
          <div
            className="col-md-6 d-flex justify-content-center mx-auto"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <div className="container">
            <div className="card" style={{width: "100%"}}>
              <div className="mb-2">
                <div
                  className="suggestion-message text-center"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {this.state.message}
                </div>
                <div
                  className="success-message text-center"
                  style={{ color: "green", fontWeight: "bold" }}
                >
                  {this.state.sMessage}
                </div>
              </div>
              <div className="card-body">
                <h2 style={{ textAlign: "center" }}>Add Ingredient</h2>
                <hr />
                <div className="container">
                  <form style={{ marginTop: "20px" }}></form>

                  <form onSubmit={this.handleSubmit}>
                    {this.state.formValues.map((element, index) => (
                      <div>
                        <div className="form-group row">
                          <div className="col-sm-11">
                            <form>
                              <div className="row">
                                <div className="col">
                                  <form>
                                    <div className="form-group">
                                      <input
                                        type="file"
                                        className="form-control-file"
                                        id="exampleFormControlFile1"
                                        onChange={(e) =>
                                          this.setState({
                                            image: e.target.files[0],
                                          })
                                        }
                                      ></input>
                                    </div>
                                  </form>
                                </div>
                                <div className="col">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Ingredient Name"
                                    value={this.state.name}
                                    onChange={(e) =>
                                      this.setState({ name: e.target.value })
                                    }
                                  ></input>
                                </div>
                              </div>
                            </form>
                          </div>
                          <button
                            type="button"
                            className="button remove"
                            onClick={() => this.removeFormFields(index)}
                            style={{
                              width: "40px",
                              height: "40px",
                              float: "right",
                            }}
                          >
                            <i className="fas fa-solid fa-trash"></i>
                          </button>
                          <button
                            type="button"
                            className="button add"
                            onClick={() => this.addIngredient()}
                            style={{
                              width: "40px",
                              height: "40px",
                              float: "right",
                            }}
                          >
                            <i className="fas fa-solid fa-plus"></i>
                          </button>
                        </div>

                        <div>
                          <div>
                            <label>Quantity</label>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                onChange={(e) =>
                                  this.setState({ quantity: e.target.value })
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
                                <option>Ounce</option>
                                <option>TeaSpoon</option>
                                <option>TableSpoon</option>
                                <option>Clove</option>
                                <option>Cup</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr />
                      </div>
                    ))}
                    <div className="button-section">
                      <button
                        className="button add"
                        type="button"
                        onClick={() => this.addFormFields()}
                        style={{
                          marginLeft: "450px",
                          backgroundColor: "#4CBA19",
                          height: "50px",
                          width: "50px",
                          color: "white",
                        }}
                      >
                        <i className="fas fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </AdminDashboard>
      </>
    );
  }
}
export default AddIngredient;
