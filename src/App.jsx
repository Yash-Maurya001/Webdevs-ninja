import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [count, setCount] = useState(0);
  const set_count = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center mt-[-100px] flex-col gap-6">
        <h1 className="text-3xl font-bold">Counter</h1>
        <div className=" flex  gap-4 items-center ">
          {count}
          <button className="bg-blue-400 px-3 py-2 rounded" onClick={set_count}>
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
