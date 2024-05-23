// src/components/VideoCard.js
import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', width: '300px' }}>
      <video width="100%" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ padding: '10px' }}>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
