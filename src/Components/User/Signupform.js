import { Component } from "react";

const SignupForm = () => {
    const handleFormSubmit =(event) =>{
        event.preventDefault();
    }
    return(
        <>
               <nav class="navbar navbar-expand-lg ">
               
               <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
               
               <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
               </nav>
        <div className="container" style={{"margin-top": "100px"}}>
        {/* <div className="col-md-5 pr-lg-5 mb-5 mb-md-0"> */}
            <h1 style={{ color: "black", textAlign:"center", fontSize:"60px", fontFamily:"sans-serif"  }}>Create an Account</h1>
          {/* </div> */}
            <form>
<<<<<<< HEAD
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputFirstname4">First Name</label>
            <input type="First Name" class="form-control" id="inputFirstname4"/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastname4">Last Name</label>
            <input type="Last Name" class="form-control" id="inputLastname4"/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="text" class="form-control" id="inputEmail"/>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Password</label>
          <input type="text" class="form-control" id="inputPassword2"/>
        </div>
        <div class="form-group">
          <label for="inputAddress2"> Confirm Password</label>
          <input type="text" class="form-control" id="inputConfirmPassword2"/>
        </div>
      

        <button type="submit" className="btn btn-primary sign-btn" style = {{"background-color":'#FF7800' }} >Sign Up</button>

      </form>
      </div>
=======
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputFirstname4">First Name</label>
      <input type="First Name" class="form-control" id="inputFirstname4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputLastname4">Last Name</label>
      <input type="Last Name" class="form-control" id="inputLastname4"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail">Email</label>
    <input type="text" class="form-control" id="inputEmail"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Password</label>
    <input type="text" class="form-control" id="inputPassword2"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2"> Confirm Password</label>
    <input type="text" class="form-control" id="inputConfirmPassword2"/>
  </div>
 

  <button type="submit" className="btn btn-primary sign-btn" style = {{"background-color":'#FF7800' }} >Sign Up</button>

</form>
</div>
>>>>>>> e7a8ed665ac5714df92b865c239ebf6c1cdd830f
        </>
    )
    
    
}
export default SignupForm;