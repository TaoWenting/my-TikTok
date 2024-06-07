import axios from 'axios';
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from '../actionTypes';

export const registerUserSuccess = (user) => ({
  type: USER_REGISTER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: USER_REGISTER_FAILURE,
  payload: error.message || error,
});

export const loginUserSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error.message || error,
});

export const logoutUser = () => ({
  type: USER_LOGOUT,
});

export const registerUser = (userData) => {
  return (dispatch) => {
    axios.post('http://localhost:5000/api/auth/register', userData)
      .then((response) => dispatch(registerUserSuccess(response.data)))
      .catch((error) => dispatch(registerUserFailure(error)));
  };
};

export const loginUser = (userData) => {
  return (dispatch) => {
    axios.post('http://localhost:5000/api/auth/login', userData)
      .then((response) => {
        if (response.data.token) {
          dispatch(loginUserSuccess(response.data));
        } else {
          dispatch(loginUserFailure('Invalid email or password'));
        }
      })
      .catch((error) => dispatch(loginUserFailure(error)));
  };
};

export const logout = () => {
  return (dispatch) => {
    axios.post('http://localhost:5000/api/auth/logout')
      .then(() => {
        dispatch(logoutUser());
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };
};
