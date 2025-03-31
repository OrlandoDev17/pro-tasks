'use client';

import { useState } from 'react';
import { signInAndRedirect } from '@/lib/actions';

import Mail from '@/icons/Mail';
import Lock from '@/icons/Lock';
import Button from './Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInAndRedirect(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleLogin}>
      <div className="flex flex-col gap-y-4">
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
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Lock className="absolute top-10 left-2 text-primary/50" />
        </label>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit">Iniciar Sesión</Button>
      <button className="text-accent font-semibold font-poppins underline ">
        ¿Olvidaste tu contraseña?
      </button>
    </form>
  );
}
