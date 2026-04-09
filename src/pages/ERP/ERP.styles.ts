import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1px 20px;
`;

export const Section = styled.section`
  margin-bottom: 80px;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    color: #555;
  }

   button {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ $highlight?: boolean }>`
  background: ${({ $highlight }) =>
    $highlight
      ? 'linear-gradient(180deg, #f0f7ff, #ffffff)'
      : '#f9fdf9'};

  border-radius: 16px;
  padding: 30px;
  position: relative;
  margin-top: 20px;

  border: ${({ $highlight }) =>
    $highlight ? '2px solid #2563eb' : '1px solid #e5e7eb'};

  transform: ${({ $highlight }) =>
    $highlight ? 'scale(1.03)' : 'scale(1)'};

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  transition: all 0.25s ease;

  &:hover {
    transform: ${({ $highlight }) =>
      $highlight ? 'scale(1.05)' : 'translateY(-6px)'};

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 10px 0 20px;
  }

  &:hover h3 {
  color: ${({ theme }) => theme.colors.primary};
}

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;

    li {
      margin-bottom: 8px;
    }
  }
`;

export const Badge = styled.div`
  background: #2563eb;
  color: white;
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 20px 0;
  font-size: 1.1rem;
`;



/* 📋 FORMULÁRIO */
export const FormArea = styled.section`
  margin-top: 3rem;
  background: #c7dbf3;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 2px solid rgba(0,0,0,0.05);

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  > div {
    max-width: 600px;
    margin: 0 auto;
  }
`;

