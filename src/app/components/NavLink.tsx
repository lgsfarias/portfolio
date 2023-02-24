'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `${segment ? segment : ''}`;
  return (
    <Link
      href={href}
      className={`text-white text-lg border-b-2 border-transparent h-full ${
        isActive ? 'font-bold border-white' : ''
      } transition-all hover:font-bold `}
    >
      {children}
    </Link>
  );
}
