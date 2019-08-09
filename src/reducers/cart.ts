let cartState = {};
export default function cart(state: any = cartState, action: any) {
  switch (action.type) {
    case "add":
      return [...state, action.payload.item];
    default:
      return state;
  }
}
