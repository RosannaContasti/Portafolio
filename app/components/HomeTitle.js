import React from "react";

const HomeTitle = () => {
  return (
    <>
      <div class="mt-20 pt-20 text-4xl">
        <p class="text-center text-stone-800">
          Hey! I'm <strong class="text-red-400">Rosanna Contasti</strong>
          <br></br>
          But you can call me <strong class="text-red-400">Rosi</strong>
        </p>
      </div>
      <div class="text-7xl text-center ">
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-300 relative inline-block">
          <span class="relative text-stone-800">I'm a Fullstack dev</span>
        </span>
      </div>
    </>
  );
};

export default HomeTitle;