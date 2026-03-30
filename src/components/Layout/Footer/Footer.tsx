import logo from '@/assets/images/Logo-Invetec-branco.png';
import { BiSolidPhoneOutgoing } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import * as S from './Footer.syles';

export const Footer = () => {
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
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#partners">Parceiros</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </S.List>
        </S.Section>

        {/* Contato */}
        <S.Section>
          <S.Title>Contato</S.Title>

          <S.Text>
            <span>
              <MdEmail />
              <a href="mailto:comercial@invetec.com.br">
                comercial@invetec.com.br
              </a>
            </span>
          </S.Text>

          <S.Text>
            <span>
              <BiSolidPhoneOutgoing />
              <a href="tel:+5531997101336">(31) 9 9710-1336</a>
            </span>
            <S.Social>
              <a
                href="https://wa.me/5531997101336?text=Em%20que%20posso%20ajudar%3F"
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
