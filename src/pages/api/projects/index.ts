import prisma from '@/lib/prisma';
import { Project } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const projects = await prisma.project.findMany({
    include: {
      skills: {
        select: { name: true },
      },
    },
  });

  res.status(200).json({ projects });
}
