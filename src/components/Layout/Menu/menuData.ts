export const menuItems = [
  { id: 1, title: 'Home', path: '/', showInFooter: true },
  {
    id: 2,
    title: 'Serviços',
    path: '/servicos',
    showInFooter: false,
    submenu: [
      { title: 'Sistemas ERP', path: '/servicos/erp' },
      {
        title: 'E-mail Corporativo',
        path: '/servicos/zimbra',
      },
      {
        title: 'Criação de Sites',
        path: '/servicos/criacao-de-sites',
      },
      {
        title: 'E-commerce',
        path: '/servicos/e-commerce',
      },
      { title: 'Marketing Digital', path: '/servicos/marketing-digital' },
      { title: 'Gestão e Suporte de TI', path: '/servicos/suporte-ti' },
    ],
  },
  {
    id: 3,
    title: 'Parceiros',
    path: '/parceiros',
    showInFooter: true,
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
