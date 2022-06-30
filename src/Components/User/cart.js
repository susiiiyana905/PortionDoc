import {useEffect, useState} from "react";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { deleteFromCart } from "./product_functions";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

const Cart =()=> {
    const [count, setCount] = useState(2);
    const [cartItem, setCartItem] = useState([])
    const [total, setTotal] = useState(0);
    const localCart = localStorage.getItem("cart")
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
        },
        grocery_id:{
          groceryName:"",
          groceryPrice:""
        }
    }])

    useEffect(() => {
      let totalC = 0;
      cartItem.map((item)=>{
        totalC += item.price*item.qty;
      })
      setTotal(totalC)
    }, [cartItem]);

    const updateQuantity = (productId, quantity) => {
      console.log(productId);
      const newCartItem = [...cartItem];
      if(quantity === 0){
        return;
      }
      cartItem.map((product,index)=>{
        if(product.itemid===productId){
          newCartItem[index].qty = quantity;
        }
      })
      setCartItem(newCartItem);
      localStorage.setItem("cart", JSON.stringify(newCartItem))
    }

    const deleteFromCart = (productId) => {
      const newCartItem = cartItem.filter((product)=>{
        return product.itemid!==productId;
      })
      setCartItem(newCartItem);

      localStorage.setItem("cart", JSON.stringify(newCartItem))
    }

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
        setCartItem(JSON.parse(localCart))
        getCartItems()
    }, [])
        return(
            <>
            <Header></Header>
            <div className="container-fluid">
          <>
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Product</th>
                  <th style={{ width: "10%" }}>Price</th>
                  <th style={{ width: "8%" }}>Quantity</th>
                  <th style={{ width: "22%" }} className="text-center">
                    Subtotal
                  </th>
                  <th style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody>
                {
                 cartItem.length > 0 &&   cartItem.map((item) => 
                 <tr>
                      <td data-th="Product">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="nomargin">
                                {item.name}
                              {/* {cart.productId?.productName} */}
                            </h2>
                            {/* <p>{cart.productId.productDescription}</p> */}
                          </div>
                        </div>
                      </td>
                      <td data-th="Price">
                        Rs.{item.price}
                        {/* {cart.productId?.productPrice} */}
                      </td>
                      <td className="quantity" data-th="Quantity">
                        <button
                          className="btn btn-warning"
                          onClick={
                            ()=>{
                              if (item.mealCategory === 'Non-Veg') {
                              updateQuantity(item.itemid, item.qty - 2)
                            }
                            else {
                              updateQuantity(item.itemid, item.qty - 1)
                              
                            }
                          }
                          }
                        //   onClick={this.updateQuantity.bind(
                        //     this,
                        //     cart._id,
                        //     cart.quantity - 1
                        //   )}
                        >
                          <h5>-</h5>
                        </button>
                        <span style={{ margin: "5px" }}>
                          {item.qty}
                          {/* {cart.quantity} */}
                        </span>
                        <button
                          className="btn btn-warning"
                          onClick={
                            ()=>{
                              if (item.mealCategory === 'Non-Veg') {
                              updateQuantity(item.itemid, item.qty +2)
                              }
                              else {
                                updateQuantity(item.itemid, item.qty +1)
                                
                              }
                            }
                          }
                        //   onClick={this.updateQuantity.bind(
                        //     this,
                        //     cart._id,
                        //     cart.quantity + 1
                        //   )}
                        >
                          <h5>+</h5>
                        </button>
                      </td>
                      <td data-th="Subtotal" className="text-center">
                        {/* {cart.total} */}Rs.{item.price * item.qty}
                      </td>
                      <td className="actions" data-th="">
                        <button
                          className="btn btn-danger btn-lg"
                          // onClick={() => this.openModal(cart)}
                        //   onClick={() => this.deleteCart(cart._id)}
                        onClick={
                          ()=>{
                            deleteFromCart(item.itemid);
                          }
                        }
                        >
                          {/* {" "} */}
                          Delete
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    )
}
              </tbody>
               {/* ----------------------------------------------Groceries-------------------------------------------------------------- */}
               {/* <tbody>
                {
                 cartItem.length > 0 &&   cartItem.map((item) => 
                 <tr>
                      <td data-th="Product">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="nomargin">
                                {item.gname}
                           
                            </h2>
                            
                          </div>
                        </div>
                      </td>
                      <td data-th="Price">
                        Rs.{item.gprice}
                       
                      </td>
                      <td className="quantity" data-th="Quantity">
                        <button
                          className="btn btn-warning"
                          onClick={
                            ()=>{
                              updateQuantity(item.itemid, item.qty - 1)
                            }
                          }
                       
                        >
                          <h5>-</h5>
                        </button>
                        <span style={{ margin: "5px" }}>
                          {item.qty}
                          
                        </span>
                        <button
                          className="btn btn-warning"
                          onClick={
                            ()=>{
                              updateQuantity(item.itemid, item.qty +1)
                            }
                          }
                       
                        >
                          <h5>+</h5>
                        </button>
                      </td>
                      <td data-th="Subtotal" className="text-center">
                        Rs.{item.price}
                      </td>
                      <td className="actions" data-th="">
                        <button
                          className="btn btn-danger btn-lg"
                         
                        onClick={
                          ()=>{
                            deleteFromCart(item.itemid);
                          }
                        }
                        >
                       
                          Delete
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    )
}
              </tbody> */}
              {/* --------------------------------End Grocerires----------------------------------------------------------------- */}
              <tfoot>
                <tr>
                  <td>
                    <a href="/ourMenu" className="btn btn-warning">
                      <i className="fa fa-angle-left"></i> Continue Shopping
                    </a>
                  </td>
                  <td colspan="2" className="hidden-xs"></td>
                  
                  <td className="hidden-xs text-center">
                    <strong> Rs. {total} </strong>
                  </td>
                  <td>
                    <NavLink
                      to="/orderMeal"
                      className="btn btn-success btn-block"
                      style={{ height: "25px" }}
                    >
                      Checkout <i className="fa fa-angle-right"></i>
                    </NavLink>
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        </div>
            </>
            )
            }
export default Cart;