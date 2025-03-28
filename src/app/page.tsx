import Button from './components/Button';

export default function Home() {
  return (
    <>
      <section className="w-full py-4 px-16">
        <header className="flex justify-between items-center">
          <h2 className="text-4xl font-poppins font-semibold dark:text-white">
            Mis Tableros
          </h2>
          <Button color="accent" href="#crear-tablero">
            Crear Tablero
          </Button>
        </header>
      </section>
    </>
  );
}
