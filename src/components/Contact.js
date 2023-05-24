import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder='Enter Your Name' />
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" placeholder='Enter Your Email Address' />
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                            </div>

                            {/* <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder='' />
                                    </div>
                                </div>
                            </div>

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="4" className="form-control md-textarea" placeholder='Describe Your Issue Here...'></textarea>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                        </form>
                        <br />
                        <br />

                        <div className="text-center text-md-left">
                            <Link className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send Now</Link>
                        </div>
                        <div className="status"></div>
                    </div>

                    {/* <!--Grid column--> */}
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Patna Bihar, India</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+91 9661671360</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>computerhubsarai.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
