import React, { useContext } from "react";
import Items from "./Items";


import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalAmount, totalItem } = useContext(CartContext);
  

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="/images/arrow1.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.jpg" alt="cart" />
            <p>0</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shoping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem}</span> items in
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
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shoping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Total-Amount : <span>₹ {totalAmount}</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
