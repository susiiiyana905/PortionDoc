import { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        return(
            <div>
                   <nav class="navbar navbar-expand-lg ">

               <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
               <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
               </nav>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" className="card-img-top" alt="..." style={{height:"100px", width:"150px", marginLeft:"100px"}}></img></a>
                    <div class="collapse navbar-collapse" style={{marginLeft:"400px"}} id="navbarSupportedContent">
                        <ul className="navbar-nav nav-item">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dieatery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact Us</a>
                        </li>
                        <button className="btn-sign"><Link className="link" to="/login" style={{color: "white", textDecoration:"none"}}>Login</Link></button>
                        </ul>
                    </div>

                    
                    </nav>
                    </div>

        )
    }
}
export default Header;