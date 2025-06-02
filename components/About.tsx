import alexerPro from '@/lib/fonts';
import GlassButton from './GlassButton';
import image1 from './about1.jpeg';
import image2 from './about1.jpeg';
import image3 from './about1.jpeg';

export const AboutPage = () => {
    // El h-[100px] es para eliminar el margen entre el h2 y el p artificial, no se como sacarlo
    return (
        <div className={`font-light text-white bg-black h-[608px] grid grid-cols-12 gap-[24px] px-[64px] grid-rows-1 w-full ${alexerPro.className}`}>
            <div className='col-span-6 mt-[100px] col-start-1 row-start-1 grid grid-cols-6 gap-[24px]'>
                <div className='col-span-5 col-start-1 p-0'>
                    <h2 className={`text-[72px] mt-0 mb-[14px]`}>FOCUS LIKE ERÖS</h2>
                    <p className='text-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque pellentesque, dolor tortor ultricies est, ut efficitur odio nunc vel massa. Suspendisse quis posuere enim. 
                    </p>
                </div>
                <div className='col-span-2 col-start-1'>
                    <GlassButton text={18}/>
                </div>
            </div>
            
            {/* Columna Izquierda */}
            <div className='col-span-3 col-start-7 row-start-1 flex flex-col'>
                <div className='bg-gray-500 h-full w-full text-8xl'>1</div>
                <div className='bg-red-500 h-full w-full text-8xl'>2</div>
            </div>

            {/* Columna Derecha */}
            <div className='col-span-3 col-start-10 row-start-1 flex flex-col'>
                <div className='bg-gray-500 h-full w-full text-8xl'>3</div>
                <div className='bg-red-500 h-full w-full text-8xl'>4</div>
            </div>

        </div>
    )
}