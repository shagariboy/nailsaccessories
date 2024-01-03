import React, { useState } from 'react';
import { Box, Button, IconButton, Chip, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShippingDetails from '../ShippingDetails';


import  './ShoppingCart.css'

export const ShoppingCart = ({
  cart,
  addToCart,
  removeFromCart,
  getTotalPrice,
  getTotalQuantity,
  checkout,
  sendWhatsAppMessage,
}) => {
  const [showShippingDetails, setShowShippingDetails] = useState(false);

  const handleProceed = (shippingInfo) => {
    setShowShippingDetails(false);
    sendWhatsAppMessage(shippingInfo); 
    handleCheckout();
  };

  const handleCheckout = async () => {
    try {
      await checkout();

      // Show SweetAlert2 success message
      Swal.fire({
        icon: 'success',
        title: 'Checked Out Successfully!',
        fontFamily: 'Calibre-Regular',
        html: `
          <div>
            <a href="/" style={{ textDecoration: 'none', backgroundColor: 'black', color: 'yellow', marginTop: '10px', cursor: "pointer", display: 'inline-block' }}>
              <p style={{ backgroundColor: 'black', color: 'yellow', marginTop: '10px', textDecoration: 'none' }}>
                Back to Shop
              </p>
            </a>
          </div>
        `,
        timer: 600000, // 1 minute
        showConfirmButton: false,
        customClass: {
          title: 'custom-swal-title',
        },
      });
    } catch (error) {
      console.error('Checkout failed', error);
    }
  };

  return (
    <Box component="div" className="shopping-cart" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {showShippingDetails ? (
        <ShippingDetails onProceed={handleProceed} showShippingDetails={showShippingDetails} setShowShippingDetails={setShowShippingDetails} />

      ) : (
        <>
          <Box component="div" className='checkout-container' style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto", alignSelf: "center", verticalAlign: "center", border: "1px solid #000", borderRadius: "5px", padding: "10px", maxWidth: "250px", marginTop:"10px", backgroundColor: "#f4f4f4", marginBottom: 'auto' }}>
            <Typography variant="body1" color="primary" fontWeight={700} display="flex" alignItems="center" mb={1} style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif', color: "#000"}}>
              Total Payment:  <p style={{color: "black", fontWeight: "700", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>&nbsp; &#8358;{getTotalPrice()} </p>
            </Typography>
            <Typography variant="body1" color="primary" fontWeight={700} display="flex" alignItems="center" mb={1} style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif', color: "#000"}}>
              Total Quantity: <p style={{color: "black", fontWeight: "700", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>&nbsp;  {getTotalQuantity()} </p>
            </Typography>
            <Button variant="contained" style={{backgroundColor: "green"}} onClick={() => setShowShippingDetails(true)}>
              Proceed To Checkout
            </Button>
          </Box>

          <Box component="div" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100%", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif', marginBottom: 'auto' }}>
            {cart.length === 0 ? (
              <p style={{color: "orange",fontSize: "20px", fontWeight: "400", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <Box key={item.id} component="div" className="cart-item" style={{ textAlign: "center", verticalAlign: "center", flex: '0 0 48%', border: "1px solid #000", borderRadius: "5px", margin: "10px", padding: "10px", backgroundColor: "#f4f4f4" }}>
                    <Box component="div">
                      <img style={{ height: "200px", borderRadius: "5px", marginBottom: "10px" }} src={item.image} alt={item.name} />
                      <Typography variant="body1" fontWeight={700} mb={1} style={{color: "#000", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>
                        {item.name}
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={700} mb={1} style={{color: "#000", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>
                      &#8358;{item.price * item.quantity}
                    </Typography>
                    <Box style={{ textAlign: "center" }}>
                      <IconButton onClick={() => removeFromCart(item.id)}><RemoveCircleIcon fontSize="inherit" /></IconButton>
                      <Chip style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}} label={item.quantity} />
                      <IconButton onClick={() => addToCart(item.id)}><AddCircleIcon fontSize="inherit" /></IconButton>
                    </Box>
                  </Box>
                ))}
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
