// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import authReducer from './authReducer'; // Import authReducer
import userReducer from './userReducer';

const rootReducer = combineReducers({
  videos: videoReducer,
  auth: authReducer, // Combine authReducer
  user: userReducer,
});

export default rootReducer;

