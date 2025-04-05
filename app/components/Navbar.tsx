'use client';

import Button from './Button';
import Search from '@/icons/Search';
import ToggleTheme from './ToggleTheme';
import User from '@/icons/User';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import { NAVBAR_LINKS, BUTTONS } from '@/consts/navbar';
import Link from 'next/link';

export default function Navbar() {
  const session = useSession();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push('/'); // Redirige a la página principal después de cerrar sesión
  };

  return (
    <div className="py-6 px-24 flex items-center border-b-2 border-dark-bg dark:border-white justify-between bg-dark-primary dark:bg-dark-bg">
      <nav className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <img
            className="size-12 block dark:hidden"
            src="./logo.svg"
            alt="Logo de ProTasks"
          />
          <img
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
        <Search className="size-8 text-special cursor-pointer mr-2 dark:text-dark-special" />
        {session ? (
          // Si el usuario está logueado, muestra el icono de usuario
          <div className="flex items-center gap-2">
            <User className="size-8 text-accent cursor-pointer dark:text-dark-accent" />
            <button
              onClick={handleSignOut}
              className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          // Si el usuario no está logueado, muestra los botones de Iniciar Sesión y Registrarse
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
    </div>
  );
}
