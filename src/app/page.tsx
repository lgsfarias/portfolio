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
          Tenho formação em <strong>Desenvolvimento Full Stack</strong> pela <a target="_blank" href='https://driven.com.br/'className='font-bold underline'>Driven Education</a> e possuo experiência como Analista Desenvolvedor Node/PHP. Destaco minha eficácia na comunicação e capacidade de trabalho em equipe. Busco uma posição como Software Engineer em uma empresa que valorize inovação, tecnologias modernas e tenha um foco orientado ao cliente.
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
            href="LUIZ GUSTAVO FARIAS PUBLICO.pdf"
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
