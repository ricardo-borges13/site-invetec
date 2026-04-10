import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    text-align: left;
  }

  ul {
    margin-top: 1rem;
    display: inline-block;
    text-align: left;

    li {
      margin-bottom: 0.5rem;
      list-style: none;
    }
  }
`;

export const Highlight = styled.section`
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
`;

export const Warning = styled.section`
  background: linear-gradient(180deg, #eff6ff, #ffffff);
  border: 1px solid #3b82f6;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  h2 {
    color: #1d4ed8;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
  }

  transition: all 0.3s ease;

&:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}
`;

export const FormArea = styled.section`
  margin-top: 2rem;
  padding: 2.5rem;
  background: #f9fafb;
  border-radius: 16px;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
