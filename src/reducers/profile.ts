let profileState = {};
export default function profile(state: any = profileState, action: any) {
  switch (action.type) {
    case "add":
      return [...state, action.payload.item];
    default:
      return state;
  }
}
