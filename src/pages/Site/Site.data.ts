import projectImage from '@/assets/images/SITE-JPM.jpg';

export type Project = {
  name: string;
  segment: string;
  description: string;
  image: string;
  fullImage?: string;
  url?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: 'Grupo JPM',
    segment: 'Indústria',
    description:
      'Site institucional desenvolvido para organizar a apresentação da empresa, seus produtos e serviços, fortalecendo o posicionamento profissional e a geração de contatos.',
    image: projectImage,
    url: 'https://grupojpm.com.br/',
    highlights: [
      'Arquitetura de páginas',
      'Responsividade',
      'SEO técnico',
      'Performance',
      'Formulário e WhatsApp',
    ],
  },
  {
    name: 'Datron Tecnologia',
    segment: 'Radiocomunicação',
    description:
      'Site institucional desenvolvido para apresentar os serviços de locação de rádios comunicadores, produtos, atuação regional e solicitação de orçamento.',
    image: projectImage,
    url: 'https://www.datrontecnologia.com.br/',
    highlights: [
      'Arquitetura institucional',
      'Responsividade',
      'SEO por página',
      'Formulário de orçamento',
      'Integração com WhatsApp',
    ],
  },
  {
    name: 'Revele Semijoias',
    segment: 'Moda e acessórios',
    description:
      'Site institucional desenvolvido para apresentar a marca, seus produtos e canais de atendimento, com foco em presença profissional, navegação simples e contato direto pelo WhatsApp.',
    image: projectImage,
    url: 'https://revelesemijoias.com.br/',
    highlights: [
      'Site institucional',
      'Design responsivo',
      'Integração com WhatsApp',
      'Apresentação de produtos',
      'WordPress e Elementor',
    ],
  },
];

export const siteFaqs = [
  {
    question: 'Quanto custa desenvolver um site profissional?',
    answer:
      'O valor depende da quantidade de páginas, recursos, integrações e complexidade do projeto. Após entender a necessidade da empresa, a INVETEC apresenta uma proposta adequada ao escopo.',
  },
  {
    question: 'Qual é o prazo médio de desenvolvimento?',
    answer:
      'O prazo varia conforme o tamanho do projeto, a disponibilidade dos conteúdos e o processo de aprovação. O cronograma é apresentado antes do início do desenvolvimento.',
  },
  {
    question: 'O site funciona corretamente no celular?',
    answer:
      'Sim. Os projetos são desenvolvidos com responsividade para computadores, tablets e celulares.',
  },
  {
    question: 'O que é SEO em um site?',
    answer:
      'SEO é o conjunto de ajustes técnicos e de conteúdo que ajuda o Google a entender, organizar e apresentar as páginas do site nas pesquisas. Isso inclui títulos, descrições, estrutura das páginas, URLs, imagens, velocidade e qualidade do conteúdo.',
  },
  {
    question: 'O projeto já inclui SEO?',
    answer:
      'Sim. O site recebe uma estrutura técnica de SEO, com organização de títulos, descrições, páginas, URLs, imagens e conteúdo. Isso prepara o site para ser encontrado pelo Google, mas o posicionamento também depende da concorrência, da qualidade do conteúdo e da continuidade da estratégia.',
  },
  {
    question: 'A INVETEC pode ajudar com textos e imagens?',
    answer:
      'Sim. O nível de apoio na produção e organização dos conteúdos é definido no escopo do projeto.',
  },
  {
    question: 'Domínio e hospedagem estão incluídos?',
    answer:
      'Domínio, hospedagem e serviços adicionais são definidos na proposta, de acordo com a necessidade de cada empresa.',
  },
  {
    question: 'Existe suporte depois da publicação?',
    answer:
      'Sim. O formato e o período de acompanhamento são definidos na proposta comercial.',
  },
{
  question: 'O que é Google Ads?',
  answer: [
    'Google Ads é a plataforma de anúncios pagos do Google. Por meio dela, sua empresa pode aparecer para pessoas que estão pesquisando produtos ou serviços relacionados ao seu negócio.',

    'Os anúncios podem ser direcionados por região, palavras-chave, público e orçamento. Ou seja, sua empresa investe um valor para aumentar a visibilidade e ter a possibilidade de aparecer em posições de destaque nos resultados de pesquisa.',
  ],
},
{
  question: 'Como funciona o bônus de Google Ads?',
  answer: [
    'Na contratação do site, caso sua empresa opte por iniciar anúncios no Google Ads, a INVETEC oferecerá uma consultoria inicial e fará a configuração básica da conta e de uma campanha inicial. Nessa etapa, será definido um produto ou serviço principal para divulgação, além das palavras-chave, regiões de atendimento e orçamento inicial.',

    'A campanha será entregue configurada para iniciar a divulgação do novo site, incluindo a preparação da medição dos contatos gerados. O valor investido nos anúncios é definido pela empresa e pago diretamente ao Google.',

    'O bônus contempla somente essa implantação inicial de uma campanha. Novos produtos ou serviços, outras campanhas, alterações posteriores, acompanhamento de resultados, otimizações e gestão contínua não estão incluídos e podem ser contratados separadamente.',
  ],
},
  {
  question: 'A INVETEC atende empresas em todo o Brasil?',
  answer:
    'Sim. A INVETEC desenvolve sites para empresas de todo o Brasil. O planejamento, as reuniões, o desenvolvimento e as aprovações podem ser realizados de forma remota, com acompanhamento durante todas as etapas do projeto.',
},
];
