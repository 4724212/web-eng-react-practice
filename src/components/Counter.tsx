import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}回</button>;
}