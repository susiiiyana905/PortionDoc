import { Component } from "react";
import Footer from "../footer";
import Header from "../header";

class Review extends Component{
    render(){
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
                <img src="images/location.png" class="card-img-top" alt="..." style={{height:"200px", width:"200px", marginLeft:"80px", marginTop:"10px"}}></img>
                <div class="card-body">
                <h4><p class="card-text" style={{marginLeft:"40px"}}>Dilibazar, Kathmandu</p>
                <p style={{marginLeft:"100px"}}>Nepal</p>
                </h4>
                </div>
            </div>
            <div class="card">
                <img src="images/phone-call.png" class="card-img-top" alt="..." style={{height:"200px", width:"200px", marginLeft:"80px", marginTop:"10px"}}></img>
                <div class="card-body">
                <h4><p class="card-text" style={{marginLeft:"55px"}}>+977 983142567</p>
                <p class="card-text" style={{marginLeft:"55px"}}>+977 983142567</p>
                
                </h4>
                </div>
            </div>
            <div class="card">
                <img src="images/emaill.png" class="card-img-top" alt="..." style={{height:"200px", width:"200px", marginLeft:"80px", marginTop:"10px"}}></img>
                <div class="card-body">
                <h4><p class="card-text" style={{marginLeft:"15px"}}>portiondoc77@gmail.com</p>
                
                </h4>
                </div>
            </div>
            </div>

            <div style={{marginTop:"10px"}}>
                <h1>
                <p style={{textAlign:"center"}}>Write Us</p>
                </h1>
            <div className="card" style={{marginBottom:"20px"}}>
                <div className="card-body">
            <form style={{marginLeft:"30px", marginRight:"30px"}}>

            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Subject</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                
            </div>
           
           
            <div className="form-group col-md-4" >
                    <label>Your Message</label>
                <textarea style={{height:"200px", width:"1010px"}}></textarea>
            </div>
        
            </form>
            

          
            <div className="col-md-6 d-flex justify-content-center mx-auto ">
                    <button className="btn start review-btn"> Send Message</button>
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
}
export default Review;