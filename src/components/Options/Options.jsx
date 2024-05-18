import Button from "../Button/Button";
import "./Options.module.css";

export const Options = ({ onUpdate, total }) => {
  return (
    <>
      <Button onUpdate={() => onUpdate("good")}>Good</Button>
      <Button onUpdate={() => onUpdate("neutral")}>Neutral</Button>
      <Button onUpdate={() => onUpdate("bad")}>Bad</Button>
      {total > 0 && <Button onUpdate={() => onUpdate("reset")}>Reset</Button>}
    </>
  );
};

export default Options;
