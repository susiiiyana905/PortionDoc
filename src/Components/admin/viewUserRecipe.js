import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ViewUserRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [message, setMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/get/all/user/recipe", config)
      .then((result) => {
        console.log(result.data.data);
        setRecipeData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg mainNav"
        style={{ height: "35px" }}
      >
        <i
          class="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white", marginTop: "20px" }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          portiondoc@gmail.com
        </p>
        <i
          class="fas fa-solid fa-phone"
          style={{
            height: "40px",
            marginLeft: "100px",
            color: "white",
            marginTop: "20px",
          }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          +977 983142567
        </p>
      </nav>
      <br />

      <div className="container">
        <h1 style={{ textAlign: "center" }}> User Recipes </h1>
        {recipeData.map((singleData) => {
          return (
            <NavLink to={"/userRecipeDetail/" + singleData._id} style={{textDecoration:"none"}}>
            <div
              class="card mb-3 text-align-center"
              //   style={{  height: "260px" }}
              key={singleData._id}
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={
                      "http://localhost:4001/user/" +
                      singleData.user_id.profile_pic
                    }
                    className="img rounded-circle"
                    height="200px"
                    style={{ marginLeft: "30px" }}
                  />

                  <div>
                    <p style={{ marginLeft: "35px", fontSize: "20px" }}>
                      {singleData.user_id.firstName}{" "}
                      {singleData.user_id.lastName}
                    </p>
                  </div>
                </div>

                <div class="col-md-8">
                  <div
                    className="card"
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      height: "230px",
                    }}
                  >
                    <div class="card-body">
                      <div>
                        <h5>{singleData.title}</h5>
                      </div>
                      <div>
                        <p>{singleData.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
export default ViewUserRecipe;
