// src/redux/reducers/commentsReducer.js

import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE, ADD_COMMENT_SUCCESS, ADD_REPLY_SUCCESS } from '../actionTypes';

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        [action.payload.videoId]: action.payload.comments,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        [action.payload.videoId]: [...(state[action.payload.videoId] || []), action.payload.comment],
      };
    case ADD_REPLY_SUCCESS:
      const { videoId, parentId, reply } = action.payload;
      const addReplyToComment = (comments) => comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies),
          };
        }
        return comment;
      });
      return {
        ...state,
        [videoId]: addReplyToComment(state[videoId]),
      };
    default:
      return state;
  }
};

export default commentsReducer;
