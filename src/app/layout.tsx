import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Configuración de las fuentes
const inter = Inter({ subsets: ['latin'], weight: '300' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

// Metadatos del sitio
export const metadata: Metadata = {
  title: 'ProTasks | Maneja tus tareas de forma eficiente',
  description:
    'ProTasks es una aplicación para manejar tus tareas de forma eficiente, con la posibilidad de crear proyectos y asignar tareas a cada uno de ellos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="./logo.svg" />
      </head>
      <body className={inter.className}>
        {children}
        <style>{`
        .font-poppins {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      </body>
    </html>
  );
}
