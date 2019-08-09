import homeStore from "./home";
import orderStore from "./order";
import cartStore from "./cart";
import profileStore from "./profile";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  homeStore,
  cartStore,
  profileStore,
  orderStore
});
export default rootReducer;
