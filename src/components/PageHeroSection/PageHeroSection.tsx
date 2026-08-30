import { motion, useReducedMotion } from 'framer-motion';
import * as S from './PageHeroSection.styles';

export type PageHeroSectionProps = {
  title: string;
  subTitle?: string;
  subTitleMaxWidth?: string;
  brandContent?: React.ReactNode;
  benefit?: React.ReactNode;
  allowContentOverflow?: boolean;
  compactMobile?: boolean;
  image: string;
  children?: React.ReactNode;
  heroContent?: React.ReactNode;
  textColor?: string;
  overlayOpacity?: number;
  contentAlign?: 'left' | 'center';
  backgroundPosition?: string;
  contentMaxWidth?: string;
  subtleTextShadow?: boolean;
  contentSafeTop?: string;
  heroTopPadding?: string;
  startContentOnShortViewport?: boolean;
  heroMinHeight?: string;
};

export const PageHeroSection = ({
  title,
  subTitle,
  subTitleMaxWidth,
  brandContent,
  benefit,
  allowContentOverflow,
  compactMobile,
  image,
  children,
  heroContent,
  textColor,
  overlayOpacity,
  contentAlign = 'center',
  backgroundPosition,
  contentMaxWidth,
  subtleTextShadow = false,
  contentSafeTop,
  heroTopPadding,
  startContentOnShortViewport = false,
  heroMinHeight,
}: PageHeroSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const content = (
    <>
      <S.HeroWrapper
        $allowContentOverflow={allowContentOverflow}
        $compactMobile={compactMobile}
        $backgroundPosition={backgroundPosition}
        $topPadding={heroTopPadding}
        $startContentOnShortViewport={startContentOnShortViewport}
        $minHeight={heroMinHeight}
        $image={image}
        as="header"
      >
        <S.Overlay $opacity={overlayOpacity} />

        <S.Content $align={contentAlign} $color={textColor} $maxWidth={contentMaxWidth} $subtleTextShadow={subtleTextShadow} $safeTop={contentSafeTop}>
          <motion.div
            initial={shouldReduceMotion ? false : { y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55 }}
          >
            {brandContent}
            <h1>{title}</h1>
            {benefit && <S.Benefit>{benefit}</S.Benefit>}
          </motion.div>

          {subTitle && (
            <motion.div
              initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: 0.55 }}
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
    </>
  );

  return content;
};
