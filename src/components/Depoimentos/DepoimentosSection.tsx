import type { ReactNode } from 'react';
import * as S from './DepoimentosSection.styles';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';

type DepoimentosSectionProps = {
  title?: string;
  subTitle?: string;
  children: ReactNode;
};

export const DepoimentosSection = ({
  title = 'O que nossos clientes dizem',
  subTitle = 'Projetos desenvolvidos com foco em performance, organização e presença profissional.',
  children,
}: DepoimentosSectionProps) => {
  return (
    <S.Section>
      <S.BackgroundGlowBlue />
      <S.BackgroundGlowOrange />
      <S.BackgroundGlow />

      <S.Container>
        <S.Header>
          <MotionReveal delay={0.2}>
            <span>DEPOIMENTOS</span>
          </MotionReveal>

          <MotionReveal delay={0.4}>
            <h2>{title}</h2>
          </MotionReveal>

          <MotionReveal delay={0.6}>
            <p>{subTitle}</p>
          </MotionReveal>
        </S.Header>

        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Section>
  );
};
