import { Component } from "react";
import Footer from "../footer";
import Header from "../header";
class ViewRecipe extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div style={{ backgroundColor: "#fcfcfa" }}>
          {/* image */}
          <div className="container-fluid">
            <div className="card  top">
              <img
                src={"images/bibim.jpg"}
                alt=""
                style={{ height: "500px" }}
              ></img>
            </div>
          </div>

          <div class="card" style={{ width: "1300px", marginLeft: "110px" }}>
            <div class="card-body">
              <h5 class="card-title" style={{ fontSize: "55px" }}>
                Pork and Veggie Bibmbap
              </h5>
              <hr />
              <div style={{ width: "800px" }}>
                <p>
                  This dish takes its name from the Korean word for mixing rice.
                  Which is exactly what you’re meant to do after serving it: put
                  your rice in a bowl, add the toppings, and mix it all together
                  so that those flavors and textures combine in a glorious
                  mishmash. There are plenty of flavors and textures going on
                  here, too, like sweet carrot, mighty mushrooms, and pork
                  tossed with garlic, ginger, and soy sauce.
                </p>
              </div>
              <div>
                <p>Time: 40min</p>
                <p>Cooking Difficulty: Medium</p>
              </div>
              {/* <a href="#" class="btn btn-primary">View Our Plans</a> */}
            </div>
          </div>
          {/* Ingredients */}
          <div
            class="card"
            style={{ width: "900px", marginLeft: "110px", marginTop: "10px" }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ fontSize: "45px" }}>
                Ingredients
              </h5>

              <div class=" mb-3" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                  <div>
                    <img
                      src="images/rice.jpg"
                      style={{ height: "110px" }}
                    ></img>
                  </div>
                  <div class="col-md-4" style={{ marginTop: "20px" }}>
                    <div class="body">
                      <p>3/4 cups</p>
                      <p>Rice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" mb-3" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                  <div>
                    <img
                      src="images/carrot.jpg"
                      style={{ height: "110px" }}
                    ></img>
                  </div>
                  <div class="col-md-4" style={{ marginTop: "20px" }}>
                    <div class="body">
                      <p>3/4 cups</p>
                      <p>Rice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" mb-3" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                  <div>
                    <img
                      src="images/ginger.jpg"
                      style={{ height: "110px" }}
                    ></img>
                  </div>
                  <div class="col-md-4" style={{ marginTop: "20px" }}>
                    <div class="body">
                      <p>3/4 cups</p>
                      <p>Rice</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h5 class="card-title" style={{ fontSize: "25px" }}>
                Not included in delivery
              </h5>

<<<<<<< Updated upstream
              <div class=" mb-3" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                  <div>
                    <img
                      src="images/vinegar.jpg"
                      style={{ height: "110px" }}
                    ></img>
                  </div>
                  <div class="col-md-4" style={{ marginTop: "20px" }}>
                    <div class="body">
                      <p>3/4 cups</p>
                      <p>Rice</p>
=======
        <div class="container card">
          <div class="card-body">
            <h5 class="card-title" style={{ fontSize: "55px" }}>
              {mealName}
            </h5>
            <hr />
            <div style={{fontSize: "20px" }}>
              <p>{mealDescription}</p>
            </div>
            <div>
              <label>Time: {time}</label>
              <br />
              <label>Cooking Difficulty: {difficulty}</label>
            </div>
          </div>
        </div>
        <div
          class="container card text-align-center"
          style={{ marginTop: "10px" }}
        >
          <div class="card-body">
          <div id="front">
          <div>
          <h5 class="card-title" style={{ fontSize: "45px" }}>
              Ingredients
            </h5>
          </div>
          <div id="two">
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <h6 style={{marginRight:"20px", marginTop:"15px"}}>Serving Amount</h6>
            <button type="button" class="btn btn-success serving">2</button>
            <button type="button" class="btn btn-success serving">4</button>
          </div>
          </div>
        </div>
          
            {ingredientData.map((singleData) => {
              return (
                <div class=" mb-3">
                  <div class="row no-gutters">
                    <div>
                      <img
                        className="rounded-circle"
                        src={
                          "http://localhost:4001/ingredients/" +
                          singleData.image
                        }
                        style={{ height: "70px", width:"70px" }}
                      ></img>
>>>>>>> Stashed changes
                    </div>
                  </div>
                </div>
              </div>

              <div class=" mb-3" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                  <div>
                    <img
                      src="images/sriracha.jpg"
                      style={{ height: "110px" }}
                    ></img>
                  </div>
                  <div class="col-md-4" style={{ marginTop: "20px" }}>
                    <div class="body">
                      <p>3/4 cups</p>
                      <p>Rice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Utensils */}
          <div
            className="card"
            style={{ marginTop: "10px", width: "1300px", marginLeft: "110px" }}
          >
            <div className="card-body">
              <h5>Utensils</h5>
              <div>
                <a style={{ marginRight: "80px" }}>•Eggs</a>
                <a style={{ marginRight: "80px" }}>• Milk </a>
                <a style={{ marginRight: "80px" }}>• Wheat </a>
                <a style={{ marginRight: "0px" }}>• Soya</a>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div
            className="card"
            style={{
              marginTop: "10px",
              width: "1300px",
              marginLeft: "110px",
              marginBottom: "10px",
            }}
          >
            <div className="card-body">
              <h5>Instruction</h5>
              <div>
                <p>
                  1. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
                <hr />
                <p>
                  2. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
                <hr />
                <p>
                  3. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
                <hr />
                <p>
                  4. In a small pot, combine rice, 1¼ cups water (2¼ cups for 4
                  servings), and a big pinch of salt. Bring to a boil, then
                  cover and reduce to a low simmer. Cook until rice is tender,
                  15-18 minutes. Keep covered off heat until ready to serve.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}
export default ViewRecipe;
