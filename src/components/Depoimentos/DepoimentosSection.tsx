import type { ReactNode } from 'react';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import * as S from './DepoimentosSection.styles';

type DepoimentosSectionProps = {
  children: ReactNode;
};

export const DepoimentosSection = ({ children }: DepoimentosSectionProps) => (
  <S.Section aria-labelledby="depoimentos-title">
    <S.Container>
      <S.Header>
        <MotionReveal distance={20}>
          <span>DEPOIMENTOS</span>
        </MotionReveal>
        <MotionReveal delay={0.08} distance={20}>
          <h2 id="depoimentos-title">O que nossos clientes dizem sobre a INVETEC</h2>
        </MotionReveal>
        <MotionReveal delay={0.14} distance={20}>
          <p>
            Experiências reais de empresas que utilizam nossas soluções para organizar
            processos, fortalecer a presença digital e evoluir com tecnologia.
          </p>
        </MotionReveal>
      </S.Header>

      <MotionReveal delay={0.1} distance={16}>
        <S.Content>{children}</S.Content>
      </MotionReveal>
    </S.Container>
  </S.Section>
);
