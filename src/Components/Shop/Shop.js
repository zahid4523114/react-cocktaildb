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

  //add items
  const addToCart = (cocktail) => {
    let exist = cart.find(
      (eachCockTail) => eachCockTail.idDrink === cocktail.idDrink
    );
    let holdCockTail = [];
    if (!exist) {
      holdCockTail = [...cart, cocktail];
    } else {
      let rest = cart.filter(
        (eachCockTail) => eachCockTail.idDrink !== cocktail.idDrink
      );
      holdCockTail = [...rest, exist];
    }
    // console.log(holdCockTail);
    setCart(holdCockTail);
  };

  //remove items
  let removeCocktail = (cocktail) => {
    let remove = cart.filter((product) => product.idDrink !== cocktail.idDrink);
    setCart(remove);
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
      <div className="cart-container  position-sticky top-0 p-2  overflow-auto rounded col-3">
        <h1 className="text-center text-white ">Cart</h1>
        {cart.map((item) => (
          <Cart removeCocktail={removeCocktail} cart={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Shop;
