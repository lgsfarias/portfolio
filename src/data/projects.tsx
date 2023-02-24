export type ProjectDTO = {
  id: number;
  image: string;
  title: string;
  description: string;
  deployUrl?: string;
  githubUrl: string;
  tags: string[];
};

const projects: ProjectDTO[] = [
  {
    id: 1,
    image: '/images/projects/spaceflightnews.png',
    title: 'Spaceflight News',
    description:
      'Aplicação web para consumir as informações da API Space Flight News, uma API pública com informações relacionadas a voos espaciais.',
    deployUrl: 'https://spaceflightnews.tk',
    githubUrl:
      'https://github.com/lgsfarias/challenge-space-flight-news-20210823',
    tags: [
      'typescript',
      'react',
      'cypress',
      'nginx',
      'docker',
      'docker-compose',
    ],
  },
  {
    id: 2,
    image: '/images/projects/tractian-front.jpeg',
    title: 'Tractian Front-end Challenge',
    description:
      'Este projeto foi desenvolvido como desafio para a vaga de desenvolvedor front-end na Tractian. É uma aplicação web que permite visualizar e gerenciar os ativos da empresa.',
    deployUrl: 'https://tractian-challenge-front.vercel.app/',
    githubUrl: 'https://github.com/lgsfarias/tractian-challenge-front',
    tags: ['typescript', 'mongodb', 'jwt', 'react', 'styled-components'],
  },
];

export default projects;
