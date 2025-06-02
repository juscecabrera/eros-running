import WindowSizeWrapper from "@/components/WindowSizeWrapper";
import { HeroPage } from "@/components/Hero";
import { AboutScroll } from "@/components/AboutScroll"
import { MissionPage } from '@/components/Mission'


export default function Home() {
  return (
  <>
    <WindowSizeWrapper />
    <HeroPage />
    <AboutScroll />
    <MissionPage />
  </>
  );
}
 