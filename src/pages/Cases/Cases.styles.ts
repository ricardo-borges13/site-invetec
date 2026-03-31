import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export const Section = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-align: center;

  h3 {
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.5;
  }

  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  }
`;
