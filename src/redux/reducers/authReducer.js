// src/redux/reducers/authReducer.js
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from '../actionTypes';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case USER_REGISTER_FAILURE:
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case USER_LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null
        };
    default:
      return state;
  }
};

export default authReducer;
