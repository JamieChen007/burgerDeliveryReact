import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Counter = (props) => {
  const cartContext = useContext(CartContext);

  const addHandler = () => {
    cartContext.cartDispatch({ meal: props.meal, type: "addCart" });
  };

  const minusHandler = () => {
    cartContext.cartDispatch({ meal: props.meal, type: "subCart" });
  };

  return (
    <div className={classes.Counter}>
      {props.qty && props.qty !== 0 ? (
        <>
          <button onClick={minusHandler} className={classes.Sub}>
            <span>
              <FontAwesomeIcon icon={faMinus} />
            </span>
          </button>
          <span className={classes.Count}>{props.qty}</span>
        </>
      ) : null}

      <button onClick={addHandler} className={classes.Add}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>
    </div>
  );
};

export default Counter;
