import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserVideos } from '../redux/actions/videoActions'; // Import fetchUserVideos
import VideoFeed from '../components/VideoFeed';

const UserPage = ({ userId }) => { // Receive userId as props
  const dispatch = useDispatch();
  const userVideos = useSelector(state => state.user.videos); // Access user videos from state
  const token = useSelector(state => state.auth.token); // Retrieve token from Redux state

  useEffect(() => {
    if (userId && token) { // Fetch videos only if userId and token are available
      dispatch(fetchUserVideos(userId, token)); // Pass userId and token to fetchUserVideos
    }
  }, [dispatch, userId, token]);

  return (
    <div>
      <h2>User Page</h2>
      <h3>User's Videos</h3>
      <VideoFeed videos={userVideos} />
    </div>
  );
};

export default UserPage;
