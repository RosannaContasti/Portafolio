import React, { forwardRef } from "react";

const page = () => {
  return (
    <div
      className="flex m-20 flex-col flex justify-center h-screen"
      id="projects"
    >
      <div class="top-0 right-0 flex flex-row-reverse">
        <a href="#about">
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

        <a href="#contact">
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
      <div class="text-gray-950  mx-8 mb-12 flex justify-center">
        <h2 class="text-7xl ">projects</h2>
      </div>
      <div className="flex justify-center m-8 opacity-75">
        <p class="mx-8 hover:bg-transparent hover:border-b-2 hover:border-gray-800">gambet</p>
        <p class="mx-8 ...">
          Creation of a reusable and adaptable PWA and Web App for conducting
          Prodes in sports events in Argentina, Brazil and the United States,
          with automatic redirection to the corresponding country versions. The
          platform was developed with Next.js 12, Firebase, Express, Node.js,
          and MongoDB. The project also included features such as notifications,
          Google SSO, multi-language, and mobile optimization.
        </p>
      </div>
      <div className="flex justify-center m-8 opacity-75">
        <p class="mx-8 hover:bg-transparent hover:border-b-2 hover:border-gray-800">klimty</p>
        <p class="mx-8 ...">
          Participation in the development of an e-commerce web app for Print
          Art alongside a team of 6 people. Utilizing technologies such as
          React, Firebase, Sequelize, Postgres and MUI, contributing to the
          design, development and testing of the application, applying
          programming, design and database management knowledge to improve the
          user experience in the application. Demonstrating teamwork and
          collaboration skills to achieve project objectives.
        </p>
      </div>
      <div className="flex justify-center m-8 opacity-75">
        <p class="mx-8 hover:bg-transparent hover:border-b-2 hover:border-gray-800">tmdb</p>
        <p class="mx-8 ...">
          Individual project with a database search engine and orders to
          external APIs, setting of favorites, comments and ratings, with CSS
          styling using technologies such as React, CSS, Node.js, Express.js,
          Sequelize and PostgreSQL.
        </p>
      </div>
    </div>
  );
};

export default forwardRef(page);
