import logo from '@/assets/images/Logo-Invetec.png';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from './menuData';
import * as S from './MobileMenuDrawer.styles';

type MobileMenuDrawerProps = {
  open: boolean;
  onClose: () => void;
  drawerRef: React.RefObject<HTMLDivElement | null>;
};

const mobileItems = [
  menuItems[0],
  menuItems[1],
  menuItems[3],
  menuItems[4],
  menuItems[2],
  menuItems[5],
];

export const MobileMenuDrawer = ({
  open,
  onClose,
  drawerRef,
}: MobileMenuDrawerProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const servicesActive = location.pathname.startsWith('/servicos');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [collapsedServicePath, setCollapsedServicePath] = useState<string | null>(null);
  const submenuExpanded = servicesActive
    ? collapsedServicePath !== location.pathname
    : servicesOpen;

  const isActive = (path?: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const handleScrollLink = (scrollTo?: string) => {
    if (!scrollTo) return;
    if (location.pathname === '/') {
      const section =
        document.getElementById(scrollTo) ??
        (scrollTo === 'parceiros' ? document.getElementById('partners') : null);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo } });
    }
    onClose();
  };

  return (
    <S.Portal $open={open} aria-hidden={!open}>
      <S.Overlay $open={open} onClick={onClose} aria-hidden="true" />
      <S.Drawer
        ref={drawerRef}
        id="menu-mobile"
        $open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
      >
        <S.DrawerHeader>
          <Link to="/" aria-label="Página inicial da INVETEC" onClick={onClose}>
            <S.Logo src={logo} alt="Logotipo da INVETEC" />
          </Link>
          <S.CloseButton type="button" onClick={onClose} aria-label="Fechar menu">
            <FiX />
          </S.CloseButton>
        </S.DrawerHeader>

        <S.Navigation aria-label="Navegação mobile">
          {mobileItems.map(item => {
            if (item.submenu) {
              return (
                <S.NavigationGroup key={item.id}>
                  <S.ServicesButton
                    type="button"
                    $active={servicesActive}
                    aria-expanded={submenuExpanded}
                    aria-controls="mobile-services-submenu"
                    onClick={() => {
                      if (servicesActive) {
                        setCollapsedServicePath(
                          submenuExpanded ? location.pathname : null
                        );
                      } else {
                        setServicesOpen(value => !value);
                      }
                    }}
                  >
                    Serviços
                    <S.Chevron aria-hidden="true" $open={submenuExpanded} />
                  </S.ServicesButton>
                  <S.Submenu id="mobile-services-submenu" $open={submenuExpanded}>
                    <S.SubmenuContent>
                      {item.submenu.map(sub => (
                        <S.SubmenuLink
                          key={sub.path}
                          to={sub.path}
                          $active={isActive(sub.path)}
                          aria-current={isActive(sub.path) ? 'page' : undefined}
                          onClick={onClose}
                        >
                          {sub.title}
                        </S.SubmenuLink>
                      ))}
                    </S.SubmenuContent>
                  </S.Submenu>
                </S.NavigationGroup>
              );
            }

            if (item.scrollTo) {
              return (
                <S.NavigationButton
                  key={item.id}
                  type="button"
                  $active={false}
                  onClick={() => handleScrollLink(item.scrollTo)}
                >
                  {item.title}
                </S.NavigationButton>
              );
            }

            return (
              <S.NavigationLink
                key={item.id}
                to={item.path ?? '/'}
                $active={isActive(item.path)}
                aria-current={isActive(item.path) ? 'page' : undefined}
                onClick={onClose}
              >
                {item.title}
              </S.NavigationLink>
            );
          })}
        </S.Navigation>
        <S.Signature>Investimos tecnologia onde ela realmente gera resultado.</S.Signature>
      </S.Drawer>
    </S.Portal>
  );
};
