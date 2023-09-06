import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";
import { useState } from "react";
import { useEffect } from "react";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          className={classes.SearchInput}
          type="text"
          value={keyword}
          placeholder="Please enter keyword"
          onChange={inputChangeHandler}
        />

        <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
      </div>
    </div>
  );
};

export default FilterMeals;
