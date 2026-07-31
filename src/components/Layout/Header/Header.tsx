import logo from '@/assets/images/Logo-Invetec.png';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { contactData } from '@/pages/Contato/contactData';
import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { MobileMenuDrawer } from '../Menu/MobileMenuDrawer';
import * as S from './Header.styles';

type HeaderMainProps = {
  onMobileMenuChange?: (open: boolean) => void;
};

export const HeaderMain = ({ onMobileMenuChange }: HeaderMainProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 1038;
      setIsScrolled(!isMobile && window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    onMobileMenuChange?.(menuOpen);
  }, [menuOpen, onMobileMenuChange]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuTrigger = menuTriggerRef.current;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => drawerRef.current?.querySelector<HTMLElement>('button')?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      menuTrigger?.focus();
    };
  }, [menuOpen]);

  const handleWhatsAppClick = () => {
    const cleanPhone = contactData.phone.replace(/\D/g, '');

    const message = encodeURIComponent(
      'Olá, gostaria de saber mais sobre os serviços da INVETEC.'
    );

    window.open(`https://wa.me/55${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <S.HeaderContainer $isScrolled={isScrolled}>
      <S.HeaderContent>
        <Link to="/" aria-label="Página inicial da INVETEC">
          <S.Image
            src={logo}
            alt="Logotipo da INVETEC"
            width={400}
            height={120}
            $isScrolled={isScrolled}
          />
        </Link>

        <S.MenuWrapper>
          <S.MenuToggle
            type="button"
            ref={menuTriggerRef}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </S.MenuToggle>

          <S.MenuContainer>
            <Menu onLinkClick={() => setMenuOpen(false)} />
          </S.MenuContainer>

          <CustomButton
            text="WhatsApp"
            variant="headerMain"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp size={20} />
            Fale no WhatsApp
          </CustomButton>
        </S.MenuWrapper>
      </S.HeaderContent>
      <MobileMenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        drawerRef={drawerRef}
      />
    </S.HeaderContainer>
  );
};
