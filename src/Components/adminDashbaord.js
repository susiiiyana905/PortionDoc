import React, { useEffect } from "react";
import { Link, Router } from "react-router-dom";
const AdminDashboard = ({children}) => {
    useEffect(() => {
        console.log("fsdf");
    }, [])
        return (
            <>
        <div className="container-fluid">
        <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <h4>Admin Dashboard</h4>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    {/* <li className="nav-item">
                        <Link to="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Category</span> </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addCategory" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Category</span> </Link>
                            </li>
                            <li>
                                <Link to ="/viewCategory" className="nav-link px-0"> <span className="d-none d-sm-inline">View Category</span> </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Preference Category</span> </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addPreferenceCategory" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Category</span> </Link>
                            </li>
                            <li>
                                <Link to ="/showPreferenceCategory" className="nav-link px-0"> <span className="d-none d-sm-inline">View Category</span> </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></Link>
                    </li>
                    <li>
                        <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Dietary</span></Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/add" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Diet Meal</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewMealDiet" className="nav-link px-0"> <span className="d-none d-sm-inline">View Diet Meal</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewDietMeal" className="nav-link px-0"> <span className="d-none d-sm-inline">View Prefence Diet Meal</span></Link>
                            </li>
                            <li>
                                <Link to="/viewDietRequest" className="nav-link px-0"> <span className="d-none d-sm-inline">Requested Diet</span> </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Meals</span> </Link>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addMeal" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Meals</span> </Link>
                            </li>
                            <li>
                                <Link to="/viewMeal" className="nav-link px-0"> <span className="d-none d-sm-inline">View Meal</span> </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/userRecipe" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">User Recipes</span></Link>
                    </li>
                    <li>
                        <Link to="/viewReview" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Review</span> </Link>
                    </li>
                </ul>
            <hr />
                <div className="dropdown pb-4">
                    <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </Link> 
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="/">New project...</a></li>
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="/">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <div className="col py-3">
                        {children}
        </div>
    </div>
</div>
</>
        )
    }
export default AdminDashboard;