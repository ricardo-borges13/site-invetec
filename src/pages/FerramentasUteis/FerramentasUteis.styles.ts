import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  user-select: none;
`;

export const Section = styled.section`
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  padding: 40px 20px;
  border-radius: 20px;
  border-top: 1px solid #e2e8f0;
  padding-top: 40px;

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
  background: #ffffff;
  border: 1px solid #dbeafe;
  box-shadow: 0 20px 40px rgba(22, 119, 255, 0.08);
  padding: 25px;
  border-radius: 20px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);

  border: 2px solid #e2e8f0;
  border-radius: 16px;

  padding: 20px;

  transition: 0.25s ease;

  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 18px 35px rgba(22, 119, 255, 0.12);
    transform: translateY(-3px);
  }

  /* 🔥 BARRA AZUL LATERAL (destaque) */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 15%;
    height: 70%;
    width: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    opacity: 0.2;
    transition: 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.2s;
  }

  &:hover span {
    transform: scale(1.2);
  }
`;

export const AccordionContent = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '220px' : '0')};
  overflow: hidden;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-5px)')};

  transition: all 0.3s ease;

  p {
    margin: 12px 0;
    color: #475569;
  }
`;

export const Button = styled.a`
  display: inline-block;

  background: linear-gradient(135deg, #1677ff, #0b5ed7);
  color: white;

  padding: 10px 16px;
  border-radius: 8px;

  font-size: 0.9rem;
  text-decoration: none;

  transition: 0.25s;

  margin-top: 10px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(22, 119, 255, 0.3);
  }
`;

export const Highlight = styled.section`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1677ff, #0b5ed7);
  color: white;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  a {
    display: inline-block;
    background: #22c55e;
    padding: 14px 30px;
    border-radius: 999px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 20px;
  }

  a:hover {
    background: #16a34a;
  }
`;
