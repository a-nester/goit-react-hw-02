import { useState } from "react";
import "./App.css";

import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";

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
    // const totalFeedback = good + neutral + bad;
  };
  const totalFeedback = values.good + values.neutral + values.bad;
  // console.log(totalFeedback);
  return (
    <>
      <div className="appBox">
        <Description />
        <Options onUpdate={updateFeedback} />
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback value={values} total={totalFeedback} />
        )}
      </div>
    </>
  );
}

export default App;
