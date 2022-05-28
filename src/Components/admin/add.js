import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
const AddMeal =()=> {



    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //        formValues: [{ ingredient: ""}]
    //      };
    //     this.handleSubmit = this.handleSubmit.bind(this)
    //   }

      
    //   handleChange(i, e)
    //    {
    //     let formValues = this.state.formValues;
    //     formValues[i][e.target.ingredient] = e.target.value;
    //     this.setState({ formValues });
    //   }
    
    //   addFormFields() {
    //     this.setState(({
    //       formValues: [...this.state.formValues, { ingredient: "" }]
    //     }))
    //   }
    
    //   removeFormFields(i) {
    //     let formValues = this.state.formValues;
    //     formValues.splice(i, 1);
    //     this.setState({ formValues });
    //   }
    
    //   handleSubmit(event) {
    //     event.preventDefault();
    //     alert(JSON.stringify(this.state.formValues));
    //   }
      

    const [mealImage, setMealImage] = useState('');
    const [mealName, setMealName] = useState('');
    const [mealPrice, setMealPrice] = useState('');
    const [mealDescription, setMealDescription] = useState('');
    const [time, setTime] = useState('');
    const [mealCategory, setMealCategory] = useState('Veg');
    const [calory, setCalory] = useState('');
    const [difficulty, setDifficulty] = useState('Difficult');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const config = {
        headers :{
            Authorization : "Bearer " + localStorage.getItem('adminToken')
        }
    }
    const addMeal = (e) => {
        e.preventDefault();
        // const mealData = {
        //     mealImage, mealName, mealPrice, mealDescription, time, mealCategory, calory, difficulty
        // }
        const mealData = new FormData();
        mealData.append("mealImage", mealImage);
        mealData.append("mealName", mealName);
        mealData.append("mealPrice", mealPrice);
        mealData.append("mealDescription", mealDescription);
        mealData.append("time", time);
        mealData.append("mealCategory", mealCategory);
        mealData.append("calory", calory);
        mealData.append("difficulty", difficulty);
        axios.post("http://localhost:4001/add/meals", mealData, config)
        .then(result=>{
            console.log(result.data);
            if(result.data.success){
                setMessage(result.data.message);
                navigate('/viewMeal');
            }
            else{
                setMessage("Something is wrong!!!");
            }
        })
        .catch(e);
    }
    return(
        <>
        <div className="container">
        <h2 className="heading-h2-all">Add Meal:</h2>
        <form>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Image</label>
            <div class="col-sm-10">
            <input type="file" class="form-control"
            onChange={(e)=>setMealImage(e.target.files[0])}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" 
            value={mealName}
            onChange={(e)=>setMealName(e.target.value)}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Price</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" 
             value={mealPrice}
             onChange={(e)=>setMealPrice(e.target.value)}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Meal Category</label>
            <div class="col-sm-10">
            <select className="custom-select custom-select-lg" style={{width:"100%"}}
                value={mealCategory}
                onChange={e=>setMealCategory(e.target.value)}
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
             value={mealDescription}
             onChange={(e)=>setMealDescription(e.target.value)}
            ></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Time</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" 
             value={time}
             onChange={(e)=>setTime(e.target.value)}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Calory</label>
            <div class="col-sm-10">
            <input type="text" class="form-control"
              value={calory}
              onChange={(e)=>setCalory(e.target.value)}
            ></input>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Difficulty</label>
            <div class="col-sm-10">
            <select className="custom-select custom-select-lg" style={{width:"100%"}}
            value={difficulty}
            onChange={e=>setDifficulty(e.target.value)}
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
                    <textarea type="text" class="form-control" id="inputText" style={{float:"left"}}></textarea>
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
        <p><button type='submit' className="btn btn-primary addMeal"
         onClick={addMeal}
        >
        Add Meal</button></p>
  </form>
  </div>

        </>

    )
}
export default AddMeal;