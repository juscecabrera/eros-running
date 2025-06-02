import Image from "next/image";
import WindowSizeWrapper from "@/components/WindowSizeWrapper";
import { HeroPage } from "@/components/Hero";

export default function Home() {
  return (
  <>
    <WindowSizeWrapper />
    <HeroPage />
  </>
  );
}
 