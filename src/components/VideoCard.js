// src/components/VideoCard.js

import React from 'react';
import './VideoCard.css'; // Ensure you have this CSS file for styling

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <video width="100%" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <p>Likes: {video.likes}</p>
    </div>
  );
};

export default VideoCard;
