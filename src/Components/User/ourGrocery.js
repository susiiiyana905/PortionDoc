import Footer from "../footer";
import Header from "../header";
import React from "react";
const Grocery = () => {
  return(
    <>
      <Header></Header>
          <div className="container py-5">
      <div className="row">
      <div className="col-12 text-center" style={{marginTop:"2px"}}>
          <h1>Diet Meals</h1>
          <hr />
      </div>
      </div>
  </div>

  <div className="grocery-data container">
    <div className="container py-3" style={{width:"1000px"}}>
  <div class="card-deck">
  <div class="card">
    <img src="images/bibim.jpg" class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}/>
    <div class="card-body">
      <h5 class="card-title">Rice</h5>
      <p class="card-text">Price: Rs.1110</p>
    </div>
    <div class="card-footer">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
  
  <div class="card">
    <img src="images/bibim.jpg" class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}/>
    <div class="card-body">
      <h5 class="card-title">Rice</h5>
      <p class="card-text">Price: Rs.1110</p>
    </div>
    <div class="card-footer">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
  <div class="card">
    <img src="images/bibim.jpg" class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}/>
    <div class="card-body">
      <h5 class="card-title">Rice</h5>
      <p class="card-text">Price: Rs.1110</p>
    </div>
    <div class="card-footer">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
  
  <div class="card">
    <img src="images/bibim.jpg" class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}/>
    <div class="card-body">
      <h5 class="card-title">Rice</h5>
      <p class="card-text">Price: Rs.1110</p>
    </div>
    <div class="card-footer">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
</div>
</div>

  <Footer></Footer>

      </>

    )
}
export default Grocery;
