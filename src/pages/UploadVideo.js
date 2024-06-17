import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo, setVideoPrivacy } from '../redux/actions/videoActions';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import {
  Button,
  TextField,
  TextareaAutosize,
  Typography,
  CircularProgress,
} from '@mui/material';

const UploadVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const { user, token } = useSelector(state => state.auth);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (videoFile && title) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('video', videoFile);

      setUploading(true);
      try {
        const video = await dispatch(uploadVideo(formData, token));
        setUploadedVideo(video);
        setSuccessMessage('Video uploaded successfully!');
        setUploading(false);
      } catch (error) {
        console.error('Error uploading video:', error);
        setUploading(false);
      }
    }
  };

  const handleSetPrivacy = async (isPublic) => {
    if (uploadedVideo) {
      try {
        await dispatch(setVideoPrivacy(uploadedVideo.id, isPublic, token));
        setSuccessMessage('Privacy settings updated successfully!');
        // Redirect to user page or update UI as needed
        navigate(`/user`); // Redirect using navigate
      } catch (error) {
        console.error('Error setting privacy:', error);
      }
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Upload Video
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="text"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextareaAutosize
          rowsMin={3}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          required
          style={{ marginBottom: '1rem' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={uploading}
        >
          {uploading ? <CircularProgress size={24} /> : 'Upload'}
        </Button>
      </form>

      {successMessage && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          {successMessage}
        </Typography>
      )}

      {uploadedVideo && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h5" gutterBottom>
            Set Video Privacy
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSetPrivacy(true)}
            style={{ marginRight: '1rem' }}
          >
            Make Public
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleSetPrivacy(false)}
          >
            Make Private
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
