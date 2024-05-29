import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../redux/actions/videoActions';
import VideoCard from '../components/VideoCard';
import './VideoFeed.css'; // Assuming you have a CSS file for styling

const VideoFeed = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos || []); // Ensure videos is an array

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

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
