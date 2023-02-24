import { randomUUID } from 'crypto';
import Project, { ProjectSkeleton } from '../components/Project';
import Tag, { TagSkeleton } from '../components/Tag';

export default async function Projects() {
  return (
    <div className="flex flex-col gap-7 items-center justify-start flex-grow p-5">
      <h2 className="text-4xl font-bold text-white self-start">
        Aqui estão alguns dos meus projetos mais recentes.
      </h2>
      <div className="filters flex gap-2 items-center justify-start w-full overflow-x-scroll">
        {new Array(8).fill(0).map((_, i) => (
          <TagSkeleton key={randomUUID()} />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 items-start justify-start w-full">
        {new Array(8).fill(0).map((_, i) => (
          <ProjectSkeleton key={randomUUID()} />
        ))}
      </div>
    </div>
  );
}
