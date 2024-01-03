import React, { useState } from 'react';
import './Home.css'
import ProductList from "../ProductList";
import products from "../../productsData";

export const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    if (!updatedCart.some((item) => item.id === productId)) {
      const productToAdd = products.find((item) => item.id === productId);
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    } else {
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
  };

  return (
    <div>
      <div className="header-text"><h2>Find things you'll love. Achieve Classy!</h2></div>
    <div className="container">
    <ProductList products={products}
            removeFromCart={removeFromCart} 
            addToCart={addToCart}
            cart={cart}
            updateQuantity={updateQuantity}  /></div>
    
    </div>
  );
};
