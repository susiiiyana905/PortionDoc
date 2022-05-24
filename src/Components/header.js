import { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        const logout = ()=>{
            localStorage.clear();
            window.location.replace('/login')
        }
        var menu;
        if(localStorage.getItem('token')){
            menu=(
            <>
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
                    <li className="nav-item dropdown">
                    <li className="nav-link dropdown-toggle" to="/account" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-user-alt fa-1.5x">
                        Account </i>
                        </li>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><li className="dropdown-item" to="/profile">Profile</li></li>
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
                <nav class="navbar navbar-expand-lg ">
                    <i class="fas fa-solid fa-envelope fa-lg" style={{height: "30px", color:"white", marginRight:"10px"}}></i><p className="i-1">portiondoc@gmail.com</p>
                    <i class="fas fa-solid fa-phone" style={{height: "30px", marginLeft:"100px", color:"white", marginRight:"10px"}} ></i><p className="i-1">+977 983142567</p>
                </nav>
    
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" className="card-img-top" alt="..." style={{height:"100px", width:"150px", marginLeft:"80px"}}></img></a>
                    <div class="collapse navbar-collapse" style={{marginLeft:"550px"}} id="navbarSupportedContent">
                        <ul className="navbar-nav nav-item">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DIETARY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">OUR MENU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">PACKAGES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">CONTACT US</a>
                        </li>
                            <button className="btn-sign" style={{marginLeft: "10px"}}><Link className="link" to="/login" style={{color: "white", textDecoration:"none"}}>Login</Link></button>
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