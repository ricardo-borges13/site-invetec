import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 80px 24px;
  background: ${({ theme }) => theme.colors.background.global};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 48px;
`;

export const Grid = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr); /* desktop */
  gap: 24px;

  align-items: center;
  justify-items: center;

  /* tablet */
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* mobile */
  @media (max-width: 500px) {
    gap: 16px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: 150px;
  height: auto;
  object-fit: contain;

  filter: grayscale(100%) opacity(0.7);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.05);
  }
`;
