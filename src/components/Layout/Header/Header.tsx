import logo from '@/assets/images/Logo-Invetec.png';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import * as S from './Header.styles';

export const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // muda o estado ao rolar
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            onClick={() => navigate('/orcamento')}
          >
            <FaWhatsapp size={24} />
            Fale no WhatsApp
          </CustomButton>
        </S.MenuWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
