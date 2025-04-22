import React from 'react';

const AnecdoteDisplay = ({ title, anecdote }) => {
  return (
    <div style={{ lineHeight: "1.5" }}>
      <h1>{title}</h1>
      <p style={{ margin: "0 0 5px 0" }}>{anecdote.content}</p>
      <p style={{ margin: "0 0 10px 0" }}>has {anecdote.votes} votes</p>
    </div>
  );
};

export default AnecdoteDisplay;


