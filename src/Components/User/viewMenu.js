import {Component} from "react";
class Menu extends Component{
    render(){
        return(
          <div>
             <div class="card">
              
              <div class="card-body">
                <h5 class="card-title">Mushroom and Herb Shepherd's Pie</h5>
                <p class="card-text">topped with Cheesy Mashed Potatoes</p>
                <a href="#" class="btn btn-primary">View Our Plans</a>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                
                <p class="card-text">It’s hard to beat the homey, comforting goodness of a shepherd’s pie. 
                Our chefs whipped up a vegetarian version that’s just as rich and hearty as the original!
                Meaty mushrooms (in lieu of traditional ground beef) are simmered with tomato paste, veggie stock, 
                and a bounty of fresh veggies and thyme. On top, swoops of creamy mashed potatoes are sprinkled with 
                Monterey Jack, then broiled to create an irresistibly cheesy crust.</p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">-Tags : Veggie . Calorie Smart Superstar. Climate Score  -Allergens : Milk . Wheat </p>
                    <p class="card-text">Produced in a facility that processes milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, and soybean.</p>
                  
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Total Time</th>
                  <th scope="col">Prep Time</th>
                  <th scope="col">Cooking Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50 minutes</td>
                  <td>15 Minutes</td>
                  <td>Hard</td>
                  
                </tr>
                
              </tbody>
            </table>
              </div>
              </div>


            {/* <div>
              <h3>Utensils</h3>
              <ul>
                <li>Large Pot</li>
                <li>Peeler</li>
                <li>Potato Masher</li>
                <li>Strainer</li>
                <li>Large Pan</li>
              </ul>
            </div> */}

            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="..." alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>





</div>
          </div>


        )


        
    }
}
export default Menu;
