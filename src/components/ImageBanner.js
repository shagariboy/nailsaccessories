import React from 'react';
import './ImageBanner.css'; // Create this CSS file for styling
import banner from '../assests/images/banner.webp'

const ImageBanner = () => {
  return (
    <div className="image-banner">
      <img
        src={banner} // Replace with your actual image URL
        alt="Banner"
        className="banner-image"
      />
    </div>
  );
};

export default ImageBanner;
