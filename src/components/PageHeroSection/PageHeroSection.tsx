import { motion } from 'framer-motion';
import * as S from './PageHeroSection.styles';

export type PageHeroSectionProps = {
  title: string;
  subTitle?: string;
  image: string;
  children?: React.ReactNode;
  textColor?: string;
  overlayOpacity?: number;
};

export const PageHeroSection = ({
  title,
  subTitle,
  image,
  children,
  textColor,
  overlayOpacity

}: PageHeroSectionProps) => {
  return (
    <main>
    <S.HeroWrapper $image={image} as="header">
      <S.Overlay $opacity={overlayOpacity} />

      <S.Content $color={textColor}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{title}</h1>
        </motion.div>

        {subTitle && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>{subTitle}</p>
          </motion.div>
        )}
      </S.Content>
    </S.HeroWrapper>

    {children && (
      <S.ChildrenContent as="section">
        {children}
      </S.ChildrenContent>
    )}
  </main>
  );
};
