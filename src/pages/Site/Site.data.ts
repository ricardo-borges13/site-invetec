import projectImage from '@/assets/images/SITE-JPM.jpg';

export type Project = {
  name: string;
  segment: string;
  description: string;
  image: string;
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
    question: 'O projeto já inclui SEO?',
    answer:
      'O site recebe uma estrutura técnica de SEO, incluindo organização de títulos, descrições, headings, URLs, imagens e páginas. Posicionamento orgânico também depende de conteúdo, concorrência e continuidade da estratégia.',
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
    question: 'Como funciona o bônus de Google Ads?',
    answer:
      'Na contratação do site, a INVETEC pode realizar a consultoria e configuração inicial da conta e da conversão principal. O investimento em anúncios e a gestão contínua são serviços separados.',
  },
  {
    question: 'A INVETEC atende empresas fora de Minas Gerais?',
    answer:
      'Sim. O desenvolvimento pode ser realizado para empresas em todo o Brasil, com atendimento remoto.',
  },
];
