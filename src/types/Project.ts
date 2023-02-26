import { Project } from '@prisma/client';

export type ProjectWhitSkills = Project & {
  skills: {
    name: string;
  }[];
};
