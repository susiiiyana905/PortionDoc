import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const UpdateMeals =()=>{
    const [mealImage, setMealImage] = useState('');
    const [mealName, setMealName] = useState('');
    const [mealPrice, setMealPrice] = useState('');
    const [mealDescription, setMealDescription] = useState('');
    const [time, setTime] = useState('');
    const [mealCategory, setMealCategory] = useState('');
    const [calory, setCalory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [_id, setID] = useState('');
    const [mealData, setMealData]= useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const config = {
        headers :{
            Authorization : "Bearer " + localStorage.getItem('adminToken')
        }
    }
    const {mid}= useParams();
    useEffect(()=>{
        axios.get("http://localhost:4001/meals/single/"+mid, config)
        .then(result=>{
            console.log(result.data.data.mealCategory)
            setMealImage(result.data.data.mealImage)
            setMealName(result.data.data.mealName)
            setMealPrice(result.data.data.mealPrice)
            setMealCategory(result.data.data.mealCategory)
            setMealDescription(result.data.data.mealDescription)
            setTime(result.data.data.time)
            setCalory(result.data.data.calory)
            setDifficulty(result.data.data.difficulty)
            setID(result.data.data._id)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);
    const updateMealImage = (e) => {
        e.preventDefault();
      
        const mealData = new FormData();
        mealData.append("mealImage", mealImage);

        // mealData.append("mealName", mealName);
        // mealData.append("mealPrice", mealPrice);
        // mealData.append("mealDescription", mealDescription);
        // mealData.append("time", time);
        // mealData.append("mealCategory", mealCategory);
        // mealData.append("calory", calory);
        // mealData.append("difficulty", difficulty);

        axios.put("http://localhost:4001/update/meals/"+mid, mealData, config)
        .then(result=>{
            // console.log(result.data)
            if(result.data.success){
                setMessage(result.data.message);
                axios.get("http://localhost:4001/meals/single/"+mid, config)
                .then(result=>{
                    console.log(result.data.data.mealCategory)
                    setMealImage(result.data.data.mealImage)
                })
               
            }
            else{
                setMessage("Something is wrong!!!");
            }
        })
        .catch(e);
    }
    const updateMeal = (e) => {
        e.preventDefault();
     
        const mealData = new FormData();
        mealData.append("mealImage", mealImage);
        mealData.append("mealName", mealName);
        mealData.append("mealPrice", mealPrice);
        mealData.append("mealDescription", mealDescription);
        mealData.append("time", time);
        mealData.append("mealCategory", mealCategory);
        mealData.append("calory", calory);
        mealData.append("difficulty", difficulty);

        axios.put("http://localhost:4001/update/meals/"+mid, mealData, config)
        .then(result=>{
            console.log(result.data)
            if(result.data.success){
                setMessage(result.data.message);
                navigate('/viewMeal');
                axios.get(`http://localhost:4001/meals/all`,config)
                .then(result1=>{
                 setMealData(result1.data.data)
             })
            }
            else{
                setMessage("Something is wrong!!!");
            }
        })
        .catch(e);
    }
    return(
        <>
         <nav className="navbar navbar-expand-lg mainNav" style={{"height":"35px"}}>
                <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white", marginTop:"20px"}}></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>portiondoc@gmail.com</p>
                <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white", marginTop:"20px"}} ></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>+977 983142567</p>
                
                </nav>
         <h2 className="heading-h2-all" style={{"textAlign":"center"}}>Update Meals</h2>
        <div className ="container">
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Meals Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" 
                 value={mealName}
                 onChange={(e)=>setMealName(e.target.value)}
                ></input>
            </div>
            </form>
            <div className="form-group">
                            <label htmlFor="mealImage" className="col-sm-3 col-form-label">Meal Image</label>
                            <img src={"http://localhost:4001/meal/"+mealImage} data-bs-toggle="modal" data-bs-target="#exampleModal" height="200px"/>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                              
                                <input type="file" className="form-control"
                            onChange={(e)=>setMealImage(e.target.files[0])}
                            />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateMealImage}>Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            {/* <div class="form-group">
                <label for="exampleFormControlFile1">Meals Images</label>
                <img src={"http://localhost:4001/meal/"+mealImage} data-bs-toggle="modal" data-bs-target="#exampleModal" height="200px"/>
            </div> */}
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Meals price</label>
                <input type="text" class="form-control" id="formGroupExampleInput" 
                 value={mealPrice}
                 onChange={(e)=>setMealPrice(e.target.value)}
                ></input>
            </div>
            </form>
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Meals Category</label>
                <input type="text" class="form-control" id="formGroupExampleInput"
                 value={mealCategory}
                 onChange={(e)=>setMealCategory(e.target.value)}
                ></input>
            </div>
            </form>
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Meals Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput"
                 value={mealDescription}
                 onChange={(e)=>setMealDescription(e.target.value)}
                ></input>
            </div>
            </form>
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Time</label>
                <input type="text" class="form-control" id="formGroupExampleInput"
                 value={time}
                 onChange={(e)=>setTime(e.target.value)}
                ></input>
            </div>
            </form>
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Calory</label>
                <input type="text" class="form-control" id="formGroupExampleInput"
                 value={calory}
                 onChange={(e)=>setCalory(e.target.value)}
                ></input>
            </div>
            </form>
            <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Difficulty</label>
                <input type="text" class="form-control" id="formGroupExampleInput" 
                  value={difficulty}
                  onChange={(e)=>setDifficulty(e.target.value)}
                ></input>
            </div>
            </form>

            <div>
                <label>Ingredient</label>
                <table className="table">
                    <thead>
                    <tr>
                    <th scope="col" colSpan="2">Ingredient Image</th>
                    <th scope="col" colSpan="2">Ingredient Name</th>
                    <th scope="col" colSpan="2">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src="images/1.png" height="100px"/></td>
                            <td colSpan="2">Vegetables</td>
                                <td colSpan="2">1kg</td>
                                    <td> 
                                <button className="btn btn-primary mb-3">Delete Ingredient</button>
                                    </td>
                                    </tr>   
                                </tbody>
                            </table>
                                    </div>

            <div>
            
                <table className="table">
                    <thead>
                    <tr>
                    <th scope="col" colSpan="2">Steps</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td colSpan="2">Step 1: Vegetables</td>
                            
                                    {/* <td> 
                                <button className="btn btn-primary mb-3">Delete Ingredient</button>
                                    </td> */}
                                    </tr>   
                                    <tr>
                            <td colSpan="2">Step 2: Vegetables</td>
                            
                                    {/* <td> 
                                <button className="btn btn-primary mb-3">Delete</button>
                                    </td> */}
                                    </tr> 
                                </tbody>
                            </table>
                                    </div>
                                    <div className="form-group row">
                            <div className="col-sm-3"></div>
                        <div className="col-sm-9">
                         <button type="button" className="btn btn-primary" style={{backgroundColor:"#FF7800"}} 
                         id="updateMealButton"
                         onClick={updateMeal}>
                             Update
                        </button>
                        </div>
                        </div>
                    </div>
        </>
    )
}
export default UpdateMeals;