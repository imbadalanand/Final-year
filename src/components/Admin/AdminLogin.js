import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">

                            <div className="px-5 ms-xl-4">
                                <i className="fa-solid fa-open-book"></i>
                                <span className="h1 fw-bold mb-0">Admin Login</span>
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                <form style={{width: "23rem"}}>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example18" className="form-control form-control-lg" placeholder='Enter Email Address' />
                                        <label className="form-label" for="form2Example18">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" placeholder='Password' />
                                        <label className="form-label" for="form2Example28">Password</label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <Link to="/Admin"><button className="btn btn-info btn-lg btn-block" type="button">Login</button></Link>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><Link className="text-muted" to="#!">Forgot password?</Link></p>
                                    <p>Don't have an account? <Link to="#!" className="link-info">Register here</Link></p>

                                </form>

                            </div>

                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src="https://www.pngitem.com/pimgs/m/274-2748802_transparent-tech-support-icon-png-admin-login-images.png"
                                alt="admin Login img" className="w-100 vh-100" style={{objectFit: "cover", objectPosition: "left"}}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminLogin
