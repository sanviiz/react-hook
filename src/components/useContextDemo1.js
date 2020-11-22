import React from "react";
import UseContextDemoChild1 from "./useContextDemoChild1";
import ThemeContext from "./ThemeContext";

export default function useContextDemo1() {
  return (
    <div>
      <ThemeContext.Provider value="red">
        <UseContextDemoChild1 />
      </ThemeContext.Provider>
    </div>
  );
}
