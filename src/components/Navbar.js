import React, { useState } from 'react'
import { Link } from "react-router-dom";
import data from "../data"
import { useSelector } from 'react-redux';

const Navbar = () => {

    const getdata = useSelector((state) => state.cartReducer);
    console.log(getdata);

    const [category, setCategory] = useState(data);
    const filterResult = (catItem) => {
        const result = data.filter((curData) => {
            return curData.category===catItem;
        });
        console.log("result", result);
        setCategory(result);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary text-white">
                <div className="container-fluid" style={{ color: "white" }} >
                    <img src="../images/logo.png" style={{ width: "70px", height: "60px" }} alt="" />
                    <Link className="navbar-brand" to="/" style={{ color: "white" }}>Refurbished Book Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                    Feature Books
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={() => filterResult("Fiction")}>Fiction</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => filterResult("Science")}>Science</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => filterResult("Religious")}>Religious</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => filterResult("Poetry")}>Poetry</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => filterResult("Biography")}>Biography</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => filterResult("Finance")}>Finance</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact" style={{ color: "white" }} >Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-light" type="submit">Search</button>
                        </form>
                        {/* <Link to="#"><i className="fa-solid fa-bell" style={{margin:"10px 10px", color: "white"}} ></i></Link> */}
                        <Link to="/Wishlist"><i className="fa-regular fa-heart" style={{ margin: "10px 10px", color: "white" }} ></i></Link>
                        <Link to="/Cart" ><i className="fa-solid fa-cart-shopping" style={{ margin: "10px 10px", color: "white" }} ></i></Link>
                        <Link to="/Login" ><i className="fa-solid fa-user" style={{ margin: "10px 10px", color: "white" }} ></i></Link>
                    </div>
                    <div className='admin' style={{ position: "absolute", top: "1px", right: "1px", border: "cover" }}>
                        <Link to="/Admin">Admin</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
