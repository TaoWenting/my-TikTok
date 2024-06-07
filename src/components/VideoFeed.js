import React from 'react';
import VideoCard from '../components/VideoCard';
import './VideoFeed.css'; // Assuming you have a CSS file for styling

const VideoFeed = ({ videos }) => {
  if (!Array.isArray(videos)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-feed">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
