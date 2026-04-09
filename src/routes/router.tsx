import { createBrowserRouter } from 'react-router-dom';
// import { lazy } from "react";
import { Layout } from '@/components/Layout/Layout';
import { CaseDatron } from '@/pages/CaseDatron/CaseDatron';
import { CaseJPM } from '@/pages/CaseJPM/CaseJPM';
import { Cases } from '@/pages/Cases/Cases';
import { Contato } from '@/pages/Contato/Contato';
import { ERP } from '@/pages/ERP/ERP';
import Home from '@/pages/Home';
import { MarketingDigital } from '@/pages/MarketingDigital/MarketingDigital';
import { Site } from '@/pages/Site/Site';
import { Sobre } from '@/pages/Sobre/Sobre';
import { SuporteTI } from '@/pages/SuporteTI/SuporteTI';
import { Ecommerce } from '@/pages/TagPlus/Ecommerce/Ecommerce';
import { TagPlus } from '@/pages/TagPlus/TagPlus';
import { W3ERP } from '@/pages/W3ERP/W3ERP';
import { Zimbra } from '@/pages/Zimbra/Zimbra';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/contato', element: <Contato /> },
      { path: '/servicos/erp', element: <ERP /> },
      { path: '/servicos/erp/tagplus', element: <TagPlus /> },
      { path: '/servicos/erp/w3erp', element: <W3ERP /> },
      { path: '/cases', element: <Cases /> },
      { path: '/cases/datron', element: <CaseDatron /> },
      { path: '/cases/jpm', element: <CaseJPM /> },
      { path: '/servicos/zimbra', element: <Zimbra /> },
      { path: '/servicos/criacao-de-sites', element: <Site /> },
      { path: '/servicos/suporte-ti', element: <SuporteTI /> },
      { path: '/servicos/e-commerce', element: <Ecommerce /> },
      { path: '/servicos/marketing-digital', element: <MarketingDigital /> },
    ],
  },
]);
