import { Component } from "react";
// import { Link } from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <div className="main-footer">
            <div className="container-fluid" >

                <div className="row " style={{ backgroundColor:"#B1DF01", textAlign:"center"}}>

                {/* Column1 */}
                <div className="col">
                    <h4>Portion Doc</h4>
                    <ui className="list-unstyled">
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Testimonial</li>
                    <li>Contact Us</li>
                    </ui>
                   
                    
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>Pricing</h4>
                    <ui className="list-unstyled">
                    <li>Program</li>
                    <li>Deals</li>
                    
                    </ui>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>Categories</h4>
                    <ui className="list-unstyled">
                    <li>Menu Special</li>
                    <li>Menu Popular</li>
                    <li>Health Nutrition</li>
                    </ui>
                </div>
                </div>
                {/* <hr /> */}
              


                <div className="text"
                style={{ backgroundColor: "#359B41" }}>
                   <div><p>©PortionDoc2022</p>  <p>Terms and Conditions Privacy    Accessibility</p></div>
                          </div>

               
                          </div>
                          <div className="text"
                style={{ backgroundColor: "#359B41" }}>
                   <div className="container">
                      <a style={{marginRight:"500px"}}>©PortionDoc2022 </a> 
                      <a style={{marginLeft:"50px"}}>Terms and Conditions </a> 
                      <a style={{marginLeft:"50px"}}>Privacy</a> 
                      <a style={{marginLeft:"50px"}}>Accessibility</a> 

                        {/* <a></a>
                        <a></a> 
                        <a>Accessibility</a> */}
                        </div>

                          </div>
            </div>
          
        )
    }
}

export default Footer;