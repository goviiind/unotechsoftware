import React from "react";
import Description from "./Description";
import Price from "./Price";
import "./itemdetails.css";
import { connect } from "react-redux";

const ItemDetails = ({ items }) => {
  const { selectedItem, selectedTier, loading } = items;
  return (
    <div>
      <Description
        itemName={selectedItem}
        tier={selectedTier}
        loading={loading}
      />

      <div className="price-div">
        <Price priceType="Sell" />
        <Price priceType="Buy" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer,
  };
};

export default connect(mapStateToProps, null)(ItemDetails);
