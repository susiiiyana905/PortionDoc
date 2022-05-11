import { Component } from "react";
import Footer from "./footer";
import Header from "./header";


class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Header></Header>
                {/* ------------------top content-------------------------------------------------------------------------- */}
                <div className="container-fluid">
                <div className="card  top" >
                <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content mx-auto product">
                    <div className="card-body">
                        <h4 className="card-title my-1 t-2">
                            <p className="t1">
                                Discover Food
                                <p className="t2">Our Best Healthy & </p>
                                <p className="t3">Tasty</p>
                                <p className="t4">Get the best recipes at the best price.</p>
                            </p>
                            </h4>
                            {/* <p className="card-text txt-2">Make meals uniquely yours. <br/>
                            Upgrade, double-up, add or swap protein on select meals.<br/>
                            You're in control of your destiny.
                            </p> */}
                             
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                    <img src = {"images/t1.png"} alt ="" style={{height: "400px"}}></img> 
                        <hr/>
                       
                    </div>
                   
                    
                </div>
    
              
                </div>
                </div>
                </div>
                <br/>
                
                {/* <div className="col-md-6 d-flex justify-content mx-auto ">
                <img src="images/h1.jpg"  alt="..." style={{height:"400px", width:"1000px"}}></img>
               
                </div>
                <br/> */}

              
                {/* --------------------------midcontent--------------------------------------------- */}
              <div className="container-fluid">
              <div className="card wcard">
              <div className="col-md-6 d-flex justify-content-center mx-auto ">
              <button className="bt disable  wbtn">
                                       Why Potion Doc?
                                    </button>   
                    </div>
             
                <div className="container my-4 py-2">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content mx-auto product">
                        <img src = {"images/cook.png"} alt ="" style={{height: "400px"}}></img> 
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        {/* <h1 className="card-header"><p>Why Portion Doc?</p></h1> */}
                        <hr/>
                        <h4 className="my-4"><p class="card-text">No commitment whatsoever<br/>
                        Skipping weeks or cancelling is super easy. <br/> <br/> <br/>
                        <p> Fresh and affordable<br/>
                        Chef-created deliciousness from <br/>
                        Rs.455 per meal.</p>
                       
                        </p></h4>
                       

                        <button className="btn">
                                        Get Started
                                    </button>   

                    </div>
                    
                </div>-
    
              
                </div>
                </div>
                </div>
                <br/>


        


                {/*-----------------------------content-3----------------------------------------*/}
                <div className="container-fluid">
                <div className="card  card-1" >
                <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content mx-auto product">
                        <img src = {"images/c1.png"} alt ="" style={{height: "400px"}}></img> 
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <hr/>
                        <div className="card-body">
                        <h4 className="card-title my-1 t-1"> Change It Up </h4>
                            <p class="card-text txt-1">Add meals. Edit Servings. <br/>
                            Plans and prefrences change.
                            </p>
                            <button className="btn btn1">
                                        View Plans
                                    </button>   
                        </div>
                    </div>
                    
                    
                </div>
    
              
                </div>

                <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content mx-auto product">
                    <div className="card-body">
                        <h4 className="card-title my-1 t-2"> Make It Yours </h4>
                            <p className="card-text txt-2">Make meals uniquely yours. <br/>
                            Upgrade, double-up, add or swap protein on select meals.<br/>
                            You're in control of your destiny.
                            </p>
                            <button className="btn btn-2">
                                        View Plans
                                    </button>   
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                    <img src = {"images/c2.png"} alt ="" style={{height: "400px"}}></img> 
                        <hr/>
                       
                    </div>
                   
                    
                </div>
    
              
                </div>
                </div>
                </div>
                <br/>

                {/*--------------------------facility--------------------------------------------------------*/}
                <div className="col-md-6 d-flex justify-content mx-auto ">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4">
                        <div className="card">
                        <img src="images/organic.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Organic Farm </h5>
                            <p className="card-text">Product Fresh Veggies</p>
                        </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                        <img src="images/delivery.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">24 Hours Delivert</h5>
                            <p className="card-text">Fast Delivery Order</p>
                        </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                        <img src="images/promotion.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Promotion Week</h5>
                            <p className="card-text">Promotion and Discount</p>
                        </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                        <img src="images/quality.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Trusted & Quality</h5>
                            <p className="card-text">Best Quality Restaurant</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                <br/>
                {/*------------------------------------------------Meals-----------------------------------------------------------------*/}
                <div className="container-fluid">
                <div className="card  card-1" >
                <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto ">
                      <p className="m-1">Over 25+ fresh recipes every week
                      <p className="m-2">Easy meals designed by professional chefs and nutrionists</p>
                      </p>
                    </div>

                    <div className="card-deck">
                    <div className="card">
                        <img src="images/m1.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">Healthy Oatmeal</h5>
                        <p className="card-text">$15.30</p>
                      
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/m2.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">Chicken Galatine</h5>
                        <p className="card-text">$16.00</p>
                       
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/m3.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">Tomato Cucumber</h5>
                        <p className="card-text">$12.30</p>
                        
                        </div>
                    </div>
                    </div>    


                    <div className="col-md-6 d-flex justify-content-center mx-auto ">
                      <button className="btn meal-btn"> View Meals</button>
                    </div>
                </div>
                </div>
                </div>
                </div>
                <br/>

         {/* ------------------------------------Reviews-------------------------------------------------- */}
            <div className="container-fluid">
                
                    <div className="container my-3 py-3">
                    <div className="row">
                     <div className="col-md-6 d-flex justify-content-center mx-auto ">
                        <p className="r">What Our Customer Has to Say</p>
                        </div>

                         <br/>
            
                        <div className="card-deck">
                         <div className="card r-1">
                            <div className="card-body">
                            <h5 className="card-title">Italian Sausage and Roasted Tomato Cream</h5>
                            <p className="card-text">This was a delicious and these meals make cooking healthy options for the family, so easy.<br/>
                            A+ to home chef every time!<br/>
                            -Madison J
                            </p>
                        
                            </div>
                            </div>                     
                         <div className="card r-1">
                            <div className="card-body">
                            <h5 className="card-title">Italian Sausage and Roasted Tomato Cream</h5>
                            <p className="card-text">This was a delicious and these meals make cooking healthy options for the family, so easy.<br/>
                            A+ to home chef every time!<br/>
                            -Madison J
                            </p>
                             </div>
                            </div>
                            <div className="card r-1">
                                <div className="card-body">
                                <h5 className="card-title">Italian Sausage and Roasted Tomato Cream</h5>
                                <p className="card-text">This was a delicious and these meals make cooking healthy options for the family, so easy.<br/>
                                A+ to home chef every time!<br/>
                                -Madison J
                                </p>
                            
                                </div>
                            </div>  
                            </div>
                           
                        </div>
                        </div>
        
                        </div>
                        <br/>
            {/* ----------------------EMAIL---------------------------- */}
            <div className="container-fluid">
                
                <div className="container my-3 py-3">
                <div className="row">
                 <div className="col-md-6 d-flex justify-content-center mx-auto ">
                    <p className="e-1">Cook It. Love It. Tag It #PortionDocsPics
                    <p className="e-2">Follow & Subscribe <br/>
                    Get Updates</p>
                    </p>
        
                    </div>   
                    </div>
                    <form>
                    <div class="form-row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto ">
                        <input type="text" class="form-control" placeholder="Email Address"></input>
                        <button className="btn btn-email"> Go </button>
                        </div>
                    </div>
                    </form>
                    </div>

                  

                    
    
                    </div>

                <Footer></Footer>
                </div>
        )
    }
}

export default Home;