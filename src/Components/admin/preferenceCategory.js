import axios from "axios";
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";

const ShowPreferenceCategory =()=>{
  const [dietCategoryData,setDietCategoryData] = useState([]);
  const [message, setMessage] = useState("");
  const [sMessage, setSMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  console.log(config);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/preference/category/single`, config)
      .then((dietCategory) => {
        setDietCategoryData(dietCategory.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

    return(
        <>
        <AdminDashboard>
        <br/>
        <div className="container">
            <h1 style={{textAlign:"center"}}> Preference Category</h1>
            {dietCategoryData.map((singleData)=>{
            return(   
            <div class="card w-75 container">
        <div class="card-body">
      <Link to={"/viewDietMeal/"+singleData.dietCategoryName.replace(" ","+")}>   
    <h5 style={{ fontSize:"30px", textDecoration:"none"}} class="card-title">{singleData.dietCategoryName}</h5>
    </Link>
  </div>
  
</div>
  );
})}   
<br/> 
        </div>
        </AdminDashboard>
        </>

    )
}
export default ShowPreferenceCategory;