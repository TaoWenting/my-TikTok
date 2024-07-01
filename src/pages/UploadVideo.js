import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo, setVideoPrivacy } from '../redux/actions/videoActions';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  TextareaAutosize,
  Typography,
  CircularProgress,
} from '@mui/material';
import '../components/styles/sharedStyles.css';

const UploadVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        navigate(`/user`);
      } catch (error) {
        console.error('Error setting privacy:', error);
      }
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" className="title">
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
          className="form-field"
        />
        <TextareaAutosize
          rowsMin={3}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-field"
          style={{ width: '100%' }}
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          required
          className="form-field"
        />
        <Button
          type="submit"
          variant="contained"
          className={`button button-primary ${uploading ? 'button-disabled' : ''}`}
        >
          {uploading ? <CircularProgress size={24} /> : 'Upload'}
        </Button>
      </form>

      {successMessage && (
        <Typography variant="body1" className="success-message">
          {successMessage}
        </Typography>
      )}

      {uploadedVideo && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h5" className="title">
            Set Video Privacy
          </Typography>
          <Button
            variant="contained"
            className="button button-primary"
            onClick={() => handleSetPrivacy(true)}
            style={{ marginRight: '1rem' }}
          >
            Make Public
          </Button>
          <Button
            variant="contained"
            className="button button-secondary"
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
