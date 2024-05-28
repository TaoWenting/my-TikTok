// src/components/VideoFeed.js

import React from 'react';
import VideoCard from './VideoCard';
import './VideoFeed.css'; // Ensure you have this CSS file for styling

const VideoFeed = ({ videos }) => {
  return (
    <div className="video-feed">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
