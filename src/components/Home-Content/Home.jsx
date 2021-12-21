import React from "react";
import { Header } from "../Home-Content/Header/Header";
import { FeaturedBox } from "../Home-Content/Featuredbox/FeaturedBox";
import { Platform } from "../Home-Content/Platform-utils/Platform";

export function Home() {
  return (
    <div id="home">
      <Header />
      <FeaturedBox />
      <Platform />/
    </div>
  );
}
