import React from "react";

const Footer = () => {
  return (
    <div class="flex flex-col py-4 relative mt-8 items-center justify-between gap-10 border-t border-slate-400/20 pt-10 pb-20 sm:flex-row">
      <div class="flex-row  my-8 ">
        <a class="mx-8 p-3 opacity-75 font-sans text-red-400" href="mailto:rosicontasti@gmail.com"target="_blank">Gmail</a>
        <a class="mx-8 p-3 opacity-75 font-sans text-red-400" href="https://www.linkedin.com/in/rosanna-contasti/" target="_blank">LinkedIn</a>
        <a class="mx-8 p-3 opacity-75 font-sans text-red-400" href="https://github.com/RosannaContasti" target="_blank">GitHub</a> 
      </div>
    </div>
  );
};

export default Footer;
