import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  ul {
    margin-top: 1rem;
    display: inline-block;
    text-align: left;

    li {
      margin-bottom: 0.5rem;
      list-style: none;
    }
  }
`;

export const Highlight = styled.section`
  background: #f0fdf4;
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
`;

export const Warning = styled.section`
  background: linear-gradient(180deg, #eff6ff, #ffffff);
  border: 1px solid #3b82f6;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;

  h2{
    color: #1d4ed8;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
  }
`;


export const BeforeAfter = styled.section`
  margin: 4rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 700px;
    margin: 0 auto 2rem;
  }
`;

export const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CompareCard = styled.div<{ $highlight?: boolean }>`
  background: ${({ $highlight }) =>
    $highlight ? '#ecfdf5' : '#fff7ed'};

  border: 2px solid
    ${({ $highlight }) => ($highlight ? '#22c55e' : '#fb923c')};

  border-radius: 16px;
  padding: 20px;
  text-align: left;

  img {
    width: 100%;
    border-radius: 10px;
    margin: 15px 0;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  h3 {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 0;
    list-style: none;

    li {
      margin-bottom: 6px;
      font-size: 0.95rem;
    }
  }
`;

export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  font-size: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;


export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin: 3rem 0 1.5rem;
  text-align: center;

  position: relative;



  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMedium}) {
    font-size: 1.6rem;
  }
`;

export const AccordionWrapper = styled.div`
  margin-bottom: 3rem;

  .accordion-item {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    transition: 0.2s;

  }

.accordion-item:hover {
  transition: 0.2s;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
}

  /* HEADER */
  .accordion-button {
    font-weight: 600;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.darkGray}; /* 🔥 preto padrão */
    background-color: ${({ theme }) => theme.colors.white};

    padding: 1rem 1.2rem;
    box-shadow: none;
  }

  /* ÍCONE */
  .accordion-button::after {
    content: '+';
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    background-image: none;
  }

  /* ATIVO (ABERTO) */
  .accordion-button:not(.collapsed) {
    background-color: #f8fafc; /* 🔥 leve cinza/azul MUITO suave */
    color: ${({ theme }) => theme.colors.darkGray};
  }

  .accordion-button:not(.collapsed)::after {
    content: '–';
  }

  .accordion-button:focus {
    box-shadow: none;
  }


  /* BODY */
  .accordion-body {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.darkGray};
    padding: 1rem 1.2rem 1.2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }


`;

export const FormArea = styled.section`
  margin-top: 2rem;
  padding: 2.5rem;
  background: #f9fafb;
  border-radius: 16px;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  > div {
    max-width: 600px;
    margin: 0 auto;
  }
`;
