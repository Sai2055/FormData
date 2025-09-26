import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [customInput, setCustomInput] = useState(0);

  const handleIncrement = () => {
    if (customInput) {
      setCount((prevCount) => prevCount + Number(customInput));
    } else setCount((prevcount) => prevcount + 1);
  };
  const handleDecrement = () => {
    if (customInput) {
      setCount((prevCount) => prevCount - Number(customInput));
    } else setCount((prevcount) => prevcount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const handleIncrementBy5 = () => {
    setCount((prevcount) => prevcount + 5);
  };
  const handleDecrementBy5 = () => {
    setCount((prevcount) => prevcount - 5);
  };
  return (
    <>
      <h1>Counter Component</h1>
      <div>{`The Count : ${count}`}</div>
      <button onClick={handleDecrement}>-</button>

      <button onClick={handleIncrement}>+</button>
      <div onClick={handleIncrementBy5}>
        <button>IncrementBy5</button>
      </div>
      <div onClick={handleDecrementBy5}>
        <button>DecrementBy5</button>
      </div>
      <label>Custom value to +/- : </label>
      <input
        type="number"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
      />
      <div onClick={handleReset}>
        <button>Reset</button>
      </div>
    </>
  );
};
export default Counter;
