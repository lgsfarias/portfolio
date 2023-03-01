import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import MobileNav from './MobileNav';
import logo from '../../../public/logo.png';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-5 py-2">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            priority
            src={logo}
            alt="Logo"
            width={128}
            height={66}
            className="cursor-pointer w-[128px] h-[66px]"
          />
        </Link>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex gap-5 items-center justify-start">
          <li>
            <NavLink href="">Sobre</NavLink>
          </li>
          <li>
            <NavLink href="projects">Projetos</NavLink>
          </li>
          <li>
            <NavLink href="contact">Contato</NavLink>
          </li>
        </ul>
      </nav>
      <div className="hidden sm:flex items-center justify-end gap-5">
        <a
          href="
              https://www.linkedin.com/in/lgsfarias/"
          target="_blank"
        >
          <Linkedin size={24} color="white" />
        </a>
        <a
          href="
              https://github.com/lgsfarias"
          target="_blank"
        >
          <Github size={24} color="white" />
        </a>
      </div>
      <MobileNav />
    </div>
  );
}
