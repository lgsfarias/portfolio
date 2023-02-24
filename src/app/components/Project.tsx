import { randomUUID } from 'crypto';
import Image from 'next/image';
import Tag from './Tag';

type ProjectProps = {
  image: string;
  name: string;
  tags: string[];
  description: string;
};

export default function Project({
  image,
  name,
  tags,
  description,
}: ProjectProps) {
  return (
    <div className="flex flex-col bg-white w-full rounded-md p-5 shadow-md shadow-slate-600 sm:h-96 sm:w-[calc(50%-10px)] md:w-[calc(33.3333%-13.5px)] lg:w-[calc(25%-15px)]">
      <Image
        src={image}
        alt="project"
        width={320}
        height={160}
        className="h-full w-full rounded-md mb-5"
      />
      <div className="flex flex-col items-start justify-start gap-2">
        <h2 className="text-2xl font-bold text-black">{name}</h2>
        <div className="flex w-full gap-1 overflow-auto">
          {tags.map((tag, i) => (
            <Tag name={tag} selected={true} key={randomUUID()} />
          ))}
        </div>
        <div className="overflow-y-auto h-24">
          <p className="text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="flex flex-col bg-white w-full rounded-md p-5 shadow-md shadow-slate-600 sm:h-96 sm:w-[calc(50%-10px)] md:w-[calc(33.3333%-13.5px)] lg:w-[calc(25%-15px)] animate-pulse">
      <div className="h-40 w-full rounded-md mb-5 bg-gray-200" />
      <div className="h-5 w-48 rounded-md mb-2 bg-gray-200" />
      <div className="flex flex-row items-start justify-start gap-2 mb-2">
        <div className="h-10 w-20 rounded-md bg-gray-200" />
        <div className="h-10 w-20 rounded-md bg-gray-200" />
        <div className="h-10 w-20 rounded-md bg-gray-200" />
        <div className="h-10 w-20 rounded-md bg-gray-200" />
      </div>
      <div>
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
        <div className="h-2 w-full rounded-md mb-1 bg-gray-200" />
      </div>
    </div>
  );
}
