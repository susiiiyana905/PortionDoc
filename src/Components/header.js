import { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        const logout = ()=>{
            localStorage.clear();
            window.location.replace('/')
        }
        var menu;
        if(localStorage.getItem('userToken')){
            menu=(
            <>
            <nav className="navbar navbar-expand-lg mainNav" style={{"height":"35px"}}>
                <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white", marginTop:"20px"}}></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>portiondoc@gmail.com</p>
                <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white", marginTop:"20px"}} ></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>+977 983142567</p>
                <i class="fas fa-light fa-file-circle-plus" style={{height: "40px",  color:"white", marginTop:"20px"}}></i>
                <i class="fas fa-light fa-cart-arrow-down" style={{height: "40px", marginLeft:"1000px", color:"white", marginTop:"20px"}} ></i>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light logoNav">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" className="card-img-top" alt="..." style={{height:"80px", width:"160px", marginLeft:"30px"}}></img></a>
                    <div class="collapse navbar-collapse" style={{marginLeft:"650px"}} id="navbarSupportedContent">
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
                        <li className="nav-item dropdown">
                        <li className="nav-link dropdown-toggle" to="/account" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user-alt fa-1.5x">
                            Account </i>
                          </li>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/viewProfile">Profile</Link></li>
                            <li><button className="dropdown-item" onClick={logout} to="#">Logout</button></li>
                            </ul>
                        </li>
                        
                        </ul>
                    </div>

                
                    </nav>
                </>
            )
        }else{
            menu=(
                <>
               <nav className="navbar navbar-expand-lg mainNav" style={{"height":"35px"}}>
                <i class="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white", marginTop:"20px"}}></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>portiondoc@gmail.com</p>
                <i class="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white", marginTop:"20px"}} ></i><p className="i-1" style={{marginLeft:"10px",  marginTop:"10px"}}>+977 983142567</p>
                
                </nav>
    
                <nav className="navbar navbar-expand-lg navbar-light bg-light logoNav">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" className="card-img-top" alt="..." style={{height:"80px", width:"160px", marginLeft:"30px"}}></img></a>
                    <div class="collapse navbar-collapse" style={{marginLeft:"650px"}} id="navbarSupportedContent">
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
                     </>
                     )
                     }
            return(
            <>
            <div>
                {menu}
                </div>
                </>

        )
    }
}
export default Header;