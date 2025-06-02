import WindowSizeWrapper from "@/components/WindowSizeWrapper";
import { HeroPage } from "@/components/Hero";
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
 