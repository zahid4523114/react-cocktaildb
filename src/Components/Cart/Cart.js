import React from "react";

const Cart = (props) => {
  let { cart } = props;
  let drink;
  let ingredient;
  let description;
  for (let product of cart) {
    console.log(product);
    drink = product.strDrink;
    ingredient = product.strIngredient3;
    description = product.strInstructionsES;
  }
  return (
    <div className="text-white">
      <h5>{}</h5>
      <p>Drink: {drink}</p>
      <p>Ingredient: {ingredient}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Cart;
