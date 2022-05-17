const ViewProfile =()=>{
    return(
<>
    <nav className="navbar navbar-expand-lg ">
    <i className="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
    <i className="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
  </nav>
     <div className="container">
     <h3 className="mt-5 mb-3" style={{textAlign:"center"}}> My profile</h3>
      <form>
                        <div className="form-group editprofileform row">
                            <label for="inputfname" className="col-sm-3 col-form-label">First Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control border-dark" id="inputfname"
                                
                                />
                            </div>
                        </div>
                        <div className="form-group editprofileform row">
                            <label for="inputlname" className="col-sm-3 col-form-label">Last Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control border-dark" id="inputlname"
                                
                                />
                            </div>
                        </div>
                        <div className="form-group editprofileform row">
                            <label for="inputdob" className="col-sm-3 col-form-label">DoB</label>
                            <div className="col-sm-9">
                                <input type="date" className="form-control border-dark" id="inputdob"
                             
                                />
                            </div>
                        </div>
                        <div className="form-group editprofileform row">
                            <label for="inputgender" className="col-sm-3 col-form-label">Gender</label>
                            <div className="col-sm-9">
                                <select className="custom-select custom-select-lg" style={{width:"100%"}}
                                
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group editprofileform row">
                            <label for="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
                            <input type="email" className="form-control border-dark" id="inputEmail3"
                           
                            />
                            </div>
                        </div>
                        <div className="form-group editprofileform row">
                            <label for="inputphone" className="col-sm-3 col-form-label">Phone No.</label>
                            <div className="col-sm-9">
                            <input type="text" maxLength="10" className="form-control border-dark" id="inputphone"
                            
                            />
                            </div>
                        </div>
                        <div className="form-group row" >
                            <div className="col-sm-3"></div>
                        <div className="col-sm-9">
                        <button type="submit" className="btn btn-primary mt-4" style={{backgroundColor:"#FF7800",border:"none"}}
                        
                        >Save change </button>
                        </div>
                        </div>
                        </form>
     </div>
  </>
         
    )
}
export default ViewProfile;

        