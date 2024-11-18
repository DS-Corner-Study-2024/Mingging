import { useState, useEffect } from "react";

const Controller = ({ handleSetCount, count }) => {
  const [isEven, setIsEven] = useState(true);  // 버튼 활성화 여부를 저장하는 상태

  useEffect(() => {
    setIsEven(count % 2 === 0);  // count가 짝수일 때만 버튼 활성화
  }, [count]);  // count 값이 변경될 때마다 실행

  return (
    <div>
      <button onClick={() => handleSetCount(-1)} disabled={!isEven}>-1</button>
      <button onClick={() => handleSetCount(-10)} disabled={!isEven}>-10</button>
      <button onClick={() => handleSetCount(-100)} disabled={!isEven}>-100</button>
      <button onClick={() => handleSetCount(100)} disabled={!isEven}>+100</button>
      <button onClick={() => handleSetCount(10)} disabled={!isEven}>+10</button>
      <button onClick={() => handleSetCount(1)} disabled={!isEven}>+1</button>
    </div>
  );
};

export default Controller;
