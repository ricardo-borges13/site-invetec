import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export const ConversionIntro = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 3rem auto;
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 18px 40px rgba(0, 123, 255, 0.08);
  border-left: 5px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ConversionIntroContent = styled.div`
  max-width: 720px;

  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: clamp(1.8rem, 2.4vw, 2.4rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    line-height: 1.7;
    color: #334155;
    margin-bottom: 1rem;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(0, 123, 255, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const ConversionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: grid;
  gap: 0.9rem;
  font-weight: 700;

  li {
    position: relative;
    padding-left: 1.5rem;
    color: #1e293b;
    line-height: 1.5;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: ${({ theme }) => theme.colors.ctaGreen};
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
`;

export const ConversionActions = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  span {
    color: #475569;
    font-size: 0.92rem;
  }
`;

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

  /* Mobile */
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

export const PainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 24px 24px 4px 10px;
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

  @media (max-width: 430px) {
    padding: 15px;
  }
`;

export const PainCard = styled(Card)`
  padding: 20px 18px;
  min-height: 210px;
  border-color: #9fc5ff;
  box-shadow: 0 8px 18px rgba(0, 123, 255, 0.04);

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 20px 34px rgba(0, 123, 255, 0.12);
    background: linear-gradient(180deg, #ffffff 0%, #f6faff 100%);
  }

  h3 {
    margin-bottom: 8px;
    font-size: 1.02rem;
    line-height: 1.35;
  }

  p {
    font-size: 0.92rem;
    line-height: 1.6;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    min-height: 160px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    min-height: 100px;
  }
`;

export const Highlight = styled.section`
  background: #caddf3;
  border: 1px solid #2f353b;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(16, 20, 17, 0.12);
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const FormArea = styled.section`
  margin-top: 3rem;
  background: linear-gradient(180deg, #d4e5f7 0%, #c7dbf3 100%);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(80, 129, 190, 0.22);
  box-shadow: 0 22px 42px rgba(27, 71, 128, 0.08);

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.88;
  }

  > div {
    max-width: 680px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-radius: 18px;
  }
`;

export const CompareSection = styled.section`
  margin: 4rem 0;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CompareCard = styled.div<{ type: 'good' | 'bad' }>`
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  min-height: 100%;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;

  background: ${({ type }) => (type === 'good' ? '#ecfdf5' : '#fff7ed')};

  border: 1px solid ${({ type }) => (type === 'good' ? '#22c55e' : '#fb923c')};

  h3 {
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 38px rgba(15, 23, 42, 0.08);
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
`;

export const SystemSection = styled.section`
  margin: 4rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: #1e293b;
  }

  h2 span {
    color: ${({ theme }) => theme.colors.primary}; /* azul */
    font-weight: 700;
  }

  p {
    max-width: 700px;
    margin: 0 auto 2rem;
  }
`;

export const SystemImage = styled.div`
  margin-bottom: 2rem;

  img {
    width: 100%;
    max-width: 900px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.35s ease,
      box-shadow 0.35s ease;

    &:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 26px 50px rgba(0, 0, 0, 0.14);
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
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background: rgba(255, 255, 255, 0.9);
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

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
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

export const MeiHelper = styled.div`
  text-align: center;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  color: #64748b;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
    margin-left: 4px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
