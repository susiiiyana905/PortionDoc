import {Component} from "react";
class UpdateMeal extends Component{
    render(){
        return(

            <div>
       <div className="container">
           <div className="row">
               <div className="col-md-4"></div>
               <div className="col-md-4">
               
                    <h2 className="heading-h2-all">Update Meal</h2>
                
                   <form>
                        <div className="form-group">
                            <label>Meal Name</label>
                            <input type="text" className="form-control"
                             
                             />    
                        </div>

                        <div className="form-group">
                            <label>Meal Price</label>
                            <input type="text" className="form-control"
                             
                             />    
                        </div>

                        <div className="form-group">
                            <label>Meal Category</label>
                            <input type="text" className="form-control"
                             
                             />    
                        </div>

                        <div className="form-group">
                            <label>Meal Description</label>
                            <textarea type="text" className="form-control"
                             
                             />    
                        </div>

                        
                        <div className="form-group">
                            <label>Meal Image</label>
                            <input type="file" className="form-control"
                            
                            />

                        </div>
                        
                         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                             Update
                        </button>

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Update</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        You meal has been successfully updated. 
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  >Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    </form>
               {/* </div> */}
           </div>
           </div>
           </div>
           </div>
        )
    }


}

export default UpdateMeal;