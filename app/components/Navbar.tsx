'use client';

import Button from './Button';
import Search from '@/icons/Search';
import ToggleTheme from './ToggleTheme';

const NAVBAR_LINKS = [
  {
    id: 1,
    url: '#',
    text: 'Espacio de Trabajo',
  },
  {
    id: 2,
    url: '#',
    text: 'Plantillas',
  },
];

const BUTTONS = [
  {
    id: 1,
    url: '#',
    text: 'Iniciar Sesion',
  },
  {
    id: 2,
    url: '#',
    text: 'Registrarse',
  },
];

export default function Navbar() {
  return (
    <div className="py-6 px-24 flex items-center border-b-2 border-dark-bg dark:border-white justify-between bg-dark-primary dark:bg-dark-bg">
      <nav className="flex items-center gap-8">
        <a href="" className="flex items-center gap-2">
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
        </a>
        <ul className="flex items-center gap-6">
          {NAVBAR_LINKS.map(({ url, text, id }) => (
            <li key={id}>
              <a
                className="text-2xl inline-block hover:scale-110 hover:text-accent transition dark:text-dark-primary dark:hover:text-dark-accent"
                href={url}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#">Crear</Button>
      </nav>

      <aside className="flex items-center gap-4">
        <Search className="size-8 text-special cursor-pointer mr-2 dark:text-dark-special" />
        {BUTTONS.map(({ url, text, id }) => (
          <Button
            key={id}
            className="border-special shadow-special hover:bg-special dark:border-dark-special dark:shadow-dark-special dark:hover:bg-dark-special"
            href={url}
          >
            {text}
          </Button>
        ))}
        <ToggleTheme />
      </aside>
    </div>
  );
}
