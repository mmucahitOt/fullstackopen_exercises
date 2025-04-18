import Part from "./Part";

const Content = ({ parts }) => {
  console.log("parts: ", parts);
  if (parts === undefined || parts.length === 0) return null;
  return (
    <div>
      <Part key={1} part={parts[0]} />
      <Part key={2} part={parts[1]} />
      <Part key={3} part={parts[2]} />
    </div>
  );
};

export default Content;
