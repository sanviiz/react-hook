import React from "react";

export default function useMemoDemo1() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((countPrev) => countPrev + 1)}>
        Increase B
      </button>
      <button onClick={() => setCount(0)}>Reset B</button>
      <Content a={1} b={count} />
    </div>
  );
}

const Content = ({ a, b }) => {
  const memorizedRandom = React.useMemo(() => {
    return Math.random();
  }, []);
  const Random = Math.random();

  return (
    <div>
      <h1>
        A: {a}, B: {b}
      </h1>
      <h1>Random: {Random}</h1>
      <h1>Memorized Random: {memorizedRandom}</h1>
    </div>
  );
};
