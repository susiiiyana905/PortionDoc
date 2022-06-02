import Footer from "../footer";
import Header from "../header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const ViewRecipe =()=>{
  const {mid} = useParams();

  const [mealData, setMealData] = useState([]);

  const config = {
    headers:{
      Authorization: 'Bearer ' +localStorage.getItem('userToken')
    }
  }

  useEffect(() =>{

    axios.get("http://localhost:4001/meals/"+mid,config)
    .then(result =>{
      console.log(result.data)
      setMealData(result.data.data)
    })
    .catch(e=>{
      console.log(e)
    })
  },[]);

        return(
          <>
          <Header></Header>
          {/* <div> */}
          {mealData.map((singleData) =>{
            return(
              <div style={{"backgroundColor":"#fcfcfa"}}>
              {/* image */}
              
            <div className="container-fluid">
            <div className="card  top" >
            <img src = {"http://localhost:4001/meal/"+singleData.mealImage} alt ="" style={{height: "500px"}}></img> 
            </div>
            </div>
              
              {/* description */}
            <div class="card" style={{width:"1300px", marginLeft:"110px"}}>
            <div class="card-body">
                <h5 class="card-title" style={{fontSize:"55px"}}>{singleData.mealName}</h5><hr/>
                <div style={{width:"800px"}}>
                <p>{singleData.mealDescription}</p>
                    </div>
                <div>
                    <p>Time: {singleData.time}</p>
                    <p>Cooking Difficulty:{singleData.difficulty}</p>
                </div>
                
            </div>
            </div>

                {/* Ingredients */}
                {/* <div class="card" style={{width:"900px", marginLeft:"110px", marginTop:"10px"}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:"45px"}}>Ingredients</h5>

            <div class=" mb-3" style={{maxwidth: "540px"}}>
            <div class="row no-gutters">
              <div>
              <img src="images/rice.jpg" style={{height:"110px"}}></img>
              </div>
              <div class="col-md-4" style={{marginTop:"20px"}}>
                <div class="body">
                <p>3/4 cups</p>
              <p>Rice</p>
                 
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-3" style={{maxwidth: "540px"}}>
            <div class="row no-gutters">
              <div>
              <img src="images/carrot.jpg" style={{height:"110px"}}></img> 
              
              </div>
              <div class="col-md-4" style={{marginTop:"20px"}}>
                <div class="body">
                <p>3/4 cups</p>
              <p>Rice</p>
                 
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-3" style={{maxwidth: "540px"}}>
            <div class="row no-gutters">
              <div>
              <img src="images/ginger.jpg" style={{height:"110px"}}></img> 
              
              </div>
              <div class="col-md-4" style={{marginTop:"20px"}}>
                <div class="body">
                <p>3/4 cups</p>
              <p>Rice</p>
                 
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <h5 class="card-title" style={{fontSize:"25px"}}>Not included in delivery</h5>

          <div class=" mb-3" style={{maxwidth: "540px"}}>
            <div class="row no-gutters">
              <div>
              <img src="images/vinegar.jpg" style={{height:"110px"}}></img>
              
              </div>
              <div class="col-md-4" style={{marginTop:"20px"}}>
                <div class="body">
                <p>3/4 cups</p>
              <p>Rice</p>
                 
                </div>
              </div>
            </div>
          </div>

          <div class=" mb-3" style={{maxwidth: "540px"}}>
            <div class="row no-gutters">
              <div>
              <img src="images/sriracha.jpg" style={{height:"110px"}}></img> 
              
              </div>
              <div class="col-md-4" style={{marginTop:"20px"}}>
                <div class="body">
                <p>3/4 cups</p>
              <p>Rice</p>
                 
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>  */}

           {/* Steps */}
           <div className="card" style={{marginTop:"10px", width:"1300px", marginLeft:"110px", marginBottom:"10px"}}>
             <div className="card-body">
               <h5>Instruction</h5>
                <div>
                  <p>{singleData.steps}</p><hr/>
                    
                </div>
             </div>
           </div>



            </div>

            
              
            )})}
        
{/* </div> */}
<Footer></Footer>
</>
        
        )
    }

export default ViewRecipe;