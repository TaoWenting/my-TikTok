// src/redux/reducers/authReducer.js
import {
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
  } from '../actionTypes';
  
  const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_REGISTER_SUCCESS:
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case USER_REGISTER_FAILURE:
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  