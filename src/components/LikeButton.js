// // LikeButton.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo } from '../redux/actions/videoActions';

const LikeButton = ({ videoId }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth); // Assuming you have auth state in Redux

  const handleLike = () => {
    dispatch(likeVideo(videoId, token));
  };

  return (
    <button onClick={handleLike}>Like</button>
  );
};

export default LikeButton;
