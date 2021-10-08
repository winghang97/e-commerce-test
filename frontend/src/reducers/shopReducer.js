import {
  SHOP_LIST_FAIL,
  SHOP_LIST_REQUEST,
  SHOP_LIST_SUCCESS,
} from "../constants/shopConstants";

export const shopListReducer = (state = { shops: [] }, action) => {
  switch (action.type) {
    case SHOP_LIST_REQUEST:
      return { loading: true, products: [] };
    case SHOP_LIST_SUCCESS:
      return {
        loading: false,
        shops: action.payload,
      };
    case SHOP_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
