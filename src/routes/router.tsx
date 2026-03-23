import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "@/components/Layout/Layout";

const Home = lazy(() => import("@/pages/Home"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <Home />
          </Suspense>
        ),
      }
    ]
  }
]);
