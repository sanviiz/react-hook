import React from "react";

export default function useCallbackDemo1() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((countPrev) => countPrev + 1)}>
        Add
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Content id={count} />
    </div>
  );
}

const Content = ({ id }) => {
  console.log("Re-render");
  const handleClick = React.useCallback(() => {
    console.log("Click");
  }, []);

  return (
    <div>
      <h1>useCallback id: {id}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
