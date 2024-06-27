// src/redux/actions/commentsActions.js

import axios from 'axios';
import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE, ADD_COMMENT_SUCCESS, ADD_REPLY_SUCCESS } from '../actionTypes';

export const fetchCommentsSuccess = (videoId, comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { videoId, comments },
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const addCommentSuccess = (videoId, comment) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: { videoId, comment },
});

export const addReplySuccess = (videoId, parentId, reply) => ({
  type: ADD_REPLY_SUCCESS,
  payload: { videoId, parentId, reply },
});

export const fetchComments = (videoId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/videos/${videoId}/comments`);
    dispatch(fetchCommentsSuccess(videoId, response.data));
  } catch (error) {
    dispatch(fetchCommentsFailure(error.message));
  }
};

export const addComment = (videoId, text) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`http://localhost:5000/api/videos/${videoId}/comments`, { text }, config);
    dispatch(addCommentSuccess(videoId, response.data));
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

export const addReply = (videoId, parentId, text) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`http://localhost:5000/api/videos/${videoId}/comments/${parentId}/replies`, { text }, config);
    dispatch(addReplySuccess(videoId, parentId, response.data));
  } catch (error) {
    console.error('Error adding reply:', error);
  }
};
