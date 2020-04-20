import { SIGN_OUT_USER, AUTHENTICATE_USER, SIGN_UP, APP_SETUP_DONE } from "./types";

export const signUp = (userData) => {
  return {
    type: SIGN_UP,
    payload: userData,
  };
};

export const loginUser = (userData) => {
    return {
        type: AUTHENTICATE_USER,
        payload: userData
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT_USER,
        payload: {}
    }
}

export const updateUserAppSetupDetails = (name,value) => {
  return {
    type: 'UPDATE_USER_APP_SETUP_DETAILS',
    payload:{
      name,
      value
    }
  }
}

export const setAppSetupDone = data => {
  return ({
    type: APP_SETUP_DONE,
    payload: data
  })
}