import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock,days) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty,days));
  };

  const increaseDays=(id,quantity,days)=>{
    const newQty = days + 1;
    dispatch(addItemsToCart(id, quantity,newQty));
  }

  const decreaseDays = (id, quantity,days) => {
    const newQty = days - 1;
    if (1 >= days) {
      return;
    }
    dispatch(addItemsToCart(id, quantity,newQty));
  };

  const decreaseQuantity = (id, quantity,days) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty,days));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };


  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Number of days</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <>
                  <div className="cartContainer" key={item.product}>
                    <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                    <div>
                      <h4 className="hide">Quantity</h4>
                      <div className="cartInput">
                        <button
                          onClick={() =>
                            decreaseQuantity(item.product, item.quantity,item.days)
                          }
                        >
                          -
                        </button>
                        {/* <input type="number" value={item.quantity} /> */}
                        <h5>{item.quantity}</h5>
                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.product,
                              item.quantity,
                              item.stock,
                              item.days
                            )
                          }
                        >
                          +
                        </button>

                      </div>
                    </div>
                    <div>
                      <h4 className="hide">Number of days</h4>
                      <div className="cartInput">
                        <button
                          onClick={() =>
                            decreaseDays(item.product, item.quantity,item.days)
                          }
                        >
                          -
                        </button>
                        <h5>{item.days}</h5>
                        {/* <input type="number" value={item.quantity} /> */}
                        <button
                          onClick={() =>
                            increaseDays(
                              item.product,
                              item.quantity,
                              item.days
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                    <h4 className="hide">Total</h4>
                    <p className="cartSubtotal">{`₹${item.price * item.quantity*item.days }`}</p></div>
                  </div>
                </>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price *item.days,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
