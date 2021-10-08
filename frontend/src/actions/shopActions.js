import axios from "axios";
import {
  SHOP_LIST_REQUEST,
  SHOP_LIST_SUCCESS,
  SHOP_LIST_FAIL,
} from "../constants/shopConstants";

export const listShops = () => async (dispatch) => {
  try {
    dispatch({ type: SHOP_LIST_REQUEST });

    const { data } = await axios.get(`/api/shops`);

    dispatch({
      type: SHOP_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
