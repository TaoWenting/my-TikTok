// src/pages/User.js
import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const { user, videos } = useSelector(state => state.auth);
  const userVideos = videos.filter(video => video.userId === user.id); // Filter videos to show only user's own

  return (
    <div>
      <h2>User Page</h2>
      <div>
        <h3>Your Videos</h3>
        {userVideos.map(video => (
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
