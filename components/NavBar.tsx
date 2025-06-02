import ErosTextLogo from '../public/erosTextLogo.svg'
import Image from 'next/image'
import alexerPro from '@/lib/fonts';

export const NavBar = () => {
    return (
        <>
            <nav className={`bg-black h-[124px] grid grid-cols-12 gap-[24px] px-[64px]` + ` ${alexerPro.className}`}>
                <div className='flex col-span-2 items-center h-full'>
                    <Image 
                        src={ErosTextLogo}
                        alt="Eros Fit Logo"
                        // className='col-span-2'
                    />
                </div>
                <div className='col-start-9 col-end-13 text-white'>
                    <ul className='flex flex-row items-center justify-between h-full'>
                        <li>Nosotros</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}