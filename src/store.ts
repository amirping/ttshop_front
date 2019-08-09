import { createStore } from "redux";
import rootReducer from "./reducers";
export default (initialState: any) => {
  return createStore(rootReducer, initialState);
};
