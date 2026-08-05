import styled from 'styled-components';

export const Section = styled.section`
  padding: 76px 0 80px;
  border-top: 1px solid rgba(26, 46, 74, 0.07);
  background: #f7f9fc;

  @media (max-width: 768px) {
    padding: 64px 0 68px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

export const Header = styled.header`
  max-width: 760px;
  margin: 0 auto 32px;
  text-align: center;

  span {
    display: inline-block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.14em;
  }

  h2 {
    margin: 0 0 14px;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: clamp(1.9rem, 3.1vw, 3.15rem);
    line-height: 1.14;
  }

  p {
    margin: 0;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 768px) {
    margin-bottom: 26px;
    text-align: left;

    h2 {
      font-size: clamp(1.75rem, 8vw, 2.25rem);
    }

    p {
      font-size: 0.94rem;
    }
  }
`;

export const Content = styled.div`
  position: relative;
`;
