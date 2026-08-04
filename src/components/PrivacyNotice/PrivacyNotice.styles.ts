import styled from 'styled-components';

export const Container = styled.div`
  color: #64748b;
  line-height: 1.55;
  text-align: left;

  p {
    margin: 0;
    font-size: 0.78rem;
  }

  a {
    color: ${({ theme }) => theme.colors.lightPrimary};
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  a:focus-visible {
    outline: 3px solid #1f80d1;
    outline-offset: 3px;
  }
`;
