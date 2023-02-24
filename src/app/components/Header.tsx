import { Github, Linkedin } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import Image from 'next/image';
import MobileNav from './MobileNav';
import logo from '../../../public/logo.png';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Header() {
  const mensagemWhatsapp = 'Olá, Luiz! Tudo bem?';

  return (
    <div className="flex justify-between items-center w-screen px-5 py-2">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            priority
            src={logo}
            alt="Logo"
            width={150}
            height={50}
            className="cursor-pointer w-auto h-auto"
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
      <div className="hidden sm:flex items-center justify-center gap-5">
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
        <a
          href={`https://wa.me/5521980399582?text=${mensagemWhatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp size={24} color="white" />
        </a>
      </div>
      <MobileNav />
    </div>
  );
}
