// import {Component} from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
const Meals =()=> {
    const [mealData, setmealData] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('userToken')
            }
        }

        axios.get("http://localhost:4001/meal/all", config)
        .then(result => {
            setmealData(result.data.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }, [])

// const Category =()=>{
//     axios.get("http://localhost:4001/category/all",config)
//     .then(category=>{
     
       
//         setcategoryData(category.data.data)
//     })
//     .catch(e=>{
//         console.log(e)
//     })
// }
        return(
            <>
              <Header></Header>
              {/* <div> */}
                <div className="container">

                <div class="nav-item dropdown">
                    <button class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <form class="form-inline ">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>


                    {/* <div id="front">
                    <div  id="one">
                    <div class="dropdown">
                        <button  id="search" class="btn btn-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-expanded="false">
                        Categories
                        </button>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"></a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
                </div>
                    </div>
                    <div  id="two"> 
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft:"10px"}}>Search</button>
                </form>
                </div>
                </div> */}


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
         {mealData.map((singleData) =>{
            return(
                <div className="container py-3" style={{width: "350px"}}>
                <div className="card-deck">
                    <div className="card">
                    <img className="card" src={"http://localhost:4001/meal/"+singleData.mealImage}></img>
                    <div className="card-body">
                        <p class="first">{singleData.mealName}</p>
                        {/* <p class="second">{singleData.mealPrice}</p>  */}
                    </div>
                    <div className="card-footer">
                    <button className="btn btn-outline-primary" >
                      Price:  <p class="second">{singleData.mealPrice}</p> 
                    </button>    
                    <button className="btn btn-outline-primary"  style={{float: "right"}} >
                        Time:    <p class= "third" >{singleData.time}</p>
                     </button>  
                 
                    </div>
                    </div>
                </div>
                </div>
                // <div className="container py-5" style={{width: "300px"}}>
                //     <img className="card" src={"http://localhost:4001/meal/"+singleData.mealImage}></img>
                //     <p class="first">{singleData.mealName}</p>
                //     <p class="second">{singleData.mealPrice}</p> 
                //     <div class="me">
                //     <p class= "third" >{singleData.time}</p>
                //     {/* <button class="view">View Details</button> */}
                //     </div>
                //     </div>
                                )
                })}
     <div>
     <button id="mybutton" type="button" class="btn btn-primary btn-medium">Get Cooking</button>
     </div>
     </div>
     
     {/* </div> */}
     <Footer></Footer>
     </>
        )
}

export default Meals;