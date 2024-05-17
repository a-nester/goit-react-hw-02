import { useState } from "react";
import "./App.css";

import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  return (
    <>
      <div className="appBox">
        <Description />
        <Options onUpdate={updateFeedback} />
        <Feedback value={values} />
      </div>
    </>
  );
}

export default App;
