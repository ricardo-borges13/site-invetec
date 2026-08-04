import styled from 'styled-components';
export const Hero = styled.header<{ $image: string }>`
  min-height: clamp(390px, 43vh, 445px);
  padding: 7rem 1.5rem 2.25rem;

  background-image:
    linear-gradient(
      90deg,
      rgba(3, 24, 48, 0.96) 0%,
      rgba(3, 24, 48, 0.88) 34%,
      rgba(3, 24, 48, 0.48) 62%,
      rgba(3, 24, 48, 0.2) 100%
    ),
    url(${({ $image }) => $image});

  background-position:
    center,
    center right;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;

  color: #fff;
  display: flex;
  align-items: center;
`;
export const HeroContent = styled.div`
  width: min(1240px, 100%);
  margin: auto;
  > span,
  .Intro > span,
  .FormArea > div > span,
  .Experience > div > span {
    color: #b9dcf8;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  h1 {
    max-width: 660px;
    margin: 0.48rem 0 0.8rem;
    font-size: clamp(2.2rem, 3.1vw, 3.35rem);
    line-height: 1.13;
  }
  p {
    max-width: 600px;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
  small {
    display: block;
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.86);
    font-size: 0.92rem;
    line-height: 1.45;
  }
  small b {
    margin: 0 0.4rem;
  }
`;
export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.15rem;
  button {
    min-height: 48px;
    font-size: 1rem;
  }
  button:first-child {
    border: 1px solid #168a58;
    background: #168a58;
    color: #fff;
    font-weight: 700;
  }
  button:first-child:hover {
    background: #117347;
  }
  button:focus-visible,
  a:focus-visible {
    outline: 3px solid #1f80d1;
    outline-offset: 3px;
  }
`;
export const Page = styled.main`
  width: min(1240px, calc(100% - 2rem));
  margin: auto;
  padding: 2rem 0 5rem;
  overflow-x: clip;
  overflow-y: visible;
`;
export const Benefits = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: -1.75rem 0 4rem;
  position: relative;
  z-index: 2;
  article {
    display: flex;
    height: 100%;
    gap: 0.9rem;
    min-height: 132px;
    padding: 1.25rem;
    border: 1px solid #d7e6f3;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 8px 24px rgba(13, 55, 92, 0.08);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;
    border-top: 3px solid #8bc3e8;
  }
  article:hover {
    border-color: #9bc8e8;
    box-shadow: 0 12px 28px rgba(13, 55, 92, 0.12);
    transform: translateY(-4px);
  }
  svg {
    flex: none;
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    padding: 7px;
    border-radius: 9px;
    background: #eaf6ef;
    color: #168a58;
  }
  h2 {
    margin: 0 0 0.25rem;
    color: #17365d;
    font-size: 1rem;
  }
  p {
    margin: 0;
    color: #5b7086;
    font-size: 0.85rem;
    line-height: 1.4;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: -1rem;
  }
  @media (max-width: 600px) {
    margin: 1.25rem 0 3rem;
    grid-template-columns: 1fr;
    article {
      min-height: 0;
      padding: 1.1rem;
    }
  }
`;
export const Section = styled.section`
  margin: 4.5rem 0;
`;
export const Intro = styled.header`
  max-width: 790px;
  margin: 0 0 2rem;
  h2 {
    margin: 0.45rem 0 0.75rem;
    color: #12355f;
    font-size: clamp(1.8rem, 3vw, 2.65rem);
    line-height: 1.15;
  }
  p {
    margin: 0;
    color: #546c84;
    line-height: 1.6;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
  article {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    padding: 1rem;
    border: 1px solid #f1d9c4;
    border-radius: 12px;
    background: #fffdfa;
    color: #40566d;
  }
  svg {
    color: #d78339;
    flex: none;
  }
`;
export const Note = styled.p`
  margin: 1.25rem 0 0;
  padding: 1rem;
  border-left: 3px solid #d78339;
  background: #fff8f1;
  color: #754b2b;
  font-weight: 600;
`;
export const Compare = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 1rem;
  article {
    padding: 1.5rem;
    border: 1px solid #dce5ed;
    border-radius: 14px;
    background: #f8fafc;
  }
  .featured {
    border-color: #9ecae9;
    background: #f3faff;
  }
  h3 {
    margin: 0 0 1rem;
    color: #17365d;
  }
  p {
    display: flex;
    gap: 0.55rem;
    margin: 0.7rem 0;
    color: #526b82;
    line-height: 1.4;
  }
  svg {
    flex: none;
    color: #168a58;
  }
