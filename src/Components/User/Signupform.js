import { Component } from "react";

const SignupForm = () => {
    const handleFormSubmit =(event) =>{
        event.preventDefault();
    }
    return(
        <>
        <div className="container" style={{"margin-top": "100px"}}>
            <form>
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
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Remember Me
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary"style = {{"background-color":'orange',"width":'290px',"textAlign":"center"}} >Create an account</button>
</form>
</div>
        </>
    )
    
    
}
export default SignupForm;