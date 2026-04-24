import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

export const Section = styled.section`
  text-align: center;
  margin-bottom: 2.5rem;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: #475569;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 1.1rem;
  }

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AccordionContent = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '200px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;

  p {
    margin: 12px 0;
    color: #475569;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Highlight = styled.section`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    color: #475569;
  }
`;
