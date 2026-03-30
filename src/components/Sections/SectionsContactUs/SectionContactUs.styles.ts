import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: visible; /* importante pra permitir que o form ultrapasse a borda */
  margin: 40px 0 30px 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  padding-left: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 10px 0 10px;
  }
`;

export const InfoArea = styled.div`
.contact {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact p {
   display: flex;
  align-items: center;
  gap: 12px;

  background: rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 10px;

  width: fit-content;
}

.contact svg {
  font-size: 18px;
  opacity: 0.9;
}

.contact a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
}
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;

  /* Faz o formulário “sair” da área azul para baixo */
  transform: translateY(30px);

  @media (max-width: 900px) {
    transform: translateY(40px);
  }
`;
