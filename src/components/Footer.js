import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
     
<footer className="text-center text-lg-start bg-light text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    

  
    
   
  </section>
 

 
  <section className="">
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
          Empowering minds through the magic of books, connecting readers and sellers with knowledge and inspiration.
          </p>
        </div>
     

       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to="#!" className="text-reset">BookBazaar</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">NovelNook</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">BookHive</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Bookiverse</Link>
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
          <p><i className="fas fa-home me-3"></i> Patna, Bihar, India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            contact@refurbishedbook.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +919661671360</p>
          <p><i className="fas fa-phone me-3"></i> +916207130873</p>
          <p><i className="fas fa-phone me-3"></i> +917004493428 </p>
        </div>
       
      </div>
     
    </div>
  </section>


 
  <div className="text-center p-4" style={{backgroundColor: "grey"}}>
    © 2023 Copyright:
    <Link className="text-reset fw-bold">Harshit, Hemant & Badal</Link>
  </div>

</footer>

    </div>
  )
}

export default Footer