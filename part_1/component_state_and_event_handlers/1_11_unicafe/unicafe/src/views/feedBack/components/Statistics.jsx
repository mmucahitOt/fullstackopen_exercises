import { Table } from "../../../components";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const title = "Statistics";
  if (goodCount === 0 && neutralCount === 0 && badCount === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <Table
      title={title}
      rows={[
        { id: "good", key: "Good", value: goodCount },
        { id: "neutral", key: "Neutral", value: neutralCount },
        { id: "bad", key: "Bad", value: badCount },
        {
          id: "all",
          key: "All",
          value: goodCount + neutralCount + badCount,
        },
        {
          id: "average",
          key: "Average",
          value: calculateAverage(goodCount, neutralCount, badCount),
        },
        {
          id: "positive",
          key: "Positive",
          value: calculatePositivePercentage(goodCount, neutralCount, badCount),
        },
      ]}
    />
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
