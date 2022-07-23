import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SAVE_SHIPPING_ADDRESS,
  CART_EMPTY,
  CLEAR_SHIPPING_ADDRESS,
  GET_CART_PRODUCTS,
} from "src/constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CLEAR_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: {},
      };

    case CART_EMPTY:
      return {
        ...state,
        cartItems: [],
      };
    case GET_CART_PRODUCTS: {
     
      try{
        const url ="https://62d6582a51e6e8f06f0722d2.mockapi.io/api/cart/cart";
        const cartItems = axios.get(url).then((resp)=>resp.data);
        return {
          ...state,
          cartItems:cartItems
        }
      }catch(err){
        console.log(err);
        return {
          ...state,
          cartItems:[],
        }
      }
     
     
    }
    default:
      return state;
  }
};
