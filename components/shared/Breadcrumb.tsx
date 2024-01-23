import Link from 'next/link';
import React from 'react';

interface NavItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  title: string;
  navItems: NavItem[];
  bgImage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, navItems, bgImage }) =>  {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-gray-50 dark:bg-gray-800 "
        style={{
          backgroundImage:
          `url("${bgImage}")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container text-white text-center max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <nav className="text-sm md:text-base lg:text-lg" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.link ? (
                    <Link href={item.link} className="text-gray-300 hover:underline">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{item.label}</span>
                  )}
                  {index < navItems.length - 1 && <span className="ml-1 mr-1">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Breadcrumb;
