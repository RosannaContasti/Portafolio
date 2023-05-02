import React from "react";
import "./globals.css";
import HomeButtons from "./components/HomeButtons";
import HomeTitle from "./components/HomeTitle";
import Footer from "./components/Footer";
import RootLayout from "./layout";
import About from "./components/About";
import Projects from "./components/Projects";
//import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <RootLayout>
        <div class="flex flex-col justify-center grid justify-items-center leading-loose h-screen">
          <HomeTitle id="title"/>
          <HomeButtons />
        </div>
        <div>
          <About id="about" />
        </div>
        <div>
          <Projects id="projects" />
        </div>
        <Footer id="contact" />
      </RootLayout>
    </>
  );
}
