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
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto 0.5rem;
    line-height: 1.6;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  ul {
    text-align: left;
    margin: 1rem 0;
    display: inline-block;

    li {
      margin-bottom: 0.4rem;
      font-size: 0.95rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1.5rem;
`;

export const FooterCTA = styled.section`
  margin-top: 4rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
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


