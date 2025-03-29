import React from 'react';
import SidebarLinks from './SidebarLinks';
import Table from '@/icons/Table';
import Template from '@/icons/Templates';
import Users from '@/icons/Users';
import Settings from '@/icons/Settings';

export default function Sidebar() {
  interface SidebarLink {
    id: number;
    url: string;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }

  const SIDEBAR_LINKS: SidebarLink[] = [
    {
      id: 1,
      url: '#',
      text: 'Tableros',
      icon: (props) => <Table {...props} />,
    },
    {
      id: 2,
      url: '#',
      text: 'Plantillas',
      icon: (props) => <Template {...props} />,
    },
    {
      id: 3,
      url: '#',
      text: 'Miembros',
      icon: (props) => <Users {...props} />,
    },
    {
      id: 4,
      url: '#',
      text: 'Configuración',
      icon: (props) => <Settings {...props} />,
    },
  ];

  return (
    <div className="inline-flex p-8 h-[819px] border-r-2  border-dark-bg dark:border-white">
      <ul className="flex flex-col gap-2">
        {SIDEBAR_LINKS.map(({ url, text, icon, id }) => (
          <li key={id}>
            <SidebarLinks url={url} text={text}>
              {React.createElement(icon, {
                className:
                  'size-10 text-accent cursor-pointer mr-2 dark:text-dark-accent',
              })}
            </SidebarLinks>
          </li>
        ))}
      </ul>
    </div>
  );
}
