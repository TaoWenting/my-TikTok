import React, { useState, useEffect } from 'react';
import './VideoCard.css'; // Ensure you have this CSS file for styling
import LikeButton from '../LikeButton';
import CommentsSection from '../Comment/CommentsSection';
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeleteButton from '../DeleteVideo/DeleteButton';

const VideoCard = ({ video }) => {
  const [openComments, setOpenComments] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleOpenComments = () => {
    setOpenComments(true);
  };

  const handleCloseComments = () => {
    setOpenComments(false);
  };

  useEffect(() => {
    console.log('user:', user);
    console.log('video:', video); // Log the entire video object
    console.log('video.userId:', video.userId); // Log the video userId
    const isOwner = user && video.userId && user.id === video.userId;
    console.log('isOwner:', isOwner);
  }, [user, video]);

  const isOwner = user && video.userId && user.id === video.userId;

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
        {isOwner && (
          <DeleteButton videoId={video.id} videoOwnerId={video.userId} />
        )}
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
