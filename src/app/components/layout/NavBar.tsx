import Button from '../commons/Button';
import Search from '@/app/icons/Search';

export default function NavBar() {
  return (
    <header className="py-6 px-24 flex items-center justify-between">
      <nav className="flex items-center gap-8">
        <picture className="flex items-center gap-2">
          <img className="size-12" src="./logo.svg" alt="Logo de ProTasks" />
          <h2 className="text-4xl font-poppins font-semibold tracking-wide">
            ProTasks
          </h2>
        </picture>
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="text-2xl inline-block hover:scale-110 hover:text-accent transition "
              href="#"
            >
              Espacio de Trabajo
            </a>
          </li>
          <li>
            <a
              className="text-2xl inline-block hover:scale-110 hover:text-accent transition "
              href="#"
            >
              Plantillas
            </a>
          </li>
        </ul>
        <Button href="#">Crear</Button>
      </nav>

      <aside className="flex items-center gap-6">
        <Search className="size-8 text-special cursor-pointer" />
        <Button
          className="border-special hover:bg-special shadow-special"
          href="#"
        >
          Iniciar Sesion
        </Button>
        <Button
          className="border-special hover:bg-special shadow-special"
          href="#"
        >
          Registrarse
        </Button>
      </aside>
    </header>
  );
}
