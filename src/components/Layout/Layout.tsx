import { Footer } from '@/components/Layout/Footer/Footer';
import { whatsappConfig } from '@/config/whatsapp';
import { contactData } from '@/pages/Contato/contactData';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { HeaderMain } from './Header/Header';
import { WhatsAppButton } from './WhatsApp/WhatsAppButton';

export const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <HeaderMain onMobileMenuChange={setMobileMenuOpen} />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton
        phone={whatsappConfig.phone}
        message={whatsappConfig.message}
        hidden={mobileMenuOpen}
      />
      <Footer {...contactData} />
    </>
  );
};
