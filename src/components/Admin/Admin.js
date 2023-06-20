import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col h-20 w-10">
                    <div className="card h-100">
                        <h2 className="card-title text-center">User</h2>
                        <img src="https://cdn-icons-png.flaticon.com/512/166/166258.png" className="card-img-top" alt="..." style={{height:"20rem"}} />
                        <div className="card-body">
                            <p className=" text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <Link to="/User" className="btn btn-primary" >Go to User Sction</Link>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <h2 className="card-title text-center">Product</h2>
                        <img src="https://thrivethinking.com/wp-content/uploads/2019/12/10BooksServiecDesign_1.jpg" className="card-img-top" alt="..." style={{height:"20rem"}} />
                        <div className="card-body">
                            <p className="text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <Link to="/Product" className="btn btn-primary center">Go to Product Sction</Link>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <h2 className="card-title text-center">Order</h2>
                        <img src="https://icon-library.com/images/order-icon-png/order-icon-png-24.jpg" className="card-img-top" alt="..." style={{height:"20rem"}} />
                        <div className="card-body">
                            <p className="text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <Link to="/Order" className="btn btn-primary">Go to Order Sction</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Admin
