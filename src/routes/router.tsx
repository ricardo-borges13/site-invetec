import { createBrowserRouter } from 'react-router-dom';
// import { lazy } from "react";
import { Layout } from '@/components/Layout/Layout';
import Home from '@/pages/Home';
import { Sobre } from '@/pages/Sobre/Sobre';
import { Contato } from '@/pages/Contato/Contato';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/contato', element: <Contato /> }
    ],
  },

]);
