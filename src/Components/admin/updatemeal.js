import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateMeal =()=> {
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
        // const mealData = {
        //     mealImage, mealName, mealPrice, mealDescription, time, mealCategory, calory, difficulty
        // }
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
                    setMealName(result.data.data.mealName)
                    setMealPrice(result.data.data.mealPrice)
                    setMealCategory(result.data.data.mealCategory)
                    setMealDescription(result.data.data.mealDescription)
                    setTime(result.data.data.time)
                    setCalory(result.data.data.calory)
                    setDifficulty(result.data.data.difficulty)
                    setID(result.data.data._id)
                })
                // navigate('/updateMeal/'+mid);
                // axios.get("http://localhost:4001/meals/single"+mid,config)
                // .then(result1=>{
                //  setMealData(result1.data.data)
                // })
            }
            else{
                setMessage("Something is wrong!!!");
            }
        })
        .catch(e);
    }

    const updateMeal = (e) => {
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
        // mealData.append("calory", calory);
        // mealData.append("difficulty", difficulty);
        
        axios.put("http://localhost:4001/update/meals/"+mid, mealData, config)
        .then(result=>{
            console.log(result.data)
            if(result.data.success){
                setMessage(result.data.message);
                // navigate('/viewMeal');
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

            <div>
       <div className="container">
           <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
               
                    <h2 className="heading-h2-all">Update Meal</h2>
                
                   <form>
                       <div className="form-group row">
                            <label htmlFor="mealImage" className="col-sm-3 col-form-label">Meal Image</label>
                            <img src={"http://localhost:4001/meal/"+mealImage} data-bs-toggle="modal" data-bs-target="#exampleModal" height="200px"/>
                            {/* <span>{mealImage}</span> */}
                            {/* <div className="col-sm-9">
                            <input type="file" className="form-control"
                            onChange={(e)=>setMealImage(e.target.files[0])}
                            />
                            </div> */}

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
                                {/* <span>{mealImage}</span> */}
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
                        <div className="form-group row">
                            <label htmlFor="mealName" className="col-sm-3 col-form-label">Meal Name</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"
                             value={mealName}
                             onChange={(e)=>setMealName(e.target.value)}
                             />    
                             </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="mealPrice" className="col-sm-3 col-form-label">Meal Price</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"
                            value={mealPrice}
                            onChange={(e)=>setMealPrice(e.target.value)}
                             /> 
                             </div>   
                        </div>

                        <div className="form-group row">
                            <label htmlFor="mealCategory" className="col-sm-3 col-form-label">Meal Category</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"
                             value={mealCategory}
                             onChange={(e)=>setMealCategory(e.target.value)}
                             /> 
                             </div>   
                        </div>

                        <div className="form-group row">
                            <label htmlFor="mealDescription" className="col-sm-3 col-form-label">Meal Description</label>
                            <div className="col-sm-9">
                            <textarea type="text" className="form-control"
                             value={mealDescription}
                             onChange={(e)=>setMealDescription(e.target.value)}
                             />  
                             </div>  
                        </div>

                        <div className="form-group row">
                            <label htmlFor="time" className="col-sm-3 col-form-label">Time</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"
                             value={time}
                             onChange={(e)=>setTime(e.target.value)}
                             />    
                             </div>
                        </div>
                        {/* <div className="form-group row">
                            <label htmlFor="calory" className="col-sm-3 col-form-label">Calory</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"
                             value={calory}
                             onChange={(e)=>setCalory(e.target.value)}
                             />    
                             </div>
                        </div> */}
                        {/* <div className="form-group row">
                            <label htmlFor="difficulty" className="col-sm-3 col-form-label">Difficulty</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control"
                             value={difficulty}
                             onChange={(e)=>setDifficulty(e.target.value)}
                             />    
                             </div>
                        </div> */}
                        <div className="form-group row">
                            <div className="col-sm-3"></div>
                        <div className="col-sm-9">
                         <button type="button" className="btn btn-primary" style={{backgroundColor:"#FF7800"}} onClick={updateMeal}>
                             Update
                        </button>
                        </div>
                        </div>
                                
                    </form>
           </div>
           </div>
           </div>
           </div>
        )
    }



export default UpdateMeal;