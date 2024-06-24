// // LikeButton.js

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { likeVideo } from '../redux/actions/videoActions';

// const LikeButton = ({ videoId }) => {
//   const dispatch = useDispatch();
//   const { token } = useSelector(state => state.auth); // Assuming you have auth state in Redux

//   const handleLike = () => {
//     dispatch(likeVideo(videoId, token));
//   };

//   return (
//     <button onClick={handleLike}>Like</button>
//   );
// };

// export default LikeButton;


// export default LikeButton;

// LikeButton.js
// components/LikeButton.js
// components/LikeButton.js
// components/LikeButton.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo, unlikeVideo } from '../redux/actions/videoActions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LikeButton = ({ videoId, initialLikes, initialIsLiked }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setLiked(initialIsLiked);
    }
    setLikesCount(initialLikes);
  }, [initialIsLiked, initialLikes, token]);

  const handleLike = () => {
    if (!token) {
      alert('Please log in to like videos');
      navigate('/login');
      return;
    }

    if (liked) {
      dispatch(unlikeVideo(videoId, token))
        .then(response => {
          setLiked(false);
          // setLikesCount(response.data.likes); // Use the updated like count from the response
        })
        .catch(err => console.error('Failed to unlike video:', err));
    } else {
      dispatch(likeVideo(videoId, token))
        .then(response => {
          setLiked(true);
          // setLikesCount(response.data.likes); // Use the updated like count from the response
        })
        .catch(err => console.error('Failed to like video:', err));
    }
  };

  return (
    <button
      onClick={handleLike}
      style={{ backgroundColor: liked ? 'gray' : 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
    >
      {liked ? 'Like' : 'Like'} 
    </button>
  );
};

export default LikeButton;

