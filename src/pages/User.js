import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserVideos } from '../redux/actions/videoActions';

const User = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const userVideos = useSelector(state => state.videos.userVideos);

  useEffect(() => {
    if (user) {
      dispatch(fetchUserVideos(user.id));
    }
  }, [user, dispatch]);

  if (!user || !userVideos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Page</h2>
      <div>
        <h3>Your Videos</h3>
        {userVideos.length > 0 ? (
          userVideos.map(video => (
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

export default User;
