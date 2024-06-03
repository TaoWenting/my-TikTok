import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideos } from '../redux/actions/videoActions';

const Home = () => {
  const dispatch = useDispatch();
  const allVideos = useSelector(state => state.videos.allVideos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (!allVideos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <h3>All Videos</h3>
        {allVideos.length > 0 ? (
          allVideos.map(video => (
            <div key={video.id}>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              <video src={video.url} controls />
              <p>Likes: {video.likes}</p>
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
