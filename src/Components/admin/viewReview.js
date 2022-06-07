import axios from "axios";
import { useEffect, useState } from "react";
import React from "react"

const ViewReview =()=>{
    const [reviewData,setReviewData] = useState([]);
    const [message, setMessage] = useState('');

    const config = {
        headers :{
            Authorization : "Bearer " + localStorage.getItem('adminToken')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:4001/get/all/reviews", config)
        .then(review=>{
            setReviewData(review.data.data);
            // console.log(result.data.data)
         
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
            <h1 style={{textAlign:"center"}}> Reviews </h1>
            {reviewData.map((singleData)=>{
                return(
                    <div class="card mb-3" style={{"width": "800px","height":"260px", marginLeft:"100px"}}>
                    <div class="row no-gutters">
                         <div class="col-md-4">
                         <img src={"http://localhost:4001/user/"+singleData.user_id.profile_pic} className="img rounded-circle" height="200px" style={{marginLeft:"30px"}}/><br/>
                         <div><p style={{marginLeft:"35px",fontSize:"20px"}}>{singleData.user_id.firstName} {singleData.user_id.lastName}</p></div>
                         </div>
                         {message}
                         <div class="col-md-8">
                             <div className="card" style={{marginTop:"10px", marginRight:"10px", height:"230px"}}>
                                 <div class="card-body">
                             <h5>{singleData.subject}</h5>
                             <p>{singleData.reviewMessage}</p>
                             <p>Date: 11/09/2021</p>
                         </div>
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
export default ViewReview;