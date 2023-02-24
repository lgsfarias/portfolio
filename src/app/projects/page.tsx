import Project, { ProjectSkeleton } from '../components/Project';
import Tag from '../components/Tag';

export default async function Projects() {
  return (
    <div className="flex flex-col gap-7 items-center justify-start flex-grow p-5">
      <h2 className="text-4xl font-bold text-white">
        Aqui estão alguns dos meus projetos mais recentes.
      </h2>
      <div className="filters flex gap-2 items-center justify-start w-full overflow-x-auto">
        <Tag name="Todos" selected />
        <Tag name="React" />
        <Tag name="Next.js" />
        <Tag name="TypeScript" />
        <Tag name="JavaScript" />
        <Tag name="Node.js" />
        <Tag name="Python" />
      </div>
      <div className="flex flex-wrap gap-5 items-start justify-start w-full">
        {new Array(8).fill(0).map((_, i) => (
          <ProjectSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
