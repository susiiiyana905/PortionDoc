const ViewRecipes = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <i
          className="fas fa-solid fa-envelope fa-lg"
          style={{ height: "40px", color: "white" }}
        ></i>
        <p className="i-1">portiondoc@gmail.com</p>
        <i
          className="fas fa-solid fa-phone"
          style={{ height: "40px", marginLeft: "100px", color: "white" }}
        ></i>
        <p className="i-1">+977 983142567</p>
      </nav>
      <div className="container">
        <h1> Recent Recipies </h1>

        <div class="card mb-3" style={{ width: "1200px", height: "170px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="..." alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">title</h5>
                <p class="card-text">description</p>
                <p class="card-text">
                  <small class="text-muted">50 min|Fair Climate Score</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ width: "1200px", height: "170px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="..." alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Creamy Caramelized Onion Meatloaves</h5>
                <p class="card-text">with Sumac Roasted Veggies</p>
                <p class="card-text">
                  <small class="text-muted">
                    35 min|Carb Smart• Fair Climate Score
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ width: "1200px", height: "170px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="..." alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">BBQ Pineapple Flatbreads</h5>
                <p class="card-text">with Caramelized & Pickled Onions</p>
                <p class="card-text">
                  <small class="text-muted">
                    35 min|Veggie • Superstar Climate Score
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ width: "1200px", height: "170px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="..." alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">BURGER WITH PICKLED FRIES</h5>
                <p class="card-text">with Caramelized & Pickled Onions</p>
                <p class="card-text">
                  <small class="text-muted">
                    35 min|Veggie • Superstar Climate Score
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ width: "1200px", height: "170px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="..." alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Dhakgalbbi</h5>
                <p class="card-text">with Sumac Roasted Veggies</p>
                <p class="card-text">
                  <small class="text-muted">
                    35 min|Carb Smart• Fair Climate Score
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewRecipes;
