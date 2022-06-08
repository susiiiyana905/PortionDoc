import { Navigate } from "react-router-dom";


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