import { combineReducers } from "redux";
import { productListReducer } from "./product/product.reducer";
import { authReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { OrderReducer } from "./order/order.reducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  auth: authReducer,
  cart: cartReducer,
  orderCreate: OrderReducer,
});

export default rootReducer;
