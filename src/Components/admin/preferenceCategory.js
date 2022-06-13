import axios from "axios";
import React, { useState, useEffect } from "react"
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

    // getProduct()
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/preference/category/all", config)
      .then((dietcategory) => {
        console.log(dietcategory.data.data);
        setDietCategoryData(dietcategory.data.data);
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
           
    <h5 style={{ fontSize:"30px"}} class="card-title">{singleData.dietCategoryName}</h5>
    
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