import React, { useState } from 'react';
 
const Counter = () => {
  const [value, setValue] = useState(0);
 
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value + 10)}>+10</button>
      <button onClick={() => setValue(value + 100)}>+100</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <button onClick={() => setValue(value - 10)}>-10</button>
      <button onClick={() => setValue(value - 100)}>-100</button>
    </div>
  );
};
 
export default Counter;