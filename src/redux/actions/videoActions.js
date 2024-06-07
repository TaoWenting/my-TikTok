import axios from 'axios';
import {
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_USER_VIDEOS_SUCCESS,
  FETCH_USER_VIDEOS_FAILURE,
  FETCH_PUBLIC_VIDEOS_SUCCESS,
  FETCH_PUBLIC_VIDEOS_FAILURE,
} from '../actionTypes';

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
  return (dispatch) => {
    axios.get(`http://localhost:5000/api/users/${userId}/videos`)
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
