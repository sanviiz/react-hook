import React from "react";

export default function useEffectDemo2() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = "Current Count: " + count;
    return () => {
      document.title = "Component destroyed";
      console.log("Component destroyed");
    };
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
