import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  align-items: center;
  gap: clamp(2rem, 3.4vw, 4rem);
  max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
  margin: clamp(2rem, 3vw, 3.5rem) auto;
  padding: clamp(2rem, 3vw, 3rem) clamp(1.25rem, 3.5vw, 3.5rem);
  border: 1px solid #e8eef5;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);

  @media (max-width: 1440px) {
    gap: 2.5rem;
    padding: 2.25rem 2.5rem;
  }

  @media (max-width: 980px) {
    gap: 2rem;
    padding: 2rem;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  @media (max-width: 600px) {
    margin: 2rem auto;
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

export const TextArea = styled.div`
  min-width: 0;

  h2 {
    max-width: 700px;
    margin: 0 0 1rem;
    color: #132d56;
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.08;
  }
  p {
    max-width: 680px;
    margin: 0 0 0.9rem;
    color: #475569;
    font-size: clamp(0.94rem, 1.15vw, 1rem);
    line-height: 1.6;
  }

  @media (max-width: 1440px) {
    h2 {
      max-width: 660px;
    }
    p {
      font-size: 0.95rem;
      line-height: 1.55;
    }
  }
`;

export const Eyebrow = styled.p`
  position: relative;
  margin-bottom: 0.85rem;
  padding-bottom: 0.55rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 28px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    content: '';
  }
`;

export const Indicators = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 1.35rem 0;
  > div:not(:first-child) > div {
    border-left: 1px solid #e2e8f0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.2rem;
    > div:not(:first-child) > div {
      border-top: 1px solid #e2e8f0;
      border-left: 0;
    }
  }
`;

export const Indicator = styled.div`
  display: flex;
  min-height: 48px;
  align-items: center;
  gap: 0.7rem;
  padding: 0.2rem 0.7rem;
  span {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  strong {
    color: #005fc6;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.3;
  }
  small {
    color: #64748b;
    font-size: 0.75rem;
    line-height: 1.35;
  }
  @media (max-width: 600px) {
    padding: 0.75rem 0;
  }
`;

export const IconBox = styled.div<{ $accent?: 'green' }>`
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  place-items: center;
  border-radius: 10px;
  background: ${({ $accent }) => ($accent === 'green' ? '#ecfdf5' : '#eff6ff')};
  color: ${({ $accent }) => ($accent === 'green' ? '#059669' : '#007bff')};
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AboutLink = styled(Link)`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1.25rem;
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 18px rgba(0, 123, 255, 0.22);
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    background: #005fc6;
    transform: translateY(-2px);
    box-shadow: 0 12px 22px rgba(0, 123, 255, 0.28);
  }
  &:active {
    transform: translateY(0);
  }
  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.35);
    outline-offset: 3px;
  }
`;

export const ImagesArea = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  background: #e2e8f0;
  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.14);
  transition:
    transform 350ms ease,
    box-shadow 350ms ease;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
     transition: transform 450ms ease;
  }

  img:hover {
    transform: scale(1.035);
  }

  @media (max-width: 1440px) {
    max-width: 520px;
  }

  @media (max-width: 800px) {
    max-width: none;
    margin-left: 0;
  }
`;
