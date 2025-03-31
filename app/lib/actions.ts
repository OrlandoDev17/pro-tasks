// lib/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { supabase } from './supabaseClient';

// Función para manejar login y redirección
export const signInAndRedirect = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error('Correo o contraseña incorrectos');
  }

  // Redirige a la página principal si el login es exitoso
  redirect('/');
};

// Función para manejar registro y redirección
export const signUpAndRedirect = async (
  name: string,
  email: string,
  password: string
) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } }, // Guarda el nombre en el perfil del usuario
  });

  if (error) {
    throw new Error('No se pudo registrar. Intenta con otro correo.');
  }

  // Redirige a la página principal después del registro
  redirect('/');
};
