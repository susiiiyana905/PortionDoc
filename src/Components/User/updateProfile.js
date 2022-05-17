const UpdateProfile =()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg ">
          <i className="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
          <i className="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
        </nav>
        <div>
            <div className="container" style={{marginBottom:"50px"}}>
            <h3 className="mt-5 mb-3" style={{textAlign:"center"}}>Update Profile</h3>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-6">
                    <img src={""} className="img rounded-circle" alt="..." style={{width:"150px", height:"150px", float:"left", "margin-right":"50px"}}/>
                    <p style={{"font-size":"30px","margin-top":"20px"}}>Krishaa</p>
                    <div>
                        <button className="btn btn-outline-dark btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Change profile picture
                        </button>
                        <div className="modal fade text-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog  modal-dialog-centered">
                            <div className="modal-content d-flex justify-content-center">
                            <div className="modal-body">
                                <h5 className="modal-title text-center" id="exampleModalLabel">Change Profile Photo</h5>
                            </div>
                            <div  className="dropdown-divider"></div>
                            <div className="modal-body">
                                <input type="file" className="custom-file-input"
                                
                                />
                            </div>
                            {/* <div  className="dropdown-divider"></div>
                            <div class="modal-body">
                                Remove Current Photo
                            </div> */}
                            <div  className="dropdown-divider"></div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal" >Update</button>
                            </div>
                            <div  className="dropdown-divider"></div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    
                    <div className="col-md-6">
                    <div className="container editprofile" style={{"margin-left":"100px"}}>
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
                        <div>
                        <button type="button" className="" style={{border:"none",background:"transparent", color:"forestgreen", "font-weight":"500", float:"right"}} data-bs-toggle="modal" data-bs-target="#deleteprofilemodal">
                                        Deactivate Account
                                        </button>
                                        <div className="modal fade" id="deleteprofilemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Deactivate Account</h5>
                                                <button type="button" className="close" style={{border:"none",background:"transparent", color:"blue", fontWeight:"500", fontSize:"30px", float:"right"}} data-bs-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                Do you really want to deactivate this account?
                                            </div>
                                            <div className="modal-body">
                                                <button type="button"  style={{border:"none",background:"transparent", color:"red", "font-weight":"500", float:"right"}}>Delete</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                            {/* <button type="button" onClick={()=>{deleteProfile(_id)}} className="btn btn-link mt-3" style={{color:"red", float:"right"}}>Deactivate Profile</button> */}
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </>
    )
}
export default UpdateProfile;