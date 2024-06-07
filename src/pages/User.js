import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserVideos } from '../redux/actions/videoActions';
import VideoFeed from '../components/VideoFeed';

const UserPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userVideos = useSelector(state => state.videos.userVideos);

  useEffect(() => {
    dispatch(fetchUserVideos(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h2>User Page</h2>
      <h3>User's Videos</h3>
      <VideoFeed videos={userVideos} />
    </div>
  );
};

export default UserPage;
