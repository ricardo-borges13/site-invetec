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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;


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
    transform: translateY(-6px);
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
  background: #c7dbf3;
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
