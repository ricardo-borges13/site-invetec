import { FormContact } from '@/components/FormContact/FormContact';
import * as S from './SectionContactUs.styles';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import type { ContactInfo } from '@/pages/Contato/contactData';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';

export const SectionsContactus = ({ phone, email }: ContactInfo) => {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
  const emailHref = `mailto:${email}`;
  return (
    <S.Container>
      <S.Content>
        <S.InfoArea>
          <MotionReveal delay={0.2}>
          <h2>Vamos conversar sobre sua empresa</h2>
          <p>Precisa melhorar sua TI, reduzir custos ou organizar seus sistemas?</p>
          <p> Fale direto com um especialista e descubra o melhor caminho.</p>
          {/* <FaArrowAltCircleRight size={28} /> */}
          </MotionReveal>
          <div className="contact">
             <MotionReveal delay={0.6}>
            <p>
              <FaPhone />
              <a href={phoneHref}>{phone}</a>
            </p>

            <p>
              <MdEmail />
              <a href={emailHref}>{email}</a>
            </p>
            </MotionReveal>
          </div>
        </S.InfoArea>

        <S.FormWrapper>
          <FormContact />
        </S.FormWrapper>
      </S.Content>
    </S.Container>
  );
};
