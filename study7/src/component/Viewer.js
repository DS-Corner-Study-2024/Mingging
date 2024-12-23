import { useEffect, useState } from "react";

const Viewer = ({ count }) => {
  const [color, setColor] = useState("black"); 

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("red");  // 짝수
    } else {
      setColor("black");  // 홀수
    }
  }, [count]);  // count 값이 변경될 때마다 실행

  return (
    <div>
      <div>현재 카운트 : </div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
};

export default Viewer;