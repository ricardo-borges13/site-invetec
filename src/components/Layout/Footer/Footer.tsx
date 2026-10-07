import logo from '@/assets/images/Logo-Invetec-branco.webp';
import { menuItems, type MenuItem } from '@/components/Layout/Menu/menuData';
import type { ContactInfo } from '@/pages/Contato/contactData';
import { BiSolidPhoneOutgoing } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './Footer.syles';

export const Footer = ({ phone, email }: ContactInfo) => {
  const footerItems = menuItems.filter(item => item.showInFooter);
  const navigate = useNavigate();
  const location = useLocation();
  const instagramHref = 'https://www.instagram.com/invetec_mail/';
  const facebookHref = 'https://www.facebook.com/invetecbr';

  const getCleanPhone = (p: string) => p.replace(/\D/g, '');

  const handleFooterClick = (e: React.MouseEvent, item: MenuItem) => {
    if (!item.scrollTo) return;
    e.preventDefault();

    if (location.pathname === '/') {
      document
        .getElementById(item.scrollTo)
        ?.scrollIntoView({ behavior: 'smooth' });
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
        <S.SectionLogo>
          <S.LogoImage
            src={logo}
            alt="Logotipo da INVETEC"
            width={400}
            height={120}
          />

          <S.Text>
            Tecnologia aplicada ao crescimento do seu negócio.
          </S.Text>

          <S.Text>
            Soluções em ERP, infraestrutura, e-mails corporativos, sites e suporte de TI para empresas que buscam organização, produtividade e crescimento.
          </S.Text>
        </S.SectionLogo>

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
          <S.BackLink to="/servicos/ferramentas-uteis">
            Ferramentas Úteis
          </S.BackLink>
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
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                title="Falar no WhatsApp"
                className="whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook da INVETEC"
                aria-label="Facebook da INVETEC"
                className="facebook"
              >
                <FaFacebookF />
              </a>
            </S.Social>
          </S.ContactItem>
        </S.Section>
      </S.Content>

      <S.Copy>
        © {new Date().getFullYear()} Invetec • CNPJ: 69.388.747/0001-65 •
        Atendimento em todo o Brasil
        <S.PrivacyLink to="/politica-de-privacidade">
          Política de Privacidade
        </S.PrivacyLink>
      </S.Copy>
    </S.Container>
  );
};
