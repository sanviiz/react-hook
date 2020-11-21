import React, { useState } from "react";

export default function useStateDemo1() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useState: {count}</h1>
      <h1>Title: {title}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setTitle("React Hook");
        }}
      >
        Add
      </button>
    </div>
  );
}
