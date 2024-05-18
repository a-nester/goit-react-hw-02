import { useState, useEffect } from "react";
import "./App.css";

import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";

const createValueInit = () => {
  const savedData = JSON.parse(localStorage.getItem("value"));
  if (!savedData) {
    return { good: 0, neutral: 0, bad: 0 };
  }
  return savedData;
};

function App() {
  const [values, setValues] = useState(createValueInit);

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <div className="appBox">
        <Description />
        <Options onUpdate={updateFeedback} total={totalFeedback} />
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            value={values}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        )}
      </div>
    </>
  );
}

export default App;
