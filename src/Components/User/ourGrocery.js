import Footer from "../footer";
import Header from "../header";
import React from "react";
const Grocery = () => {
    return(
        <>
         <Header></Header>
      <div className="container">
        <div id="front">
          <div id="one">
            <div class="dropdown">
              <button
                id="search"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* class={"dropdown-item"}
              to={""} */}
              </div>
            </div>
          </div>
          <div id="two">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Meals</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="meal-data container">
            <div className="container py-3" style={{ width: "15.2rem" }}>
              <div className="card-deck card">
                  style={{ textDecoration: "none" }}
                  <img
                    src={"images/1.png"}
                    className="card-img-top"
                    style={{ height: "200px", width: "100%" }}
                  ></img>
                  <div className="card-body">
                    <p
                      class="first"
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                    </p>
                  </div>
                <div className="card-footer">
                  <p class="card-text" style={{ fontWeight: "bold", fontSize:"12px" }}>
                    <label class="text mr-5">
                      Price
                    </label>
                    <label
                      class="text"
                      style={{ float: "right", marginTop: "1px" }}
                    >
                      <i class="fas fa-solid fa-timer"></i>
                      Time 
                    </label>
                  </p>
                </div>
              </div>
            </div>


        <div>
          <button
            id="mybutton"
            type="button"
            class="btn btn-primary btn-medium"
          >
            Get Cooking
          </button>
        </div>
      </div>
      <Footer></Footer>
        </>

    )
}
export default Grocery;
