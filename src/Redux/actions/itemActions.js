import {
  FETCH_ITEM,
  SELECT_LANGUAGE,
  ITEM_ERROR,
  SELECT_ITEM,
  SELECT_TIER,
  SELECT_QUALITY,
  selectedEnchantment,
  SELECT_ENCHANTMENT,
} from "./types";
import axios from "axios";

export const selectLanguage = (language) => {
  return {
    type: SELECT_LANGUAGE,
    payload: language,
  };
};

export const fetchItem = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json"
    );

    dispatch({
      type: FETCH_ITEM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: err.response.data,
    });
  }
};

export const selectItem = (item) => (dispatch) => {
  dispatch({
    type: SELECT_ITEM,
    payload: item,
  });
};

export const selectTier = (tier) => (dispatch) => {
  dispatch({
    type: SELECT_TIER,
    payload: tier,
  });
};

export const selectEnchantment = (enchant) => (dispatch) => {
  dispatch({
    type: SELECT_ENCHANTMENT,
    payload: enchant,
  });
};
export const selectQuality = (qlty) => (dispatch) => {
  dispatch({
    type: SELECT_QUALITY,
    payload: qlty,
  });
};
