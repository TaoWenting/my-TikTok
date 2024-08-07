import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from '../actionTypes';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
      };
      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          error: null,
        };
      case CHANGE_PASSWORD_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default authReducer;
