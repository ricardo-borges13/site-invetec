import 'bootstrap/dist/css/bootstrap.min.css';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { prerenderRoutes } from './routes/router';

export const render = (url: string) => {
  const helmetContext: {
    helmet?: HelmetServerState | null;
  } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
};

export { prerenderRoutes };
