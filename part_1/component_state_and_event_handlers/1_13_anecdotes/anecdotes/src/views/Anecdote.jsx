import { useState } from "react";
import Button from "../components/Button";
import getRandomInt from "../helpers/random";

const Anecdote = ({ anecdotesData }) => {
  const [anecdotes, setAnecdotes] = useState(anecdotesData);
  const [selectedAnecdoteIndex, setSelectedAnecdoteIndex] = useState(0);

  const handleNextAnecdote = () => {
    const randomIndex = getRandomInt(anecdotes.length);
    setSelectedAnecdoteIndex(randomIndex);
  };

  const handleVote = () => {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[selectedAnecdoteIndex].votes++;
    setAnecdotes(updatedAnecdotes);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ lineHeight: "1.5" }}>
        <p style={{ margin: "0 0 5px 0" }}>
          {anecdotes[selectedAnecdoteIndex].content}
        </p>
        <p style={{ margin: "0 0 10px 0" }}>
          has {anecdotes[selectedAnecdoteIndex].votes} votes
        </p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={handleNextAnecdote} text="next anecdote" />
      </div>
    </div>
  );
};

export default Anecdote;
