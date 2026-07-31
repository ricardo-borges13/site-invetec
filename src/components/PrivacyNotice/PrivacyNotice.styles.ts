import styled from 'styled-components';

export const Container = styled.div`
  color: #64748b;
  /* font-size: 0.38rem; */
  line-height: 1.55;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.7rem;
  }

  a {
    color: ${({ theme }) => theme.colors.lightPrimary};
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
