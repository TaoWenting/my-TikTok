// src/redux/actions.js

import { FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from './actionTypes';

export const fetchVideosSuccess = videos => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchVideosFailure = error => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: error,
});

export const fetchVideos = () => {
  return dispatch => {
    fetch('http://localhost:3001/videos')
      .then(response => response.json())
      .then(data => dispatch(fetchVideosSuccess(data)))
      .catch(error => dispatch(fetchVideosFailure(error)));
  };
};
