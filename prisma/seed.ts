// Path: prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const existingSkills = await prisma.skill.findMany();
  const existingProjects = await prisma.project.findMany();

  if (existingSkills.length > 0 || existingProjects.length > 0) {
    console.log('Seeding already done');
    return;
  }

  const skills: string[] = [
    'typescript',
    'react',
    'cypress',
    'nginx',
    'docker',
    'docker-compose',
    'mongodb',
    'jwt',
    'styled-components',
    'html',
    'css',
    'javascript',
  ];

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill },
      update: {},
      create: { name: skill },
    });
  }

  const project1 = await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      image: '/images/projects/spaceflightnews.png',
      title: 'Spaceflight News',
      description:
        'Aplicação web para consumir as informações da API Space Flight News, uma API pública com informações relacionadas a voos espaciais.',
      deployUrl: 'https://spaceflightnews.tk',
      githubUrl:
        'https://github.com/lgsfarias/challenge-space-flight-news-20210823',
      skills: {
        connect: [
          { name: 'typescript' },
          { name: 'react' },
          { name: 'cypress' },
          { name: 'nginx' },
          { name: 'docker' },
          { name: 'docker-compose' },
        ],
      },
    },
  });

  const project2 = await prisma.project.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      image: '/images/projects/tractian-front.jpeg',
      title: 'Tractian Front-end Challenge',
      description:
        'Este projeto foi desenvolvido como desafio para a vaga de desenvolvedor front-end na Tractian. É uma aplicação web que permite visualizar e gerenciar os ativos da empresa.',
      deployUrl: 'https://tractian-challenge-front.vercel.app/',
      githubUrl: 'https://github.com/lgsfarias/tractian-challenge-front',
      skills: {
        connect: [
          { name: 'typescript' },
          { name: 'mongodb' },
          { name: 'jwt' },
          { name: 'react' },
          { name: 'styled-components' },
        ],
      },
    },
  });

  const project3 = await prisma.project.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      image: '/images/projects/parrots.png',
      title: 'Parrots Card Game',
      description:
        'Parrot Card Game é um jogo de memória temático com aleatoriedade, efeitos e transição, design responsivo e papagaios dançantes!',
      deployUrl: 'https://lgsfarias.github.io/projeto4-parrotscardgame/',
      githubUrl: 'https://github.com/lgsfarias/projeto4-parrotscardgame',
      skills: {
        connect: [{ name: 'html' }, { name: 'css' }, { name: 'javascript' }],
      },
    },
  });

  console.log({ project1, project2, project3 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
