import styled from 'styled-components';

export const HeroWrapper = styled.section<{
  $image: string;
  $allowContentOverflow?: boolean;
  $compactMobile?: boolean;
  $backgroundPosition?: string;
  $topPadding?: string;
  $startContentOnShortViewport?: boolean;
  $minHeight?: string;
}>`
  position: relative;
  width: 100%;
  user-select: none;
  min-height: ${({ $minHeight }) => $minHeight || '500px'};
  height: ${({ $minHeight }) =>
    $minHeight ? `clamp(${$minHeight}, 32vw, 620px)` : 'clamp(500px, 32vw, 620px)'};

  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: ${({ $backgroundPosition }) => $backgroundPosition || 'center'};

  display: flex;
  align-items: ${({ $startContentOnShortViewport }) =>
    $startContentOnShortViewport ? 'flex-start' : 'center'};
  justify-content: center;

  padding: ${({ $topPadding }) => $topPadding || '80px'} 20px 60px;

  overflow: ${({ $allowContentOverflow }) =>
    $allowContentOverflow ? 'visible' : 'hidden'};

  /* 🔥 MOBILE */
  @media (max-width: 768px) {
    height: auto;
    min-height: ${({ $compactMobile }) => ($compactMobile ? 'auto' : '70vh')};
    padding: ${({ $compactMobile, $topPadding }) =>
      `${$topPadding || ($compactMobile ? '88px' : '100px')} 20px ${$compactMobile ? '56px' : '80px'}`};
    background-position: ${({ $compactMobile }) =>
      $compactMobile ? 'center' : 'center'};
  }

  /* 🔥 MOBILE PEQUENO (360px) */
  @media (max-width: 420px) {
    min-height: ${({ $compactMobile }) => ($compactMobile ? 'auto' : '75vh')};
    padding: ${({ $compactMobile, $topPadding }) =>
      `${$topPadding || ($compactMobile ? '84px' : '120px')} 16px ${$compactMobile ? '52px' : '90px'}`};
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

export const Content = styled.div<{
  $color?: string;
  $align?: 'left' | 'center';
  $maxWidth?: string;
  $subtleTextShadow?: boolean;
  $safeTop?: string;
}>`
  position: relative;
  z-index: 2;

  text-align: ${({ $align }) => $align || 'center'};
  color: ${({ $color }) => $color || '#fff'};

  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '1260px'};
  padding-top: ${({ $safeTop }) => $safeTop || '0'};

  /* 🔥 MOBILE */
  @media (max-width: 768px) {
    max-width: none;
  }

  h1 {
    max-width: ${({ $maxWidth }) => $maxWidth || '1240px'};
    margin-inline: ${({ $align }) => ($align === 'left' ? '0' : 'auto')};
    font-size: clamp(2.5rem, 3.25vw, 3.25rem);
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: -0.015em;
    line-height: 1.12;
    text-wrap: balance;

    text-shadow: ${({ $subtleTextShadow }) =>
      $subtleTextShadow ? '0 1px 2px rgba(0, 0, 0, 0.22)' : '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3)'};

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
      max-width: 100%;
      font-size: clamp(1.8rem, 5vw, 2.35rem);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
  }

  p {
    font-size: 1.3rem;
    opacity: 0.95;
    color: #fff;

    text-shadow: ${({ $subtleTextShadow }) =>
      $subtleTextShadow ? '0 1px 2px rgba(0, 0, 0, 0.28)' : '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3)'};

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const Benefit = styled.p`
  max-width: 780px;
  margin: 0.1rem auto 0;
  color: #e4f3ff;
  font-size: clamp(1.05rem, 1.55vw, 1.3rem);
  font-weight: 600;
  line-height: 1.35;
`;

export const Subtitle = styled.p<{ $maxWidth?: string }>`
  ${({ $maxWidth }) =>
    $maxWidth &&
    `
      max-width: ${$maxWidth};
      margin: 0.75rem auto 0;
    `}
`;

export const ChildrenContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 20px auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;
