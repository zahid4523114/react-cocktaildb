import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Cocktail from "../Cocktail/Cocktail";
import "./Shop.css";

const Shop = () => {
  let [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  let [cart, setCart] = useState([]);

  let addToCart = (cocktail) => {
    let addedProduct = [...cart, cocktail];
    setCart(addedProduct);
  };

  return (
    <div className="row container-fluid">
      <div className="cocktail-container col-9">
        {cocktails.map((cocktail) => (
          <Cocktail
            addToCartBtn={addToCart}
            key={cocktail.idDrink}
            cocktail={cocktail}
          ></Cocktail>
        ))}
      </div>
      <div className="cart-container  position-sticky top-0 p-2 h-50 rounded col-3">
        <h1 className="text-center text-white ">Cart</h1>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
