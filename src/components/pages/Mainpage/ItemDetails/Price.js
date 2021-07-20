import React from "react";

const Price = ({ priceType }) => {
  return (
    <div className="item-price">
      <h5>Latest {priceType} Price</h5>
      <div className="location-price">
        <h6>Location</h6>
        <h6>Price</h6>
      </div>
    </div>
  );
};

export default Price;
