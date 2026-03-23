import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../../pages/Header/Header';
import { Footer } from '../../pages/Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderMain />
      <Outlet />
      <Footer />
    </>
  );
};
