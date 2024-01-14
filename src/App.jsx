import React from "react";
import HookCount from "./components/HookCount";
import HookCountTwo from "./components/HookCountTwo";
import HookCounterThree from "./components/HookCounterThree";

const App = () => {
  return (
    <div className="w-screen h-full flex flex-row items-center justify-center gap-5 overflow-hidden mt-[24px]">
     <HookCounterThree />
    </div>
  );
};

export default App;
