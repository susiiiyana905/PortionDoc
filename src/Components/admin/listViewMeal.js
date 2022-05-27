const ListMeals =()=>{
    return(
        <>
        <h1> Recipie</h1>
        <div className ="container">
        <form>
        <div class="form-group">
            <label for="formGroupExampleInput">Recipies Title</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""></input>
        </div>
        </form>
        <form>
        <div class="form-group">
            <label for="exampleFormControlFile1">Recipies Images</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
        </div>
        </form>
        <div className="container">
        <label for="exampleFormControlFile1">Ingredients</label>
                        <div  className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                            <div class="container">
                                <div class="row">
                                <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="2">Recipies Image</th>
                                    <th scope="col" colSpan="2">Recipies Name</th>
                                    <th scope="col" colSpan="2">Recipies Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {categoryData.map(singleData => { */}
                                        <tr>
                                        {/* // <tr key={singleData._id}> */}
                                            <td><img src="images/1.png" height="100px"/></td>
                                                <td colSpan="2"> Recipies</td>
                                                <td>1kg</td>
                                            <td> 
                                            {/* <button className="btn btn-primary mb-2" onClick={()=>{deleteCategory(singleData._id)}}>Delete Product</button> */}
                                            </td>
                                        </tr>
                            </tbody>
                        </table>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                        <label for="exampleFormControlFile1">Steps</label>
                        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col"> Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Potatoes</th>
                <td>1kg</td>
                </tr>
                <tr>
                <th scope="row">Garlic</th>
                <td>5</td>
                </tr>
                <tr>
                <th scope="row">Tofu</th>
                <td>1 box</td>
                </tr>
            </tbody>
            </table>
            <form>
            <label for="exampleFormControlFile1">Portions</label>
            <form class="form-inline">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div class="custom-control custom-checkbox my-1 mr-sm-2">
                <input type="checkbox" class="custom-control-input" id="customControlInline"></input>
            </div>
            <button type="submit" class="btn btn-primary my-1">Submit</button>
            </form>
                </form>
                    </div>
                    </>
    )
}
export default ListMeals;