import {Component} from "react";
import Footer from "../footer";
import Header from "../header";



class AddRecipes extends Component{

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
      <Header></Header>
      {/* <div style={{backgroundColor:"#FAFAFA"}}> */}
      
      <div className="col-md-6 d-flex justify-content-center mx-auto" style={{"marginTop":"50px", marginBottom:"50px"}}>
      <div class="card w-75">
      <div class="card-body">
        <h2 style={{textAlign:"center"}}>Add Recipes</h2>
      <div className="container">
      <form style={{marginTop:"20px"}}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Title</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Recipe Title"></input>
  </div>
  
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Short Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
      
      <form  onSubmit={this.handleSubmit}>
      <div><label>Steps</label></div>
                {this.state.formValues.map((element, index) => (
                <div> 
                  <div class="form-group row">
          
                  <div class="col-sm-11">
                    <textarea type="text" class="form-control" id="inputText" style={{float:"left"}}></textarea>
                  
                  </div>
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{width:"40px"}} ><i class="fas fa-solid fa-trash"></i></button> 
{/*                   
                  {
                  index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                  : null
                  } */}
                 </div>
                  </div>
                ))}
                <div className="button-section">
                    <button className="button add" type="button" onClick={() => this.addFormFields()} style = {{marginLeft:"450px", backgroundColor:"#4CBA19", height:"50px", width:"50px", color:"white"}}><i class="fas fa-solid fa-plus"></i></button>
                  
                </div>
            </form>

</form>
</div>
       
        {/* <a href="#" class="btn btn-primary">Button</a> */}
      </div>
    </div>
    </div>
      {/* </div> */}
      <Footer></Footer>
      </>
    )
  }
}
export default AddRecipes;