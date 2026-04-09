import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export const Section = styled.section`
  margin-bottom: 4rem;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    text-align: left;
  }

  &:not(:first-child) h2 {
  margin-top: 10px;
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
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2.5rem;
  margin: 4rem 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

export const Warning = styled.section`
  background: linear-gradient(180deg, #eff6ff, #ffffff);
  border: 1px solid #3b82f6;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;

  h2 {
    color: #1d4ed8;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1000px) {
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
  transition: all 0.3s ease;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  }
`;

export const Steps = styled.div`
  display: grid;
  gap: 12px;
  max-width: 600px;
  margin: 1.5rem auto 0;

  div {
    background: #f9fafb;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const FormArea = styled.section`
  margin-top: 2rem;
  padding: 2.5rem;
  background: #c7dbf3;
  border-radius: 16px;
  text-align: center;
  border: 2px solid rgba(0,0,0,0.05);

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 12px;

  input,
  select,
  textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    font-size: 0.9rem;
  }

  textarea {
    min-height: 80px;
    resize: vertical;
  }
`;


