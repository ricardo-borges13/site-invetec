import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1.5rem;
  margin: 3rem auto;
  max-width: 1100px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  caret-color: transparent;

  header {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 1rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 540px) {
      h2 {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }
  }
`;

export const Form = styled.div`
  margin: 3rem auto 6rem auto;
  max-width: 1100px;
`;
