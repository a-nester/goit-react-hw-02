import { useState } from "react";
import "./App.css";

import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";

function App() {
  const [count, setCount] = useState(0);

  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <div className="appBox">
        <Description />
        <Options />
        <Feedback props={state} />
      </div>
    </>
  );
}

export default App;
