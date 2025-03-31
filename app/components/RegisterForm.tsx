'use client';

import { useState } from 'react';
import { signUpAndRedirect } from '@/lib/actions';

import User from '@/icons/User';
import Mail from '@/icons/Mail';
import Lock from '@/icons/Lock';
import Button from './Button';
import { p } from 'framer-motion/client';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await signUpAndRedirect(name, email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleRegister}>
      <div className="flex flex-col gap-y-4">
        <label className="relative flex flex-col gap-y-2">
          <span className="text-md font-semibold text-primary">
            Nombre Completo
          </span>
          <input
            className="outline-0 bg-neutral-100 p-2 rounded-md focus:outline-accent focus:outline-2 pl-10 placeholder:text-primary/50"
            type="text"
            value={name}
            placeholder="Orlando López"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <User className="absolute top-10 left-2 text-primary/50" />
        </label>

        <label className="relative flex flex-col gap-y-2">
          <span className="text-md font-semibold text-primary">
            Correo Electronico
          </span>
          <input
            className="outline-0 bg-neutral-100 p-2 rounded-md focus:outline-accent focus:outline-2 pl-10 placeholder:text-primary/50"
            type="email"
            value={email}
            placeholder="tu@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Mail className="absolute top-10 left-2 text-primary/50" />
        </label>

        <label className="relative flex flex-col gap-y-2">
          <span className="text-md font-semibold text-primary">Contraseña</span>
          <input
            className="outline-0 bg-neutral-100 p-2 rounded-md focus:outline-accent  focus:outline-2 pl-10 placeholder:text-primary/50"
            type="password"
            value={password}
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Lock className="absolute top-10 left-2 text-primary/50" />
        </label>

        <label className="relative flex flex-col gap-y-2">
          <span className="text-md font-semibold text-primary">
            Confirmar Contraseña
          </span>
          <input
            className="outline-0 bg-neutral-100 p-2 rounded-md focus:outline-accent  focus:outline-2 pl-10 placeholder:text-primary/50"
            type="password"
            value={confirmPassword}
            placeholder="*******"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Lock className="absolute top-10 left-2 text-primary/50" />
        </label>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit">Crear Cuenta</Button>
    </form>
  );
}
