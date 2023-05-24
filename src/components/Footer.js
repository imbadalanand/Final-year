import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

      <hr className="text-center text-lg-start bg-light text-muted"/>

      <footer >

        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>





        </section> */}



        <section>
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


                <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-book-open-cover me-3"></i>Refurbished Book Store
                </h6>
                <p>
                The Refurbished bookstore adds a modern, minimal visual layer to any e-comm bookstore site, perfect for authors, bloggers, stores, and publishers to showcase their works in the best way possible.
                </p>
              </div>




              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <Link to="#!" className="text-reset">Fiction</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Poetry</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Podcasts</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Articles</Link>
                </p>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <Link to="#!" className="text-reset">Pricing</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Settings</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Orders</Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">Help</Link>
                </p>
              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Patna, Bihar, INDIA</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  computerhubsarai@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +91 9661671360</p>
                <p><i className="fas fa-phone me-3"></i> +91 7004493428</p>
                <p><i className="fas fa-print me-3"></i> +91 9504695107</p>
              </div>

            </div>

          </div>
        </section>



        <div
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-secondary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023.
        
          <Link className='text-reset fw-bold'> Harshit, Badal & Hemant.</Link>  </div>

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

      </footer>

    </div>
  )
}

export default Footer