// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import authReducer from './authReducer'; // Assuming you have an auth reducer

const rootReducer = combineReducers({
  videos: videoReducer,
  auth: authReducer,
});

export default rootReducer;

