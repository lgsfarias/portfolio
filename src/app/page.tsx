import Link from 'next/link';
import { Download, Folder } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full animate-fadeIn">
      <div className="flex flex-col gap-5 items-start justify-center w-4/5">
        <h1 className="font-bold text-white text-5xl sm:text-6xl">
          Olá, eu sou Luiz Gustavo Farias 👋
        </h1>
        <p className="text-white text-xl">
          Um <strong>Desenvolvedor Full Stack</strong> apaixonado por tecnologia
          e por desenvolver soluções que impactam positivamente a vida das
          pessoas. Aqui você encontrará alguns dos meus projetos mais recentes
          ou que eu ache importante.
        </p>
        <div className="flex gap-5 items-center justify-start mt-5 self-start">
          <Link
            href="/projects"
            className="bg-white text-black px-5 py-2 rounded-md font-bold"
          >
            Meus Projetos{' '}
            <Folder size={24} className="ml-2 hidden sm:inline-block" />
          </Link>
          <a
            href="LUIZ GUSTAVO FARIAS.pdf"
            download
            className="bg-white text-black px-5 py-2 rounded-md font-bold"
          >
            Baixar CV{' '}
            <Download size={24} className="ml-2 hidden sm:inline-block" />
          </a>
        </div>
      </div>
    </main>
  );
}
