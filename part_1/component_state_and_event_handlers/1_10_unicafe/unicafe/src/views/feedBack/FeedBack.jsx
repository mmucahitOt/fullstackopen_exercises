import { useState } from "react";
import { Statistics, GiveFeedback } from "./components";

const FeedBack = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleGoodCount = () => {
    setGoodCount(goodCount + 1);
  };
  const handleNeutralCount = () => {
    setNeutralCount(neutralCount + 1);
  };
  const handleBadCount = () => {
    setBadCount(badCount + 1);
  };

  return (
    <div>
      <GiveFeedback
        handleGoodCount={handleGoodCount}
        handleNeutralCount={handleNeutralCount}
        handleBadCount={handleBadCount}
      />
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </div>
  );
};

export default FeedBack;
