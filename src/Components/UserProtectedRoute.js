import { Navigate } from "react-router-dom";
import React from "react"

function UserPrivateRoute({ children }) {
    var isAuth;
  if(localStorage.getItem('userToken')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default UserPrivateRoute;