import Button from "../Button/Button";
import "./Options.module.css";

export const Options = ({ onUpdate }) => {
  // { handleClickGood, handleClickNeutral }
  return (
    <>
      <Button onUpdate={() => onUpdate("good")}>Good</Button>
      <Button onUpdate={() => onUpdate("neutral")}>Neutral</Button>
      <Button onUpdate={() => onUpdate("bad")}>Bad</Button>
    </>
  );
};

export default Options;
