const Total = ({ parts }) => {
  if (parts === undefined || parts.length === 0) return null;
  return (
    <p>
      Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  );
};

export default Total;
