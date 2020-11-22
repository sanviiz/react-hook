import React from "react";
import UseContextDemo1 from "./components/useContextDemo1";
import UseEffectDemo1 from "./components/useEffectDemo1";
import UseEffectDemo2 from "./components/useEffectDemo2";
import UseEffectDemo3 from "./components/useEffectDemo3";
import UseEffectDemo4 from "./components/useEffectDemo4";
import UseStateDemo1 from "./components/useStateDemo1";
import UseStateDemo2 from "./components/useStateDemo2";
import UseStateDemo3 from "./components/useStateDemo3";
import UseMemoDemo1 from "./components/useMemoDemo1";

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
      <hr />
      {/* <UseEffectDemo3 /> */}
      <UseEffectDemo4 />
      <hr />
      <UseContextDemo1 />
      <hr />
      <UseMemoDemo1 />
    </div>
  );
}
