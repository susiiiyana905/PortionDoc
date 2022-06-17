import { Component } from "react";
import React from 'react';

import { Link, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    const logout = () => {
      localStorage.clear();
      window.location.replace("/");
    };
    var menu;
    if (localStorage.getItem("userToken")) {
      menu = (
        <>
          <nav
            className="navbar navbar-expand-lg mainNav"
            style={{ height: "34px",  }}
          >
            <i
              class="fas fa-solid fa-envelope fa-lg"
              style={{ height: "40px", color: "white", marginTop: "8px" }}
            ></i>
            <p
              className="i-1"
              style={{ marginLeft: "10px" }}
            >
              portiondoc@gmail.com
            </p>
            <i
              class="fas fa-solid fa-phone"
              style={{ height: "40px", marginTop: "8px",marginLeft: "100px",
              color: "white"
            }}
            ></i>
            <p
              className="i-1"
              style={{ marginLeft: "10px" }}
            >
              +977 983142567
            </p>
          </nav>
          
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
                      <img
                        src="images/logo.png"
                        className="card-img-top"
                        alt="..."
                        style={{
                          height: "80px",
                          width: "140px",
                          marginLeft: "30px",
                          marginTop: "0px",
                        }}
                      ></img>
                    </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" style={{fontSize:"28px"}}>
    <li class="nav-item active">
      <Link className="nav-link" to="/">
             Home <span className="sr-only">(current)</span>
              </Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to="/requestDiet">
                Dietary
                    </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/ourmenu">
                    Our Menu
                  </Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/addRecipe">
                  Recipes
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/review">
                    Contact Us
                    </Link>
                </li>
                
    </ul>
    <div class="form-inline my-2 my-lg-0" >
    <ul class="navbar-nav mr-auto" style={{fontSize:"28px"}}>
    <li className="nav-item dropdown">
                  <li
                    className="nav-link dropdown-toggle"
                    to="/account"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-alt fa-1.5x">Account </i>
                  </li>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/viewProfile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout} to="#">
                        Logout
                      </button>
                    </li>
                  </ul>
                  </li>
                  <li className="nav-item">
                          <Link
                            className="nav-link navbar-link-2 waves-effect"
                            to="/cart"
                          >
                            {/* <span className="badge badge-pill red">3</span> */}
                            <i className="fas fa-shopping-cart pl-0"></i>
                          </Link>
                        </li>
                  </ul>
    </div>
  </div>
</nav>         
        </>
      );
    } else {
      menu = (
        <>
           <nav
            className="navbar navbar-expand-lg mainNav"
            style={{ height: "34px",  }}
          >
            <i
              class="fas fa-solid fa-envelope fa-lg"
              style={{ height: "40px", color: "white", marginTop: "8px" }}
            ></i>
            <p
              className="i-1"
              style={{ marginLeft: "10px" }}
            >
              portiondoc@gmail.com
            </p>
            <i
              class="fas fa-solid fa-phone"
              style={{ height: "40px", marginTop: "8px",marginLeft: "100px",
              color: "white"
            }}
            ></i>
            <p
              className="i-1"
              style={{ marginLeft: "10px" }}
            >
              +977 983142567
            </p>
          </nav>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
                      <img
                        src="images/logo.png"
                        className="card-img-top"
                        alt="..."
                        style={{
                          height: "80px",
                          width: "140px",
                          marginLeft: "30px",
                          marginTop: "0px",
                        }}
                      ></img>
                    </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" style={{fontSize:"28px"}}>
    <li class="nav-item active">
      <Link className="nav-link" to="/">
             Home <span className="sr-only">(current)</span>
              </Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to="/requestDiet">
                Dietary
                    </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/ourmenu">
                    Our Menu
                  </Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/addRecipe">
                  Recipes
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/review">
                    Contact Us
                    </Link>
                </li>
    </ul>
    <div class="form-inline my-2 my-lg-0" >
    <button class="btn btn-outline-success" type="submit" style={{fontSize:"28px"}}> <Link
                    className="link"
                    to="/login"
                    style={{ color: "black" }}
                  >
                    Login
                  </Link></button>
    </div>
  </div>
</nav>     
        </>
      );
    }
    return (
      <>
        <div>{menu}</div>
      </>
    );
  }
}
export default Header;
