import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Chip,
} from '@mui/material';

import "./ProductList.css"

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProductList = ({ products, addToCart, removeFromCart }) => {
  const [quantities, setQuantities] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));

    // Update shopping cart notification number when the quantity changes
    const totalQuantity = Object.values(quantities).reduce((total, qty) => total + qty, 0);
    setAddedToCart({ totalQuantity });
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setAddedToCart({ totalQuantity: 1 });

    // Increase the quantity by 1 or set to 1 if it doesn't exist
    const newQuantity = (quantities[productId] || 0) + 1;
    handleQuantityChange(productId, newQuantity);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);

    // Decrease the quantity by 1 or set to 0 if it goes below 0
    const newQuantity = Math.max((quantities[productId] || 0) - 1, 0);
    handleQuantityChange(productId, newQuantity);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', fontFamily: "Graphik-Regular"}}>
      {showBackToTop && (
        <IconButton
          onClick={handleBackToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#3f51b5',
            color: '#fff',
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
      
      {products.map((product) => (
        <Card key={product.id} className='product-card'>
          <Link to={`/products/${product.id}`} style={{ color: "#000", textDecoration: "none" }}>
            <CardMedia
              component="div"
            >
              <img
                alt={product.name}
                className="product-image"
                loading="lazy"
                style={{
                  maxWidth: "250px",
                  height: "auto",
                  display: "flex",
                  margin: "0 auto",
                  padding: "8px",
                  borderRadius: "20px",
                }}
                src={product.image} />

            </CardMedia>
            <CardContent>
              <Typography className='product-name' gutterBottom  style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}>
                {product.name}
              </Typography>
              <Typography color="text.secondary"  style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}>
                &#x20A6;{product.price}
              </Typography>
            </CardContent>
          </Link>
          <div className="quantity-controls">
            {quantities[product.id] > 0 ? (
              <>
                <IconButton
                  onClick={() => handleRemoveFromCart(product.id)}
                  aria-label="RemoveCircleIcon"
                  size="medium"
                >
                  <RemoveCircleIcon fontSize="inherit" />
                </IconButton>
                <Chip
                  size="small"
                  variant="outlined"
                 
                  label={quantities[product.id]}
                  style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                />
                <IconButton
                  onClick={() => handleAddToCart(product.id)}
                  aria-label="AddCircleIcon"
                  size="medium"
                >
                  <AddCircleIcon fontSize="inherit" />
                </IconButton>
              </>
            ) : (
            
            <button onClick={() => handleAddToCart(product.id)} 
            className='addToCartButton' style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif',
            cursor: 'pointer' }} >
              Add to Cart
          </button>
           )}
           
          </div>
           
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
