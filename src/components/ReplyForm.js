// src/components/ReplyForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReply } from '../redux/actions/commentsActions';

const ReplyForm = ({ parentId, videoId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReply(videoId, parentId, text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a reply"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReplyForm;
