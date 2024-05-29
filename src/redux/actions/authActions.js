import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../actionTypes';

// Define action creators for user registration and login success/failure
export const registerUserSuccess = user => ({
  type: USER_REGISTER_SUCCESS,
  payload: user,
});

export const registerUserFailure = error => ({
  type: USER_REGISTER_FAILURE,
  payload: error,
});

export const loginUserSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const loginUserFailure = error => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

// Define asynchronous action creator for user registration
export const registerUser = (userData) => {
  return dispatch => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => dispatch(registerUserSuccess(data)))
      .catch(error => dispatch(registerUserFailure(error)));
  };
};

// Define asynchronous action creator for user login
export const loginUser = (userData) => {
  return dispatch => {
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(users => {
        const user = users.find(user => user.email === userData.email && user.password === userData.password);
        if (user) {
          dispatch(loginUserSuccess(user));
        } else {
          dispatch(loginUserFailure('Invalid email or password'));
        }
      })
      .catch(error => dispatch(loginUserFailure(error)));
  };
};
