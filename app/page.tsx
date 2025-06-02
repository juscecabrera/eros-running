// import Image from "next/image";
import WindowSizeWrapper from "@/components/WindowSizeWrapper";
import { HeroPage } from "@/components/Hero";
// import { AboutPage } from "@/components/About";
import { AboutScroll } from "@/components/AboutScroll"

export default function Home() {
  return (
  <>
    <WindowSizeWrapper />
    <HeroPage />
    <AboutScroll />
  </>
  );
}
 