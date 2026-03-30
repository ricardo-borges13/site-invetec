import styled from 'styled-components';

export const HeroWrapper = styled.section<{ $image: string }>`
  position: relative;
  width: 100%;
  height: clamp(300px, 50vh, 420px);

  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    135deg,
    rgba(10, 37, 64, 0.85),
    rgba(15, 61, 99, 0.7)
  );

  backdrop-filter: blur(2px);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  text-align: center;
  color: white;

  padding: 0 20px;

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

export const ChildrenContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 60px auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;
