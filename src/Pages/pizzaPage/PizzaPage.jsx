import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSause, addTopppings } from "../../slice/pizzaSlice";

const PizzaPage = () => {
  const pizza = useSelector((store) => store.pizza);

  const dispatch = useDispatch();

  const handleOnAddToppings = (tp) => {
    alert(tp);
    //add to redux -store
    dispatch(addTopppings(tp));
  };

  const handleOnAddSause = (sause) => {
    alert(sause);
    //add to redux -store
    dispatch(addSause(sause));
  };

  return (
    <div>
      <h1>pizza </h1>
      <h2>Toppings: </h2>
      {pizza.toppings.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      <div>
        <button onClick={() => handleOnAddToppings("Mushroom")}>
          Add Mushroom
        </button>
        <button onClick={() => handleOnAddToppings("Pineapple")}>
          Add Pineapple
        </button>
        <button onClick={() => handleOnAddToppings("Olives")}>
          Add Olives
        </button>
      </div>

      <hr />
      <h2>Sause: </h2>
      {pizza.sause.map((item, index) => {
        console.log(index);
        return <div key={index}>{item}</div>;
      })}
      <button onClick={() => handleOnAddSause("Bolognese")}>
        Bolognese Sause
      </button>
      <button onClick={() => handleOnAddSause("Tomato sause")}>
        Tomato Sause
      </button>
      <button onClick={() => handleOnAddSause("bbq sause")}>Bbq Sause</button>

      <hr />

      <h2>Gluten:</h2>

      {pizza.gluten.toString()}
      <hr />
    </div>
  );
};

export default PizzaPage;
