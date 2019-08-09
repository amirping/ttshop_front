let orderState = {};
export default function order(state: any = orderState, action: any) {
  switch (action.type) {
    case "add":
      return [...state, action.payload.item];
    default:
      return state;
  }
}
