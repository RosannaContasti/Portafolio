import React from "react";

const HomeTitle = () => {
  return (
    <>
      <div class="mt-20 pt-20 text-2xl">
        <p class="text-center">
          Hey! I'm <strong>Rosanna Contasti</strong>
          <br></br>
          But you can call me <strong>Rosi</strong>
        </p>
      </div>
      <div class="mb-10 p-5 text-lg text-center ">
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block">
          <span class="relative text-white">I'm a fullstack dev</span>
        </span>
      </div>
    </>
  );
};

export default HomeTitle;