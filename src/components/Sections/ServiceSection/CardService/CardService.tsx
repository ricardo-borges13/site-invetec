import { useNavigate } from 'react-router-dom';
import * as S from './CardService.styles';

type CardServiceProps = {
  image: string;
  title: string;
  subtitle: string;
  path?: string;
};

export const CardService = ({ image, title, subtitle, path }: CardServiceProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) navigate(path);
  };

  return (
    <S.CardContainer onClick={handleClick} $clickable={!!path}>
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
