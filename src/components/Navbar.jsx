import React from "react";

export default function Navbar() {
  return (
    <div className="my-4 flex h-[60px] items-center 
    justify-center gap-2 rounded-lg
     bg-white text-xl font-medium">
      <img src="/firebase.png" alt='Firebase logo'/>
      <h1>Firebase Contact App</h1>
    </div>
  );
}
