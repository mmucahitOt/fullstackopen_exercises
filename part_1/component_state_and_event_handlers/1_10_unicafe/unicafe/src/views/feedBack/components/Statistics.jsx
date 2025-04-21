import StatisticsLine from "./StatisticsLine";

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  if (goodCount === 0 && neutralCount === 0 && badCount === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text="Good" value={goodCount} />
      <StatisticsLine text="Neutral" value={neutralCount} />
      <StatisticsLine text="Bad" value={badCount} />
      <StatisticsLine text="All" value={goodCount + neutralCount + badCount} />
      <StatisticsLine
        text="Average"
        value={calculateAverage(goodCount, neutralCount, badCount)}
      />
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

export default Statistics;
