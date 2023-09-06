import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartDetails from "./CartDetails/CartDetails";
import { useState } from "react";
import Checkout from "./Checkout/Checkout";
import { useEffect } from "react";

const Cart = () => {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  useEffect(() => {
    if (ctx.totalPrice === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx]);

  return (
    <div onClick={toggleDetailsHandler} className={classes.Cart}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}

      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {ctx.totalAmount === 0 ? (
          ""
        ) : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalPrice === 0 ? (
        <p className={classes.NoBurgerTips}>no burger choose</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}
      <button
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${
          ctx.totalPrice === 0 ? classes.Disabled : ""
        }`}
      >
        check out
      </button>
    </div>
  );
};

export default Cart;
