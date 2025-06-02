import missionImage from "@/assets/images/mission2Image.png"
import alexerPro from "@/lib/fonts";
import Image from "next/image";
import ErosLogoWhite from "@/public/erosLogoWhite.svg"
import AnimatedTextCircle from "@/components/AnimatedTextCircle"

export const Mission2 = () => {
    return (

        <div className="grid grid-cols-12 gap-[24px] px-[64px] h-[600px]">
            
            <div className="-z-10 row-start-1 col-span-6 col-start-1 bg-black rounded-[40px] grid grid-cols-6 gap-[24px]">
                <h2 className={`text-[64px] col-span-4 col-start-2 mt-[41px] text-white ${alexerPro.className}`}>OBSESSED WITH 
                <span className="font-bold"> ERÖS</span></h2>
                <p className={`col-span-4 col-start-2 text-white text-[20px] ${alexerPro.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque pellentesque, dolor tortor ultricies est, ut efficitur odio nunc vel massa. Suspendiss <br></br><br></br>ficitur odio nunc vel massa. Suspendisse quis posuere enim. </p>
            </div>

            <div className="z-50 col-span-2 col-start-6 row-start-1 flex items-center justify-center">
                <AnimatedTextCircle>
                    <Image 
                        src={ErosLogoWhite}
                        alt="eros logo white"
                        className="z-0 bg-black rounded-[150px]"
                    />
                </AnimatedTextCircle>
                    {/* <Image 
                        src={ErosLogoWhite}
                        alt="eros logo white"
                        className="z-0 bg-black rounded-[150px]"
                    /> */}
            </div>

            <div className="-z-10 col-span-6 row-start-1 col-start-7 bg-black rounded-[40px]">
                <Image 
                    src={missionImage}
                    alt="mission image"
                    className="h-[600px] object-cover rounded-[40px]"
                />
            </div>
        </div>
    )

}