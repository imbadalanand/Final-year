import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div class="card text-center mb-3" style={{width:"18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Users</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="#" class="btn btn-primary">Go to User Section</Link>
                </div>
            </div>
            <div class="card text-center mb-3" style={{width:"18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Products</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="#" class="btn btn-primary">Go to Product Section</Link>
                </div>
            </div>
            <div class="card text-center mb-3" style={{width:"18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Orders</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="#" class="btn btn-primary">Go to User Section</Link>
                </div>
            </div>
        </>

    )
}

export default Admin
