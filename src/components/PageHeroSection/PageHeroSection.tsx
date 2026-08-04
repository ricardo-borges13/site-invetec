import { motion } from 'framer-motion';
import * as S from './PageHeroSection.styles';

export type PageHeroSectionProps = {
  title: string;
  subTitle?: string;
  subTitleMaxWidth?: string;
  brandContent?: React.ReactNode;
  benefit?: React.ReactNode;
  allowContentOverflow?: boolean;
  image: string;
  children?: React.ReactNode;
  heroContent?: React.ReactNode;
  textColor?: string;
  overlayOpacity?: number;
};

export const PageHeroSection = ({
  title,
  subTitle,
  subTitleMaxWidth,
  brandContent,
  benefit,
  allowContentOverflow,
  image,
  children,
  heroContent,
  textColor,
  overlayOpacity,
}: PageHeroSectionProps) => {
  return (
    <main>
      <S.HeroWrapper
        $allowContentOverflow={allowContentOverflow}
        $image={image}
        as="header"
      >
        <S.Overlay $opacity={overlayOpacity} />

        <S.Content $color={textColor}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {brandContent}
            <h1>{title}</h1>
            {benefit && <S.Benefit>{benefit}</S.Benefit>}
          </motion.div>

          {subTitle && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <S.Subtitle $maxWidth={subTitleMaxWidth}>{subTitle}</S.Subtitle>
            </motion.div>
          )}

          {heroContent}
        </S.Content>
      </S.HeroWrapper>

      {children && (
        <S.ChildrenContent as="section">{children}</S.ChildrenContent>
      )}
    </main>
  );
};
