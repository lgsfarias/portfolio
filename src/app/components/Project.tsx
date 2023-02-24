import { ProjectDTO } from '@/data/projects';
import { randomUUID } from 'crypto';
import { Github, Link } from 'lucide-react';
import Tag from './Tag';

export default function Project({
  image,
  title,
  tags,
  description,
  deployUrl,
  githubUrl,
}: ProjectDTO) {
  console.log({ image });
  return (
    <div className="flex flex-col bg-white w-full rounded-md p-5 shadow-md shadow-slate-600 sm:w-[calc(50%-10px)] lg:w-[calc(33.3333%-13.5px)] xl:w-[calc(25%-15px)]">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="relative h-52 w-full rounded-md bg-cover bg-center mb-5 shadow-indigo-900 shadow-md"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-500 to-black opacity-70 rounded-md"></div>
        <h2 className="absolute bottom-2 left-2 text-2xl font-bold text-white shadow-md">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 mb-5">
        <div className="flex w-full gap-1 overflow-auto">
          {tags.map((tag, i) => (
            <Tag name={tag} key={randomUUID()} />
          ))}
        </div>
        <div className="overflow-y-auto h-28">
          <p className="text-black">{description}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-2 mt-auto">
        <a
          href={githubUrl}
          target="_blank"
          className="flex items-center justify-center w-full p-2 rounded-md cursor-pointer font-bold text-indigo-900 border-2 border-indigo-900 whitespace-nowrap shadow-md"
        >
          <Github />
          Código Fonte
        </a>
        <a
          href={deployUrl}
          target="_blank"
          className="flex items-center justify-center w-full p-2 rounded-md cursor-pointer font-bold text-white border-2 border-indigo-900 bg-indigo-900 whitespace-nowrap shadow-md"
        >
          <Link />
          Deploy
        </a>
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="flex flex-col bg-white w-full rounded-md p-5 shadow-md shadow-slate-600 sm:w-[calc(50%-10px)] md:w-[calc(33.3333%-13.5px)] lg:w-[calc(25%-15px)] animate-pulse">
      <div className="h-52 w-full rounded-md mb-5 bg-gray-200" />
      <div className="flex flex-row items-start justify-start gap-2 mb-2">
        <div className="h-10 w-20 rounded-md bg-gray-200" />
        <div className="h-10 w-20 rounded-md bg-gray-200" />
        <div className="h-10 w-20 rounded-md bg-gray-200" />
        <div className="h-10 w-20 rounded-md bg-gray-200" />
      </div>
      <div className="mb-5">
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
      </div>
      <div className="flex flex-row items-center justify-between gap-2 mt-auto">
        <div className="h-10 w-full rounded-md bg-gray-200" />
        <div className="h-10 w-full rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
