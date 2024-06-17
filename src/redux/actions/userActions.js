import axios from 'axios';
import {
  FETCH_USER_VIDEOS_REQUEST,
  FETCH_USER_VIDEOS_SUCCESS,
  FETCH_USER_VIDEOS_FAILURE,
} from '../actionTypes';

export const fetchUserVideosRequest = () => ({
  type: FETCH_USER_VIDEOS_REQUEST,
});

export const fetchUserVideosSuccess = (videos) => ({
  type: FETCH_USER_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchUserVideosFailure = (error) => ({
  type: FETCH_USER_VIDEOS_FAILURE,
  payload: error,
});

// export const fetchUserVideos = (userId) => {
//   return (dispatch) => {
//     const token = localStorage.getItem('token'); // Ensure token is retrieved from storage
//     axios.get(`http://localhost:5000/users/${userId}/videos`, {
//       headers: {
//         Authorization: `Bearer ${token}` // Include the token in the request headers
//       }
//     })
//       .then((response) => dispatch(fetchUserVideosSuccess(response.data)))
//       .catch((error) => dispatch(fetchUserVideosFailure(error.message)));
//   };
// };
// export const fetchUserVideos = (userId) => {
//   return (dispatch) => {
//     const token = localStorage.getItem('token'); // Retrieve token from localStorage
//     dispatch(fetchUserVideosRequest());
//     axios.get(`http://localhost:5000/users/${userId}/videos`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then((response) => {
//       dispatch(fetchUserVideosSuccess(response.data));
//     })
//     .catch((error) => {
//       dispatch(fetchUserVideosFailure(error.message));
//     });
//   };
// };
