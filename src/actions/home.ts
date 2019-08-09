import * as Types from "./actionTypes";
import StoreApi from "../api/store";
export const getItems = () => {
  console.log("get items:");
  return function(dispatch: any) {
    return StoreApi.getAllItems()
      .then(data => {
        console.log(data);
        dispatch(loadItemsSuccess(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export function loadItemsSuccess(data: any) {
  return { type: Types.LOAD_ITEMS_SUCCESS, payload: data };
}
