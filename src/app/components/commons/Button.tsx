import React from 'react';

export default function Button(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`border-2 border-accent px-4 py-2 rounded-lg cursor-pointer shadow-md text-xl font-semibold shadow-accent hover:bg-accent hover:text-white hover:-translate-y-1 transition ${props.className}`}
    >
      <a href={props.href}>{props.children}</a>
    </button>
  );
}
