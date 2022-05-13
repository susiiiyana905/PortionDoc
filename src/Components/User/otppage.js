import { Component } from "react";

class OtpPage extends Component{
    render(){
        return(
            <div>
				   <nav class="navbar navbar-expand-lg ">
               
               <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
               
               <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
               </nav>
                {/* <div class="col-md-6">                     */}
                <div className="col-md-6 d-flex justify-content-center mx-auto " style={{marginTop:"80px"}}>
	<div class="panel panel-info" >
		<div class="panel-heading">
			<div class="panel-title" style={{fontSize:"30px",fontWeight:"bold",fontFamily:"sans-serif"}}>Enter OTP</div>                        
		</div> 
		<div style={{"padding-top":"30px"}} class="panel-body" >
				{/* <div id="login-alert" class="alert alert-danger col-sm-12"></div>                             */}
			<form>  					
				<div style={{"margin-bottom": "25px" }}>
					<label class="text-success">Check your email for OTP</label>
					<input type="text" class="form-control" id="otp" name="otp" placeholder="One Time Password" style={{width:"600px"}}/>                       
				</div>                          
				<div style={{"margin-top":"10px"}} class="form-group">                               
					<div class="col-sm-12 controls">
					  <input type="submit" name="authenticate" value="Submit" class="btn-success" style={{borderRadius:"10px"}}/>						  
					</div>
				</div>                                
			</form>   
		</div>                     
	</div>  
</div>
            </div>
        )
    }
}
export default OtpPage;
