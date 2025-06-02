import { localFont } from 'next/font/local';

const alexerPro = localFont({
  src: [
    {
      path: '../fonts/AlexerPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    // Agrega más variantes si las tienes (por ejemplo, italic)
  ],
  variable: '--font-alexer-pro', // Opcional: para usar con Tailwind CSS
});

export default alexerPro;