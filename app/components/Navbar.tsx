'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/supabaseClient';

import Button from './Button';
import ToggleTheme from './ToggleTheme';
import Search from '@/icons/Search';
import User from '@/icons/User';
import { NAVBAR_LINKS, BUTTONS } from '@/consts/navbar';
import Image from 'next/image';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null); // Estado para el mensaje

  // Verifica si hay una sesion activa
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error al obtener la sesión:', error.message);
      }
      setIsLoggedIn(!!data.session);
      console.log('Sesión activa:', data.session);
    };

    checkSession();

    // También escucha los cambios en la sesión
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setMessage('Sesión cerrada correctamente');
    router.push('/'); // Redirige a la página principal
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000); // El mensaje desaparece después de 5 segundos
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="py-6 px-24 flex items-center border-b-2 border-dark-bg dark:border-white justify-between bg-dark-primary dark:bg-dark-bg">
      <nav className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="size-12 block dark:hidden"
            src="./logo.svg"
            alt="Logo de ProTasks"
          />
          <Image
            className="size-12 hidden dark:block"
            src="./logo-Dark.svg"
            alt="Logo de ProTasks"
          />
          <h2 className="text-4xl font-poppins font-semibold tracking-wide dark:text-dark-primary">
            ProTasks
          </h2>
        </Link>
        <ul className="flex items-center gap-6">
          {NAVBAR_LINKS.map(({ url, text, id }) => (
            <li key={id}>
              <Link
                className="text-2xl inline-block hover:scale-110 hover:text-accent transition dark:text-dark-primary dark:hover:text-dark-accent"
                href={url}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/create">Crear</Button>
      </nav>

      <aside className="flex items-center gap-4">
        <a
          href="#"
          className="border-2 border-special dark:border-dark-special text-special dark:text-dark-special rounded-full p-2 hover:bg-special dark:hover:bg-dark-special
          transition hover:text-white dark:hover:text-primary"
        >
          <Search className="size-8 " />
        </a>
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="border-2 border-special dark:border-dark-special text-special cursor-pointer dark:text-dark-special rounded-full p-2 hover:bg-special dark:hover:bg-dark-special
              transition hover:text-white dark:hover:text-primary "
            >
              <User className="size-8 " />
            </a>
            <button
              onClick={handleSignOut}
              className="text-lg block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          BUTTONS.map(({ url, text, id }) => (
            <Button
              key={id}
              className="border-special shadow-special hover:bg-special dark:border-dark-special dark:shadow-dark-special dark:hover:bg-dark-special"
              href={url}
            >
              {text}
            </Button>
          ))
        )}
        <ToggleTheme />
      </aside>

      {/* Mostrar el mensaje de cierre de sesión si está disponible */}
      {message && (
        <div
          className={`absolute top-24 left-[50%] p-3 mt-4 text-red-500 border-2 border-red-500 text-lg rounded-xl`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
