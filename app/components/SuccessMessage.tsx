'use client';

import { div } from 'framer-motion/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

interface Props {
  loginSuccessMessage?: string;
  registerSuccessMessage?: string;
}

export default function SuccessMessage({
  loginSuccessMessage,
  registerSuccessMessage,
}: Props) {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'login' && loginSuccessMessage) {
      setMessage(loginSuccessMessage);
    } else if (success === 'register' && registerSuccessMessage) {
      setMessage(registerSuccessMessage);
    } else {
      setMessage(null);
    }
  }, [searchParams, loginSuccessMessage, registerSuccessMessage]);
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  if (!message) {
    return null;
  }

  function loadingSuccessMessage() {
    return <div>Cargando Mensaje...</div>;
  }

  return (
    <Suspense fallback={loadingSuccessMessage()}>
      <div className="border-special dark:border-dark-special border-2 text-lg text-special dark:text-dark-special font-semibold p-2 rounded-lg">
        {message}
      </div>
    </Suspense>
  );
}
