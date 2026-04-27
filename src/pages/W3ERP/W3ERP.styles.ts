import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.1rem 1.5rem 4rem;
  user-select: none;
`;

/* 🔹 SECTIONS PADRÃO */
export const Section = styled.section`
  margin-bottom: 3rem;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.darkGray};
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    text-align: left;
  }

  ul {
    margin-top: 1.2rem;
    text-align: left;
    display: inline-block;
    padding-left: 0;

    li {
      margin-bottom: 0.6rem;
      font-size: 1rem;
      list-style: none;
    }
  }

  ul,
  ol {
    margin-top: 1.2rem;
    text-align: left;
    display: inline-block;

    li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
  }

    @media (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

/* 💎 BLOCO DE DESTAQUE (SEU DIFERENCIAL) */
export const Highlight = styled.section`
  background: linear-gradient(180deg, #ecfdf5, #f0fdf4);
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2.5rem;
  margin: 3rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    margin-top: 1.5rem;
    text-align: left;
    display: inline-block;

    li {
      margin-bottom: 0.6rem;
    }
  }
`;

/* 📋 FORMULÁRIO */
export const FormArea = styled.section`
  margin-top: 3rem;
  background: #c7dbf3;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 2px solid rgba(0,0,0,0.05);

  margin-bottom: 3rem;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  > div {
    max-width: 600px;
    margin: 0 auto;
  }

      @media (max-width: 768px) {
    padding: 1rem; /* 🔥 reduz MUITO o lateral */
  }

    @media (max-width: 500px) {
    padding: 0.5rem; /* 🔥 reduz MUITO o lateral */
  }
`;

export const Grid = styled.div`
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2x2 em tablet */
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr; /* empilhado no mobile */
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 24px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between; // 🔥 resolve o alinhamento

  min-height: 220px; // 🔥 força padrão visual

  h3 {
    margin-bottom: 10px;
    min-height: 48px; // 🔥 garante alinhamento dos títulos
    line-height: 1.2;
    font-size: 1.4rem;

  word-break: break-word;       // 🔥 quebra palavras grandes
  overflow-wrap: break-word;    // 🔥 fallback moderno
  hyphens: auto;                // 🔥 melhora quebra (quando possível)

  text-align: center;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const Warning = styled.section`
  background: #fff7ed;
  border: 1px solid #fb923c;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  h2 {
    color: #ea580c;
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto 1rem;
    line-height: 1.6;
  }
`;


export const Case = styled.section`
  background: #f0f7ff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  padding: 2.5rem;
  margin: 1rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 700px;
    margin: 0 auto 1rem;
    line-height: 1.6;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;


export const VideoWrapper = styled.div`
  margin-top: 2rem;

  iframe {
    width: 100%;
    height: 420px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    iframe {
      height: 220px;
    }
  }
`;
