import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'material-ui-rating'


const Review = () => {

  const [value, setValue] = useState(1)

  return (
    <div style={{ backgroundColor: "" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }} >
        <div className='continue-shopping' style={{ display: "flex" }} >
          <Link to="/" ><i className="fa-solid fa-arrow-left" style={{ margin: "10px 10px", color: "black" }} ></i></Link>
          <h3>Continue Shopping</h3>
        </div>
        <div className='cart-icon'>
          <Link to="/Cart" ><i className="fa-solid fa-cart-shopping" style={{ margin: "0px 50px", color: "black" }} ></i></Link>
        </div>
      </header>
      <hr />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h4>Write a Review</h4>
        <p>Write your own book review for your product. </p>
      </div>
      <form style={{ justifyContent: "center" }}>
        <div className="mb-3">
          <label className="form-label">Your Full Name</label>
          <input type="text" className="form-control" aria-describedby="text" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label className="form-label">Feedback</label>
          <textarea className="form-control" rows="3" placeholder='Explain Your Feedback'></textarea>
        </div>
        <div className="rating" style={{ display: "flex", justifyContent: "center" }}>
          <Rating
            value={value}
            max={5}
            onChange={(value) => setValue(value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ display: "flex", justifyContent: "center" }}>Submit</button>
      </form>
      <br />
      <h5><u> Some Review from our Happy Customers</u></h5>
      <p>Be the first to write a review on this book....</p>

    </div>
  )
}

export default Review
