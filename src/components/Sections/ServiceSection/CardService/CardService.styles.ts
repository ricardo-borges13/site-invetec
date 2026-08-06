import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{ $clickable?: boolean; $featured?: boolean }>`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 194px;
  padding: 18px;
  overflow: hidden;
  border: 1px solid ${({ $featured }) => ($featured ? '#1682ff' : 'transparent')};
  border-radius: 12px;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.white};
  color: inherit;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  text-align: left;
  text-decoration: none;
  box-shadow: ${({ $featured }) => ($featured ? '0 14px 30px rgba(0, 100, 220, 0.14)' : '0 10px 24px rgba(15, 23, 42, 0.08)')};
  transition: border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease;

  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.4);
    outline-offset: 3px;
  }

  ${({ $featured }) => $featured && css`
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-top: 32px solid #1682ff;
      border-left: 32px solid transparent;
      content: '';
    }
  `}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: rgba(0, 123, 255, 0.35);
      box-shadow: 0 18px 34px rgba(15, 23, 42, 0.13);
      transform: translateY(-4px);
    }
  }

  @media (max-width: 1440px) {
    min-height: 184px;
    padding: 16px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    min-height: 176px;
    padding-block: 14px;
  }

  @media (max-width: 480px) {
    min-height: 154px;
    padding: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  flex: 0 0 112px;
  place-items: center;
  overflow: hidden;

  @media (max-width: 1440px) { flex-basis: 96px; }
  @media (min-width: 769px) and (max-width: 1440px) { flex-basis: 90px; }
  @media (max-width: 480px) { flex-basis: 82px; }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 112px;
  object-fit: contain;
  transition: transform 280ms ease;

  @media (hover: hover) and (pointer: fine) {
    ${CardContainer}:hover & { transform: scale(1.03); }
  }

  @media (max-width: 480px) { max-height: 82px; }
  @media (min-width: 769px) and (max-width: 1440px) { max-height: 100px; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const Content = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const BadgeSlot = styled.div`
  display: flex;
  min-height: 24px;
  align-items: center;
  margin-bottom: 2px;
`;

export const Badge = styled.span<{ $variant: 'sites' | 'popular' | 'cloud' }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 100%;
  padding: 5px 8px;
  border-radius: 7px;
  background: ${({ $variant }) => ($variant === 'popular' ? '#fff4e5' : '#eaf4ff')};
  color: ${({ $variant }) => ($variant === 'popular' ? '#c56a00' : '#005fc6')};
  font-size: 0.64rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;

  svg { width: 13px; height: 13px; flex: 0 0 auto; }
`;

export const Title = styled.h3`
  width: 100%;
  margin: 5px 0 6px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.35;
`;

export const Subtitle = styled.p`
  width: 100%;
  margin: 0;
  color: #475569;
  font-size: 0.82rem;
  line-height: 1.4;

  @media (max-width: 480px) { font-size: 0.78rem; }
`;

export const MoreLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding-top: 10px;
  color: #0877e8;
  font-size: 0.76rem;
  font-weight: 700;

  svg { transition: transform 220ms ease; }
  @media (hover: hover) and (pointer: fine) { ${CardContainer}:hover & svg { transform: translateX(3px); } }
  @media (min-width: 769px) and (max-width: 1440px) {
    margin-top: 7px;
    padding-top: 0;
  }
  @media (prefers-reduced-motion: reduce) { svg { transition: none; } }
`;
