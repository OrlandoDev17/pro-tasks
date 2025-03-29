import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Plus from './icons/Plus';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex">
        <aside>
          <Sidebar />
        </aside>
        <main className="w-full py-4 px-16">
          <section className="flex justify-between items-center">
            <h2 className="text-4xl font-poppins font-semibold dark:text-white">
              Mis Tableros
            </h2>
            <Button href="#crear-tablero">
              <Plus className="size-8" />
              <span className="ml-1">Crear Tablero</span>
            </Button>
          </section>
        </main>
      </div>
    </>
  );
}
