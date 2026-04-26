import { createBrowserRouter } from 'react-router-dom';
 import { lazy } from "react";
import { Layout } from '@/components/Layout/Layout';
import Home from '@/pages/Home';
import { CalculadoraData } from '@/pages/CalculadoraData/CalculadoraData';

const CaseDatron = lazy(() => import('@/pages/CaseDatron/CaseDatron').then(module => ({ default: module.CaseDatron })));
const CaseJPM = lazy(() => import('@/pages/CaseJPM/CaseJPM').then(module => ({ default: module.CaseJPM })));
const Cases = lazy(() => import('@/pages/Cases/Cases').then(module => ({ default: module.Cases })));
const Contato = lazy(() => import('@/pages/Contato/Contato').then(module => ({ default: module.Contato })));
const ERP = lazy(() => import('@/pages/ERP/ERP').then(module => ({ default: module.ERP })));
// const MarketingDigital = lazy(() => import('@/pages/MarketingDigital/MarketingDigital').then(module => ({ default: module.MarketingDigital })));
const Site = lazy(() => import('@/pages/Site/Site').then(module => ({ default: module.Site })));
const Sobre = lazy(() => import('@/pages/Sobre/Sobre').then(module => ({ default: module.Sobre })));
const SuporteTI = lazy(() => import('@/pages/SuporteTI/SuporteTI').then(module => ({ default: module.SuporteTI })));
const Ecommerce = lazy(() => import('@/pages/Ecommerce/Ecommerce').then(module => ({ default: module.Ecommerce })));
const W3ERP = lazy(() => import('@/pages/W3ERP/W3ERP').then(module => ({ default: module.W3ERP })));
const Zimbra = lazy(() => import('@/pages/Zimbra/Zimbra').then(module => ({ default: module.Zimbra })));
const ZimbraMei = lazy(() => import('@/pages/ZimbraMei/ZimbraMei').then(module => ({ default: module.ZimbraMei })));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound').then(module => ({ default: module.NotFound })));
const Bling = lazy(() => import('@/pages/Bling/Bling').then(module => ({ default: module.Bling })));
const FerramentasUteis = lazy(() => import('@/pages/FerramentasUteis/FerramentasUteis').then(module => ({ default: module.FerramentasUteis })));
const ProRata = lazy(() => import('@/pages/ProRata/ProRata').then(module => ({ default: module.ProRata })));




export const router = createBrowserRouter([
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
      { path: '/servicos/ferramentas-uteis', element: <FerramentasUteis /> },
      { path: '/servicos/ferramentas-uteis/pro-rata', element: <ProRata /> },
      { path: '/servicos/ferramentas-uteis/calculadora-de-datas', element: <CalculadoraData /> },
      // { path: '/servicos/marketing-digital', element: <MarketingDigital /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
