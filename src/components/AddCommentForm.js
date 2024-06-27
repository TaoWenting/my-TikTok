// src/components/AddCommentForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/commentsActions';

const AddCommentForm = ({ videoId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(videoId, text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentForm;
