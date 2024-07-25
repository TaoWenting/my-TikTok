import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from '../actionTypes';

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', userData);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE, payload: error.message || error });
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', userData);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message || error });
    }
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const changePassword = (passwordData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/change-password', passwordData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: response.data });
      return Promise.resolve(response.data);
    } catch (error) {
      dispatch({ type: CHANGE_PASSWORD_FAILURE, payload: error.message || 'Failed to change password' });
      return Promise.reject(error);
    }
  };
};