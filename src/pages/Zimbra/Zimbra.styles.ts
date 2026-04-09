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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 24px;
  border-radius: 16px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
  }

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Highlight = styled.section`
  background: #f0fdf4;
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;

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
  background: #c7dbf3;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 2px solid rgba(0,0,0,0.05);

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  > div {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const CompareSection = styled.section`
  margin: 4rem 0;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
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

  background: ${({ type }) =>
    type === 'good' ? '#ecfdf5' : '#fff7ed'};

  border: 1px solid
    ${({ type }) =>
      type === 'good' ? '#22c55e' : '#fb923c'};

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    li {
      margin-bottom: 0.5rem;
    }
  }
`;


export const Warning = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff7ed;
  border: 1px solid #fb923c;
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
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

export const SystemImage = styled.div`
  margin-bottom: 2rem;

  img {
    width: 100%;
    max-width: 900px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

export const SystemFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Feature = styled.div`
  background: #f9fafb;
  padding: 16px;
  border-radius: 12px;
  text-align: left;

  h3 {
    margin-bottom: 6px;
  }

  p {
    font-size: 0.9rem;
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

export const InfoBox = styled.section`
  background: #eff6ff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }
`;

export const SubHighlight = styled.section`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
`;
