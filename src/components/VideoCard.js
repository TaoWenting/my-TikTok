// // src/components/VideoCard.js

import React, { useState } from 'react';
import './VideoCard.css'; // Ensure you have this CSS file for styling
import LikeButton from './LikeButton';
import CommentsSection from './CommentsSection';
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const VideoCard = ({ video }) => {
  const [openComments, setOpenComments] = useState(false);

  const handleOpenComments = () => {
    setOpenComments(true);
  };

  const handleCloseComments = () => {
    setOpenComments(false);
  };

  return (
    <div className="video-card">
      <video width="100%" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Likes: {video.likes}</p>
        <LikeButton videoId={video.id} />
        <Button variant="contained" size="small" onClick={handleOpenComments}>
          Comments
        </Button>
      </div>
      <Dialog open={openComments} onClose={handleCloseComments} fullWidth>
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          <CommentsSection videoId={video.id} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
