import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UpdateMeals from "./updateMeals";

const ViewRecipies =()=>{
    const [mealData, setMealData] = useState([]);
    const [message, setMessage] = useState('');

    const config = {
        headers :{
            Authorization : "Bearer " + localStorage.getItem('adminToken')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:4001/meals/all", config)
        .then(result=>{
            console.log(result.data.data)
            setMealData(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);
    return(
        <>
          <nav className="navbar navbar-expand-lg mainNav" style={{"height":"35px"}}>
                <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white", marginTop:"20px"}}></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>portiondoc@gmail.com</p>
                <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white", marginTop:"20px"}} ></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>+977 983142567</p>
                
                </nav>
        <br/>
        <div className="container">
            <NavLink to={"/addMeal"}>
        <button className="btn btn-primary mb-2"style={{backgroundColor:"#FF7800",border:"none", float:"right"}}>Add New Meal</button>
        </NavLink>
        </div>
        <div className="container">
            <h1 style={{textAlign:"center"}}> Meals </h1>
       

            {mealData.map((singleData)=> {
                            return(
        <div class="card mb-3" style={{"width": "1000px","height":"300px"}}>
       <div class="row no-gutters">
            <div class="col-md-4">
            <img src={"http://localhost:4001/meal/"+singleData.mealImage} height="300px"></img>
           
          
            </div>
            <div class="col-md-8">
            <div class="card-body">
            {/* <NavLink to={"/viewRecipe/:mid"}> */}
            <div>
                <h5 class="card-title">{singleData.mealName}</h5>
                <i class="fas fa-solid fa-trash" style={{marginLeft:"600px", marginTop:"0px"}}></i>
                </div>
                 <hr/>
                {/* </NavLink> */}
                <p class="card-text">{singleData.mealDescription}</p>
                
            </div>
            </div>
        </div>
        </div>
                            )
                        })} 
                       







        </div>

        </>

    )
}
export default ViewRecipies;