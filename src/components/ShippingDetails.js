// ShippingDetails.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const ShippingDetails = ({ onProceed, showShippingDetails, setShowShippingDetails }) => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    city: '',
  });

  const handleChange = (field) => (event) => {
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [field]: event.target.value,
    }));
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));
  };

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};

    // Validation logic for each field
    if (shippingInfo.firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (shippingInfo.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (shippingInfo.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone Number is required';
      isValid = false;
    } else if (!/^\d{11}$/.test(shippingInfo.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid Phone Number format';
      isValid = false;
    }

    if (shippingInfo.emailAddress.trim() === '') {
      newErrors.emailAddress = 'Email Address is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(shippingInfo.emailAddress)) {
      newErrors.emailAddress = 'Invalid Email Address format';
      isValid = false;
    }

    if (shippingInfo.address.trim() === '') {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (shippingInfo.city.trim() === '') {
      newErrors.city = 'City is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleProceed = async () => {
    // Validate inputs before proceeding
    if (!validateInputs()) {
      return;
    }

    // For simplicity, assume the shipping fee is based on the city
    const shippingFee = shippingInfo.city.toLowerCase() === 'warri' ? 1000 : 1500;


    // Include checkout logic inside handleProceed
    try {

      // Proceed with the checkout and show SweetAlert2 success message
      Swal.fire({
        icon: 'success',
        title: 'Checked Out Successfully!',
        html: `
          <div>
            <a href="/" style={{ textDecoration: 'none', backgroundColor: 'black', color: 'yellow', marginTop: '10px', cursor: "pointer", display: 'inline-block' }}>
              <p style={{ backgroundColor: 'black', color: 'yellow', marginTop: '10px', textDecoration: 'none' }}>
                Back to Shop
              </p>
            </a>
          </div>
        `,
        fontFamily: 'Calibre-Regular',
        timer: 6000, // 1 minute
        showConfirmButton: false,
      });

      // Call onProceed with both shippingInfo and handleCheckout
      onProceed({ ...shippingInfo, shippingFee });
    } catch (error) {
      console.error('Checkout failed', error);
    }
  };

  return (
    <div>
      <h2 style={{color: "#000", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>Shipping Address</h2>
      <form style={{ width: "100%"}}>
        <TextField
          label="First Name" labelStyle={{ color: "#000" }}
          variant="outlined"
          style={{width: '48%', marginRight: '2%', 
          borderColor: "#000", color: "#000",
          '&:focus': {
            color: '#000', // Change the text color when focused
          },}}
          margin="normal"
          value={shippingInfo.firstName}
          onChange={handleChange('firstName')}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          style={{width: '48%'}}
          margin="normal"
          value={shippingInfo.lastName}
          onChange={handleChange('lastName')}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          style={{width: '48%', marginRight: '2%'}}
          margin="normal"
          value={shippingInfo.phoneNumber}
          onChange={handleChange('phoneNumber')}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          style={{width: '48%'}}
          margin="normal"
          value={shippingInfo.emailAddress}
          onChange={handleChange('emailAddress')}
        />
        <TextField
          label="Address"
          variant="outlined"
          style={{width: '48%', marginRight: '2%'}}
          margin="normal"
          value={shippingInfo.address}
          onChange={handleChange('address')}
        />
        <FormControl margin="normal" variant="outlined" style={{ width: '48%' }} >
            <InputLabel id="city-label">City</InputLabel>
            <Select
            labelId="city-label"
            label="City"
            value={shippingInfo.city}
            onChange={handleChange('city')}
          >
            <MenuItem value="warri">Warri</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </form>
      <div style={{ marginTop: '20px' }}>
      <p style={{ fontWeight: "700", color: "red", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>
            PLEASE NOTE !!</p>
        <p style={{color: "#000", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>
            Shipping Fee For Within Warri: &#8358;{shippingInfo.shippingFee}1000</p>

            <p style={{color: "#000", fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif'}}>
            Shipping Fee For Outside Warri: &#8358;{shippingInfo.shippingFee}1500</p>
            {Object.values(errors).map((error, index) => (
        <p key={index} style={{ color: 'red', fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}>
          {error}
        </p>
      ))}
        <Button variant="contained" color="primary" style={{backgroundColor: "green", marginTop: "10px"}} onClick={handleProceed}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShippingDetails;
