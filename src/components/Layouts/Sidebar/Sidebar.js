import React, { useEffect } from "react";
import "./sidebar.css";
import {
  fetchItem,
  selectItem,
  selectTier,
  selectQuality,
  selectEnchantment,
} from "../../../Redux/actions/itemActions";
import { connect } from "react-redux";

const Sidebar = ({
  items,
  fetchItem,
  selectItem,
  selectTier,
  selectQuality,
  selectEnchantment,
}) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const { itemList, language } = items;

  return (
    <div className="sidebar">
      <select onChange={(item) => selectItem(item.target.value)}>
        <option>Select Item</option>
        {itemList?.map((item, index) => {
          return (
            <option key={index} value={item?.LocalizationNameVariable}>
              {item?.LocalizationNameVariable}
            </option>
          );
        })}
      </select>
      <select onChange={(tier) => selectTier(tier.target.value)}>
        <option>Select Tier</option>
        <option value="T1">T1</option>
        <option value="T2">T2</option>
        <option value="T3">T3</option>
        <option value="T4">T4</option>
        <option value="T5">T5</option>
        <option value="T6">T6</option>
        <option value="T7">T7</option>
        <option value="T8">T8</option>
      </select>
      <select onChange={(enchant) => selectEnchantment(enchant.target.value)}>
        <option>Select Enchantment</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <select onChange={(qlty) => selectQuality(qlty.target.value)}>
        <option>Select Quallity</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer,
  };
};

export default connect(mapStateToProps, {
  fetchItem,
  selectItem,
  selectTier,
  selectQuality,
  selectEnchantment,
})(Sidebar);
