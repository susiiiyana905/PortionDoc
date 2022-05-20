const ViewMeals =()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg ">
          <i className="fas fa-solid fa-envelope fa-lg" style={{height: "40px", color:"white"}}></i><p className="i-1">portiondoc@gmail.com</p>
          <i className="fas fa-solid fa-phone" style={{height: "40px", marginLeft:"100px", color:"white"}} ></i><p className="i-1">+977 983142567</p>
        </nav>
        <div>
        <div className="container">
                    <div  className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                        <div class="container">
                            <div class="row">
                  <div>
                      <table class="table">
                        <thead>
                            <tr>
                            <th scope="col" colSpan="2">Image</th>
                            <th scope="col" colSpan="2">Name</th>
                            <th scope="col" colSpan="2">Price</th>
                            <th scope="col" colSpan="2">Category</th>
                            <th scope="col " colSpan="2">Description</th>
                            <th scope="col" colSpan="2">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {productData.map(singleData=> { */}

                             {/* <tr key={singleData._id}> */}
                                 <th scope='row'></th>
                                 {/* <td><img src={''} height="100px"/></td> */}
                                <td colSpan="2">  {}</td>
                                <td colSpan="2"> {}</td>
                                <td colSpan="2"> {}</td>
                                <td colSpan="4">{}</td>
                                <td>
                                <button className="btn btn-primary mb-2"style={{backgroundColor:"#FF7800",border:"none"}}>Update Product</button>
                                    <button className="btn btn-primary mb-2"style={{backgroundColor:"#FF7800",border:"none", marginLeft:"10px"}}>Delete Product</button>

                                </td>
                            {/* </tr> */}
                                 

                                </td>
                            {/* </tr> */}
              

                        {/* })}  */}
                        </tbody>
                        </table>
                      </div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </div>
        </>
    )
}
export default ViewMeals;


