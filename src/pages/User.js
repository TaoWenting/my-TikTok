// src/pages/User.js
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook to access Redux store

const User = () => {
  // Extract user data and videos from Redux store
  const { user, videos } = useSelector(state => state.auth);

  return (
    <div>
      <h2>User Page</h2>
      <div>
        <h3>Your Videos</h3>
        {videos.map(video => (
          <div key={video.id}>
            <h4>{video.title}</h4>
            <p>{video.description}</p>
            <video src={video.url} controls />
            <p>Likes: {video.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
