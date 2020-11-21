import React from "react";
import UseEffectDemo1 from "./components/useEffectDemo1";
import UseEffectDemo2 from "./components/useEffectDemo2";
import UseStateDemo1 from "./components/useStateDemo1";
import UseStateDemo2 from "./components/useStateDemo2";
import UseStateDemo3 from "./components/useStateDemo3";

export default function App() {
  const [show, setShow] = React.useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      <UseStateDemo1 />
      <hr />
      <UseStateDemo2 />
      <hr />
      <UseStateDemo3 />
      <hr />
      <UseEffectDemo1 />
      <hr />
      {show && <UseEffectDemo2 />}
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </div>
  );
}
