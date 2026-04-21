import { useRoutes, type RouteObject } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import Home from '@/pages/Home';
import { Bling } from '@/pages/Bling/Bling';
import { CaseDatron } from '@/pages/CaseDatron/CaseDatron';
import { CaseJPM } from '@/pages/CaseJPM/CaseJPM';
import { Cases } from '@/pages/Cases/Cases';
import { Contato } from '@/pages/Contato/Contato';
import { Ecommerce } from '@/pages/Ecommerce/Ecommerce';
import { ERP } from '@/pages/ERP/ERP';
import { NotFound } from '@/pages/NotFound/NotFound';
import { Site } from '@/pages/Site/Site';
import { Sobre } from '@/pages/Sobre/Sobre';
import { SuporteTI } from '@/pages/SuporteTI/SuporteTI';
import { W3ERP } from '@/pages/W3ERP/W3ERP';
import { Zimbra } from '@/pages/Zimbra/Zimbra';
import { ZimbraMei } from '@/pages/ZimbraMei/ZimbraMei';

export const prerenderRoutes = [
  '/',
  '/servicos/erp',
  '/servicos/invetec-mail',
  '/servicos/criacao-de-sites',
  '/servicos/e-commerce',
  '/servicos/suporte-ti',
  '/contato',
  '/sobre',
] as const;

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/contato', element: <Contato /> },
      { path: '/servicos/erp', element: <ERP /> },
      { path: '/servicos/erp/bling', element: <Bling /> },
      { path: '/servicos/erp/w3erp', element: <W3ERP /> },
      { path: '/cases', element: <Cases /> },
      { path: '/cases/datron', element: <CaseDatron /> },
      { path: '/cases/jpm', element: <CaseJPM /> },
      { path: '/servicos/invetec-mail', element: <Zimbra /> },
      { path: '/servicos/invetec-mail-mei', element: <ZimbraMei /> },
      { path: '/servicos/criacao-de-sites', element: <Site /> },
      { path: '/servicos/suporte-ti', element: <SuporteTI /> },
      { path: '/servicos/e-commerce', element: <Ecommerce /> },
      // { path: '/servicos/marketing-digital', element: <MarketingDigital /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const AppRoutes = () => useRoutes(routes);
