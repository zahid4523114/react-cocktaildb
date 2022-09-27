import React from "react";
import "./Cocktail.css";

const Cocktail = (props) => {
  let { cocktail, addToCartBtn } = props;
  let { strDrinkThumb, strIngredient2, strGlass, strAlcoholic } = cocktail;
  return (
    <div style={{ width: "18rem" }}>
      <div className="rounded shadow-lg text-white mb-2 p-2">
        <img className="w-100 rounded mb-2" src={strDrinkThumb} alt="" />
        <h4>{strIngredient2}</h4>
        <p>{strAlcoholic}</p>
        <p>{strGlass}</p>
        <button
          onClick={() => addToCartBtn(cocktail)}
          className="btn btn-primary rounded-5 d-block text-center container-fluid"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Cocktail;
