import { ACTION } from "./consts";
import { RootState } from "./types";

const initialState: RootState = {
  locationPermission: false,
  isLogged: false,
  userType: "",
  token: "",
};

const reducer = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ACTION.SET_LOCATION_PERMISSION:
      return {
        ...state,
        locationPermission: action.payload,
      };
    case ACTION.SET_IS_LOGGED:
      localStorage.setItem("isLogged", action.payload);
      return {
        ...state,
        isLogged: action.payload,
      };
    case ACTION.SET_USERTYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case ACTION.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
