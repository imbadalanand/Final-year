import React from "react";
import Items from "./Items";
// import { CartContext } from "./Cart";
import { Link } from "react-router-dom";

const ContextCart = (props) => {
  
  console.log(props);
  if (props.cart.cart === 0) {
    return (
      <>
        <header>
          <Link className="continue-shopping" to="/">
            <img src="/images/arrow1.png" alt="arrow" className="arrow-icon" /></Link>
            <h3>continue shopping</h3>
          
          <div className="cart-icon">
            <img src="./images/cart.jpg" alt="cart" />
            <p>0</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shoping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{props.cart.totalItem}</span> items in
            shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="/images/arrow1.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.jpg" alt="cart" />
          <p>{props.cart.totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shoping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{props.cart.totalItem}</span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {props.cart.cart.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Total-Amount : <span>₹ {props.cart.totalAmount}</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={props.clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
