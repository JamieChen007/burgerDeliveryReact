import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./CartDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import Meal from "../../meals/meal/meal";
import { useState } from "react";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const okHandler = () => {
    // ctx.clearCart();
    ctx.cartDispatch({ type: "clearCart" });
  };

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText="Do you wish to clear cart?"
        />
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Meal Details</h2>
          <div onClick={showConfirmHandler} className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span>clear cart</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal noMeal key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
