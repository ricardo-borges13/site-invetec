import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItem, MenuLink, Nav, Submenu, SubmenuItem } from './Menu.styles';
import { menuItems } from './menuData';

type MenuProps = {
  onLinkClick?: () => void;
};

export const Menu = ({ onLinkClick }: MenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenuMobile, setOpenSubmenuMobile] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1038);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleMenuClick(
  e: React.MouseEvent,
  item: (typeof menuItems)[0]
) {
  // 📱 MOBILE
  if (isMobile) {
    if (item.submenu) {
      e.preventDefault();
      setOpenSubmenuMobile(prev => (prev === item.id ? null : item.id));
      return;
    }

    if (item.scrollTo) {
      e.preventDefault();

      if (location.pathname === '/') {
        const section = document.getElementById(item.scrollTo);
        section?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: item.scrollTo } });
      }

      onLinkClick?.();
      return;
    }

    onLinkClick?.();
    return;
  }

  // 💻 DESKTOP
  if (item.scrollTo) {
    e.preventDefault();

    if (location.pathname === '/') {
      const section = document.getElementById(item.scrollTo);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: item.scrollTo } });
    }

    return;
  }

  onLinkClick?.();
}

  function handleMouseEnter(id: number) {
    if (!isMobile) setOpenMenu(id);
  }

  function handleMouseLeave() {
    if (!isMobile) setOpenMenu(null);
  }

  function handleSubmenuClick(path: string) {
    setOpenMenu(null);
    setOpenSubmenuMobile(null);
    navigate(path);
    onLinkClick?.();
  }

  return (
    <Nav>
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <MenuLink
            to={item.path ?? '#'}
            onClick={e => handleMenuClick(e, item)}
          >
            {item.title}
          </MenuLink>

          {item.submenu && (
            <Submenu
              $isOpen={
                (!isMobile && openMenu === item.id) ||
                (isMobile && openSubmenuMobile === item.id)
              }
            >
              {item.submenu.map((sub, index) => (
                <SubmenuItem key={index}>
                  <MenuLink
                    to={sub.path}
                    onClick={() => handleSubmenuClick(sub.path)}
                  >
                    {sub.title}
                  </MenuLink>
                </SubmenuItem>
              ))}
            </Submenu>
          )}
        </MenuItem>
      ))}
    </Nav>
  );
};
