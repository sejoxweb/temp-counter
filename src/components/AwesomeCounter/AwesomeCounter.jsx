import React, { useState } from "react";

function AwesomeCounter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue ?? 0);
  const add = () => setCounter((prevCounter) => prevCounter + 1);
  const remove = () =>
    setCounter((prevCounter) => {
      const result = prevCounter - 1;
      if (result < 0) {
        return 0;
      }

      return result;
    });
  return (
    <div>
      <h1>Awesome Counter</h1>
      <button onClick={remove}>Remove</button>
      {counter}
      <button onClick={add}>Add</button>
    </div>
  );
}

export default AwesomeCounter;
