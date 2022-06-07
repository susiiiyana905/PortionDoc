import { Navigate } from "react-router-dom";


function UserPrivateRoute({ children }) {
    var isAuth;
  if(localStorage.getItem('userToken')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/" />;
}

export default UserPrivateRoute;