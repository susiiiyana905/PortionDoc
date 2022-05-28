import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

const AddMeal =()=> {
    const [mealImage, setMealImage] = useState('');
    const [mealName, setMealName] = useState('');
    const [mealPrice, setMealPrice] = useState('');
    const [mealDescription, setMealDescription] = useState('');
    const [time, setTime] = useState('');
    const [steps, setSteps] = useState([]);
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
        mealData.append("steps", steps);
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
        <div>

        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="heading-h2-all">Add Meal:</h2>

                    <form id="addMealForm">
                        <div className="form-group">
                            <label>Meal Name</label>
                            <input type="text" className="form-control" id="mealName"
                            value={mealName}
                            onChange={(e)=>setMealName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Meal Price</label>
                            <input type="text" className="form-control" id="mealPrice"
                             value={mealPrice}
                             onChange={(e)=>setMealPrice(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                        
                        <label for="inputCategory" className="col-form-label">Meal Category</label>
                            
                                <select className="custom-select custom-select-lg" style={{width:"100%"}} id="mealCategory"
                                value={mealCategory}
                                onChange={e=>setMealCategory(e.target.value)}
                                >
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Vegan">Vegan</option>
                                </select>
                            
                            </div>

                            <div className="form-group">
                            <label>Meal Description</label>
                            <textarea type="text" className="form-control" id="mealDescription"
                             value={mealDescription}
                             onChange={(e)=>setMealDescription(e.target.value)}
                            
                            />
                            </div>

                            <div className="form-group">
                            <label>Time</label>
                            <input type="text" className="form-control" id="time"
                             value={time}
                             onChange={(e)=>setTime(e.target.value)}
                            
                            />
                            </div>

                            <div className="form-group">
                            <label>Calory</label>
                            <input type="text" className="form-control" id="calory"
                             value={calory}
                             onChange={(e)=>setCalory(e.target.value)}
                            
                            />
                            </div>

                            <div className="form-group">
                            <label>Steps</label>
                            <input type="text" className="form-control" id="steps"
                             value={steps}
                             onChange={(e)=>setSteps(e.target.value)}
                            
                            />
                            </div>

                            <div className="form-group">
                            <label for="inputDifficulty" className="col-form-label">Difficulty</label>
                            
                            <select className="custom-select custom-select-lg" style={{width:"100%"}} id="difficulty"
                                value={difficulty}
                                onChange={e=>setDifficulty(e.target.value)}
                                >
                                    <option value="Difficult">Difficult</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Easy">Easy</option>
                                </select>
                            
                            </div>

                        <div className="form-group">
                            <label>Meal Image</label>
                            <input type="file" className="form-control"
                            onChange={(e)=>setMealImage(e.target.files[0])}
                            />

                        </div>

                        <p><button type='submit' className="btn btn-primary" id="addMealButton"
                        onClick={addMeal}
                        >Add</button></p>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        </div>
    )
    
}
export default AddMeal;
  