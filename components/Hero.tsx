import alexerPro from '@/lib/fonts';
import ErosTextLogo from '../public/erosTextLogo.svg'
import Image from 'next/image';
import GlassButton from './GlassButton';

export const HeroPage = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-[24px] px-[64px] w-full bg-gray-500 h-[740px]'>
                <Image 
                    src={ErosTextLogo}
                    alt="Eros Fit Logo"
                    className='col-start-1 col-end-13 mt-[18px]'
                    width={1312}
                    height={370}
                />
                
                <div className='col-start-6 col-end-8'>
                    <GlassButton /> 
                </div>

            </div>
        </>
    )

}