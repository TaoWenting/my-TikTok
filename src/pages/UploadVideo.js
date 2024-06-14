import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo, setVideoPrivacy } from '../redux/actions/videoActions';

const UploadVideo = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoFile && title) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('video', videoFile);

      // Include token in the uploadVideo action
      dispatch(uploadVideo(formData, token)).then(video => {
        setUploadedVideo(video);
      });
    }
  };

  const handleSetPrivacy = (isPublic) => {
    if (uploadedVideo) {
      dispatch(setVideoPrivacy(uploadedVideo.id, isPublic, token));
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <input type="file" accept="video/*" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>

      {uploadedVideo && (
        <div>
          <h3>Set Video Privacy</h3>
          <button onClick={() => handleSetPrivacy(true)}>Make Public</button>
          <button onClick={() => handleSetPrivacy(false)}>Make Private</button>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
