import{Component} from "react";

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
    render(){
        return(
            <>
            <div className="col-md-6 d-flex justify-content-center mx-auto" style={{"marginTop":"50px", marginBottom:"50px"}}>
            <div class="card w-75">
            <div class="card-body">
                <h2 style={{textAlign:"center"}}>Add Ingredient</h2>
            <div className="container">
            <form style={{marginTop:"20px"}}></form>
                        
            <form  onSubmit={this.handleSubmit}>
            
                    {this.state.formValues.map((element, index) => (
                    <div> 
                        <div class="form-group row">
                
                        <div class="col-sm-11">
                        <form>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Image of Ingredient</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                        </div>
                        </form>
                        <label>Name of Ingredient</label>
                        <input type="text" class="form-control" id="inputText" style={{float:"left"}} placeholder="Enter Ingredient Name"></input> 
                        </div>
                        <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{width:"40px", height:"40px"}} ><i class="fas fa-solid fa-trash"></i></button> 
                        
                        {/* {
                        index ? 
                        <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                        : null
                        } */}
    
                          
                    </div>
                    
                    <div>
                    <div><label>Quantity</label></div>
                    <div className="quantity" data-th="Quantity">
                      
                      <button className = "btn btn-warning">
                        {/* <button
                          className="btn btn-warning"
                          onClick={this.updateQuantity.bind(
                            this,
                            cart._id,
                            cart.quantity - 1
                          )}
                        > */}
                          <h5>-</h5>
                        </button>
                        <span style={{ margin: "5px" }}>
                          2
                          {/* {cart.quantity} */}
                        </span>
                        <button className = "btn btn-warning">
                        {/* <button
                          className="btn btn-warning"
                          onClick={this.updateQuantity.bind(
                            this,
                            cart._id,
                            cart.quantity + 1
                          )}
                        > */}
                          <h5>+</h5>
                        </button>
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