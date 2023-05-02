import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      class="flex flex-col py-4 relative mt-8 items-center flex justify-center gap-10 border-t border-slate-400/20 pt-10 pb-20 sm:flex-row h-screen"
    >
      <div class="absolute top-0 right-0 mt-4 mr-4 flex-row">
        <a href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6"
            class="flex-row"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
      </div>

      <div class="text-gray-950 mx-8 mb-12 flex justify-center">
        <h2 class="text-7xl ">say hello</h2>
      </div>
      <div class="flex-row  my-8 ">
        <a
          class="mx-8 p-3 opacity-75 font-sans text-gray-900 hover:bg-transparent hover:border-b-2 hover:border-gray-800"
          href="https://www.linkedin.com/in/rosanna-contasti/"
          target="_blank"
        >
          linkedin
        </a>
        <a
          class="mx-8 p-3 opacity-75 font-sans text-gray-900 hover:bg-transparent hover:border-b-2 hover:border-gray-800"
          href="https://github.com/RosannaContasti"
          target="_blank"
        >
          github
        </a>
        <a
          class="mx-8 p-3 opacity-75 font-sans text-gray-900 hover:bg-transparent hover:border-b-2 hover:border-gray-800"
          href="https://github.com/RosannaContasti"
          target="_blank"
        >
          resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
