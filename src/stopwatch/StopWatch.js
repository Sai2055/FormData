import { useState, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef();

  handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    } else {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const displayTimer = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor(ms / 1000)).padStart(2, "0");
    const millisecconds = String(Math.floor(ms % 1000)).padStart(2, "0");
    return `${minutes}:${seconds}:${millisecconds}`;
  };

  const handleReset = (ms) => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "150px",
          border: "1px solid",
          margin: "140px 90px 0px 491px",
          padding: "99px",
          borderRadius: "500px",
          width: "60px",
        }}
      >
        <div>{displayTimer(time)}</div>
        <div>
          <button onClick={handleStart}>
            {!isRunning ? "Start" : "Pause"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};
export default StopWatch;
