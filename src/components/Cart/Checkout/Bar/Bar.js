import classes from "./Bar.module.css";
import CartContext from "../../../../store/cart-context";
import { useContext } from "react";

const Bar = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.Bar}>
      <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
      <button className={classes.Button}>pay</button>
    </div>
  );
};

export default Bar;
