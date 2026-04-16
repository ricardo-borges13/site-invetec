import { Footer } from '@/components/Layout/Footer/Footer';
import { contactData } from '@/pages/Contato/contactData';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { HeaderMain } from './Header/Header';
import { WhatsAppButton } from './WhatsApp/WhatsAppButton';

export const Layout = () => {
  const [whatsApp, setWhatsApp] = useState<{
    phone?: string;
    message?: string;
  }>({});

  useEffect(() => {
    fetch('/whatsApp.json')
      .then(res => res.json())
      .then(data => setWhatsApp(data))
      .catch(err => console.error('Erro ao carregar WhatsApp config:', err));
  }, []);

  return (
    <>
      <ScrollToTop />
      <HeaderMain />
      <Outlet />
      {whatsApp.phone && (
        <WhatsAppButton
          phone={whatsApp.phone}
          message={whatsApp.message || ''}
        />
      )}
      <Footer {...contactData} />
    </>
  );
};
