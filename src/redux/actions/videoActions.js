// src/redux/actions/videoActions.js
import { FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE } from '../actionTypes';

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
    fetch('http://localhost:5000/api/videos') // Ensure this URL matches your server's endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => dispatch(fetchVideosSuccess(data)))
      .catch(error => dispatch(fetchVideosFailure(error)));
  };
};
