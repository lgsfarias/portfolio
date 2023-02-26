// import projects from '@/data/projects';
import { ProjectWhitSkills } from '@/types/Project';
import Project from '../components/Project';

export default async function Projects() {
  const { projects }: { projects: ProjectWhitSkills[] } = await fetch(
    'http://localhost:3000/api/projects',
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-7 items-center justify-start flex-grow p-5">
      <h2 className="text-4xl font-bold text-white self-start">
        Aqui estão alguns dos meus projetos.
      </h2>
      <div className="flex flex-wrap gap-5 items-start justify-start w-full">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
