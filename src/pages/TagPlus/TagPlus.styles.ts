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
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
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
