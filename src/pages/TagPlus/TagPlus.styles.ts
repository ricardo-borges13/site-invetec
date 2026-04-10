import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px;
`;

export const Section = styled.section`
  margin-bottom: 80px;
  text-align: center;

  h2 {
    margin-bottom: 16px;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: #555;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;

  h3{
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  background: #f8fafc;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
   border: 1px solid ${({ theme }) => theme.colors.primary}20;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0,0,0,0.08);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin-bottom: 10px;
  }


  p {
    font-size: 0.95rem;
  }
`;

export const Highlight = styled.div`
  background: #f0fdf4;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 80px;
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  h2 {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;

    li {
      margin-bottom: 8px;
    }
  }
`;

export const CTA = styled.div`
  text-align: center;
  background: #ecfdf5;
  padding: 40px;
  border-radius: 16px;

  p {
    margin-bottom: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;
