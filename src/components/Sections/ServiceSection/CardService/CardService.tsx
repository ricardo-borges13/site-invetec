import { Link } from 'react-router-dom';
import * as S from './CardService.styles';

type CardServiceProps = {
  image: string;
  title: string;
  subtitle: string;
  path: string;
  badge?: string;
};

export const CardService = ({
  image,
  title,
  subtitle,
  path,
  badge,
}: CardServiceProps) => {
  return (
    <S.CardContainer as={Link} to={path} $clickable>
      <S.ImageWrapper>
        <S.Image src={image} alt={title} />
      </S.ImageWrapper>

      <S.Content>
        {badge && <S.Badge>{badge}</S.Badge>}
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </S.CardContainer>
  );
};
