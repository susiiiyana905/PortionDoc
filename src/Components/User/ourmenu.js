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

              


                    <div id="front">
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
         {mealData.map((singleData) =>{
            return(
                <div className="container py-3" style={{width: "350px"}}>
                <div className="card-deck">
                    <div className="card" style={{height:"400px"}}>
                    <img className="card" src={"http://localhost:4001/meal/"+singleData.mealImage} style={{marginTop:"10px"}}></img>
                    <div className="card-body">
                        <p class="first" style={{fontWeight:"bold"}}>{singleData.mealName}</p>
                        {/* <p class="second">{singleData.mealPrice}</p>  */}
                    </div>
                    <div className="card-footer">
                        
                <p class="card-text" style={{fontWeight:"bold", fontSize:"20px"}}>
                    <small class="text-muted">{singleData.mealPrice}</small>
                    <small class="text-muted" style={{float: "right", marginTop:"1px"}}><i class="fas fa-solid fa-timer"></i>{singleData.time}</small>

                  
                
                </p>

                {/* <p class="card-text" style={{fontWeight:"bold", fontSize:"20px", marginRight:"100px", float: "right"}}><small class="text-muted">{singleData.time}</small></p> */}

                
                    </div>
                    </div>
                </div>
                </div>
               
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