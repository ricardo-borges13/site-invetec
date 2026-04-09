import logo from '@/assets/images/Logo-Invetec-branco.png';
import { menuItems } from '@/components/Layout/Menu/menuData';
import type { ContactInfo } from '@/pages/Contato/contactData';
import { BiSolidPhoneOutgoing } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './Footer.syles';

export const Footer = ({ phone, email }: ContactInfo) => {
  const footerItems = menuItems.filter(item => item.showInFooter);
  const navigate = useNavigate();
  const location = useLocation();

  const getCleanPhone = (p: string) => p.replace(/\D/g, '');

  const handleFooterClick = (e: React.MouseEvent, item: MenuItem) => {
    if (!item.scrollTo) return;
    e.preventDefault();

    if (location.pathname === '/') {
      document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: item.scrollTo } });
    }
  };

  const whatsAppHref = `https://wa.me/55${getCleanPhone(phone)}?text=${encodeURIComponent(
    'Olá, gostaria de saber mais sobre os serviços da INVETEC.'
  )}`;

  return (
    <S.Container>
      <S.Content>
        {/* Empresa */}
        <S.Section>
          <S.LogoImage src={logo} alt="Invetec" />
          <S.Text>
            Tecnologia e gestão para empresas.
            <br />
            Soluções em ERP, infraestrutura, e-commerce e desenvolvimento web
            para impulsionar seu negócio.
          </S.Text>
        </S.Section>

        {/* Links Rápidos */}
        <S.Section>
          <S.Title>Links Rápidos</S.Title>
          <S.NavList>
            {footerItems.map(item => (
              <li key={item.id}>
                <Link to={item.path} onClick={e => handleFooterClick(e, item)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </S.NavList>
        </S.Section>

        {/* Contato */}
        <S.Section>
          <S.Title>Contato</S.Title>

          <S.ContactItem>
            <span>
              <MdEmail />
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </S.ContactItem>

          <S.ContactItem>
            <span>
              <BiSolidPhoneOutgoing />
              <a href={`tel:${getCleanPhone(phone)}`}>{phone}</a>
            </span>
            <S.Social>
              <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" title="Falar no WhatsApp">
                <FaWhatsapp />
              </a>
            </S.Social>
          </S.ContactItem>
        </S.Section>
      </S.Content>

      <S.Copy>
        © {new Date().getFullYear()} Invetec • CNPJ: 46.261.182/0001-55 •
        Atendimento em todo o Brasil
      </S.Copy>
    </S.Container>
  );
};
