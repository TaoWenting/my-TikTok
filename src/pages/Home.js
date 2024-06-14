import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideos, fetchPublicVideos } from '../redux/actions/videoActions';
import VideoFeed from '../components/VideoFeed';

const Home = () => {
  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.videos.allVideos);
  const publicVideos = useSelector((state) => state.videos.publicVideos);

  useEffect(() => {
    dispatch(fetchVideos());
    dispatch(fetchPublicVideos());
  }, [dispatch]);
  
  console.log("All Videos Data: ", allVideos);
  console.log("Public Videos Data: ", publicVideos);

  if (!allVideos || !publicVideos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Home Page</h2>
      {publicVideos.length > 0 ? (
        <>
          <div>
            <h3>Public Videos</h3>
            {publicVideos.length > 0 ? (
              <VideoFeed videos={publicVideos} />
            ) : (
              <p>No public videos available</p>
            )}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
