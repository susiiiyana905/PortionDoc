import { Component } from "react";
// import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg ">

                 <i class="fa-solid fa-envelope" style={{height: "40px"}}>portiondoc@gmail.com</i>
                 <i class="fa-solid fa-phone" style={{height: "40px", float:"right"}} >+977 983142567</i>

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
                        <button className="btn-sign">Sign Up</button>


                    
                        </ul>
                        
                    </div>


                    {/* </div> */}
                    </nav>
                    </div>
                    

        )
    }
}

export default Header;