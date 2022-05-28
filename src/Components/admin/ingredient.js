import axios from "axios";
import{Component} from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

class AddIngredient extends Component{
    constructor(props) {
        super(props)
        
        this.state = { 
           formValues: [{ ingredient: ""}]
         };
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      handleChange(i, e) {
        let formValues = this.state.formValues;
        formValues[i][e.target.ingredient] = e.target.value;
        this.setState({ formValues });
      }
    
      addFormFields() {
        this.setState(({
          formValues: [...this.state.formValues, { ingredient: "" }]
        }))
      }
    
      removeFormFields(i) {
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({ formValues });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state.formValues));
      }
      state={
        name: "",
        quantity: "",
        unit: "",
        image: "",
      }

    //   useEffect(()=> {
    //     try {  
    //         if(localStorage.getItem("email")) {
		// 		console.log(location.state.email)
    //             setSResponse(location.state.email);
                
    //         }
    //     }
    //     catch (error) {
    //         console.log("Email not recognized.", error);
    //     }    
    // }, [])
      getId=()=>{
        useEffect (() =>{
          const location = useLocation();
          try {
            if(localStorage.getItem('_id')) {
              console.log(location.state._id);
            }
          }
          catch(e) {
            console.log("ID not recognized,", e);
          }
        },[])
        return;
      }

      addIngredient = () =>{
        const ingredientData = new FormData();
        ingredientData.append("name", this.state.name);
        
        ingredientData.append("image", this.state.image);
        
        if (this.state.unit === undefined){
          ingredientData.append("quantity", this.state.quantity+ " Unit");
        }
        else{
          ingredientData.append("quantity", this.state.quantity+ " " +this.state.unit);
        }
        
        
        const config = {
          headers :{
            Authorization : "Bearer " + localStorage.getItem('adminToken')
          }
        }
        
        axios.post("http://localhost:4001/add/ingredients", ingredientData, config)
        .then(result=>{
          console.log(result.data);
        })
        .catch();
      }
    render(){
        return(
            <>
            <div className="col-md-6 d-flex justify-content-center mx-auto" style={{"marginTop":"50px", marginBottom:"50px"}}>
            <div class="card w-100">
            <div class="card-body">
                <h2 style={{textAlign:"center"}}>Add Ingredient</h2><hr/>
            <div className="container">
            <form style={{marginTop:"20px"}}></form>
                        
            <form  onSubmit={this.handleSubmit}>
            
                    {this.state.formValues.map((element, index) => (
                    <div> 
                        <div class="form-group row">
                
                        <div class="col-sm-11">
                        <form>
                      <div class="row">
                        <div class="col">
                        <form>
                        <div class="form-group">
                          <input type="file" class="form-control-file" id="exampleFormControlFile1"
                          onChange={(e)=>this.setState({image: e.target.files[0]})}
                          ></input>
                        </div>
                      </form>
                       
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Enter Ingredient Name"
                          value={this.state.name}
                          onChange={(e)=>this.setState({name: e.target.value})}
                          ></input>
                        </div>
                      </div>
                    </form>
                      
                        </div>
                        <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{width:"40px", height:"40px", float:"right"}} ><i class="fas fa-solid fa-trash"></i></button>
                        <button type="button"  className="button add" onClick={() => this.addIngredient()} style={{width:"40px", height:"40px", float:"right"}} ><i class="fas fa-solid fa-plus"></i></button> 
                       
    
                          
                    </div>
                    
                    <div>
                    <div><label>Quantity</label></div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                      
                      <input type="text" class="form-control" id="inputCity"
                      onChange={(e)=>this.setState({quantity: e.target.value})}
                      ></input>
                    </div>
                    <div class="form-group col-md-4">
                      
                      <select id="inputState" class="form-control"
                      
                      onChange={e=>this.setState({unit: e.target.value})}
                      >
                        <option selected>Unit</option>
                        <option>Kg</option>
                        <option>Ounce</option>
                        <option>TeaSpoon</option>
                        <option>TableSpoon</option>
                        <option>Clove</option>
                        <option>Cup</option>
                      </select>
                    </div>
                    </div>
                        </div> 
                
                    <hr/>
                        </div>
                        
                    ))}
                    <div className="button-section">
                        <button className="button add" type="button" onClick={() => this.addFormFields()} style = {{marginLeft:"450px", backgroundColor:"#4CBA19", height:"50px", width:"50px", color:"white"}}><i class="fas fa-solid fa-plus"></i></button>
                        
                    </div>
                 
                </form>
            
                </div>
                </div>
                </div>
                </div>
             
            </>
        )
    }
}
export default AddIngredient;
{/* <form>
<label>Ingredient</label>
<div class="row">

  <div class="col">
  <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Ingredient Name"></input>
  </div>
</div>
<button type="submit" class="btn btn-primary mb-2">Add Ingredient</button>
</form> */}