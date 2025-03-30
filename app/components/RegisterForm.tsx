import User from '@/icons/User';
import Mail from '@/icons/Mail';
import Lock from '@/icons/Lock';
import Button from './Button';

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-y-4">
        <label className="relative flex flex-col gap-y-2">
          <span className="text-md font-semibold text-primary">
            Nombre Completo
          </span>
          <input
            className="outline-0 bg-neutral-100 p-2 rounded-md focus:outline-accent focus:outline-2 pl-10 placeholder:text-primary/50"
            type="email"
            name="email"
            id="email"
            placeholder={`Orlando López`}
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
            name="email"
            id="email"
            placeholder={`tu@gmail.com`}
          />
          <Mail className="absolute top-10 left-2 text-primary/50" />
        </label>

        <label className="relative flex flex-col gap-y-2">
          <span className="text-md font-semibold text-primary">Contraseña</span>
          <input
            className="outline-0 bg-neutral-100 p-2 rounded-md focus:outline-accent  focus:outline-2 pl-10 placeholder:text-primary/50"
            type="password"
            name="password"
            id="password"
            placeholder="******"
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
            name="password"
            id="password"
            placeholder="******"
          />
          <Lock className="absolute top-10 left-2 text-primary/50" />
        </label>
      </div>

      <Button href="#">Crear Cuenta</Button>
    </form>
  );
}
