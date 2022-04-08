/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

import { FC, useState } from "react";

const IncremenButton: FC<{ incrementCounter : Function }> = ({ incrementCounter }) => {
  return (
    <button
      onClick={() => incrementCounter()}
    >
      Increment
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>My Counter 2</h1>
      <div>{count}</div>
      <IncremenButton incrementCounter={handleIncrement} />
    </div>
  );
};

export default Counter;
