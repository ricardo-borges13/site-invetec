import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export const ConversionIntro = styled.section`
  margin-bottom: 3rem;
`;

export const ConversionIntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.9fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ConversionIntroContent = styled.div`
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 18px 40px rgba(0, 123, 255, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(0, 123, 255, 0.12);
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: clamp(1.8rem, 2.4vw, 2.4rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    max-width: 640px;
    margin: 0;
    line-height: 1.7;
    color: #334155;
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

  li {
    position: relative;
    padding-left: 1.5rem;
    color: #1e293b;
    line-height: 1.5;

    &::before {
      content: '\2022';
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

export const ConversionIntroAside = styled.aside`
  background: #f9fafb;
  border: 1px solid #dbeafe;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 46px rgba(15, 23, 42, 0.08);
    border-color: #bfdbfe;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
  }
`;

export const ConversionMiniGrid = styled.div`
  display: grid;
  gap: 14px;
`;

export const ConversionMiniCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1rem 1.1rem;
  min-height: 124px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);
    border-color: #bfdbfe;
    background: #fdfefe;
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 0.35rem;
    line-height: 1.4;
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.92rem;
    line-height: 1.55;
  }
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

export const PainGrid = styled(Grid)`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

export const PainCard = styled(Card)`
  padding: 20px 18px;
  min-height: 188px;
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

  @media (max-width: 1100px) {
    h3 {
      font-size: 0.98rem;
    }

    p {
      font-size: 0.86rem;
    }
  }
`;

export const Highlight = styled.section`
  background: #f0fdf4;
  border: 1px solid ${({ theme }) => theme.colors.ctaGreen};
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(34, 197, 94, 0.12);
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
  min-height: 100%;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;

  background: ${({ type }) =>
    type === 'good' ? '#ecfdf5' : '#fff7ed'};

  border: 1px solid
    ${({ type }) =>
      type === 'good' ? '#22c55e' : '#fb923c'};

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

export const SubHighlight = styled.section`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 34px rgba(15, 23, 42, 0.06);
    border-color: #dbe5f1;
  }

  h2 {
    margin-bottom: 0.75rem;
  }

  p {
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.7;
    color: #475569;
  }

  ul {
    margin: 1rem auto 0;
    padding: 0;
    display: grid;
    gap: 0.75rem;
    max-width: 540px;
    text-align: left;

    li {
      list-style: none;
      padding: 0.9rem 1rem;
      border-radius: 12px;
      background: white;
      border: 1px solid #e5e7eb;
      color: #334155;
      line-height: 1.5;
    }
  }
`;

export const Header = styled.header`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
