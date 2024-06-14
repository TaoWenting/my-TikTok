import {
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_USER_VIDEOS_SUCCESS,
  FETCH_USER_VIDEOS_FAILURE,
  FETCH_PUBLIC_VIDEOS_SUCCESS,
  FETCH_PUBLIC_VIDEOS_FAILURE,
  UPLOAD_VIDEO_SUCCESS,
  SET_VIDEO_PRIVACY_SUCCESS,
} from '../actionTypes';

const initialState = {
  allVideos: [],
  userVideos: [],
  publicVideos: [],
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
    case FETCH_PUBLIC_VIDEOS_SUCCESS:
      return {
        ...state,
        publicVideos: action.payload,
        error: null,
      };
    case FETCH_PUBLIC_VIDEOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPLOAD_VIDEO_SUCCESS:
      return {
        ...state,
        userVideos: [...state.userVideos, action.payload],
        error: null,
      };
    case SET_VIDEO_PRIVACY_SUCCESS:
      return {
        ...state,
        userVideos: state.userVideos.map(video =>
          video.id === action.payload.id ? action.payload : video
        ),
        error: null,
      };
    default:
      return state;
  }
};

export default videoReducer;
