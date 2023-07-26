import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin = () => {
    
    const navigate = useNavigate();

    if((localStorage.getItem("admin")))
    {    
    }
    else{
        navigate("/AdminL");
        toast.error("Please Admin Login")
    }

    return (
        <>
            <div className="d-flex justify-content-around mt-4">
                <div className="card text-center mx-2 my-2" style={{width:"24rem"}}>
                    <div className="card">
                        <h2 className="card-header text-center">User</h2>
                        <img src="https://cdn-icons-png.flaticon.com/512/166/166258.png" className="card-img-top" alt="..." style={{height:"20rem"}} />
                        <div className="card-body">
                            <Link to="/User" className="btn btn-primary" >Go to User Sction</Link>
                        </div>
                    </div>
                </div>
                <div className="card text-center mx-2 my-2" style={{width:"24rem"}}>
                    <div className="card">
                        <h2 className="card-header text-center">Product</h2>
                        <img src="https://thrivethinking.com/wp-content/uploads/2019/12/10BooksServiecDesign_1.jpg" className="card-img-top" alt="..." style={{height:"20rem"}} />
                        <div className="card-body">
                            <Link to="/Product" className="btn btn-primary center">Go to Product Sction</Link>
                        </div>
                    </div>
                </div>
                <div className="card text-center mx-2 my-2" style={{width:"24rem"}}>
                    <div className="card">
                        <h2 className="card-header text-center">Order</h2>
                        <img src="https://icon-library.com/images/order-icon-png/order-icon-png-24.jpg" className="card-img-top" alt="..." style={{height:"20rem"}} />
                        <div className="card-body">
                            <Link to="/Order" className="btn btn-primary">Go to Order Sction</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Admin
