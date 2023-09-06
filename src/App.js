import { useState } from "react";
import Meals from "./components/meals/meals";
import CartContext from "./store/cart-context";
import FilterMeals from "./components/filterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";
import { useReducer } from "react";

const MEALS_DATA = [
  {
    id: "1",
    title: "Beef Burger",
    desc: "This is a Beef Burger",
    price: 3,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "Double Beef Cheese Burger",
    desc: "This is a Double Beef Cheese Burger",
    price: 4,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "Double Beef Burger",
    desc: "This is a Double Beef Burger",
    price: 4.5,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "Chicken Burger",
    desc: "This is a Chicken Burger",
    price: 2.5,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "Drumstick Burger",
    desc: "This is a Drumstick Burger",
    price: 3,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "Fish Burger",
    desc: "This is a Fish Burger",
    price: 5,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "Beef Cheese Burger",
    desc: "This is a Beef Cheese Burger",
    price: 6,
    img: "/img/meals/7.png",
  },
];

const cartReducer = (cartData, action) => {
  const newCartData = { ...cartData };

  switch (action.type) {
    case "addCart":
      if (newCartData.items.indexOf(action.meal) === -1) {
        newCartData.items.push(action.meal);
        action.meal.qty = 1;
      } else {
        action.meal.qty += 1;
      }
      newCartData.totalAmount += 1;
      newCartData.totalPrice += action.meal.price;
      return newCartData;
    case "subCart":
      action.meal.qty -= 1;
      if (action.meal.qty === 0) {
        newCartData.items.splice(newCartData.items.indexOf(action.meal), 1);
      }

      newCartData.totalAmount -= 1;

      newCartData.totalPrice -= action.meal.price;

      return newCartData;
    case "clearCart":
      newCartData.items.forEach((item) => delete item.qty);
      newCartData.items = [];
      newCartData.totalAmount = 0;
      newCartData.totalPrice = 0;
      return newCartData;
    default:
      return cartData;
  }
};

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const filterData = (keyword) => {
    // const newData = data.filter((item) => item.desc !== desc);
    // return setData(newData);

    if (keyword === "") {
      setMealsData(MEALS_DATA);
      return;
    }

    const filterMeals = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );

    setMealsData(filterMeals);
  };

  return (
    <CartContext.Provider
      value={{
        ...cartData,
        cartDispatch: cartDispatch,
      }}
    >
      <div className="App" style={{ width: "750rem" }}>
        <FilterMeals onFilter={filterData} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
