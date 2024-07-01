// src/components/CommentsSection.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../redux/actions/commentsActions';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

const CommentsSection = ({ videoId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments[videoId] || []);

  useEffect(() => {
    dispatch(fetchComments(videoId));
  }, [dispatch, videoId]);

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <AddCommentForm videoId={videoId} />
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} videoId={videoId} />
      ))}
    </div>
  );
};

export default CommentsSection;
