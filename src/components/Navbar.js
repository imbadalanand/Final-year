import React from 'react'
import { Link } from "react-router-dom";
import Login from './Login';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Refurbished Book Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Feature Books
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="#">Patriotism</Link></li>
                                    <li><Link className="dropdown-item" to="#">Religious</Link></li>
                                    <li><Link className="dropdown-item" to="#">Poetry</Link></li>
                                    <li><Link className="dropdown-item" to="#">Biography</Link></li>
                                    <li><Link className="dropdown-item" to="#">Historical items</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                      <li> <Link to="/Login">Login</Link></li> 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
