import { FiArrowRight, FiShield, FiStar, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './CardService.styles';

export type Badge = {
  label: string;
  variant: 'sites' | 'popular' | 'cloud';
};

type CardServiceProps = {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  subtitle: string;
  path: string;
  badge?: Badge;
  featured?: boolean;
};

export const CardService = ({ image, imageAlt, imageWidth, imageHeight, title, subtitle, path, badge, featured = false }: CardServiceProps) => (
  <S.CardContainer as={Link} to={path} $clickable $featured={featured} aria-label={`Saiba mais sobre ${title}`}>
    <S.ImageWrapper>
      <S.Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight} />
    </S.ImageWrapper>
    <S.Content>
      <S.BadgeSlot aria-hidden={!badge}>
        {badge && (
          <S.Badge $variant={badge.variant}>
            {badge.variant === 'sites' ? <FiTarget /> : badge.variant === 'cloud' ? <FiShield /> : <FiStar />}
            {badge.label}
          </S.Badge>
        )}
      </S.BadgeSlot>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.MoreLink>Saiba mais <FiArrowRight aria-hidden="true" /></S.MoreLink>
    </S.Content>
  </S.CardContainer>
);
