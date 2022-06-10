import {Component} from "react";
import React from "react";
import Footer from "../footer";
import Header from "../header";
const ViewDietMeals =()=> {
        return(
            <>
          
            <Header></Header>

            <div>

                <div>
                    <h3 id="lf">Meals</h3>
                </div>

            <div id="content">
         <div class="contents">
             
             <img src="images/1.png" id="content-a"></img>
             <p class="first">Grilling Tikka Masala</p>
             <div class="ff">
             <p class="second">Rs.1000</p>
             <p class="third" >40 min</p>
             
             </div>
           
         </div>
         <div class="contents">
             <img src="images/1.png" id="content-b"></img>
             <p class="first">Cruchy Chicken Bowl</p>
             <div class="ff">
             <p class="second">Rs.500</p>
             <p class="third">60min</p>
             </div>
         </div>

         <div class="contents">
             <img src="images/1.png" id="content-c"></img>
             <p class="first">Apple Bire Snadwiches</p>
             <div class="ff">
             <p class="second">Rs.800</p>
             <p class="third">40min</p>
             </div>
         </div>
         <div class="contents">
             <img src="images/1.png" id="content-d"></img>
             <p class="first">Beef Bibimbap</p>
             <div class="ff">
             <p class="second">Rs. 1000</p>
             <p class="third">50min</p>
             </div>
         </div>
     </div>




           </div>

            <Footer></Footer>
            </>

            )
            }

export default ViewDietMeals;