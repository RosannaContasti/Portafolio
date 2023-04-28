import React from "react";
import "./globals.css";
import HomeButtons from "./components/HomeButtons";
import HomeTitle from "./components/HomeTitle";
import MenuButton from "./components/MenuButton";
import Link from "next/link";
import Footer from "./components/Footer";
import RootLayout from "./layout";
import About from "./about/page"

export default function Home() {
  return (
    <>
      <RootLayout>
        {/* <div class="ml-auto mr-4 ">
          <Link href="/menuList">
            <MenuButton />
          </Link>
        </div> */}
        <div class="flex flex-col justify-center grid justify-items-center leading-loose h-screen">
          <HomeTitle />
          <HomeButtons />
        </div>
        <div>
        <About/>
        </div>
        <Footer />
      </RootLayout>
    </>
  );
}
