import React from "react";
import ThemeContext from "./ThemeContext";

export default function useContextDemoChild1() {
  const context = React.useContext(ThemeContext);

  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => <h1 style={{ color: value }}>Load from JSX: {value}</h1>}
      </ThemeContext.Consumer>
      <h1 style={{ color: context }}>Load from useContext: {context}</h1>
    </div>
  );
}
