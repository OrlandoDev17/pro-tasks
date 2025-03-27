'use client';

import Button from '../commons/Button';
import Search from '@/app/icons/Search';
import ToggleTheme from '../utils/ToggleTheme';

export default function NavBar() {
  return (
    <header className="py-6 px-24 flex items-center justify-between bg-dark-primary dark:bg-dark-bg">
      <nav className="flex items-center gap-8">
        <picture className="flex items-center gap-2">
          <img
            className="size-12 block dark:hidden"
            src="./logo.svg"
            alt="Logo de ProTasks"
          />
          <img
            className="size-12 hidden dark:block"
            src="./logo-dark.svg"
            alt="Logo de ProTasks"
          />
          <h2 className="text-4xl font-poppins font-semibold tracking-wide dark:text-dark-primary">
            ProTasks
          </h2>
        </picture>
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="text-2xl inline-block hover:scale-110 hover:text-accent transition dark:text-dark-primary dark:hover:text-dark-accent"
              href="#"
            >
              Espacio de Trabajo
            </a>
          </li>
          <li>
            <a
              className="text-2xl inline-block hover:scale-110 hover:text-accent transition dark:text-dark-primary dark:hover:text-dark-accent"
              href="#"
            >
              Plantillas
            </a>
          </li>
        </ul>
        <Button href="#">Crear</Button>
      </nav>

      <aside className="flex items-center gap-4">
        <Search className="size-8 text-special cursor-pointer mr-2 dark:text-dark-special" />
        <Button
          className="border-special hover:bg-special shadow-special dark:border-dark-special dark:hover:bg-dark-special 
          dark:shadow-dark-special"
          href="#"
        >
          Iniciar Sesion
        </Button>
        <Button
          className="border-special hover:bg-special shadow-special dark:border-dark-special dark:hover:bg-dark-special 
          dark:shadow-dark-special"
          href="#"
        >
          Registrarse
        </Button>
        <ToggleTheme />
      </aside>
    </header>
  );
}
