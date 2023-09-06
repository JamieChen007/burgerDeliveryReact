import Meal from "./meal/meal";
import classes from "./meals.module.css";

const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {props.mealsData.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
