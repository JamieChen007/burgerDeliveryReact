import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
  const ctx = useContext(CartContext);
  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Close}>
        <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()} />
      </div>

      <div className={classes.MealDesc}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Meal Details</h2>
        </header>
        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
      <Bar />
    </div>,
    checkoutRoot
  );
};

export default Checkout;
