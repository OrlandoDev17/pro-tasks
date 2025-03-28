import React from 'react';

export default function Button(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
  color: string;
}) {
  return (
    <button
      className={`border-2 border-${props.color} px-4 py-2 rounded-lg cursor-pointer shadow-md text-xl font-semibold shadow-${props.color} hover:bg-${props.color} hover:text-white hover:-translate-y-1 transition dark:text-dark-primary dark:border-dark-${props.color}
       dark:shadow-dark-${props.color} dark:hover:bg-dark-${props.color}
        dark:hover:text-primary ${props.className}`}
    >
      <a href={props.href}>{props.children}</a>
    </button>
  );
}
