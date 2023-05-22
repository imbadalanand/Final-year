import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://images.squarespace-cdn.com/content/v1/54d8f3b4e4b04def03ef0878/1556104982134-6LUAOFH4OSYW1XBAAKVA/library%2520books.jpg"
                className="img-fluid" alt="sample pic" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Login with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <Link to="#!" className="text-body">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg">Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/Signup"
                    className="link-danger">Register</Link></p>
                </div>

              </form>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* <!-- Copyright --> */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
          </div>
          {/* <!-- Copyright --> */}

          {/* <!-- Right --> */}
          <div>
            <Link to="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          {/* <!-- Right --> */}
        </div>
      </section>
    </>
  )
}

export default Login;