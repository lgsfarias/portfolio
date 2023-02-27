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
  {
    id: 3,
    image: '/images/projects/mywallet.jpg',
    title: 'MyWallet',
    description:
      'MyWallet é um projeto Full Stack de uma aplicação web para gerenciar suas finanças pessoais. É possível cadastrar entradas e saídas, e visualizar um gráfico com o saldo mensal.',
    deployUrl: 'https://my-wallet-three.vercel.app/',
    githubUrl: 'https://github.com/lgsfarias/MyWallet',
    tags: ['react', 'styled-components', 'express', 'mongodb'],
  },
  {
    id: 4,
    image: '/images/projects/electrum.png',
    title: 'Electrum E-commerce',
    description:
      'Uma página estática simulando um e-commerce de eletrônicos para treinar o uso de HTML e SASS.',
    deployUrl: 'https://lgsfarias.github.io/electrum/',
    githubUrl: 'https://github.com/lgsfarias/electrum/',
    tags: ['html', 'sass'],
  },
  {
    id: 5,
    image: '/images/projects/tweetero-java.png',
    title: 'Tweetero Java',
    description:
      'É um projeto que utiliza Java Spring Boot para criar uma API REST para um sistema de tweets, conhecido como Tweetero, um clone do Twitter. Neste projeto não foi desenvolvido o front-end. Ele já estava pronto e foi disponibilizado.',
    githubUrl: 'https://github.com/lgsfarias/tweteroo-api-java',
    tags: ['java', 'spring-boot'],
  },
  {
    id: 30,
    image: '/images/projects/parrots.png',
    title: 'Parrots Card Game',
    description:
      'Parrot Card Game é um jogo de memória temático com aleatoriedade, efeitos e transição, design responsivo e papagaios dançantes!',
    deployUrl: 'https://lgsfarias.github.io/projeto4-parrotscardgame/',
    githubUrl: 'https://github.com/lgsfarias/projeto4-parrotscardgame',
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 40,
    image: '/images/projects/driven-eats.png',
    title: 'Driveneats',
    description:
      'O meu primeiro projeto usando JavaScript foi a implementação do site mobile do DrivenEats, um restaurante especial que entrega seu pedido em 6 minutos. Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato+Bebida+Sobremesa. O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.',
    deployUrl: 'https://lgsfarias.github.io/projeto3-driveneats/',
    githubUrl: 'https://github.com/lgsfarias/projeto3-driveneats',
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 50,
    image: '/images/projects/globo.com.png',
    title: 'Globo.com',
    description:
      'Este foi o meu primeiro projeto e o seu objetivo era aplicar o layout de uma versão simplificada da home da globo.com, utilizando apenas HTML e CSS. Também foi feito um layout para telas com resolucoes menores, utilizando media queries.',
    deployUrl: 'https://lgsfarias.github.io/projeto1-globo.com/',
    githubUrl: 'https://github.com/lgsfarias/projeto1-globo.com/',
    tags: ['html', 'css'],
  },
];

export default projects;
