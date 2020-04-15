import {
    SIGN_OUT_USER,
    AUTHENTICATE_USER
  } from './types';
  import isEmpty from '../../helpers/isEmpty';
  
  const initialState = {
    isAuthenticated: false,
    userDetails: {},
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATE_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          details: action.payload
        };
      case SIGN_OUT_USER:
        return {
          ...state,
          isAuthenticated: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;