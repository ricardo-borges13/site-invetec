import styled from 'styled-components';

export const CardContainer = styled.div<{ $clickable?: boolean }>`
  display: flex;
  height: 100%;
  min-height: 360px;
  flex-direction: column;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  color: inherit;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  text-align: center;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  transition: border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease;

  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.4);
    outline-offset: 3px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: rgba(0, 123, 255, 0.35);
      box-shadow: 0 18px 34px rgba(15, 23, 42, 0.13);
      transform: translateY(-4px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 1200px) {
    min-height: 340px;
  }

  @media (max-width: 480px) {
    min-height: 0;
    padding: 18px;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  height: 160px;
  place-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  transition: transform 280ms ease;

  @media (hover: hover) and (pointer: fine) {
    ${CardContainer}:hover & {
      transform: scale(1.03);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Content = styled.div`
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const BadgeSlot = styled.div`
  display: flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const Badge = styled.span<{ $variant: 'sites' | 'popular' }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 7px;
  background: ${({ $variant }) => ($variant === 'sites' ? '#eaf4ff' : '#fff4e5')};
  color: ${({ $variant }) => ($variant === 'sites' ? '#005fc6' : '#c56a00')};
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.2;

  svg { width: 13px; height: 13px; }
`;

export const Title = styled.h3`
  display: flex;
  width: 100%;
  min-height: 3.1rem;
  align-items: flex-start;
  justify-content: center;
  margin: 8px 0 7px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
`;

export const Subtitle = styled.p`
  width: 100%;
  min-height: 3.9rem;
  margin: 0;
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.45;

  @media (max-width: 480px) {
    min-height: 0;
  }
`;
