import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';

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
        <div className="block dark:hidden absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="hidden dark:block absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-linear-0 from-primary to-dark-bg"></div>
        <NavBar />
        <main className="flex">
          <Sidebar />
          {children}
        </main>
        <style>{`
        .font-poppins {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      </body>
    </html>
  );
}
