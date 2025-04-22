import { useState } from "react";
import Button from "../components/Button";
import getRandomInt from "../helpers/random";
import { AnecdoteDisplay } from "./components";

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

  const anecdoteWithMostVotes = anecdotes.reduce((max, current) => {
    return current.votes > max.votes ? current : max;
  }, anecdotes[0]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AnecdoteDisplay
        title="Anecdote of the day"
        anecdote={anecdotes[selectedAnecdoteIndex]}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={handleNextAnecdote} text="next anecdote" />
      </div>
      <AnecdoteDisplay
        title="Anecdote with most votes"
        anecdote={anecdoteWithMostVotes}
      />
    </div>
  );
};

export default Anecdote;
