export const menuItems = [
  { id: 1, title: 'Home', path: '/', showInFooter: true },
  {
    id: 2,
    title: 'Serviços',
    path: '/',
    scrollTo: 'servicos',
    showInFooter: true,
    submenu: [
      { title: 'Sistemas ERP', path: '/servicos/erp' },
      {
        title: 'E-mail Corporativo',
        path: '/servicos/invetec-mail',
      },
      {
        title: 'Criação de Sites',
        path: '/servicos/criacao-de-sites',
      },
      {
        title: 'E-commerce',
        path: '/servicos/e-commerce',
      },
      { title: 'Arquivos e Backup em Nuvem', path: '/servicos/cloud' },
      { title: 'Gestão e Suporte de TI', path: '/servicos/suporte-ti' },
      {
        title: 'Ferramentas Úteis',
        path: '/servicos/ferramentas-uteis',
        showInFooter: true,
      },
    ],
  },
  {
    id: 4,
    title: 'Casos reais',
    path: '/cases',
    showInFooter: true,
  },

  {
    id: 5,
    title: 'Sobre',
    path: '/sobre',
    showInFooter: true,
  },
  {
    id: 6,
    title: 'Contato',
    path: '/contato',
    showInFooter: true,
  },
];

export type MenuItem = {
  id: number;
  title: string;
  path: string;
  showInFooter?: boolean;
  scrollTo?: string;
  submenu?: Array<{
    title: string;
    path: string;
    showInFooter?: boolean;
  }>;
};
