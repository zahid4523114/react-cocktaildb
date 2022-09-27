import React from "react";

const Cart = (props) => {
  let { cart, removeCocktail } = props;

  return (
    <div className="text-white mb-4">
      <img className="container-fluid mb-3" src={cart.strDrinkThumb} alt="" />
      <p>Drink: {cart.strDrink}</p>
      <p>Ingredient: {cart.strIngredient1}</p>
      <p>Description: {cart.strInstructionsDE}</p>
      <button
        onClick={() => removeCocktail(cart)}
        className="btn btn-primary container-fluid rounded-5"
      >
        Remove
      </button>
    </div>
  );
};

export default Cart;
