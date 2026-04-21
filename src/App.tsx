import { GlobalStyle } from '@/assets/style/global';
import { AppRoutes } from '@/routes/router';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<div>Carregando...</div>}>
        <AppRoutes />
      </Suspense>
    </ThemeProvider>
  );
}
export default App;
