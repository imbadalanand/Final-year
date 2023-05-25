import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")))

  const [quantity, setQuantity] = useState(1)

  // console.log(data, 8)

  const handleIncQty = () => {
    console.log("here")
    setQuantity(quantity + 1)
  }

  const handleDecQty = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1)
    }
  }


  return (


    <div style={{ backgroundColor: "#eee" }}>
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


      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0"><span className="text-muted">Sort by:</span> <Link to="#!" className="text-body">price <i
                    className="fas fa-angle-down mt-1"></i></Link></p>
                </div>
              </div>

              {data?.map((product) => {
                return (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={product?.image}
                            className="img-fluid rounded-3" alt="book pic" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{product?.name}</p>
                          <p class="lead fw-sm mb-2">{product?.description.substring(1, 24) + "..."}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                          <button className="btn btn-link px-2"
                            onClick={handleDecQty}>
                            <i className="fas fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value={quantity} readOnly type="number"
                            className="form-control form-control-sm" />

                          {/* <span>{quantity}</span> */}

                          <button className="btn btn-link px-2"
                            onClick={handleIncQty}>
                            <i className="fas fa-plus"></i>
                          </button>

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">{product?.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {
                data?.length !== 0 ?
                  <>
                    <div className="card mb-4">
                      <div className="card-body p-4 d-flex flex-row">
                        <div className="form-outline flex-fill">
                          <input type="text" id="form1" className="form-control form-control-lg" placeholder='Apply Coupon here' />
                          <label className="form-label" for="form1">Discount code</label>
                        </div>
                        <button type="button" className="btn btn-outline-primary ms-3">Apply</button>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-body">
                        <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                      </div>
                    </div>
                  </>
                  : <h1>Cart Is Empty</h1>
              }

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
