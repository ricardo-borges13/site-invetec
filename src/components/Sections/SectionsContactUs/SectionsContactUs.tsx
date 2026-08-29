import { FormContact } from '@/components/FormContact/FormContact';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import type { ContactInfo } from '@/pages/Contato/contactData';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import * as S from './SectionContactUs.styles';

export const SectionsContactus = ({ phone, email }: ContactInfo) => {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
  const emailHref = `mailto:${email}`;
  const whatsappHref = `https://wa.me/55${phone.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, gostaria de falar com a INVETEC.')}`;
  return (
    <S.Container>
      <S.Content>
        <S.InfoArea>
          <MotionReveal delay={0.1}>
            <h2>Fale com a INVETEC</h2>
            <p>
              Precisa organizar sua TI, melhorar seus sistemas ou desenvolver
              uma nova solução para sua empresa? Explique o cenário e fale com
              um especialista.
            </p>
          </MotionReveal>
          <div className="contact">
            <MotionReveal delay={0.2}>
              <a className="contact-link" href={phoneHref}>
                <FaPhone />
                <span>
                  <small>Telefone</small>
                  {phone}
                </span>
              </a>
              <a className="contact-link" href={emailHref}>
                <MdEmail />
                <span>
                  <small>E-mail</small>
                  {email}
                </span>
              </a>
              <a
                className="contact-link whatsapp"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <span>
                  <small>WhatsApp</small>Conversar pelo WhatsApp
                </span>
              </a>
            </MotionReveal>
          </div>
          <small className="coverage">
            Atendimento para empresas em todo o Brasil.
          </small>
        </S.InfoArea>
        <S.FormWrapper>
          <MotionReveal delay={0.18}>
            <FormContact />
          </MotionReveal>
        </S.FormWrapper>
      </S.Content>
    </S.Container>
  );
};
