'use client';

import { useEffect, useState } from 'react';
import Moon from '@/icons/Moon';
import Sun from '@/icons/Sun';

export default function ToggleTheme() {
  // Estado para controlar el tema actual
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Aplicar el tema guardado en localStorage al cargar la página
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme);
  }, []);

  return (
    <button onClick={toggleTheme} className="ml-4">
      {/* Mostrar el ícono correspondiente según el tema */}
      {isDarkMode ? (
        <Sun className="size-8 cursor-pointer text-white hover:scale-110 hover:text-dark-special transition" />
      ) : (
        <Moon className="size-8 cursor-pointer text-primary hover:scale-110 hover:text-special transition" />
      )}
    </button>
  );
}
