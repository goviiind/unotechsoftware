import {
  FETCH_ITEM,
  SELECT_LANGUAGE,
  ITEM_ERROR,
  SELECT_ITEM,
  SELECT_TIER,
  SELECT_QUALITY,
  selectedEnchantment,
  SELECT_ENCHANTMENT,
} from "../actions/types";

const init_State = {
  language: "EN-US",
  itemList: null,
  selectedItem: "",
  selectedTier: "",
  selectedEnchantment: "",
  selectedQuality: "",
  loading: true,
};

export default (state = init_State, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case FETCH_ITEM:
      return {
        ...state,
        itemList: payload,
        loading: false,
      };
    case ITEM_ERROR:
      return {
        ...state,
        itemList: null,
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: payload,
      };
    case SELECT_TIER:
      return {
        ...state,
        selectedTier: payload,
      };
    case SELECT_ENCHANTMENT:
      return {
        ...state,
        selectedEnchantment: payload,
      };
    case SELECT_QUALITY:
      return {
        ...state,
        selectedQuality: payload,
      };
    default:
      return state;
  }
};
