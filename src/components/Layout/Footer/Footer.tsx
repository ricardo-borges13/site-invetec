import logo from '@/assets/images/Logo-Invetec-branco.png';
import { menuItems } from '@/components/Layout/Menu/menuData';
import type { ContactInfo } from '@/pages/Contato/contactData';
import { BiSolidPhoneOutgoing } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as S from './Footer.syles';

export const Footer = ({ phone, email }: ContactInfo) => {
  const footerItems = menuItems.filter(item => item.showInFooter);
  const getCleanPhone = (phone: string) => phone.replace(/\D/g, '');
  const getPhoneHref = (phone: string) => `tel:${getCleanPhone(phone)}`;

  const getWhatsAppHref = (phone: string) => {
    const message = encodeURIComponent(
      'Olá, gostaria de saber mais sobre os serviços da INVETEC.'
    );

    return `https://wa.me/55${getCleanPhone(phone)}?text=${message}`;
  };

   const emailHref = `mailto:${email}`;

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

        {/* Links */}
        <S.Section>
          <S.Title>Links Rápidos</S.Title>

          <S.List>
            <ul>
              {footerItems.map(item => (
                <li key={item.id}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </S.List>
        </S.Section>

        {/* Contato */}
        <S.Section>
          <S.Title>Contato</S.Title>

          <S.Text>
            <span>
              <MdEmail />
              <a href={emailHref}>{email}</a>
            </span>
          </S.Text>

          <S.Text>
            <span>
              <BiSolidPhoneOutgoing />
              <a href={getPhoneHref(phone)}> {phone}</a>
            </span>
            <S.Social>
              <a
                href={getWhatsAppHref(phone)}
                target="_blank"
                rel="noopener noreferrer"
                title="Falar no WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </S.Social>
          </S.Text>
        </S.Section>
      </S.Content>

      <S.Copy>
        © {new Date().getFullYear()} Invetec • CNPJ: 46.261.182/0001-55 •
        Atendimento em todo o Brasil
      </S.Copy>
    </S.Container>
  );
};
