import React from "react";
import HookCount from "./components/HookCount";
import HookCountTwo from "./components/HookCountTwo";

const App = () => {
  return (
    <div className="w-screen h-full flex flex-row items-center justify-center gap-5 overflow-hidden mt-[24px]">
      <HookCountTwo />
    </div>
  );
};

export default App;
