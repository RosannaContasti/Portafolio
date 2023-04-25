import React, { useClient } from "react";
import "../globals.css";
import HomeButtons from "../components/HomeButtons";
import HomeTitle from "../components/HomeTitle";
import MenuButton from "../components/MenuButton";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

export default function Home() {
  return (
    <>
      <div class="ml-auto mr-4">
        <MenuButton />
      </div>
      <div class="flex flex-col justify-center grid justify-items-center leading-loose">
        <HomeTitle />
        <HomeButtons />
      </div>
    </>
  );
}
