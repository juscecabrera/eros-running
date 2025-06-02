import { JetBrains_Mono } from "next/font/google"
import ErosLogo from "@/public/erosFit.svg"
import alexerPro from '@/lib/fonts';
import Image from "next/image";
import GlassButton from './GlassButton';

const jetBrains = JetBrains_Mono({
  variable: "--font-jet-brains",
  subsets: ["latin"],
});

export const MissionPage = () => {
    return (
        <div className={`grid grid-cols-12 gap-[24px] px-[64px] grid-rows-2 h-[736px] bg-white py-[20px]`}>
            <div className="text-center col-span-6 col-start-4 row-start-1 row-end-1 grid grid-cols-6 gap-[24px]">
                <div className="flex items-center justify-center col-span-2 col-start-3">
                    <Image 
                        src={ErosLogo}
                        alt="eros logo"
                        width={167}
                        height={167}
                    />
                </div>
                <h2 className={`${jetBrains.className} text-[76px] text-center w-full col-span-6 col-start-1`}>GROWTH TEAM</h2>
            </div>
            <p className={`${alexerPro.className} text-center row-start-2 col-span-8 col-start-3 text-[24px]`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque pellentesque, dolor tortor ultricies est, ut efficitur odio nunc vel massa. Suspendisse quis posuere enim. <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque 
            </p>
            <div className="col-span-2 col-start-6 row-start-3">
                <GlassButton black={true}/>
            </div>
        </div>
    )
}