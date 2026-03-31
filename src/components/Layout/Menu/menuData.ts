export const menuItems = [
  { id: 1, title: 'Home', path: '/', showInFooter: true },
  {
    id: 2,
    title: 'Serviços',
    path: '/servicos',
    showInFooter: false,
    submenu: [
      { title: 'ERP W3ERP', path: '/servicos/erp' },
      {
        title: 'E-mail Corporativo',
        path: '/servicos/e-mail-corporativo',
      },
      {
        title: 'Sites Institucionais',
        path: '/servicos/sites-institucionais',
      },
      {
        title: 'E-commerce',
        path: '/servicos/e-commerce',
      },
      { title: 'Cloud Computing', path: '/servicos/cloud-computing' },
      { title: 'Suporte TI', path: '/servicos/suporte-ti' },
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
