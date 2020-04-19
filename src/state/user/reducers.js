import { SIGN_OUT_USER, AUTHENTICATE_USER, SIGN_UP, UPDATE_USER_APP_SETUP_DETAILS } from "./types";
import isEmpty from "../../helpers/isEmpty";

const initialState = {
  isAuthenticated: false,
  userDetails: {},
  appSetupDone: false,
  appSetupDetails:{
    sex: 'female',
    progress:0,
    birthData: '',
    weight: '',
    height: '',
    metric: '',
    fitnessGoal:'',
    eqipment: '',
    experience: '',
    sessionTime: '',
    workDays:[],
    reminder:'',
    test:{
      ankleMobility:'',
      shoulderMobility:'',
      coreStability: ''
    }
  }
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
      case UPDATE_USER_APP_SETUP_DETAILS:
        return {
          ...state,
          appSetupDetails: {...state.appSetupDetails,[action.payload.name]: action.payload.value}
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
