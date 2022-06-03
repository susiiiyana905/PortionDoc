import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
const Meals = () => {
  const [mealData, setMealData] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .get("http://localhost:4001/meal/all", config)
      .then((result) => {
        console.log(result.data);
        setMealData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  //     useEffect =()=>{
  //     axios.get("http://localhost:4001/category/all",config)
  //     .then(category=>{
  //         setcategoryData(category.data.data)
  //     })
  //     .catch(e=>{
  //         console.log(e)
  //     })
  // }
  return (
    <>
      <Header></Header>
      {/* <div> */}
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
                <a class="dropdown-item" href="#">
                  afa
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
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
        {mealData.map((singleData) => {
          return (
            <div className="container py-3" style={{ width: "17rem" }}>
              <div className="card-deck">
                <div className="card" style={{ height: "25rem" }}>
                  <div
                    id="content-a"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <NavLink to={"/viewRecipe/" + singleData._id}>
                      <img
                        src={
                          "http://localhost:4001/meal/" + singleData.mealImage
                        }
                        className="card-img-top"
                        style={{ width: "240px" }}
                      ></img>
                      <div className="card-body">
                        <p
                          class="first"
                          style={{ fontWeight: "bold", fontSize: "17px" }}
                        >
                          {singleData.mealName}
                        </p>
                      </div>
                    </NavLink>
                    <div className="card-footer">
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        <small class="text-muted">{singleData.mealPrice}</small>
                        <small
                          class="text-muted"
                          style={{ float: "right", marginTop: "1px" }}
                        >
                          <i class="fas fa-solid fa-timer"></i>
                          {singleData.time}
                        </small>
                      </p>
                    </div>
                  </div>
                  {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"1500px"}}>
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <img src={"http://localhost:4001/meal/"+singleData.mealImage} style={{height:"300px", width:"600px"}}></img>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>                      
                        <div class="modal-body">
                        <div className="info">
                                <div>
                                <a style={{marginRight:"100px", fontWeight:"bold"}}>Time:</a>
                                <a style={{marginRight:"80px", fontWeight:"bold"}}>Calories:</a>
                                <a style={{marginRight:"80px", fontWeight:"bold"}}>Difficulties: </a>
                                </div>
                                <div>
                                <a style={{marginRight:"100px"}}>{singleData.time}</a>
                                <a style={{marginRight:"80px"}}>{singleData.calory}</a>
                                <a style={{marginRight:"80px"}}>{singleData.difficulty}</a>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <h5>Description</h5>
                                <p>{singleData.mealDescription}</p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Ingredients</h5>
                                <div class="mb-3" style={{"max-width": "540px"}}>
                                <div class="row no-gutters">
                                <div>
                                <img src="images/rice.jpg" style={{height:"100px"}}></img>
                                </div>
                                <div class="col-md-4" style={{marginTop:"20px"}}>
                                    <div class="body">
                                    <p>3/4 cups</p>
                                <p>Rice</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div class="mb-3" style={{"max-width": "540px"}}>
                                <div class="row no-gutters">
                                <div>
                                <img src="images/rice.jpg" style={{height:"100px"}}></img>
                                </div>
                                <div class="col-md-4" style={{marginTop:"20px"}}>
                                    <div class="body">
                                    <p>3/4 cups</p>
                                <p>Rice</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div class="mb-3" style={{"max-width": "540px"}}>
                                <div class="row no-gutters">
                                <div>
                                <img src="images/rice.jpg" style={{height:"100px"}}></img>
                                </div>
                                <div class="col-md-4" style={{marginTop:"20px"}}>
                                    <div class="body">
                                    <p>3/4 cups</p>
                                <p>Rice</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                           <Link className="col-md-8 d-flex flex-column justify-content-center" to={"/viewRecipe/"+singleData._mid} >See Full Recipe</Link>
                        </div>
                        </div>
                    </div>
                    </div> */}
                </div>
              </div>
            </div>
          );
        })}

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

      {/* </div> */}
      <Footer></Footer>
    </>
  );
};
export default Meals;
