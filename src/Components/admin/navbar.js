import  {Component} from "react";

import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
      const logout = ()=>{
        localStorage.clear();
        window.location.replace('/login')
      }
      
        return(
          <>
          <nav className="navbar navbar-expand-lg navbar-dark  bg-dark py-3">
                  <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    Portion Doc
                  </Link>
                    <Link className="navbar-brand" to="#"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/account" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user-alt fa-1.5x">
                            Account </i>
                          </Link>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* <li><Link className="dropdown-item" to="/profile">Profile</Link></li> */}
                            <li><button className="dropdown-item" onClick={logout} to="#">Logout</button></li>
                            </ul>
                        </li>
                      </ul>
                      
                    </div>
                    
                  </div>
                </nav>

                
          </>
        

          

          



        )
    }
}

export default Navbar;