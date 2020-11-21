import React from "react";

export default function useEffectDemo3() {
  const [count, setCount] = React.useState(0);
  const addCounter = () => {
    setCount((countPrev) => countPrev + 1);
    console.log("Add counter");
  };

  React.useEffect(() => {
    const counterInterval = setInterval(addCounter, 1000);

    return () => {
      console.log("Component destroyed");
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
