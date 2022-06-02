const UserRecipeDetail =()=>{
    return(
        <>
        <nav
        className="navbar navbar-expand-lg mainNav"
        style={{ height: "35px" }}
      >
        <i
          class="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white", marginTop: "20px" }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          portiondoc@gmail.com
        </p>
        <i
          class="fas fa-solid fa-phone"
          style={{
            height: "40px",
            marginLeft: "100px",
            color: "white",
            marginTop: "20px",
          }}
        ></i>
        <p className="i-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
          +977 983142567
        </p>
      </nav>
        <div className="container" style={{marginTop:"20px"}}>
            <div className="card">
            <img src="images/bibim.jpg" style={{height:"400px", marginLeft:"30px", marginRight:"30px", marginTop:"20px"}}></img>
             
                <div className="card-body" style={{marginLeft:"15px", marginRight:"20px"}}>

                <div>
               <p style={{fontSize:"22px", fontWeight:"bold"}}>Meal Name </p>
               <p>Pork and Veggie Bibmbap</p>
               </div>
               <hr />

               <div>
               <p style={{fontSize:"22px", fontWeight:"bold"}}>Meal Description</p>
               <p>This dish takes its name from the Korean word for mixing rice. Which is exactly what you’re meant to do after serving it:
                                  put your rice in a bowl, add the toppings, and mix it all together so that those flavors and textures combine in a glorious mishmash. 
                                  There are plenty of flavors and textures going on here, too, like sweet carrot, mighty mushrooms, and pork tossed with garlic, ginger, 
                                  and soy sauce.</p>
               </div>
               <hr />
                
                <div style={{fontSize:"22px", fontWeight:"bold"}}>Steps</div>
                <p>
                  1. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
                
                <p>
                  2. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
               
                <p>
                  3. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
           
                <p>
                  4. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
                   
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default UserRecipeDetail;