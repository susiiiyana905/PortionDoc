import { Component } from "react";
// import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg ">
<<<<<<< HEAD
               
                 <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
                 
                 <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
                 </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" className="card-img-top" alt="..." style={{height:"100px", width:"150px", marginLeft:"100px"}}></img></a>
=======
          
                 <i class="fa-solid fa-envelope" style={{height: "40px"}}>portiondoc@gmail.com</i>
                 <i class="fa-solid fa-phone" style={{height: "40px", float:"right"}} >+977 983142567</i>
                 </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" className="card-img-top" alt="..." style={{height:"80px"}}></img></a>

>>>>>>> e7ceb894ff74b74fe4411bce2b7500f1c853b34e
                    {/* <img src="images/logo.png" className="card-img-top" alt="..." ></img> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
<<<<<<< HEAD
                    <div className="collapse navbar-collapse nav " style={{marginLeft:"800px"}} id="navbarNav">
=======

                    <div className="collapse navbar-collapse nav " id="navbarNav">
>>>>>>> e7ceb894ff74b74fe4411bce2b7500f1c853b34e
                        <ul className="navbar-nav nav-item ">

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

                       <button className="btn-sign">Sign Up</button>

                    
                        </ul>
                        
                    </div>
                    
                    </nav>

            </div>
        )
    }
}

export default Header;