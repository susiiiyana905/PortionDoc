import { Navigate } from "react-router-dom";
import React from "react"

function AdminPrivateRoute({ children }) {
    var isAuth;
  if(localStorage.getItem('adminToken')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/" />;
}

export default AdminPrivateRoute;