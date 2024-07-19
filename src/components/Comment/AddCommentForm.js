// src/components/AddCommentForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '.././../redux/actions/commentsActions';
import { useNavigate } from 'react-router-dom';

const AddCommentForm = ({ videoId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!token) {
      alert('Please log in to comment');
      navigate('/login');
      return;
    }
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
