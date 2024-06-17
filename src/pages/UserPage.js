import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserVideos } from '../redux/actions/videoActions'; // Import fetchUserVideos
import VideoFeed from '../components/VideoFeed';

const UserPage = ({ userId }) => { // Receive userId as props
  const dispatch = useDispatch();
  const userVideos = useSelector(state => state.user.videos); // Access user videos from state

  useEffect(() => {
    if (userId) { // Fetch videos only if userId is available
      const token = localStorage.getItem('token');
      dispatch(fetchUserVideos(userId, token));
    }
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
