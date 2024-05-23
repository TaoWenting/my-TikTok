// src/components/VideoFeed.js
import React from 'react';
import VideoCard from './VideoCard';

const VideoFeed = () => {
  const videos = [
    { id: 1, url: 'video1.mp4', description: 'First video' },
    { id: 2, url: 'video2.mp4', description: 'Second video' },
    { id: 3, url: 'video2.mp4', description: 'third video' },
    // Add more video objects as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
