import { FiStar, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './CardService.styles';

type Badge = {
  label: string;
  variant: 'sites' | 'popular';
};

type CardServiceProps = {
  image: string;
  title: string;
  subtitle: string;
  path: string;
  badge?: Badge;
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
        <S.Image src={image} alt="" />
      </S.ImageWrapper>

      <S.Content>
        <S.BadgeSlot aria-hidden={!badge}>
          {badge && (
            <S.Badge $variant={badge.variant}>
              {badge.variant === 'sites' ? <FiTarget /> : <FiStar />}
              {badge.label}
            </S.Badge>
          )}
        </S.BadgeSlot>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </S.CardContainer>
  );
};
