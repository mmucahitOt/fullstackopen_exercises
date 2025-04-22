import anecdotes from "./data/anecdotes";
import Anecdote from "./views/Anecdote";

const App = () => {
  return (
    <div>
      <Anecdote anecdotesData={anecdotes} />
    </div>
  );
};

export default App;
