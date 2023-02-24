import './globals.css';
import { Roboto_Condensed } from '@next/font/google';
import Link from 'next/link';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${robotoCondensed.className}`}>
        <div className="bg-gradient-to-tr from-indigo-400 to-indigo-700 flex flex-col absolute inset-0 overflow-scroll ">
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
