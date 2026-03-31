import logo from '@/assets/images/Logo-Invetec.png';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { contactData } from '@/pages/Contato/contactData';
import * as S from './Header.styles';

export const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // muda o estado ao rolar
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
  const cleanPhone = contactData.phone.replace(/\D/g, '');

  const message = encodeURIComponent(
    'Olá, gostaria de saber mais sobre os serviços da INVETEC.'
  );

  const url = `https://wa.me/55${cleanPhone}?text=${message}`;

  window.open(url, '_blank');
};

  return (
    <S.HeaderContainer $isScrolled={isScrolled}>
      <S.HeaderContent>
        <Link to="/">
          <S.Image src={logo} alt="Logo" $isScrolled={isScrolled} />
        </Link>

        <S.MenuWrapper>
          <S.MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </S.MenuToggle>

          <S.MenuContainer $open={menuOpen}>
            <Menu onLinkClick={() => setMenuOpen(false)} />
          </S.MenuContainer>

          <CustomButton
            text="WhatsApp"
            variant="headerMain"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp size={24} />
            Fale no WhatsApp
          </CustomButton>
        </S.MenuWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
