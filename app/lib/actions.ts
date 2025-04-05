// lib/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { supabase } from './supabaseClient';

export const signInAndRedirect = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error('Correo o contraseña incorrectos');
  }

  redirect('/?success=login');
};

export const signUpAndRedirect = async (
  name: string,
  email: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (error) {
    throw new Error('No se pudo registrar. Intenta con otro correo.');
  }

  redirect('/?success=register');
};
