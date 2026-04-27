import styled from 'styled-components';

export const HeroWrapper = styled.section<{ $image: string }>`
  position: relative;
  width: 100%;
 user-select: none;
  min-height: clamp(400px, 55vh, 500px);

  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 20px 60px;

  overflow: hidden;

  /* 🔥 MOBILE */
  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 100px 20px 80px;
  }

  /* 🔥 MOBILE PEQUENO (360px) */
  @media (max-width: 420px) {
    min-height: 75vh;
    padding: 120px 16px 90px;
  }
`;

export const Overlay = styled.div<{ $opacity?: number }>`
  position: absolute;
  inset: 0;

  /* 🔥 overlay MUITO mais leve */
background: linear-gradient(
    to bottom,
    rgba(10, 37, 64, ${({ $opacity }) => $opacity ?? 0.5}),
    rgba(10, 37, 64, ${({ $opacity }) => ($opacity ?? 0.5) - 0.2})
  );

  /* ❌ remove blur pesado */
  backdrop-filter: none;
`;

export const Content = styled.div<{ $color?: string }>`
  position: relative;
  z-index: 2;

  text-align: center;
  color: ${({ $color }) => $color || '#fff'};

  max-width: 1100px;

  /* 🔥 MOBILE */
  @media (max-width: 768px) {
    max-width: 90%;
  }

  h1 {
    font-size: clamp(2rem, 3vw, 3.2rem);
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    line-height: 1.2;

    text-shadow:
      0 2px 8px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.3);

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
       display: flex;
  align-items: center;
  justify-content: center;
      font-size: 1.8rem;
      line-height: 1.3;
    }
  }

  p {
    font-size: 1.3rem;
    opacity: 0.95;
    color: #fff;

    text-shadow:
      0 2px 8px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.3);

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ChildrenContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 20px auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;