`;
export const Cta = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 16px;
  background: #09345f;
  color: #fff;
  h2 {
    margin: 0 0 0.4rem;
    font-size: 1.4rem;
  }
  p {
    margin: 0;
    color: #d9edff;
    line-height: 1.45;
  }
  button {
    flex: none;
    min-height: 46px;
    font-size: 1rem;
  }
`;
export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  article {
    height: 100%;
    padding: 1.3rem;
    border: 1px solid #dce8f3;
    border-radius: 14px;
    transition: 0.2s;
  }
  article:hover {
    border-color: #a8cce8;
    box-shadow: 0 8px 20px rgba(21, 93, 153, 0.08);
  }
  svg {
    width: 24px;
    color: #176fb7;
  }
  h3 {
    margin: 0.8rem 0 0.45rem;
    color: #17365d;
  }
  p {
    margin: 0;
    color: #596f85;
    line-height: 1.5;
    font-size: 0.92rem;
  }
`;
export const Experience = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  margin: 4.5rem 0;
  padding: 2rem;
  border-radius: 18px;
  background: #eef7ff;
  h2 {
    margin: 0.45rem 0 0.8rem;
    color: #12355f;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    line-height: 1.15;
  }
  p {
    color: #526b82;
    line-height: 1.55;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
    padding: 0;
    list-style: none;
    color: #34536f;
  }
  li {
    display: flex;
    gap: 0.4rem;
  }
  li svg {
    color: #168a58;
  }
  aside {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    align-content: center;
  }
  aside article {
    display: grid;
    gap: 0.35rem;
    padding: 1rem;
    border: 1px solid #cde3f5;
    border-radius: 12px;
    background: #fff;
    color: #17365d;
  }
  aside b {
    color: #168a58;
  }
`;
export const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  article {
    padding: 1.1rem;
    border-top: 3px solid #176fb7;
    background: #f8fbfe;
  }
  b {
    color: #168a58;
  }
  h3 {
    margin: 0.7rem 0 0.4rem;
    color: #17365d;
    font-size: 1rem;
  }
  p {
    margin: 0;
    color: #5b7187;
    font-size: 0.9rem;
    line-height: 1.45;
  }
`;
export const Audience = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  article {
    padding: 1.3rem;
    border: 1px solid #dce8f3;
    border-radius: 14px;
  }
  svg {
    color: #176fb7;
  }
  h3 {
    margin: 0.75rem 0 0.45rem;
    color: #17365d;
  }
  p {
    margin: 0;
    color: #5a7087;
    line-height: 1.5;
  }
`;
export const Center = styled.p`
  max-width: 800px;
  margin: 1.5rem auto 0;
  color: #4d6780;
  text-align: center;
  line-height: 1.55;
`;
export const Related = styled.section`
  margin: 4.5rem 0;
  padding: 1.5rem;
  border-top: 1px solid #dce8f3;
  border-bottom: 1px solid #dce8f3;
  h2 {
    margin: 0 0 1rem;
    color: #17365d;
    font-size: 1.4rem;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }
  a {
    padding: 0.7rem 0.9rem;
    border: 1px solid #bdd8ed;
    border-radius: 8px;
    color: #176fb7;
    font-weight: 700;
    text-decoration: none;
  }
  a:hover {
    background: #f1f8ff;
  }
`;
export const FormArea = styled.section`
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #d7e7f4;
  border-radius: 18px;
  background: #eef7ff;
  scroll-margin-top: 90px;
  h2 {
    margin: 0.45rem 0 0.8rem;
    color: #17365d;
    font-size: clamp(1.75rem, 2.5vw, 2.3rem);
    line-height: 1.15;
  }
  p {
    color: #526b82;
    line-height: 1.55;
  }
`;
export const FormCard = styled.div`
  padding: 1.2rem;
  border: 1px solid #dbe7f1;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(15, 60, 96, 0.07);
  form {
    display: grid;
    gap: 0.9rem;
  }
  button {
    width: 100%;
    min-height: 46px;
    font-size: 1rem;
  }
  .privacy {
    margin: 0;
    font-size: 0.8rem;
  }
  .privacy a {
    color: #176fb7;
    font-weight: 700;
  }
`;
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  label {
    display: grid;
    gap: 0.35rem;
    color: #274967;
    font-size: 0.88rem;
    font-weight: 700;
  }
  .full {
    grid-column: 1/-1;
  }
  input,
  select,
  textarea {
    width: 100%;
    min-height: 44px;
    padding: 0.65rem 0.75rem;
    border: 1px solid #cfdfea;
    border-radius: 8px;
    background: #fff;
    color: #23415e;
    font: inherit;
  }
  textarea {
    min-height: 88px;
    resize: vertical;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: 3px solid rgba(31, 128, 209, 0.2);
    border-color: #176fb7;
  }
  em {
    color: #c13d32;
    font-size: 0.78rem;
    font-style: normal;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
