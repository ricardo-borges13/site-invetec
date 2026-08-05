import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  box-sizing: border-box;
  margin-inline: auto;
  padding: 0rem 0 5rem;
  overflow-x: clip;

  @media (max-width: 768px) {
    padding: 2rem 16px 3.5rem;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    padding-inline: 20px;
  }
`;
export const HeroActions = styled.div`
  display: flex;
  width: 100%;
  max-width: 760px;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.5rem auto 0;
  button {
    min-height: 46px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 0;

    button {
      width: 100%;
      min-width: 0;
      min-height: 48px;
      box-sizing: border-box;
      justify-content: center;
      white-space: nowrap;
    }
  }
`;
export const HeroSecondary = styled.button`
  padding: 0.8rem 1.25rem;
  border: 1px solid #fff;
  border-radius: 6px;
  background: transparent;
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
  &:focus-visible {
    outline: 3px solid #8fd1ff;
    outline-offset: 3px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }
`;
export const Section = styled.section`
  margin: 3.5rem 0;
  scroll-margin-top: 90px;

  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }
`;
export const Intro = styled.header`
  max-width: 780px;
  margin: 0 auto 1.75rem;
  text-align: center;
  > span,
  .Consulting > div > span,
  .FormArea > div > span {
    color: #176fb7;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.09em;
  }
  h2 {
    margin: 0.45rem 0 0.7rem;
    color: #17365d;
    font-size: clamp(1.8rem, 3vw, 2.55rem);
    line-height: 1.16;
  }
  p {
    margin: 0;
    color: #536b83;
    line-height: 1.58;
  }
  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    text-align: left;
    h2 {
      font-size: clamp(1.5rem, 7vw, 1.75rem);
      line-height: 1.22;
      overflow-wrap: anywhere;
    }
    p {
      line-height: 1.6;
    }
  }
`;
export const Signs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;
  article {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    min-height: 128px;
    padding: 1rem;
    border: 1px solid #dce8f3;
    border-radius: 12px;
    background: #fff;
    color: #385a77;
    font-weight: 600;
    transition: 0.2s;
  }
  article:hover {
    border-color: #9dc7e8;
    box-shadow: 0 8px 18px rgba(21, 93, 153, 0.08);
    transform: translateY(-2px);
  }
  svg {
    width: 23px;
    height: 23px;
    color: #176fb7;
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.65rem;
    article {
      min-height: 0;
      padding: 0.9rem;
    }
  }
`;
export const Consulting = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
  align-items: start;
  margin: 4rem 0;
  padding: 2rem;
  border-radius: 18px;
  background: #f1f8ff;
  > div h2 {
    margin: 0.45rem 0 0.75rem;
    color: #17365d;
    font-size: clamp(1.8rem, 3vw, 2.45rem);
    line-height: 1.15;
  }
  > div p {
    margin: 0;
    color: #536b83;
    line-height: 1.58;
  }
  @media (max-width: 820px) {
    grid-template-columns: minmax(0, 1fr);
  }
  @media (max-width: 600px) {
    gap: 1.25rem;
    margin: 2.5rem 0;
    padding: 1.25rem;
    > div h2 {
      font-size: clamp(1.5rem, 7vw, 1.75rem);
    }
  }
`;
export const StageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  article {
    padding: 1rem;
    border-radius: 12px;
    background: #fff;
    border: 1px solid #dce8f3;
  }
  b {
    color: #168a58;
    font-size: 0.82rem;
  }
  h3 {
    margin: 0.45rem 0;
    color: #17365d;
    font-size: 1rem;
  }
  p {
    margin: 0;
    color: #5b7187;
    font-size: 0.9rem;
    line-height: 1.45;
  }
  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.65rem;
    article {
      padding: 0.9rem;
    }
  }
`;
export const Comparison = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
export const ProductCard = styled.article<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  padding: 1.65rem;
  border: 1px solid ${p => (p.$featured ? '#82b8e2' : '#dce5ed')};
  border-radius: 16px;
  background: ${p => (p.$featured ? '#f2f9ff' : '#fff')};
  box-shadow: 0 8px 22px rgba(16, 61, 96, 0.06);
  h3 {
    margin: 0.8rem 0 0.55rem;
    color: #17365d;
    font-size: 1.8rem;
  }
  p {
    margin: 0;
    color: #536b83;
    line-height: 1.52;
  }
  ul {
    display: grid;
    gap: 0.65rem;
    margin: 1.25rem 0;
    padding: 0;
    list-style: none;
    color: #385a77;
  }
  li {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    line-height: 1.4;
  }
  li svg {
    flex: none;
    margin-top: 0.1rem;
    color: #168a58;
  }
  strong {
    margin: 0 0 1.2rem;
    color: #365a78;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  button {
    width: 100%;
    margin-top: auto;
    min-height: 46px;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    min-width: 0;
    padding: 1.25rem;
    h3 {
      font-size: 1.5rem;
    }
    li {
      min-width: 0;
    }
  }
`;
export const Badge = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.32rem 0.65rem;
  border-radius: 20px;
  background: #e7f3ff;
  color: #176fb7;
  font-size: 0.76rem;
  font-weight: 700;
  max-width: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
`;
export const Advisory = styled.aside`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
  border-radius: 16px;
  background: #0c3b68;
  color: #fff;
  > svg {
    width: 32px;
    height: 32px;
    color: #9fd8ff;
  }
  h2 {
    margin: 0 0 0.35rem;
    font-size: 1.35rem;
  }
  p {
    margin: 0;
    color: #d9ecfb;
    line-height: 1.45;
  }
  button {
    min-height: 46px;
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: start;
    padding: 1.25rem;
    > svg {
      width: 28px;
      height: 28px;
    }
    h2 {
      font-size: 1.25rem;
      line-height: 1.25;
    }
    button {
      width: 100%;
      min-width: 0;
    }
  }
`;
export const FormArea = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
  gap: 1.5rem;
  align-items: start;
  margin-top: 4rem;
  padding: 1.5rem;
  border-top: 1px solid #dce8f3;
  background: #f8fbfe;
  scroll-margin-top: 90px;
  h2 {
    margin: 0.45rem 0 0.7rem;
    color: #17365d;
    font-size: clamp(1.8rem, 2.5vw, 2.35rem);
    line-height: 1.15;
  }
  p {
    margin: 0;
    color: #536b83;
    line-height: 1.55;
  }
  @media (max-width: 850px) {
    grid-template-columns: minmax(0, 1fr);
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1.25rem 0 0;
  }
`;
