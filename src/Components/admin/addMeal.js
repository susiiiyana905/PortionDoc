import axios from "axios";
import { Component } from "react";
import { BrowserRouter as useNavigate, useNavigationType } from "react-router-dom";
class AddMealS extends Component {
    constructor(props) {
        super(props)
        this.state = { 
           formValues: [{ ingredient: ""}]
         };
        this.handleSubmit = this.handleSubmit.bind(this)
        }

        
        handleChange(i, e)
        {
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
            mealImage: "",
            mealName: "",
            mealPrice: "",
            mealDescription: "",
            time: "",
            mealCategory: "Veg",
            calory: "",
            difficulty: "Difficult",
            steps: []
        }
      

    // const [mealImage, setMealImage] = useState('');
    // const [mealName, setMealName] = useState('');
    // const [mealPrice, setMealPrice] = useState('');
    // const [mealDescription, setMealDescription] = useState('');
    // const [time, setTime] = useState('');
    // const [mealCategory, setMealCategory] = useState('Veg');
    // const [calory, setCalory] = useState('');
    // const [difficulty, setDifficulty] = useState('Difficult');
    // const [ID, setID] = useState('');
    // const [message, setMessage] = useState('');
    // const navigate = useNavigate();
    // const config = {
    //     headers :{
    //         Authorization : "Bearer " + localStorage.getItem('adminToken')
    //     }
    // }
    addMeal = (e) => {
        const config = {
            headers :{
                Authorization : "Bearer " + localStorage.getItem('adminToken')
            }
        }
        const mealData = new FormData();
        mealData.append("mealImage", this.state.mealImage);
        mealData.append("mealName", this.state.mealName);
        mealData.append("mealPrice", this.state.mealPrice);
        mealData.append("mealDescription", this.state.mealDescription);
        mealData.append("time", this.state.time);
        mealData.append("mealCategory", this.state.mealCategory);
        mealData.append("calory", this.state.calory);
        mealData.append("difficulty", this.state.difficulty);

        // const Navigate = useNavigationType();
        axios.post("http://localhost:4001/add/meals", mealData, config)
        .then(result=>{
            console.log(result.data.data);
            if(result.data.success){
                localStorage.setItem("_id", result.data.data._id);
                // setMessage(result.data.message);
                // window.location.replace('/addIngredient', {state: {_id: result.data.data._id}});
            }
            else{
                // setMessage("Something is wrong!!!");
            }
        })
        .catch(e);
    }
    render(){
    return(
        <>
        <div className="container">
        <h2 className="heading-h2-all">Add Meal:</h2>
        <form>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Image</label>
            <div class="col-sm-10">
            <input type="file" class="form-control"
            onChange={(e)=>this.setState({mealImage: e.target.files[0]})}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" 
            // value={mealName}
            onChange={(e)=>this.setState({mealName: e.target.value})}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Price</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" 
            //  value={mealPrice}
             onChange={(e)=>this.setState({mealPrice: e.target.value})}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Category</label>
            <div class="col-sm-10">
            <select className="custom-select custom-select-lg" style={{width:"100%"}}
                // value={mealCategory}
                onChange={e=>this.setState({mealCategory: e.target.value})}
                >
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Vegan">Vegan</option>
            </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Description</label>
            <div class="col-sm-10">
            <textarea type="text" class="form-control" 
            //  value={mealDescription}
             onChange={(e)=>this.setState({mealDescription: e.target.value})}
            ></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Time</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" 
            //  value={time}
             onChange={(e)=>this.setState({time: e.target.value})}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Calory</label>
            <div class="col-sm-10">
            <input type="text" class="form-control"
            //   value={calory}
              onChange={(e)=>this.setState({calory: e.target.value})}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Difficulty</label>
            <div class="col-sm-10">
            <select className="custom-select custom-select-lg" style={{width:"100%"}}
            // value={difficulty}
            onChange={e=>this.setState({difficulty: e.target.value})}
            >
            <option value="Difficult">Difficult</option>
            <option value="Medium">Medium</option>
            <option value="Easy">Easy</option>
         </select>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Steps</label>
            <form  onSubmit={this.handleSubmit}>
      <div><label>Steps</label></div>
                {this.state.formValues.map((element, index) => (
                <div> 
                  <div class="form-group row">
                  <div class="col-sm-11">
                    <textarea type="text" class="form-control" id="inputText" style={{float:"left"}}
                    onChange={e=>this.setState({steps: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)} style={{width:"40px"}} ><i class="fas fa-solid fa-trash"></i></button> 
                 </div>
                  </div>
                ))}
                <div className="button-section">
                    <button className="button add" type="button" onClick={() => this.addFormFields()} style = {{marginLeft:"450px", backgroundColor:"#4CBA19", height:"50px", width:"50px", color:"white"}}><i class="fas fa-solid fa-plus"></i></button>
                </div>
            </form>
        </div>
        <button type='button' className="btn btn-primary addMeal"
         onClick={()=> this.addMeal()}
        >
        Add Meal</button>
  </form>
  </div>

        </>

    )
}
}
export default AddMealS;