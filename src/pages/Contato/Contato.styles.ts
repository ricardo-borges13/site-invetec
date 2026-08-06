import styled from 'styled-components';

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  color: #cfe9ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

export const HeroBenefits = styled.div`
  display: grid;
  gap: 0.45rem;
  margin: 0.4rem 0 1.25rem;
  font-size: 0.96rem;
  font-weight: 500;

  span::before {
    content: '✓';
    color: #8ee3b2;
    font-weight: 700;
    margin-right: 0.55rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.9rem;
  }
`;

export const Intro = styled.section`
  padding: 3rem 1.5rem 1.35rem;
  margin: 0 auto;
  max-width: 1100px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;

  header { max-width: 760px; }
  h2 { font-size: 2rem; font-weight: 700; color: ${({ theme }) => theme.colors.primary}; margin-bottom: .7rem; }
  p { font-size: 1rem; color: #334155; margin-bottom: .7rem; }
  strong { color: ${({ theme }) => theme.colors.lightPrimary}; }

  @media (max-width: 768px) {
    padding: 2.35rem 1rem 1.2rem;
    h2 { font-size: 1.5rem; }
  }
`;

export const ContactSection = styled.div`
  padding: .25rem 0 3.5rem;
  background: #f6f8fb;

  @media (min-width: 1024px) and (max-height: 850px) {
    padding-top: 0;
  }
`;
