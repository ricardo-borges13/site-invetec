import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
  padding: 40px 24px; /* 🔥 resolve lateral */
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 1350px; /* 🔥 limite central */

  display: grid;
  gap: 24px;
  align-items: stretch;

  /* Desktop */
  grid-template-columns: repeat(5, 1fr);

  /* Notebook */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Tablet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
