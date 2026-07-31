import styled from 'styled-components';

export const Container = styled.article`
  max-width: 920px;
  margin: 60px auto 80px;
  color: #475569;

  section { margin-bottom: 3rem; }
  h2 { margin: 0 0 1rem; color: ${({ theme }) => theme.colors.primaryDark}; font-size: clamp(1.35rem, 2.2vw, 1.8rem); line-height: 1.3; }
  p, li { font-size: 1rem; line-height: 1.75; }
  p { margin: 0 0 1rem; }
  ul { margin: 0; padding-left: 1.3rem; }
  li + li { margin-top: 0.45rem; }
  a { color: ${({ theme }) => theme.colors.lightPrimary}; font-weight: 600; }

  @media (max-width: 600px) {
    margin: 42px auto 56px;
    p, li { font-size: 0.95rem; }
  }
`;

export const ContactDetails = styled.address`
  margin: 0;
  font-style: normal;
  line-height: 1.8;
`;

export const Update = styled.p`
  margin-top: 3.5rem;
  color: #64748b;
  font-size: 0.9rem;
  text-align: center;
`;
