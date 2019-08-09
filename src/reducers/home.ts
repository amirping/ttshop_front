import * as Types from "../actions/actionTypes";
import intialState from "./intialState";
let homeState = {};
export default function home(state: any = intialState.store, action: any) {
  if (action.type === Types.LOAD_ITEMS_SUCCESS) {
    return {
      ...state,
      items: action.payload
    };
  } else {
    return state;
  }
}
