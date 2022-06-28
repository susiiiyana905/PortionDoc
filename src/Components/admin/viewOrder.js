import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AdminDashboard from "../adminDashbaord";


const ViewOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [_id, setID] = useState("");
  const [statusId, setStatusId] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken"),
    },
  };

  const {oid} = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4001/order/get", config)
      .then((result) => {
        
        setOrderData(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4001/order/single/" + oid, config)
      .then((result) => {
        console.log(result.data.data);
        setStatus(result.data.data.status)
        setID(result.data.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function setData(statusId, statusName) {
    setStatusId(statusId)
     setStatus(statusName)
  }

  
   const updateStatus = (e) => {
    e.preventDefault();

    if(statusId==="") {
      return;
    }

   const statusDetail = {
      "status":status,
      "oid":statusId,
    }

    axios
      .put("http://localhost:4001/order/update/", statusDetail,config)
      .then((result) => {
        if (result.data.success) {
          setMessage(result.data.message);
          navigate("/viewOrders");
          axios
            .get(`http://localhost:4001/order/get`,  config)
            .then((result1) => {
              setOrderData(result1.data.data);
              setStatusId("");
              setStatus("");
            });
        } else {
          setMessage("Something is wrong!!!");
        }
      })
      .catch(e=>{
        console.log(e);
      });
  }

  return (
    <>
    <AdminDashboard>
        <h1 style={{"textAlign":"center"}}>Order Details</h1>
      <div style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="8">
                            Name
                          </th>
                          <th scope="col" colSpan="6">
                            Address
                          </th>
                          <th scope="col" colSpan="6">
                            Phone Number
                          </th>
                          <th scope="col" colSpan="6">
                            Meal Name
                          </th>
                          <th scope="col " colSpan="6">
                            Serving
                          </th>
                          <th scope="col " colSpan="6">
                            Total
                          </th>
                          <th scope="col " colSpan="6">
                            Delivery
                          </th>
                          <th scope="col " colSpan="6">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {orderData.map((singleData)=>{
                        return(
                            <tr key={singleData._id}>
                              <th scope="row"></th>
                              <td colSpan="2"> {singleData.user_id.firstName} {singleData.user_id.lastName}</td>
                              <td colSpan="6"> {singleData.user_id.address} </td>
                              <td colSpan="6"> {singleData.user_id.phone_no} </td>
                              <td colSpan="6">
                                <p>{singleData.addToCart} </p>
                                </td>
                              <td colSpan="6" style={{"textAlign":"center"}}> 
                              <p>{singleData.serving} </p>
                              
                              </td>
                              <td colSpan="6">{singleData.total} </td>
                              <td colSpan="6"> {singleData.delivery} </td>
                              <td colSpan="6">
                                <div style={{float:"left"}}>
                                <button
                                      className="btn btn-warning mb-2"
                                      style={{
                                       
                                        border: "none",
                                      }}
                                    >
                                     {singleData.status} 
                                    </button>
                                    <i class="fas fa-solid fa-pen-to-square" data-toggle="modal" data-target="#exampleModal" onClick={()=> {setData(singleData._id, singleData.status)}}>Edit</i>
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h2> Update Status </h2>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                        <div class="form-group row">
                                              <label class="col-sm-2 col-form-label">Status</label>
                                              <div class="col-sm-10">
                                                <select
                                                  className="custom-select custom-select-lg"
                                                  style={{ width: "100%" }}
                                                  onChange = {(e)=> setStatus(e.target.value)}
                                                >
                                                  <option selected={status=="Delivered"?true:false}  value="Delivered">Delivered</option>
                                                  <option selected={status=="Pending"?true:false} value="Pending">Pending</option>
                                                  <option selected={status=="On-Progress"?true:false} value="On-Progress">On-Progress</option>
                                                </select>
                                              </div>
                                            </div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" className="btn sendMeal" data-dismiss="modal" style={{marginRight:"180px"}} onClick={updateStatus}>Update Status</button>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                 </td>
                            </tr>
                             )
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
      </AdminDashboard>
    </>
  );
};
export default ViewOrders;
