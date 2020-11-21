import React from "react";

export default function useEffectDemo1() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = "Current Count: " + count;
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
