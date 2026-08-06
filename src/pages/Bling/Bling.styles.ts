import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;
export const Eyebrow = styled.span`
  display: block;
  color: #70e4aa;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
`;
export const HeroContent = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;
export const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 22px;
  border-radius: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background: #1e8e52;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #166b3d;
      transform: translateY(-2px);
    }
  }
`;
export const HeroSecondary = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: 12px 24px;

  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 8px;

  color: #fff;
  background-color: rgba(8, 35, 64, 0.58);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  font: inherit;
  font-weight: 700;
  cursor: pointer;

  translate: 0 0;

  transition:
    background-color 0.2s ease,
    translate 0.2s ease;

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(8, 35, 64, 0.82);
      translate: 0 -2px;
    }
  }

  &:active {
    translate: 0 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.2s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        translate: 0 0;
      }
    }
  }
`;

export const Benefits = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin-top: 12px;
  font-size: 0.88rem;
  font-weight: 600;
  span {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  svg {
    color: #8debb9;
  }
`;
export const Section = styled.section`
  padding: 72px 0;
  border-bottom: 1px solid #e5e9ed;
  @media (max-width: 1024px) {
    padding: 56px 0;
  }
  @media (max-width: 600px) {
    padding: 44px 0;
  }
`;
export const Intro = styled.div`
  max-width: 790px;
  margin: 0 auto 30px;
  text-align: center;
  ${Eyebrow} {
    color: #177445;
  }
  h2 {
    margin: 0;
    color: #14243a;
    font-size: clamp(1.7rem, 3vw, 2.35rem);
    line-height: 1.2;
  }
  p {
    margin: 16px 0 0;
    color: #506072;
    line-height: 1.7;
  }
`;
export const Criteria = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  max-width: 920px;
  margin: 0 auto;

  > * {
    height: 100%;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
export const CriteriaCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  height: 100%;
  padding: 16px 18px;
  border: 1px solid #dce4e9;
  border-radius: 10px;
  color: #26384a;
  background: #fff;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    flex: none;
    margin-top: 3px;
    color: #177445;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: #83caa4;
      box-shadow: 0 10px 24px rgba(20, 36, 58, 0.08);
    }
  }
`;
export const Note = styled.p`
  max-width: 920px;
  margin: 22px auto 14px;
  padding: 16px 18px;
  border-left: 4px solid #d49b09;
  border-radius: 4px;
  background: #fffaf0;
  color: #4f4326;
  line-height: 1.65;
`;
export const TextLink = styled.a`
  display: block;
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  color: #1557b0;
  font-weight: 700;
  text-decoration: none;
  &:focus-visible {
    outline: 3px solid #1557b0;
    outline-offset: 3px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  article {
    padding: 24px;
    border: 1px solid #dce4e9;
    border-radius: 12px;
    background: #fff;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;
  }
  svg {
    color: #177445;
    font-size: 1.45rem;
  }
  h3 {
    margin: 14px 0 8px;
    color: #14243a;
    font-size: 1.1rem;
  }
  p {
    margin: 0;
    color: #506072;
    line-height: 1.6;
    font-size: 0.94rem;
  }
  @media (hover: hover) and (pointer: fine) {
    article:hover {
      transform: translateY(-3px);
      border-color: #83caa4;
      box-shadow: 0 10px 24px rgba(20, 36, 58, 0.08);
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const StartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  article {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid #dce4e9;
    border-radius: 14px;
    background: #fff;
  }
  article:last-child {
    border-color: #79c69d;
    background: #f4fbf7;
  }
  h3 {
    margin: 0;
    color: #14243a;
    font-size: 1.35rem;
  }
  ${ActionLink} {
    margin-top: auto;
    align-self: flex-start;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const CheckList = styled.ul`
  margin: 22px 0 28px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 11px;
  li {
    display: flex;
    gap: 10px;
    color: #425366;
    line-height: 1.45;
  }
  svg {
    flex: none;
    margin-top: 3px;
    color: #177445;
  }
`;
export const Faq = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  gap: 10px;
  details {
    border: 1px solid #dce4e9;
    border-radius: 10px;
    background: #fff;
  }
  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 20px;
    color: #1b3047;
    font-weight: 700;
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary svg {
    flex: none;
    transition: transform 0.2s ease;
  }
  details[open] summary svg {
    transform: rotate(180deg);
  }
  p {
    margin: 0;
    padding: 0 20px 18px;
    color: #506072;
    line-height: 1.65;
  }
  summary:focus-visible {
    outline: 3px solid #1557b0;
    outline-offset: -3px;
    border-radius: 10px;
  }
`;
export const FinalCta = styled.section`
  margin: 64px 0 72px;
  padding: 42px;
  text-align: center;
  border-radius: 16px;
  background: #142f4a;
  color: #fff;
  h2 {
    margin: 0;
    font-size: clamp(1.7rem, 3vw, 2.25rem);
  }
  p {
    max-width: 720px;
    margin: 14px auto 24px;
    line-height: 1.65;
    color: #e2edf7;
  }
  @media (max-width: 600px) {
    margin: 44px 0;
    padding: 32px 20px;
  }
`;
export const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;
export const SecondaryLink = styled(ActionLink)`
  background: transparent;
  border: 1px solid #b8d2e7;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #234767;
    }
  }
`;
