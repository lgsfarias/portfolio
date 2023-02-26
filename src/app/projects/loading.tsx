import { randomUUID } from 'crypto';
import { ProjectSkeleton } from '../components/Project';

export default function Loading() {
  return (
    <div className="flex flex-col gap-7 items-center justify-start flex-grow p-5">
      <h2 className="text-4xl font-bold text-white self-start">
        Aqui estão alguns dos meus projetos.
      </h2>
      <div className="flex flex-wrap gap-5 items-start justify-start w-full">
        {new Array(8).fill(0).map((_, i) => (
          <ProjectSkeleton key={randomUUID()} />
        ))}
      </div>
    </div>
  );
}
