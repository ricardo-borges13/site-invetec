import * as S from './CardService.styles';

type CardServiceProps = {
  image: string;
  title: string;
  subtitle: string;
};

export const CardService = ({ image, title, subtitle }: CardServiceProps) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <S.Image src={image} alt={title} />
      </S.ImageWrapper>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </S.CardContainer>
  );
};
