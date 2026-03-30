import bgImage from '@/assets/images/CTA2.jpg';
import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;
  padding: 100px 20px;

  background-image:
    linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.6)),
    url(${bgImage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* 🔥 PARALLAX SIMPLES */
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  /* fallback mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMedium}) {
    background-attachment: scroll;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacing.medium};

  span {
    font-size: 1.7rem;
    letter-spacing: 2px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 3.8rem);
    max-width: 1200px;
    margin: 0 auto 24px;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    font-weight: 550;
  }

  h4 {
    font-size: clamp(1rem, 1.2vw, 1.4rem);
    max-width: 900px;
    margin: 0 auto 24px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 400;
  }
`;
