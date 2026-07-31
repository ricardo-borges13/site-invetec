import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 52px auto 72px;
  color: #475569;
  overflow: hidden;
`;

export const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 6vw, 5.5rem);
  align-items: center;
  margin-bottom: 72px;
  padding: 0 0.5rem;

  @media (max-width: 800px) { grid-template-columns: 1fr; margin-bottom: 48px; }
`;

export const Copy = styled.div`
  h2 { margin: 0 0 1.1rem; color: #132d56; font-size: clamp(2rem, 3.2vw, 3rem); line-height: 1.14; letter-spacing: -0.025em; }
  p { margin: 0 0 1rem; font-size: 1rem; line-height: 1.7; }
`;

export const Eyebrow = styled.p`
  position: relative;
  margin-bottom: 1rem !important;
  padding-bottom: 0.65rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem !important;
  font-weight: 700;
  letter-spacing: 0.04em;
  &::after { position: absolute; bottom: 0; left: 0; width: 28px; height: 2px; border-radius: 3px; background: ${({ theme }) => theme.colors.primary}; content: ''; }
`;

export const Highlight = styled.p`
  margin-top: 1.4rem !important;
  padding-left: 1rem;
  border-left: 3px solid #10b981;
  color: #1e3a5f;
  font-weight: 600;
`;

export const IndicatorPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding: 18px;
  border: 1px solid #dbeafe;
  border-radius: 18px;
  background: #f8fbff;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

export const Indicator = styled.div`
  display: flex;
  gap: 0.7rem;
  padding: 0.9rem;
  border-radius: 12px;
  background: #fff;
  svg { width: 22px; height: 22px; flex: 0 0 auto; color: ${({ theme }) => theme.colors.primary}; }
  h3 { margin: 0 0 0.3rem; color: #16345d; font-size: 0.95rem; line-height: 1.3; }
  p { margin: 0; font-size: 0.78rem; line-height: 1.45; }
`;

export const ContentSection = styled.section`
  margin: 72px 0;
  padding: 0 0.5rem;
  @media (max-width: 600px) { margin: 48px 0; }
`;

export const LightSection = styled.section`
  margin: 72px -1rem;
  padding: 64px max(1.5rem, 4vw);
  border-radius: 24px;
  background: #f4f8fc;
  @media (max-width: 600px) { margin: 48px 0; padding: 40px 1.25rem; border-radius: 16px; }
`;

export const SectionHeading = styled.div`
  max-width: 750px;
  margin-bottom: 32px;
  h2 { margin: 0 0 0.8rem; color: #132d56; font-size: clamp(1.65rem, 2.6vw, 2.25rem); line-height: 1.2; }
  p { margin: 0; line-height: 1.65; }
`;

export const Pillars = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;

export const Pillar = styled.article`
  height: 100%;
  padding: 26px;
  border: 1px solid #dce8f4;
  border-radius: 16px;
  background: #fff;
  svg { width: 26px; height: 26px; margin-bottom: 1rem; color: ${({ theme }) => theme.colors.primary}; }
  h3 { margin: 0 0 0.3rem; color: #16345d; font-size: 1.35rem; }
  strong { display: block; margin-bottom: 0.8rem; color: #0f766e; font-size: 0.9rem; }
  p { margin: 0; line-height: 1.6; }
  @media (hover: hover) and (pointer: fine) { &:hover { box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08); transform: translateY(-3px); } }
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 32px;
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

export const ExperienceItem = styled.article`
  display: flex;
  gap: 1rem;
  padding: 1.1rem 0;
  border-top: 1px solid #dbe4ef;
  svg { width: 24px; height: 24px; flex: 0 0 auto; color: #0f766e; }
  h3 { margin: 0 0 0.35rem; color: #16345d; font-size: 1rem; }
  p { margin: 0; line-height: 1.6; }
`;

export const CasesCallout = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  margin: 72px 0;
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 24px;
  background: linear-gradient(135deg, #123b67, #1765b5);
  box-shadow: 0 16px 32px rgba(15, 59, 103, 0.16);
  color: #fff;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 48px 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 1.25rem;
    border-radius: 16px;
  }
`;

export const CasesCopy = styled.div`
  max-width: 610px;

  h2 {
    margin: 0 0 0.9rem;
    font-size: clamp(1.7rem, 2.6vw, 2.35rem);
    line-height: 1.18;
  }

  p {
    margin: 0 0 1.4rem;
    line-height: 1.65;
    opacity: 0.93;
  }
`;

export const CasesEyebrow = styled.p`
  margin: 0 0 0.85rem;
  color: #bfe7ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const CasesHighlights = styled.div`
  display: grid;
  gap: 12px;
`;

export const CaseHighlight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-height: 60px;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(191, 231, 255, 0.26);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);

  svg {
    width: 22px;
    height: 22px;
    flex: 0 0 auto;
    color: #86efac;
  }

  span {
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.4;
  }
`;

export const CasesLink = styled(Link)`
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.2rem;
  border-radius: 9px;
  background: #16a36a;
  color: #fff;
  font-weight: 700;
  text-decoration: none;

  &:hover { background: #0d8655; }
  &:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }

  @media (max-width: 600px) { width: 100%; }
`;

export const DifferentialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 650px) { grid-template-columns: 1fr; }
`;

export const Differential = styled.article`
  position: relative;
  padding: 1.4rem 1.4rem 1.4rem 1.7rem;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  &::before { position: absolute; top: 1.25rem; bottom: 1.25rem; left: 0; width: 3px; border-radius: 0 3px 3px 0; background: ${({ theme }) => theme.colors.primary}; content: ''; }
  svg { width: 21px; height: 21px; margin-bottom: 0.7rem; color: ${({ theme }) => theme.colors.primary}; }
  h3 { margin: 0 0 0.45rem; color: #16345d; font-size: 1.05rem; }
  p { margin: 0; line-height: 1.6; }
  @media (hover: hover) and (pointer: fine) { &:hover { box-shadow: 0 13px 25px rgba(15, 23, 42, 0.09); } }
`;

export const CTA = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 64px;
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: 20px;
  background: linear-gradient(135deg, #123b67, #1765b5);
  color: #fff;
  h2 { max-width: 720px; margin: 0 0 0.75rem; font-size: clamp(1.55rem, 2.5vw, 2.2rem); line-height: 1.2; }
  p { max-width: 660px; margin: 0; line-height: 1.6; opacity: 0.92; }
  @media (max-width: 700px) { flex-direction: column; align-items: flex-start; margin-top: 48px; }
`;

export const CTALink = styled(Link)`
  display: inline-flex;
  min-height: 46px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.2rem;
  border-radius: 9px;
  background: #16a36a;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  &:hover { background: #0d8655; }
  &:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
  @media (max-width: 700px) { width: 100%; }
`;
