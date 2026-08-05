import styled from 'styled-components';

export const Section = styled.section`
  position: relative;

  padding: 56px 0 28px;

  background:
    linear-gradient(
      135deg,
      #0f172a 0%,
      #111827 100%
    );

  overflow: hidden;

  @media (max-width: 1440px) {
    padding: 48px 0 22px;
  }

  @media (max-width: 768px) {
    padding: 38px 0 18px;
  }
`;

export const BackgroundGlow = styled.div`
  position: absolute;

  top: -120px;
  right: -120px;

  width: 360px;
  height: 360px;

  border-radius: 50%;

  background: rgba(37, 99, 235, 0.08);

  filter: blur(100px);

  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 1260px;

  margin: 0 auto;

  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

export const Header = styled.div`
  text-align: center;

  margin-bottom: 28px;

  span {
    display: inline-block;

    margin-bottom: 10px;

    font-size: 0.78rem;
    font-weight: 700;

    letter-spacing: 2px;

    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-size: clamp(2rem, 3vw, 3.8rem);

    font-weight: 700;

    color: ${({ theme }) => theme.colors.white};

    margin-bottom: 14px;

    line-height: 1.08;
  }

  p {
    max-width: 700px;

    margin: 0 auto;

    font-size: 1rem;

    line-height: 1.65;

    color: rgba(255,255,255,0.75);
  }

  @media (max-width: 1440px) {
    margin-bottom: 22px;

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.98rem;
      line-height: 1.55;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.92rem;
      line-height: 1.6;
    }
  }
`;

export const Content = styled.div`
  position: relative;

  &::before {
    content: '';

    position: absolute;

    width: 420px;
    height: 420px;

    background: rgba(249,115,22,0.06);

    filter: blur(120px);

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    pointer-events: none;
  }
`;

export const BackgroundGlowOrange = styled.div`
  position: absolute;

  bottom: -180px;
  left: -120px;

  width: 360px;
  height: 360px;

  border-radius: 50%;

  background: rgba(249, 115, 22, 0.10);

  filter: blur(120px);

  pointer-events: none;
`;

export const BackgroundGlowBlue = styled.div`
  position: absolute;

  top: -140px;
  right: -140px;

  width: 360px;
  height: 360px;

  border-radius: 50%;

  background: rgba(37, 99, 235, 0.10);

  filter: blur(120px);

  pointer-events: none;
`;
