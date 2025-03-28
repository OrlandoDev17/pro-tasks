import { ReactNode } from 'react';

interface SidebarLinksProps {
  url: string;
  text: string;
  children: ReactNode;
}

export default function SidebarLinks({
  url,
  text,
  children,
}: SidebarLinksProps) {
  return (
    <a
      href={url}
      className="flex items-center px-4 py-2 rounded-xl hover:bg-gray-300 active:bg-dark-accent transition dark:hover:bg-gray-800 cursor-pointer"
    >
      {children}
      <span className="text-xl font-semibold font-poppins text-primary dark:text-white">
        {text}
      </span>
    </a>
  );
}
