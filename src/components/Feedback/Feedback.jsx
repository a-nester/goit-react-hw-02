export const Feedback = ({ value, total, positive }) => {
  const { good, neutral, bad } = value;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </>
  );
};

export default Feedback;
