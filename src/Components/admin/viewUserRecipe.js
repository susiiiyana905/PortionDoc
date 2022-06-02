const ViewUserRecipe =()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg mainNav" style={{"height":"35px"}}>
                <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white", marginTop:"20px"}}></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>portiondoc@gmail.com</p>
                <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white", marginTop:"20px"}} ></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>+977 983142567</p>
                
                </nav>
        <br/>

        <div className="container">
            <h1 style={{textAlign:"center"}}> Reviews </h1>
          
                    <div class="card mb-3" style={{"width": "800px","height":"260px", marginLeft:"100px"}}>
                    <div class="row no-gutters">
                         <div class="col-md-4">
                         <img src= "images/delivery.png" className="img rounded-circle" height="200px" style={{marginLeft:"30px"}}/>
                         {/* <img src={"http://localhost:4001/user/"+singleData.user_id.profile_pic} className="img rounded-circle" height="200px" style={{marginLeft:"30px"}}/><br/> */}
                         {/* <div><p style={{marginLeft:"35px",fontSize:"20px"}}>{singleData.user_id.firstName} {singleData.user_id.lastName}</p></div> */}
                         <div><p style={{marginLeft:"35px",fontSize:"20px"}}>Sadikshya Shrestha</p></div>
                         </div>
        
                         <div class="col-md-8">
                             <div className="card" style={{marginTop:"10px", marginRight:"10px", height:"230px"}}>
                                 <div class="card-body">
                                     <div>
                             <h5>Pork Veggie Bbimbap</h5>
                             </div>
                             <div>
                             <p>This dish takes its name from the Korean word for mixing rice. Which is exactly what you’re meant to do after serving it:
                                  put your rice in a bowl, add the toppings, and mix it all together so that those flavors and textures combine in a glorious mishmash. 
                                  There are plenty of flavors and textures going on here, too, like sweet carrot, mighty mushrooms, and pork tossed with garlic, ginger, 
                                  and soy sauce.</p>

                             </div>
                          
                      
                         </div>
                         </div>
                         </div>
                     </div>
                     </div>

        </div>

        </>
    )
}
export default ViewUserRecipe;