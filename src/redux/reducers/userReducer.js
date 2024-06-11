import {
    FETCH_USER_VIDEOS_REQUEST,
    FETCH_USER_VIDEOS_SUCCESS,
    FETCH_USER_VIDEOS_FAILURE,
  } from '../actionTypes';// Update import path
  
  const initialState = {
    loading: false,
    videos: [],
    error: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_VIDEOS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USER_VIDEOS_SUCCESS:
        return {
          loading: false,
          videos: action.payload,
          error: '',
        };
      case FETCH_USER_VIDEOS_FAILURE:
        return {
          loading: false,
          videos: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  