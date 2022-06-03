import {Component} from "react";
import Footer from "../footer";
import Header from "../header";
const Table =()=> {
        return(
            <>
          
            <Header></Header>

            <div>

                <div class="ip">
                    <p id="iq">Images</p>
                    <p class="i0">Name</p>
                    <p class="ir">Gender</p>
                    <p class="ir">Height</p>
                    <p class="ir">Weight</p>
                    <p class="ir">Prefereces</p>
                    <p class="ir">Food Allergy</p>
                    <p class="ir">Approve</p>
                </div>

                <hr id="hr"></hr>

                <div class="ip">
                    <div>
                    <img src="images/1.png" id="img"></img>
                    </div>
                    <p class="iz">Sadikshya</p>
                    <p class="i1">Female</p>
                    <p class="i2">5.4 cm</p>
                    <p class="i3">50 kg</p>
                    <p class="i4">Veges</p>
                    <p class="i5">No</p>
                    <div>
                    <button class="acc">Accept</button>
                    <button class="dcc">Decline</button>
                    </div>
                    
                </div>

                <hr id="hr"></hr>

                <div  class="ip">
                <img src="images/1.png" id="img"></img>
                    <p class="iz">Samikshya</p>
                    <p class="i1">Female</p>
                    <p class="i2">5.4 cm</p>
                    <p class="i3">50 kg</p>
                    <p class="i4">Veges</p>
                    <p class="i5">No</p>
                    <div>
                    <button class="acc">Accept</button>
                    <button class="dcc">Decline</button>
                    </div>
                </div>

                <hr id="hr"></hr>

                <div  class="ip">
                <img src="images/1.png" id="img"></img>
                    <p class="iz">Susiyana</p>
                    <p class="i1">Female</p>
                    <p class="i2">5.8 cm</p>
                    <p class="i3">90 kg</p>
                    <p class="i4">Non-veg</p>
                    <p class="i5">No</p>
                    <div>
                    <button class="acc">Accept</button>
                    <button class="dcc">Decline</button>
                    </div>
                </div>



           </div>

            <Footer></Footer>
            </>

            )
            }

export default Table;

