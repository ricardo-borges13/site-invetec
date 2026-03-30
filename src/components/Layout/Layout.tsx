import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Layout/Footer/Footer';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { HeaderMain } from './Header/Header';

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
