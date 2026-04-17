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
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
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

    @media (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Highlight = styled.section`
  background: #f0fdf4;
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
`;

export const Warning = styled.section`
  background: #fff7ed;
  border: 1px solid #fb923c;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
`;

export const CTA = styled.section`
  text-align: center;
  margin-top: 3rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const FormArea = styled.section`
  margin-top: 3rem;
  background: #c7dbf3;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.05);

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  > div {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 1rem; /* 🔥 reduz MUITO o lateral */
  }

  @media (max-width: 500px) {
    padding: 0.5rem; /* 🔥 reduz MUITO o lateral */
  }
`;
