import Counter from "../../UI/Counter/Counter";
import classes from "./meal.module.css";

const Meal = (props) => {
  return (
    <div className={classes.MealBox}>
      <div className={classes.ImgBox}>
        <img src={props.meal.img} />
      </div>
      <div className={classes.BurgerInfo}>
        <h2 className={classes.Name}>{props.meal.title}</h2>
        {props.noMeal ? null : (
          <span className={classes.Desc}>{props.meal.desc}</span>
        )}
        <div className={classes.Money}>
          <p className={classes.UnitPrice}>{props.meal.price}</p>
          <Counter meal={props.meal} qty={props.meal.qty} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
