// export default LikeButton;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo, unlikeVideo } from '../redux/actions/videoActions';
import { useNavigate } from 'react-router-dom';

const LikeButton = ({ videoId, initialLikes, initialIsLiked }) => {
  const [liked, setLiked] = useState(initialIsLiked); // Initialize liked state with initialIsLiked
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    // Update liked state based on initialIsLiked when token changes
    if (token) {
      setLiked(initialIsLiked);
    }
  }, [initialIsLiked, token]);

  const handleLike = () => {
    if (!token) {
      alert('Please log in to like videos');
      navigate('/login');
      return;
    }

    if (liked) {
      // User already liked, so unlike the video
      dispatch(unlikeVideo(videoId, token))
        .then(() => {
          setLiked(false); // Update liked state to false
        })
        .catch(err => console.error('Failed to unlike video:', err));
    } else {
      // User has not liked, so like the video
      dispatch(likeVideo(videoId, token))
        .then(() => {
          setLiked(true); // Update liked state to true
        })
        .catch(err => console.error('Failed to like video:', err));
    }
  };

  return (
    <button
      onClick={handleLike}
      style={{
        backgroundColor: liked ? 'gray' : 'red',
        color: 'white',
        border: 'none',
        padding: '5px 10px', // Smaller padding
        cursor: 'pointer',
        marginRight: '8px', // Space between like and comment button
        fontSize: '0.8rem', // Smaller font size
      }}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;


