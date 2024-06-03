import {
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_USER_VIDEOS_SUCCESS,
  FETCH_USER_VIDEOS_FAILURE,
} from '../actionTypes';

const initialState = {
  allVideos: [],
  userVideos: [],
  error: null,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        allVideos: action.payload,
        error: null,
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USER_VIDEOS_SUCCESS:
      return {
        ...state,
        userVideos: action.payload,
        error: null,
      };
    case FETCH_USER_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducer;
