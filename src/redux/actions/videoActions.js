import { FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE, FETCH_USER_VIDEOS_SUCCESS, FETCH_USER_VIDEOS_FAILURE } from '../actionTypes';

export const fetchVideosSuccess = videos => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchVideosFailure = error => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: error,
});

export const fetchUserVideosSuccess = videos => ({
  type: FETCH_USER_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchUserVideosFailure = error => ({
  type: FETCH_USER_VIDEOS_FAILURE,
  payload: error,
});

export const fetchVideos = () => {
  return dispatch => {
    fetch('http://localhost:5000/api/videos')
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

export const fetchUserVideos = userId => {
  return dispatch => {
    fetch(`http://localhost:5000/api/users/${userId}/videos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => dispatch(fetchUserVideosSuccess(data)))
      .catch(error => dispatch(fetchUserVideosFailure(error)));
  };
};
