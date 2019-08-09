import { ADD_ITEM } from "./actionTypes";
export const addToCart = (item: any) => {
  console.log("adding item:", item);
  return {
    type: ADD_ITEM,
    item
  };
};
