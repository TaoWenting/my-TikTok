// src/components/VideoCard.js

import React from 'react';
import './VideoCard.css'; // Ensure you have this CSS file for styling
import { useSelector, useDispatch } from 'react-redux';
import { likeVideo } from '../redux/actions/videoActions';

const VideoCard = ({ video }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token); // Retrieve token from Redux state

  const handleLike = (videoId) => {
    dispatch(likeVideo(videoId, token));
  };

  return (
    <div className="video-card">
      <video width="100%" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <p>Likes: {video.likes}</p>
      <button onClick={() => handleLike(video.id)}>Like</button>
    </div>
  );
};

export default VideoCard;
