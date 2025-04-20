const FeedbackStatistics = ({ goodCount, neutralCount, badCount }) => {
  console.log(goodCount, neutralCount, badCount);
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {goodCount}</p>
      <p>Neutral: {neutralCount}</p>
      <p>Bad: {badCount}</p>
      <p>All: {goodCount + neutralCount + badCount}</p>
      <p>Average: {calculateAverage(goodCount, neutralCount, badCount)}</p>
      <p>
        Positive:{" "}
        {calculatePositivePercentage(goodCount, neutralCount, badCount)}
        {"%"}
      </p>
    </div>
  );
};

const calculateAverage = (goodCount, neutralCount, badCount) => {
  const feedbackCount = goodCount + neutralCount + badCount;
  if (feedbackCount === 0) {
    return 0;
  }
  const totalCount = goodCount * 1 + neutralCount * 0 + badCount * -1;
  const average = totalCount / feedbackCount;
  return average;
};

const calculatePositivePercentage = (goodCount, neutralCount, badCount) => {
  const feedbackCount = goodCount + neutralCount + badCount;
  if (feedbackCount === 0) {
    return 0;
  }
  const positivePercentage = (goodCount / feedbackCount) * 100;
  return positivePercentage;
};

export default FeedbackStatistics;
