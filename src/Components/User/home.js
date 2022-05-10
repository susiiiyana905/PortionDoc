import { Component } from "react";
import Footer from "./footer";
import Header from "./header";


class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Header></Header>
                {/* <div className="conatiner-fluid d-flex justify-content mx-auto"> */}
                <div className="col-md-6 d-flex justify-content mx-auto ">
                <img src="images/h1.jpg"  alt="..." style={{height:"400px", width:"1000px"}}></img>
                {/* </div> */}
                </div>
                <br/>
                {/* ----------------- images carousel --------------------------------------- */}
                {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="images/h2.jpg" alt="..." style={{height:"400px", width:"1500px"}}></img>
                    </div>
                    <div class="carousel-item">
                    <img src="images/h1.jpg"  alt="..." style={{height:"400px", width:"1500px"}}></img>
                    </div>
                    <div class="carousel-item">
                    <img src="images/h3.jpg"  alt="..." style={{height:"400px",width:"1500px"}}></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
                </div> */}

              
                {/* --------------------------midcontent--------------------------------------------- */}
              <div className="container-fluid">
              <div className="card wcard">
              <button className="bt disable  py-4 my-4 mx-4  wbtn">
                                       Why Potion Doc?
                                    </button>   
                <div className="container my-4 py-2">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content mx-auto product">
                        <img src = {"images/cook.png"} alt ="" style={{height: "400px"}}></img> 
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        {/* <h1 className="card-header"><p>Why Portion Doc?</p></h1> */}
                        <hr/>
                        <h4 className="my-4"><p class="card-text">No commitment whatsoever<br/>
                        Skipping weeks or cancelling is super easy. <br/>
                        Fresh and affordable<br/>
                        Chef-created deliciousness from 
                        Rs.455 per meal.
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
                            <p class="card-text txt-2">Make meals uniquely yours. <br/>
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
                <div className="container-fluid">
                    <div className="card">
                    <div className="container">
                        <div className=" d-flex-column justify-content"> 
                    <img src = {"images/organic.png"} alt ="" style={{height: "300px"}}></img> 
                    <img src = {"images/delivery.png"} alt ="" style={{height: "300px"}}></img> 
                    </div>
                   
                   <div>
                   <img src = {"images/promotion.png"} alt ="" style={{height: "300px"}}></img> 
                    <img src = {"images/quality.png"} alt ="" style={{height: "300px"}}></img> 
                   </div>

    
              
                </div>

                    </div>
                </div>
                <br/>

                <Footer></Footer>
                </div>
        )
    }
}

export default Home;