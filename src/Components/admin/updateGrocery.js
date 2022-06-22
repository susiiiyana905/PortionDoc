import React from "react"
import AdminDashboard from "../adminDashbaord";
const UpdateGrocery = () => {
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

            <form id="updateMealForm">
              <div className="form-group row">
                <label htmlFor="mealImage" className="col-sm-3 col-form-label">
                Grocery Image
                </label>
                <img
                  src={"images/1.png"}
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
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="mealName" className="col-sm-3 col-form-label">
                Grocery Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="mealPrice" className="col-sm-3 col-form-label">
                Grocery Price
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="mealDescription"
                  className="col-sm-3 col-form-label"
                >
                 Grocery Description
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="text"
                    className="form-control"
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