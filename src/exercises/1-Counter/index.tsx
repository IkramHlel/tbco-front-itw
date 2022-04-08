/**
 * 1. Counter
 *
 * My counter component is not working.
 * Every second, I want to increment by one the count variable.
 */
 import React, { useEffect, useState,} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count+1);
  }, 1000);

  return (
    <div>
      <h1>My Counter 1</h1>
      <pre>{count}</pre>
    </div>
  );
};

export default Counter;
