import * as S from './ServiceSection.styles';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const ServiceSection = ({ title, children }: SectionProps) => {
  return (
    <S.SectionWrapper>
      <h2>{title}</h2>
      <S.ContainerCard>{children}</S.ContainerCard>
    </S.SectionWrapper>
  );
};
