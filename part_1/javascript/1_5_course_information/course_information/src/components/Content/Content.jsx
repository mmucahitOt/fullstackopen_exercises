import Part from "./Part";

const Content = ({ parts }) => {
  console.log("parts: ", parts);
  if (parts === undefined || parts.length === 0) return null;
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  );
};

export default Content;
