import React from "react";

const HomeTitle = () => {
  return (
    <>
      <div id="title" class="mt-20 pt-20 text-4xl">
        <p class="text-center text-stone-700">
          hey! i'm <strong class="text-gray-950">rosanna contasti</strong>
          <br></br>
          but you can call me <strong class="text-gray-950">rosi</strong>
        </p>
      </div>
      <div class="text-7xl text-center ">
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-950 relative inline-block opacity-70">
          <span class="relative text-gray-100">i'm a fullstack dev</span>
        </span>
      </div>
    </>
  );
};

export default HomeTitle;