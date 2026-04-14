import bgImage from '@/assets/images/CTA.jpg';
import bgImage2 from '@/assets/images/CTA2.jpg';

import styled, { css } from 'styled-components';

type SectionProps = {
  variant?: 'default' | 'infrastructure';
};

export const Section = styled.section<SectionProps>`
  position: relative;
  width: 100%;
  min-height: 500px;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) =>
    variant === 'infrastructure'
      ? css`
          background-image: url(${bgImage});
        `
      : css`
          background-image:
            linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.75)),
            url(${bgImage2});
        `}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* 🔥 Parallax controlado */
  background-attachment: fixed;



@media (max-width: 1400px) {
  min-height: 420px;
  padding: 40px 20px;
}

@media (max-width: 768px) {
  min-height: 350px;
  padding: 30px 20px;
}
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacing.medium};

  span {
    font-size: 1.4rem;
    letter-spacing: 2px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 3.5rem);
    max-width: 1000px;
    margin: 0 auto 24px;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    font-weight: 600;
    line-height: 1.2;
  }

  h4 {
    font-size: clamp(1rem, 1.2vw, 1.3rem);
    max-width: 800px;
    margin: 0 auto 32px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 400;
    line-height: 1.6;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;

  align-items: flex-start; /* 👈 tudo alinhado à esquerda */
`;

export const ListWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center; /* centraliza o bloco */
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  font-size: clamp(1rem, 1.2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);

  span {
    color: #22c55e;
    font-weight: bold;
    font-size: 1.2rem;

    margin-top: 4px;
    flex-shrink: 0;
  }
`;
