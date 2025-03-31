import React from 'react';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

export default function Button({
  href,
  children,
  className,
  type,
}: ButtonProps) {
  return (
    <button type={type}>
      <a
        className={`flex items-center justify-center border-2 border-accent px-4 py-2 rounded-lg cursor-pointer shadow-md shadow-accent text-xl font-semibold hover:bg-accent hover:text-white hover:-translate-y-1 transition dark:text-white dark:border-dark-accent dark:shadow-dark-accent dark:hover:bg-dark-accent dark:hover:text-primary ${className}`}
        href={href}
      >
        {children}
      </a>
    </button>
  );
}
