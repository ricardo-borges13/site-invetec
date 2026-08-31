import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { FiArrowRight, FiShield, FiShare2, FiUsers } from 'react-icons/fi';
import * as S from './SectionInfo.styles';

export type SectionInfoProps = {
  title: string;
  description: string;
  image1: string;
  buttonText?: string;
  path?: string;
};

export const SectionInfo = ({ image1 }: SectionInfoProps) => (
  <S.Container aria-labelledby="sobre-invetec-titulo">
    <S.TextArea>
      <MotionReveal direction="left">
        <S.Eyebrow>SOBRE A INVETEC</S.Eyebrow>
        <h2 id="sobre-invetec-titulo">
          Tecnologia aplicada para organizar empresas e gerar resultado
        </h2>
      </MotionReveal>
      <MotionReveal delay={0.1} direction="left">
        <p>
          A INVETEC ajuda empresas a tomar decisões mais seguras sobre sistemas,
          infraestrutura, presença digital e suporte técnico. Unimos tecnologia,
          experiência e método para entregar soluções compatíveis com a realidade
          de cada negócio.
        </p>
        <p>
          Há mais de 20 anos, aplicamos tecnologia de forma prática para melhorar
          controle, produtividade, segurança e geração de resultados para empresas
          de diferentes segmentos e portes.
        </p>
      </MotionReveal>
      <S.Indicators aria-label="Diferenciais da INVETEC">
        <MotionReveal delay={0.15}>
          <S.Indicator>
            <S.IconBox><FiShield aria-hidden="true" /></S.IconBox>
            <span><strong>+20 anos</strong><small>de experiência</small></span>
          </S.Indicator>
        </MotionReveal>
        <MotionReveal delay={0.22}>
          <S.Indicator>
            <S.IconBox $accent="green"><FiShare2 aria-hidden="true" /></S.IconBox>
            <span><strong>Soluções integradas</strong><small>para empresas</small></span>
          </S.Indicator>
        </MotionReveal>
        <MotionReveal delay={0.29}>
          <S.Indicator>
            <S.IconBox><FiUsers aria-hidden="true" /></S.IconBox>
            <span><strong>Atendimento próximo</strong><small>e consultivo</small></span>
          </S.Indicator>
        </MotionReveal>
      </S.Indicators>
      <MotionReveal delay={0.35}>
        <S.AboutLink to="/sobre">
          Conheça a INVETEC <FiArrowRight aria-hidden="true" />
        </S.AboutLink>
      </MotionReveal>
    </S.TextArea>
    <MotionReveal delay={0.18} direction="right">
      <S.ImagesArea>
        <img
          src={image1}
          alt="Consultores da INVETEC apresentando soluções de tecnologia para uma empresa"
          width={600}
          height={400}
          loading="lazy"
        />
      </S.ImagesArea>
    </MotionReveal>
  </S.Container>
);
