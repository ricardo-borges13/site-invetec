import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 60px auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

export const Intro = styled.div`
  max-width: 700px;
  margin: 0 auto 60px;
  text-align: center;

  p {
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;

export const Highlight = styled.p`
  margin-top: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;
