import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  // Function to handle decrease

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  // Function to handle increase

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center font-sans mt-64">
      <div className="text-3xl font-extrabold mb-4">My Counter app</div>

      <div className="flex space-x-4">
        <button onClick={handleIncrease} className="bg-green-500 hover:bg-green-600 text-white text-2xl px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">Increment</button>
        <button onClick={handleDecrease} className="bg-red-500 hover:bg-red-600 text-white text-2xl px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">Decrement</button>
      </div>

      <div className="text-3xl font-extrabold mt-4">Count : {count}</div>
    </div>
  );
}
