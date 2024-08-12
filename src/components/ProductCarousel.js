// src/components/ProductCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const products = [
    { id: 1, title: "Product 1", image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-139-667b0f49f2fca.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=1200:*", price: 10 },
    { id: 2, title: "Product 2", image: "https://seversbreeman.nl/app/uploads/2022/05/m5-mob.jpg", price: 20 },
    { id: 3, title: "Product 3", image: "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m5-sedan-rendering-1676575610.jpg?crop=1.00xw:0.967xh;0,0.0327xh&resize=980:*", price: 30 },
    { id: 4, title: "Product 4", image: "https://repost.uz/storage/uploads/55-1685413670-avto11-post-material.jpeg", price: 40 },
    { id: 5, title: "Product 5", image: "https://i.ytimg.com/vi/tOTLrE8d14I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLChE7UlS-Pd7F5fT1cbhFDspBjxSg", price: 50 },
    { id: 6, title: "Product 6", image: "https://imgd.aeplcdn.com/664x374/cw/ec/33136/BMW-M5-Front-view-118983.jpg?wm=0&q=80", price: 60 },
    { id: 7, title: "Product 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-xZrzzt_vs-OrSF8M658kPY9W_Ci2vkvsA&s", price: 70 },
    { id: 8, title: "Product 8", image: "https://www.motortrend.com/uploads/sites/5/2018/04/2018-BMW-M5-front-three-quarter-in-motion-02.jpg", price: 80 },
    { id: 9, title: "Product 9", image: "https://carwow-uk-wp-3.imgix.net/New-BMW-M5-lead-5.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600", price: 90 },{ id: 10, title: "Product 10", image: "https://via.placeholder.com/150", price: 100 }
   
  ];

  // Group products into chunks of 4
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 1) {
    groupedProducts.push(products.slice(i, i + 1));
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    appendDots: dots => (
      <div style={{ margin:"-30px", borderRadius: "10px", padding: "10px" }}>
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "#fff",
          border: "1px solid #fff",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "30px",
          backgroundColor: "green"
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {groupedProducts.map((group, index) => (
          <div key={index} className="flex justify-around">
            {group.map(product => (
              <div key={product.id} className="text-center" style={{ width: '1100px' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className=" mx-auto" 
                  style={{ maxWidth: '1100px', }}
                />
                <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
