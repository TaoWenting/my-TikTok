// src/components/Comment.js

import React, { useState } from 'react';
import ReplyForm from './ReplyForm';

const Comment = ({ comment, videoId }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={toggleReplyForm}>
        {showReplyForm ? 'Cancel' : 'Reply'}
      </button>
      {showReplyForm && <ReplyForm parentId={comment.id} videoId={videoId} />}
      <div className="replies">
        {comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
