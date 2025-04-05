'use client';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AuthView() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-y-6">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <header className="flex flex-col gap-y-3 items-center">
        <h2 className="text-3xl md:text-5xl font-semibold font-poppins text-accent">
          Bienvenido a ProTasks
        </h2>
        <p className="text-primary/80 text-base md:text-lg font-poppins">
          Organiza tus proyectos de manera eficiente
        </p>
      </header>
      <main className="bg-white flex flex-col gap-8 p-6 md:p-8 shadow-2xl rounded-xl max-w-[90%] md:max-w-140">
        <div className="relative flex justify-between bg-neutral-200 p-2 rounded-lg overflow-hidden">
          {/* Fondo animado del botón activo */}
          <motion.div
            layoutId="activeTab"
            className="absolute top-1 flex bottom-0 h-11 md:h-10 w-38 md:w-48 bg-white rounded-md"
            animate={{ left: isLogin ? '2%' : '50%' }}
            transition={{ type: 'slide', stiffness: 300, damping: 20 }}
          />

          <motion.button
            className={`relative text-sm md:text-base z-10 px-8 md:px-12 py-2 md:py-1 rounded-md font-poppins transition-colors duration-300 ${
              isLogin ? 'text-primary font-semibold' : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(true)}
            whileTap={{ scale: 0.9 }}
          >
            Iniciar Sesión
          </motion.button>

          <motion.button
            className={`relative text-sm md:text-md z-10 px-8 md:px-12 py-2 md:py-1 rounded-md font-poppins transition-colors duration-300 ${
              !isLogin ? 'text-primary font-semibold' : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(false)}
            whileTap={{ scale: 0.9 }}
          >
            Registrarse
          </motion.button>
        </div>

        <motion.div
          key={isLogin ? 'login' : 'register'}
          initial={{ opacity: 0, x: isLogin ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isLogin ? -50 : 50 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </motion.div>
      </main>
    </section>
  );
}
