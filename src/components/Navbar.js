import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateFilteredProduct } from "../redux/actions/action";
import Login from "./Login";
import { Nav, NavDropdown } from "react-bootstrap";


const Navbar = () => {
    
  const dispatch = useDispatch();
  const allProduct = useSelector((s) => s.cartReducer.allProduct);
  const navigate = useNavigate();

  const filterResult = (catItem) => {
    const result = allProduct.filter((curData) => {
      return curData.category === catItem;
    });
    console.log("result", result);
    dispatch(updateFilteredProduct(result));
  };

  const [searchid, searchupdate] = useState("");


  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <>
      <Link to={"/login"}>Logout</Link>
      <nav className="navbar navbar-expand-lg bg-secondary text-white">
        <div className="container-fluid" style={{ color: "white" }}>
          <img src="../images/logo.png" style={{ width: "70px", height: "60px" }} alt="" />
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            Refurbished Book Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}>
                  Feature Books
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" onClick={() => filterResult("Fiction")}>
                      Fiction
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => filterResult("Science")}>
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => filterResult("Religious")}>
                      Religious
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => filterResult("Romance")}>
                      Romance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => filterResult("Biography")}>
                      Biography
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => filterResult("Finance")}>
                      Finance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact" style={{ color: "white" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                value={searchid}
                onChange={(e) => searchupdate(e.target.value)}
                className="form-control me-3"
                type="text"
                id="userInput"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to={`/Search/${searchid}`}>
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </Link>
            </form>

            <Link to="/Cart">
              <i className="fa-solid fa-cart-shopping" style={{ margin: "10px 10px", color: "white" }}></i>
            </Link>

          { userInfo? (
            <NavDropdown title={userInfo.name} id="username">
                <Link to='/profile'>
                    <NavDropdown.Item>
                        Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                        Logout
                    </NavDropdown.Item>
                </Link>

            </NavDropdown>
          ) : (
            <Link to='/Login'>
               <i className="fa-solid fa-user" style={{ margin: "10px 10px", color: "white" }}>&nbsp; Sign In</i>
                
                
            
            </Link>
          )}

            
          </div>
        </div>
      </nav>
      <div className="admin" style={{ position: "absolute", top: "1px", right: "1px", border: "cover" }}>
        <Link to="/AdminL">Admin</Link>
      </div>
    </>
  );
};

export default Navbar;
