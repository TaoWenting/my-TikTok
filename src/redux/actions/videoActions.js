import axios from 'axios';
import {
  UPLOAD_VIDEO_SUCCESS,
  SET_VIDEO_PRIVACY_SUCCESS,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_USER_VIDEOS_SUCCESS,
  FETCH_USER_VIDEOS_FAILURE,
  FETCH_PUBLIC_VIDEOS_SUCCESS,
  FETCH_PUBLIC_VIDEOS_FAILURE
} from '../actionTypes';

// Action creators for video upload and privacy settings

export const uploadVideo = (formData, token) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    };
    const response = await axios.post('http://localhost:5000/api/videos/upload', formData, config);
    dispatch({ type: UPLOAD_VIDEO_SUCCESS, payload: response.data });
    return response.data;
  } catch (error) {
    console.error('Error uploading video:', error);
  }
};

export const setVideoPrivacy = (videoId, isPublic, token) => async dispatch => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const response = await axios.post(`http://localhost:5000/api/videos/set-privacy/${videoId}`, { public: isPublic }, config);
    dispatch({ type: SET_VIDEO_PRIVACY_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error setting video privacy:', error);
  }
};

// Action creators for fetching videos

export const fetchVideosSuccess = (videos) => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchVideosFailure = (error) => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: error,
});

export const fetchUserVideosSuccess = (videos) => ({
  type: FETCH_USER_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchUserVideosFailure = (error) => ({
  type: FETCH_USER_VIDEOS_FAILURE,
  payload: error,
});

export const fetchPublicVideosSuccess = (videos) => ({
  type: FETCH_PUBLIC_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchPublicVideosFailure = (error) => ({
  type: FETCH_PUBLIC_VIDEOS_FAILURE,
  payload: error,
});

export const fetchVideos = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/videos')
      .then((response) => dispatch(fetchVideosSuccess(response.data)))
      .catch((error) => dispatch(fetchVideosFailure(error.message)));
  };
};

export const fetchUserVideos = (userId) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    axios.get(`http://localhost:5000/users/${userId}/videos`, config)
      .then((response) => dispatch(fetchUserVideosSuccess(response.data)))
      .catch((error) => dispatch(fetchUserVideosFailure(error.message)));
  };
};

export const fetchPublicVideos = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/videos/public')
      .then((response) => dispatch(fetchPublicVideosSuccess(response.data)))
      .catch((error) => dispatch(fetchPublicVideosFailure(error.message)));
  };
};
