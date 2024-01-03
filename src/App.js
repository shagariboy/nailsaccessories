import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShoppingCart } from "./components/Pages/ShoppingCart";
import products from './productsData';
import './App.css';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import DetailsPage from './components/DetailsPage';
import Footer from './components/Footer';
import ImageBanner from './components/ImageBanner';
import "././components/ProductList.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showShippingDetails, setShowShippingDetails] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

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

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const checkout = (shippingInfo) => {
    // Merge shippingInfo with cart details
    const orderDetails = cart.map(
      (item) =>
        `${item.name} - Quantity: ${item.quantity} - Price: ₦${item.price * item.quantity}`
    ).join('%0a');

    // Combine product details and shipping details
    const message = `
      New Order Details:
      ${orderDetails}
      
      Shipping Details:
      First Name: ${shippingInfo.firstName}
      Last Name: ${shippingInfo.lastName}
      Phone Number: ${shippingInfo.phoneNumber}
      Email Address: ${shippingInfo.emailAddress}
      Address: ${shippingInfo.address}
      City: ${shippingInfo.city}
      Shipping Fee: ₦${shippingInfo.shippingFee}
      
      Total: ₦${getTotalPrice()}
    `;

    // Send the message to the seller via WhatsApp
    const sellerWhatsAppNumber = '+2349112136737'; // Replace with the actual number
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp in a new window on user-initiated click
    const whatsappLink = `https://wa.me/${sellerWhatsAppNumber}?text=${encodedMessage}`;
    const newWindow = window.open(whatsappLink, '_blank');
    if (newWindow) {
      newWindow.focus();
    }
  };

  const sendWhatsAppMessage = (shippingInfo) => {
    const sellerWhatsAppNumber = '+2349112136737'; // Replace with the actual number

    const orderDetails = cart.map(
      (item) =>
        `${item.name} - Quantity: ${item.quantity} - Price: ₦${item.price * item.quantity}`
    );

    const userDetails = `
    First Name: ${shippingInfo.firstName}
    Last Name: ${shippingInfo.lastName}
    Phone Number: ${shippingInfo.phoneNumber}
    Email Address: ${shippingInfo.emailAddress}
    Address: ${shippingInfo.address}
    City: ${shippingInfo.city}
    Shipping Fee: ₦${shippingInfo.shippingFee}
  `;

  const message = `
  New Order Details:
  ${userDetails}
  
  Order Items:
  ${orderDetails}
  
  Total: ₦${getTotalPrice()}
`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${sellerWhatsAppNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleProceed = (shippingInfo) => {
    // Perform any necessary actions with the shipping information
    console.log('Shipping Info:', shippingInfo);

    // Send WhatsApp message with user's details and order information
    sendWhatsAppMessage(shippingInfo);

    // For demonstration purposes, simulate the checkout after sending WhatsApp message
    // You can replace this with your actual checkout logic
    setShowShippingDetails(false);
    checkout(shippingInfo); // Pass the shippingInfo to the checkout function
  };

  return (
    <>
      <Router>
        <div className='app-container'> 
          <Navbar cartItemCount={cartItemCount} cart={cart} />
          <ImageBanner />
          <div className="App">
            <Routes>
              <Route path="/" element={<ProductList products={products} removeFromCart={removeFromCart} addToCart={addToCart} />} />
              <Route path="/cart" element={
                <ShoppingCart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                  getTotalQuantity={getTotalQuantity}
                  getTotalPrice={getTotalPrice}
                  checkout={checkout}
                  showShippingDetails={showShippingDetails}
                  setShowShippingDetails={setShowShippingDetails}
                  handleProceed={handleProceed}
                  sendWhatsAppMessage={sendWhatsAppMessage}
                />
              } />
              <Route path='/products/:id/*' element={<DetailsPage addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
