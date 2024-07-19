import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { deleteVideo } from '../../redux/actions/videoActions';

const DeleteButton = ({ videoId, videoOwnerId }) => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);  // Access token from Redux
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (!user) {
      alert('You must be logged in to delete a video.');
      return;
    }
    if (user.id !== videoOwnerId) {
      alert('Permission denied: You can only delete your own videos.');
      return;
    }
    try {
      console.log("Deleting video with ID:", videoId); // Added for debugging
      console.log("Authorization token:", token); // Added for debugging
      await dispatch(deleteVideo(videoId, token));
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  if (!user || user.id !== videoOwnerId) {
    return null; // Do not render the button if user is not logged in or does not own the video
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      onClick={handleDelete}
      style={{ marginLeft: '8px', backgroundColor: 'red' }}
    >
      Delete Video
    </Button>
  );
};

export default DeleteButton;
