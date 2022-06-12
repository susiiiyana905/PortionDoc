import axios from "axios";
import React from "react"
import AdminDashboard from "../adminDashbaord";

const PreferenceCategory =()=>{
    return(
        <>
        <AdminDashboard>
        <br/>
        <div className="container">
            <h1 style={{textAlign:"center"}}> Preference Category</h1>
            <div class="card w-75 container">
        <div class="card-body">
    <h5 style={{ fontSize:"30px"}} class="card-title">Weight Loss</h5>
    
  </div>
</div>
<br/>
<div class="card w-75 container">
        <div class="card-body">
    <h5 class="card-title">Weight Loss</h5>
    
  </div>
</div>
                    
        </div>
        </AdminDashboard>
        </>

    )
}
export default PreferenceCategory;