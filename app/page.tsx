import Image from "next/image";
import WindowSizeWrapper from "@/components/WindowSizeWrapper";
import { HeroPage } from "@/components/Hero";
import { AboutPage } from "@/components/About";

export default function Home() {
  return (
  <>
    <WindowSizeWrapper />
    <HeroPage />
    <AboutPage />
  </>
  );
}
 