'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <Menu
        size={32}
        color="white"
        className="animate-pulse block sm:hidden"
        onClick={() => setOpen(true)}
      />
      <div
        className={`z-10 bg-opacity-60 bg-black fixed ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } inset-0 sm:hidden transition-all duration-500`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`z-20 mobile-menu flex flex-col items-center justify-between gap-5 bg-indigo-700 absolute h-full w-2/3 top-0 right-0 py-10 sm:hidden ${
            open ? 'translate-x-0' : 'translate-x-full'
          } transition-all duration-700`}
          onClick={(e) => e.stopPropagation()}
        >
          <X
            size={30}
            color="white"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 animate-pulse"
          />
          <div className="flex flex-col gap-5 items-center justify-center">
            <Link
              href=""
              className={`text-white text-3xl font-bold border-b-2 border-transparent ${
                segment === null ? 'border-white' : ''
              } transition-all`}
            >
              Sobre
            </Link>
            <Link
              href="projects"
              className={`text-white text-3xl font-bold border-b-2 border-transparent ${
                segment === 'projects' ? 'border-white' : ''
              } transition-all`}
            >
              Projetos
            </Link>
            <Link
              href="contact"
              className={`text-white text-3xl font-bold border-b-2 border-transparent ${
                segment === 'contact' ? 'border-white' : ''
              } transition-all`}
            >
              Contato
            </Link>
          </div>
          <div className="flex gap-8">
            <a
              href="
                https://www.linkedin.com/in/lgsfarias/"
              target="_blank"
            >
              <Linkedin size={30} color="white" />
            </a>
            <a
              href="
                https://github.com/lgsfarias"
              target="_blank"
            >
              <Github size={30} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
