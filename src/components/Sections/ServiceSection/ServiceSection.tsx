import * as S from './ServiceSection.styles';

type SectionProps = {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
};

export const ServiceSection = ({ title, eyebrow, description, children }: SectionProps) => (
  <S.SectionWrapper>
    <S.Heading>
      <S.Eyebrow>{eyebrow}</S.Eyebrow>
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Heading>
    <S.ContainerCard>{children}</S.ContainerCard>
  </S.SectionWrapper>
);
