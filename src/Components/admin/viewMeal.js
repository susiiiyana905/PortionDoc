import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ViewMeals =()=>{
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

    const deleteMeal = (mid) => {
        axios.delete ("http://localhost:4001/meals/delete/" +mid, config)
        .then (result => {
            axios.get(`http://localhost:4001/meals/all`,config)
            .then(result1=>{
             setMealData(result1.data.data)
         })
            console.log(result.data)})
        .catch()
    }


    return(
        <>
         <nav className="navbar navbar-expand-lg ">
          <i className="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
          <i className="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
        </nav>
        <br/>
        <div className="container">
            <NavLink to={"/addMeal"}>
        <button className="btn btn-primary mb-2"style={{backgroundColor:"#FF7800",border:"none", float:"right"}}>Add New Meal</button>
        </NavLink>
        </div>
           <br/>
        <div style={{marginTop:"50px"}}>
        <div className="container">
                    <div  className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                        <div class="container">
                            <div class="row">
                  <div>
                      <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" colSpan="4">Image</th>
                            <th scope="col" colSpan="4">Name</th>
                            <th scope="col" colSpan="4">Price</th>
                            <th scope="col" colSpan="4">Category</th>
                            <th scope="col " colSpan="6">Time</th>
                            <th scope="col " colSpan="6">Calory</th>
                            <th scope="col " colSpan="6">Difficulty</th>
                            <th scope="col" colSpan="6">Edit</th>
                            </tr>
                        </thead>
                        <tbody>

                            
                        {mealData.map((singleData)=> {
                            return(
                                <tr key={singleData._id}>
                                 <th scope='row'></th>
                                 <td><img src={"http://localhost:4001/meal/"+singleData.mealImage} height="100px"/></td>
                                <td colSpan="4">  {singleData.mealName}</td>
                                <td colSpan="4"> {singleData.mealPrice}</td>
                                <td colSpan="4"> {singleData.mealCategory}</td>
                                <td colSpan="6">{singleData.time}</td>
                                <td colSpan="6"> {singleData.calory}</td>
                                <td colSpan="6"> {singleData.difficulty}</td>
                                
                                <td colSpan="6">
                                <div style={{float:"left"}}>
                                    <NavLink to={"/updateMeal/"+singleData._id}>
                                    <button className="btn btn-primary mb-2"style={{backgroundColor:"#FF7800",border:"none"}}>
                                        Update
                                    </button>
                                    </NavLink>
                                </div>
                                    <button className="btn btn-primary mb-2"style={{backgroundColor:"#FF7800",border:"none", marginLeft:"10px"}}
                                    onClick={()=>{deleteMeal(singleData._id)}}
                                    >Delete</button>

                                </td>
                            </tr> 
                            )
                             

                        })} 
                        </tbody>
                        </table>
                      </div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </div>
        </>
    )
}
export default ViewMeals;
// import { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import axios from "axios";
// // import Navbar from "./Navbar";
// const ShowCategory = () => {
//     const [categoryData, setcategoryData] = useState([]);
//     const config = {
//         headers: {
//             Authorization: 'Bearer '+ localStorage.getItem('adminToken')
//         }
//     }
//     console.log(config);
//     useEffect(()=> {
//         axios.get(`http://localhost:4001/category/single`,config)
//        .then(category=>{
//         setcategoryData(category.data.data)
//     })
//     .catch(e=>{
//         console.log(e)
//     })
//     // getProduct()
// },[]);
// const deleteCategory = (cid) => {
//     axios.delete ("http://localhost:4001/category/delete/" +cid, config)
//     .then (result => {
//         axios.get(`http://localhost:4001/category/single`,config)
//         .then(category=>{
//          setcategoryData(category.data.data)
//      })
//         console.log(result.data)})
//     .catch()
// }
// return (
//     <div>
//     {/* <Navbar></Navbar> */}
//     <div className="container">
//                 <div  className="row">
//                     <div className="col-md-2"></div>
//                     <div className="col-md-8">
//                     <div class="container">
//                         <div class="row">
//               <div>
//                  <table className="table">
//                      <thead>
//                          <tr>
//                              <th scope="col" colSpan="2">Category Image</th>
//                              <th scope="col" colSpan="2">Category Name</th>
//                          </tr>
//                      </thead>
//                      <tbody>
//                          {categoryData.map(singleData => {
//                              return(
//                                 //  <tr>
//                                 <tr key={singleData._id}>
//                                       <td><img src={`http://localhost:4001/category/${singleData.categoryImage}`} height="100px"/></td>
//                                         <td colSpan="2">  {singleData.categoryName}</td>
//                                        <td> 
//                                        <button className="btn btn-primary mb-2" onClick={()=>{deleteCategory(singleData._id)}}>Delete Product</button>
//                                     </td>
//                                  </tr>
//                              )
//                          })}
//                      </tbody>
//                  </table>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
//                         </div>
// )
// }
// export default ShowCategory;


