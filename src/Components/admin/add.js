import {Component} from "react";
class AddMeal extends Component{
    render(){
        return(
        <div>

        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="heading-h2-all">Add Meal Details :</h2>

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
                            <input type="text" className="form-control"
                             
                            
                            />
                        </div>

                        <div className="form-group">
                            <label>Meal Image</label>
                            <input type="file" className="form-control"
                            
                            />

                        </div>

                        <p><input type='submit' className="btn btn-primary"  /></p>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        </div>
    )
    }
}
export default AddMeal;
  