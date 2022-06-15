import axios from "axios";
import { Component, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import React from "react"

const Review = ()=> {
    
    const [subject, setSubject] = useState("");
    const [reviewMessage, setReviewMessage] = useState("");
    const [message, setMessage]= useState("");
    const [sMessage, setSMessage] = useState("");

    const config ={
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken")
        }
    }

    const review = (e) => {
        e.preventDefault();

        if (subject.trim()==="" || reviewMessage.trim()==="") {
            setMessage("Empty field found. Fill up the form completely.");          
            return;             
        } 

        const reviewData = {
            subject, reviewMessage
        }

        axios.post("http://localhost:4001/add/review", reviewData, config)
        .then(result=>{
            console.log(result.data);
            if(result.data.success){
              
                setSMessage(result.data.message);
            }
        })
        .catch((e)=>{
            setMessage(e.response.data.message);
          });

    }

        return(
            <>
            <Header></Header>
            <div style={{backgroundColor:"#fcfcfc"}}>
            <div className="container">
            <div style={{marginTop:"10px"}}>
                <h1>
                <p style={{textAlign:"center"}}>Contact Us, We Are Here to Help</p>
                <p style={{textAlign:"center"}}> You</p>
                </h1>
               
                <p style={{textAlign:"center", fontSize:"14px"}}>We provide our customers with easy-to-follow recipes and fresh, high-quality ingredients.</p> 
                <p style={{textAlign:"center", fontSize:"14px"}}>We deliver fresh, never frozen meals directly to our customers doorstep.</p>
                <p style={{textAlign:"center", fontSize:"14px"}}>The fully-prepared-meals arrive ready to heat and eat in minutes.</p>
            </div>
         

            <div class="card-deck" style={{marginTop:"20px", marginBottom:"20px"}}>
            <div class="card">
                <img src="images/location.png" class="card-img-top" alt="..." style={{height:"120px", width:"120px", marginLeft:"100px", marginTop:"10px"}}></img>
                <div class="card-body">
                <h4><p class="card-text" style={{marginLeft:"40px"}}>Dilibazar, Kathmandu</p>
                <p style={{marginLeft:"100px"}}>Nepal</p>
                </h4>
                </div>
            </div>
            <div class="card">
                <img src="images/phone-call.png" class="card-img-top" alt="..." style={{height:"120px", width:"120px", marginLeft:"100px", marginTop:"10px"}}></img>
                <div class="card-body">
                <h4><p class="card-text" style={{marginLeft:"55px"}}>+977 983142567</p>
                <p class="card-text" style={{marginLeft:"55px"}}>+977 983142567</p>
                
                </h4>
                </div>
            </div>
            <div class="card">
                <img src="images/emaill.png" class="card-img-top" alt="..." style={{height:"120px", width:"120px", marginLeft:"100px", marginTop:"10px"}}></img>
                <div class="card-body">
                <h4><p class="card-text" style={{marginLeft:"15px"}}>portiondoc77@gmail.com</p>
                
                </h4>
                </div>
            </div>
            </div>

            <div style={{marginTop:"10px"}}>
            
                <h1>
                <p style={{textAlign:"center"}}>Write To Us</p>
                </h1>
                <div className="mb-2">
              <div className="suggestion-message text-center" style={{color: "red", fontWeight: "bold"}}>{message}</div>
              <div
                className="success-message text-center"
                style={{ color: "green", fontWeight: "bold" }}
              >
                {sMessage}
              </div>
            </div>
            <div className="card" style={{marginBottom:"20px"}}>
                <div className="card-body">
            <form style={{marginLeft:"30px", marginRight:"30px"}}>

            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Subject</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={(e)=>{setSubject(e.target.value)}}
                ></input>
                
            </div>
           
           
            <div className="form-group " >
                    <label>Your Message</label>
                <textarea style={{height:"200px", width:"100%"}} 
                onChange={(e)=>setReviewMessage(e.target.value)}
                ></textarea>
            </div>
        
            </form>
            

          
            <div className="col-md-6 d-flex justify-content-center mx-auto ">
                    <button className="btn start review-btn" onClick={review}> Send Message</button>
                </div>

           
            
            </form>
            </div>
            </div>
               
            </div>
            </div>
            </div>
            <Footer></Footer>
            </>
        )
    }

export default Review;