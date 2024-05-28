// src/pages/Home.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../redux/actions';
import VideoFeed from '../components/VideoFeed';

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <VideoFeed videos={videos} />
    </div>
  );
};

export default Home;
