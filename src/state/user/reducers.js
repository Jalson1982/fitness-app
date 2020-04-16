import { SIGN_OUT_USER, AUTHENTICATE_USER, SIGN_UP } from "./types";
import isEmpty from "../../helpers/isEmpty";

const initialState = {
  isAuthenticated: false,
  userDetails: {},
  appSetupDone: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userDetails: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userDetails: action.payload,
      };

    case SIGN_OUT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
