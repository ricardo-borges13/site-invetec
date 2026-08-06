import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 56px 24px 64px;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
  user-select: none;
`;

export const Heading = styled.div`
  max-width: 760px;
  margin-bottom: 32px;
  text-align: center;

  h2 {
    margin: 8px 0 10px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: clamp(2rem, 3vw, 2.5rem);
    line-height: 1.15;
  }

  p {
    max-width: 650px;
    margin: 0 auto;
    color: #64748b;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    margin-bottom: 28px;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #0877e8;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  &::before,
  &::after {
    width: 42px;
    height: 1px;
    background: #c9ddf5;
    content: '';
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
  align-items: stretch;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  > div {
    height: 100%;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    row-gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
