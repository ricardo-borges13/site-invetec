import { motion } from 'framer-motion';
import * as S from './PageHeroSection.styles';

export type PageHeroSectionProps = {
  title: string;
  subTitle?: string;
  image: string;
  children?: React.ReactNode;
};

export const PageHeroSection = ({
  title,
  subTitle,
  image,
  children,
}: PageHeroSectionProps) => {
  return (
    <>
    <S.HeroWrapper $image={image}>
      <S.Overlay />

      <S.Content>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        {subTitle && (
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {subTitle}
          </motion.p>
        )}
      </S.Content>
    </S.HeroWrapper>
        {children && (
      <S.ChildrenContent>
        {children}
      </S.ChildrenContent>
    )}
</>
  );
};
