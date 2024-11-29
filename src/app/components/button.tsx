"use client";

import { useState } from "react";

export default function Button() {
  // hook, event ke against ui ko update krna
  let [count, setcount] = useState(0); //returns array ik element hota hai jese yaha pr 0 hai  ik function aur jo function hota hai woh humari value hoti h
  console.log(count);

  const handleClick = () => {
    setcount(count + 1); //re-renders new value
  };

  const handleReset = () => {
    setcount(0); // reset back to 0
  };

  return (
    <div className="bg-[#CEBFB6] w-[80px] h-[60px] flex flex-col items-center justify-between">
      <p className="text-black w-[40px] flex text-sm bg-[#cfe2f3] rounded ml-1">
        {count}
      </p>

      <div className="flex space-x-2 mt-2">
        <button
          onClick={handleClick}
          className="bg-[#8D988D] w-[20px] h-[20px] px-1 py-1 rounded-full border mt-1 mb-1 border-white flex items-center justify-center text-center"
        >
          +
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="bg-[#8D988D] w-[20px] h-[20px] px-1 py-1 rounded-full border mt-1 mb-1 border-white flex items-center justify-center text-[10px] text-center"
        >
          R
        </button>
      </div>
    </div>
  );
}
