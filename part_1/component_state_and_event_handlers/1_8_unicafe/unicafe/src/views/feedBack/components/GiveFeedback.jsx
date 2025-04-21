import { Button } from "../../../components";

const GiveFeedback = ({
  handleGoodCount,
  handleNeutralCount,
  handleBadCount,
}) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodCount} text="good" />
      <Button onClick={handleNeutralCount} text="neutral" />
      <Button onClick={handleBadCount} text="bad" />
    </div>
  );
};

export default GiveFeedback;
