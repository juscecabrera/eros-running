import WindowSizeWrapper from "@/components/WindowSizeWrapper";
import { HeroPage } from "@/components/Hero";
import { AboutScroll } from "@/components/AboutScroll"
import { AboutScrollTest } from "@/components/AboutMembershipTest"
import { MissionPage } from '@/components/Mission'
import { MissionPageScroll } from '@/components/MissionScrollHorizontal'
import { Mission2 } from '@/components/Mission2'
import Memberships from '@/components/Memberships'
import Memberships2 from '@/components/Memberships2'
import { CTASection } from "@/components/CTASection"


export default function Home() {
  return (
  <>
    <WindowSizeWrapper />
    <HeroPage />
    <AboutScroll />
    {/* <Memberships /> */}
    {/* <Memberships2 /> */}
    <AboutScrollTest />
    <MissionPageScroll />
    <Mission2 />    
    <CTASection />
  </>
  );
}
 