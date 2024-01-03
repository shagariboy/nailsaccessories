import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

import './CenterMode.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import images
import products from '../productsData';


export default function CenterMode() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>&#x20A6;{product.price}</p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
