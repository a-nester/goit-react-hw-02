export const Feedback = ({ value, total }) => {
  const { good, neutral, bad } = value;

  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive:</p>
    </>
  );
};

export default Feedback;
