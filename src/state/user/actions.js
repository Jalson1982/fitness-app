import { SIGN_OUT_USER, AUTHENTICATE_USER, SIGN_UP } from "./types";

export const signUp = (userData) => {
  return {
    type: SIGN_UP,
    payload: userData,
  };
};

export const login = (userData) => {
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