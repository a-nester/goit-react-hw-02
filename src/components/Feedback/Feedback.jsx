export const Feedback = ({ value }) => {
  const { good, neutral, bad } = value;

  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{good + neutral + bad}</p>
      <p>Positive:</p>
    </>
  );
};

export default Feedback;
