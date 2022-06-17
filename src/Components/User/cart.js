import {useEffect, useState} from "react";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import axios from "axios";
const Cart =()=> {

    const [count, setCount] = useState(2);
   

    const incrementCount = () => {
        // Update state with incremented value
        if(count < 4) {
        setCount(count + 2);
        }
      };


      const decrementCount = () => {
        // Update state with incremented value
        if(count > 2) {
        setCount(count - 2);
        }
      };

    const [cartItems, setCartItems] = useState([{
        serving: 0,
        total: 0,
        meals_id: {
            mealName: "",
            mealPrice: ""
        }
    }])

    async function getCartItems () {
        const res = await axios.get('http://localhost:4001/cart', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("userToken")
            }
        })
        if (res.status === 200) {
            setCartItems(res.data.data)
            console.log(res.data.data);
            console.log(cartItems);
        }
    }

    useEffect(() => {
        getCartItems()
    }, [])

        return(
            <>
          
            <Header></Header>

            <div>
                {
                    cartItems.map((item, index) => (
                        <div class="chi" key={index}>
                    <div>
                    <img src="images/1.png"  className="thi"></img>
                    </div>
                    <div>
                    <p class="cup">{item.meals_id.mealName}</p>
                    <label class="cups">{item.meals_id.mealPrice}</label>
                    </div>

                    <div  class="cc">
                    <button class="dis" onClick={decrementCount}>-</button>
                     <p class="disss">{count}</p>
                     <button onClick={incrementCount} class="diss">+</button>
                     <button class="de">Delete</button>
                    
                    </div>
                </div>

                    ))
                }
                
                <hr></hr>
           </div>

            <Footer></Footer>
            </>

            )
            }

export default Cart;