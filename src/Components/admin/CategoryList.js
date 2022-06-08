import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";




const ShowCategory = () => {
  const [categoryData, setcategoryData] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };
  console.log(config);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/category/single`, config)
      .then((category) => {
        setcategoryData(category.data.data);
      })
      .catch((e) => {
        console.log(e);
      });

    // getProduct()
  }, []);

  const deleteCategory = (cid) => {
    axios
      .delete("http://localhost:4001/category/delete/" + cid, config)
      .then((result) => {
        axios
          .get(`http://localhost:4001/category/single`, config)
          .then((category) => {
            setcategoryData(category.data.data);
          });
        console.log(result.data);
      })
      .catch();
  };

  return (
    <div>
    
      {/* <Navbar></Navbar> */}
      <AdminDashboard></AdminDashboard>

      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div class="container">
              <div class="row">
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2">
                          Category Image
                        </th>
                        <th scope="col" colSpan="2">
                          Category Name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryData.map((singleData) => {
                        return (
                          //  <tr>
                          <tr key={singleData._id}>
                            <td>
                              <img
                                src={`http://localhost:4001/category/${singleData.categoryImage}`}
                                height="100px"
                              />
                            </td>
                            <td colSpan="2"> {singleData.categoryName}</td>
                            <td>
                              <button
                                className="btn btn-primary mb-2"
                                onClick={() => {
                                  deleteCategory(singleData._id);
                                }}
                              >
                                Delete Product
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
