import { CustomButton } from '@/components/CustomButton/CustomButton';
import { motion } from 'framer-motion';
import React from 'react';
import * as S from './Hero.styles';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onHighlightClick?: () => void;
  image: string;
}

export const Hero = React.memo(
  ({
    title,
    subtitle,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryClick,
    onSecondaryClick,
    onHighlightClick,
    image,
  }: HeroProps) => {
    return (
      <S.HeroContainer>
        {/* Imagem real no DOM */}
        <S.BackgroundImage
          src={image}
          alt="Banner principal"
          loading="eager"
          $fetchPriority="high"
          decoding="async"
        />

        {/* Overlay escuro */}
        <S.Overlay />

        <S.HeroContent>
          <S.HeroRow
            as={motion.div}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >

              <S.Left>
                <S.HeroTitle>{title}</S.HeroTitle>
                <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>

                <S.ButtonGroup>
                  <CustomButton
                    text={primaryButtonText}
                    onClick={onPrimaryClick}
                    variant="primary"
                  />
                  <CustomButton
                    text={secondaryButtonText}
                    onClick={onSecondaryClick}
                    variant="outline-white"
                  />
                </S.ButtonGroup>
              </S.Left>

              {/* 🔥 CARD À DIREITA */}
              <S.Right>
                <S.HeroHighlight>
                  <span>📧 Destaque</span>
                  <h3>INVETEC Mail</h3>
                  <p>
                    E-mail corporativo profissional com mais controle, segurança
                    e suporte próximo.
                  </p>

                  <S.HighlightButton onClick={onHighlightClick}>Conhecer solução</S.HighlightButton>
                </S.HeroHighlight>
              </S.Right>

          </S.HeroRow>
        </S.HeroContent>
      </S.HeroContainer>
    );
  }
);
