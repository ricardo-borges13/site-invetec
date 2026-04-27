import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  user-select: none;
`;

export const Section = styled.section`
  margin-bottom: 3.5rem;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  ul {
    margin-top: 1.2rem;
    display: inline-block;
    text-align: left;

    li {
      margin-bottom: 0.5rem;
      list-style: none;
    }
  }

   @media (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

 @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 24px;
  border-radius: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.04);
  cursor: default;

  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primaryDark};
    line-height: 1.35;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #475569;
    margin: 0;
  }

  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease,
    background-color 0.28s ease;

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
    border-color: ${({ theme }) => theme.colors.primaryDark};
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  }
`;

export const Highlight = styled.section`
  background: #f0fdf4;
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;

  padding: 2.5rem;
  margin: 3rem 0;

  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none; /* remove bolinha padrão */
    padding: 0;
    margin: 0;

    display: inline-block; /* centraliza bloco */
    text-align: left; /* alinha texto corretamente */

    li {
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 22px;

      &::before {
        content: "✔";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.ctaGreen};
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SubHighlight = styled.section`

  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 36px rgba(0, 123, 255, 0.08);
  }
`;

export const InfoBox = styled.section`
  background: #eff6ff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 36px rgba(0, 123, 255, 0.08);
  }
`;

export const FormArea = styled.section`
  margin-top: 3rem;
  background: linear-gradient(135deg, #dbeafe, #c7dbf3);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;

    @media (max-width: 768px) {
    padding: 1rem; /* 🔥 reduz MUITO o lateral */
  }

    @media (max-width: 500px) {
    padding: 0.5rem; /* 🔥 reduz MUITO o lateral */
  }
`;

export const SystemSection = styled.section`
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


export const ValueHighlight = styled.section`
  position: relative;

  background: linear-gradient(135deg, #f8fafc, #eef4ff);
  border: 1px solid #cfe0ff;
  border-radius: 18px;

  padding: 2.2rem 2rem;
  margin: 2.5rem 0;

  text-align: center;

  box-shadow: 0 18px 40px rgba(0, 123, 255, 0.08);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 55px rgba(0, 123, 255, 0.12);
    border-color: #9ec5ff;
  }

  /* 🔵 Linha lateral de destaque */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20%;
    height: 60%;
    width: 6px;
    background: linear-gradient(180deg, #007bff, #4dabf7);
    border-radius: 0 6px 6px 0;
  }

  h2 {
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    margin-bottom: 0.8rem;
    color: #0f172a;
  }

  p {
    max-width: 720px;
    margin: 0 auto;
    line-height: 1.7;
    color: #475569;
    font-size: 1rem;
  }

  /* 🔥 Destaque do "sem custo" */
  strong {
    background: #d1fae5;
    color: #065f46;
    padding: 4px 10px;
    border-radius: 8px;
    font-weight: 700;
    white-space: nowrap;
  }

  /* 💡 Versão alternativa usando classe */
  .highlight-free {
    display: inline-block;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    padding: 6px 12px;
    border-radius: 10px;
    font-weight: 700;
    margin-left: 6px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 1.6rem 1.2rem;

    &::before {
      display: none;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export const DomainHighlight = styled.section`
  background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 18px;

  padding: 2.2rem;
  margin: 3rem 0;

  text-align: center;

  box-shadow: 0 15px 35px rgba(34, 197, 94, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(34, 197, 94, 0.12);
  }

  h2 {
    margin-bottom: 0.5rem;
    color: #064e3b;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
  }

  .sub {
    color: #166534;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  /* 🔥 EXEMPLO DO EMAIL (destaque principal) */
  .example {
    display: inline-block;
    background: white;
    border: 1px solid #bbf7d0;
    padding: 10px 18px;
    border-radius: 10px;
    font-weight: 700;
    color: #065f46;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }

  .desc {
    max-width: 520px;
    margin: 0 auto 1.2rem;
    color: #475569;
    line-height: 1.6;
  }

  /* 🟢 Badge de valor */
  .badge {
    display: inline-block;
    background: ${({ theme }) => theme.colors.ctaGreen};
    color: white;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;

    .example {
      font-size: 1rem;
      padding: 8px 14px;
    }
  }
`;
