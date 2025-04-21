const Text = ({ text, value }) => {
  return (
    <p>
      {text}
      {value ?? ": " + value}
    </p>
  );
};

export default Text;
