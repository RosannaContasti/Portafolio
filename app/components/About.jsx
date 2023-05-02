import React from "react";

const page = () => {
  return (
    <div id="about" class="flex m-20 flex-col flex justify-center h-screen">
      <div class="top-0 right-0 flex flex-row-reverse">
        <a href="#title">
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
        <a href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        </a>
      </div>
      <div class="text-gray-950 mx-8 mb-12 flex justify-center">
        <h2 class="text-7xl ">about me</h2>
      </div>
      <div class="text-stone-800 mx-10 opacity-75">
        <p>
          <span class="text-stone-950 text-base">Hello!</span> I'm Rosanna
          Contasti, a passionate full-stack developer currently living in Buenos
          Aires, Argentina. Since discovering my love for programming, I have
          never stopped learning and improving my skills to create innovative
          and highly functional web applications and solutions. When I'm not
          coding, I indulge in my passion for music and video games. I love
          finding the harmony between logic and creativity, which allows me to
          develop applications with an attractive interface and unparalleled
          functionality.
        </p>
        {/* <br></br>
        <p class="text-stone-800 flex justify-center">
          Here are a few technologies I've been working with recently:
        </p>
        <br></br>
        <ul class="text-stone-800 flex justify-around mx-3">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
          <li>MongoDb</li>
        </ul> */}
      </div>
    </div>
  );
};

export default page;
