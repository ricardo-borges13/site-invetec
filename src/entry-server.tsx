import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export const render = (url: string) => {
  const helmetContext: any = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  console.log('HELMET:', helmetContext);

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
};
