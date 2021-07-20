import React from "react";

const Description = ({ itemName, tier, loading }) => {
  const imgUrl =
    "https://render.albiononline.com/v1/item/T4_HEAD_PLATE_SET1.png?quality=4";
  return (
    <div className="item-description">
      <div className="img-div">
        <img src={imgUrl} alt="item-img" />
      </div>
      <div className="description">
        <h1>
          {itemName ? itemName : "Item Name"}{" "}
          <span> {tier ? tier : "Tier"}</span>
        </h1>
        <p>Item description with language support</p>
      </div>
    </div>
  );
};

export default Description;
