import styled from 'styled-components';
export const Hero = styled.header<{ $image: string }>`
  min-height: 500px;
  height: clamp(500px, 32vw, 620px);
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

  @media (max-width: 768px) {
    min-height: clamp(390px, 43vh, 445px);
    height: auto;
  }
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
export const Problems = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.35fr);
  gap: 2.2rem;
  align-items: start;
  margin: 3.1rem 0 3.4rem;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 3rem 0;
  }
`;
export const ProblemsContent = styled.div`
  > span {
    color: #176fb7;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.09em;
  }
  h2 {
    max-width: 460px;
    margin: 0.4rem 0 0.65rem;
    color: #17365d;
    font-size: clamp(1.8rem, 2.8vw, 2.55rem);
    line-height: 1.16;
  }
  > p {
    margin: 0;
    color: #546c84;
    line-height: 1.58;
  }
  > strong {
    display: block;
    margin-top: 0.7rem;
    color: #496d8d;
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.45;
  }
`;
export const ImpactCard = styled.aside`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.9rem;
  padding: 0.78rem 0.85rem;
  border-left: 3px solid #d78339;
  border-radius: 10px;
  background: #fff8f1;
  color: #6c4829;
  > svg {
    width: 18px;
    height: 18px;
    flex: none;
    color: #d78339;
  }
  h3 { margin: 0 0 0.15rem; font-size: 0.92rem; }
  p { margin: 0; font-size: 0.86rem; line-height: 1.4; }
`;
export const ProblemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.72rem;
  article {
    position: relative;
    min-width: 0;
    padding: 0.85rem 0.9rem;
    border: 1px solid #f0d7c0;
    border-radius: 12px;
    background: #fff;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }
  article div small { color: #b7743b; font-size: 0.72rem; font-weight: 700; }
  article div span {
    display: grid;
    place-items: center;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background: #fff3e7;
    color: #d78339;
  }
  article svg { width: 16px; height: 16px; }
  h3 { margin: 0.55rem 0 0; color: #17365d; font-size: 0.9rem; line-height: 1.32; }
  @media (min-width: 769px) {
    grid-auto-rows: 124px;
    > div {
      height: 100%;
      min-width: 0;
    }
    article {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    h3 { margin-top: auto; }
  }
  @media (hover: hover) and (pointer: fine) {
    article:hover {
      transform: translateY(-3px);
      border-color: #e4b686;
      box-shadow: 0 10px 20px rgba(95, 58, 25, 0.08);
    }
    article:hover div span { color: #b96723; }
  }
  @media (max-width: 600px) {
    gap: 0.62rem;
    article { padding: 0.75rem; }
    h3 { font-size: 0.84rem; line-height: 1.3; }
    article div span { width: 28px; height: 28px; padding: 6px; }
    article svg { width: 15px; height: 15px; }
  }
`;
export const ProblemCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
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
export const ManagementCompare = styled.section`
  margin: 3.5rem 0;
`;
export const CompareIntro = styled.header`
  max-width: 780px;
  margin: 0 auto 1.5rem;
  text-align: center;
  > span { color: #176fb7; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.09em; }
  h2 { margin: 0.45rem 0 0.65rem; color: #17365d; font-size: clamp(1.8rem, 2.8vw, 2.45rem); line-height: 1.16; }
  p { margin: 0; color: #546c84; line-height: 1.55; }
`;
export const CompareLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1.08fr);
  gap: 1rem;
  align-items: stretch;
  > div { min-width: 0; }
  > div:not(:nth-child(2)) { height: 100%; }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }
`;
export const CompareCard = styled.article<{ $featured?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.35rem;
  border: 1px solid ${({ $featured }) => ($featured ? '#84b9e1' : '#dbe4ec')};
  border-top: 3px solid ${({ $featured }) => ($featured ? '#176fb7' : '#a9b8c5')};
  border-radius: 14px;
  background: ${({ $featured }) => ($featured ? '#f2f9ff' : '#fafbfd')};
  box-shadow: ${({ $featured }) => ($featured ? '0 10px 24px rgba(20, 91, 145, 0.1)' : '0 4px 12px rgba(24, 55, 85, 0.04)')};
  h3 { margin: 0.65rem 0 0.9rem; color: #17365d; font-size: 1.28rem; }
  ${({ $featured }) => $featured && `> span { background: #d9f2e3; color: #28714d; }`}
  ul { display: grid; gap: 0.62rem; margin: 0; padding: 0; list-style: none; }
  li { display: flex; gap: 0.55rem; align-items: flex-start; color: #526b82; font-size: 0.91rem; line-height: 1.4; }
  li svg { flex: none; width: 17px; height: 17px; margin-top: 0.05rem; color: ${({ $featured }) => ($featured ? '#168a58' : '#ba8049')}; }
  @media (hover: hover) and (pointer: fine) {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    &:hover { transform: translateY(${({ $featured }) => ($featured ? '-3px' : '-2px')}); border-color: ${({ $featured }) => ($featured ? '#4f9bd0' : '#b8c6d2')}; box-shadow: ${({ $featured }) => ($featured ? '0 13px 28px rgba(20, 91, 145, 0.14)' : '0 8px 18px rgba(24, 55, 85, 0.08)')}; }
  }
`;
export const CompareBadge = styled.span`
  align-self: flex-start;
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  background: #e7eef5;
  color: #536b83;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  ${CompareCard}[data-featured='true'] & { background: #d9f2e3; color: #28714d; }
`;
export const EvolutionIndicator = styled.div`
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.35rem;
  min-width: 78px;
  color: #176fb7;
  text-align: center;
  span { font-size: 0.67rem; font-weight: 700; letter-spacing: 0.08em; }
  svg { width: 25px; height: 25px; }
  @media (max-width: 760px) {
    grid-auto-flow: column;
    justify-content: center;
    min-height: 42px;
    svg { transform: rotate(90deg); }
  }
`;
export const CompareConclusion = styled.p`
  max-width: 760px;
  margin: 1.15rem auto 0;
  color: #3d6486;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
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
  > div {
    min-width: 0;
  }
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
    min-width: 0;
    min-height: 46px;
    font-size: 1rem;
  }
  button:focus-visible {
    outline: 3px solid #b9dcf8;
    outline-offset: 3px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.1rem;
    padding: 1.25rem;
    > div {
      width: 100%;
      min-width: 0;
    }
    h2 {
      margin-bottom: 0.48rem;
      font-size: clamp(1.3rem, 5.5vw, 1.5rem);
      line-height: 1.18;
      word-break: normal;
      overflow-wrap: normal;
    }
    p {
      width: 100%;
      font-size: 0.94rem;
      line-height: 1.5;
    }
    button {
      width: 100%;
      max-width: none;
      min-width: 0;
      min-height: 48px;
      flex: initial;
      padding-right: 1rem;
      padding-left: 1rem;
      text-align: center;
    }
  }
`;
export const PillarsSection = styled.section`
  margin: 4.5rem 0;
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin: 3.5rem 0;
  }
`;
export const PillarsIntro = styled.header`
  max-width: 810px;
  margin: 0 auto 1.75rem;
  text-align: center;
  > span {
    color: #176fb7;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.09em;
  }
  h2 {
    margin: 0.45rem 0 0.7rem;
    color: #12355f;
    font-size: clamp(1.8rem, 2.8vw, 2.5rem);
    line-height: 1.16;
  }
  > p {
    margin: 0;
    color: #546c84;
    line-height: 1.58;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 780px;
    margin-bottom: 1.5rem;
    h2 { font-size: 2.25rem; line-height: 1.14; }
  }
`;
export const ScopeNote = styled.p`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.4rem;
  max-width: 680px;
  margin: 0.9rem auto 0;
  color: #55738d;
  font-size: 0.84rem;
  line-height: 1.45;
  text-align: left;
  svg {
    flex: none;
    width: 16px;
    height: 16px;
    margin-top: 0.1rem;
    color: #3884bd;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin-top: 0.7rem;
    font-size: 0.82rem;
  }
`;
export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  align-items: stretch;
  > div {
    min-width: 0;
    height: 100%;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
  @media (min-width: 1025px) and (max-width: 1440px) { gap: 0.9rem; }
`;
export const PillarCard = styled.article<{ $variant: number }>`
  --pillar-color: ${({ $variant }) =>
    ['#176fb7', '#173f68', '#278c77', '#2b6fa6'][$variant]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  padding: 1.45rem;
  border: 1px solid #d8e5ef;
  border-top: 3px solid var(--pillar-color);
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(20, 62, 96, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  > p {
    margin: 0.75rem 0 0;
    color: #546c84;
    font-size: 0.92rem;
    line-height: 1.48;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: #a8cbe4;
      box-shadow: 0 11px 24px rgba(20, 69, 108, 0.12);
      transform: translateY(-3px);
    }
    &:hover ${''} {
      --pillar-color: #0d609e;
    }
  }
  @media (max-width: 600px) {
    padding: 1.2rem;
    h3 { font-size: 1.1rem; }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 1.25rem;
    > p { margin-top: 0.65rem; font-size: 0.9rem; line-height: 1.44; }
  }
`;
export const PillarHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
  h3 {
    min-width: 0;
    margin: 0;
    color: #17365d;
    font-size: 1.2rem;
    line-height: 1.22;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 0.55rem;
    h3 { font-size: 1.14rem; line-height: 1.2; }
  }
`;
export const PillarIcon = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: #edf6fc;
  color: var(--pillar-color);
  transition: color 0.2s ease, background 0.2s ease;
  svg { width: 21px; height: 21px; }
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    svg { width: 19px; height: 19px; }
  }
`;
export const PillarNumber = styled.small`
  flex: none;
  color: #7190aa;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
`;
export const PillarList = styled.ul`
  display: grid;
  gap: 0.42rem;
  margin: 1rem 0 0;
  padding: 1rem 0 0;
  border-top: 1px solid #e5edf3;
  list-style: none;
  li {
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
    min-width: 0;
    color: #455f77;
    font-size: 0.86rem;
    line-height: 1.42;
  }
  li svg {
    flex: none;
    width: 15px;
    height: 15px;
    margin-top: 0.08rem;
    color: var(--pillar-color);
  }
  @media (max-width: 600px) {
    gap: 0.38rem;
    margin-top: 0.85rem;
    padding-top: 0.85rem;
    li { font-size: 0.84rem; }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 0.35rem;
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    li { gap: 0.4rem; font-size: 0.83rem; line-height: 1.38; }
    li svg { width: 14px; height: 14px; }
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

export const ProcessSection = styled.section`
  margin: 4rem 0 3.5rem;
  padding: 2.1rem 1.7rem;
  border: 1px solid #e3edf4;
  border-radius: 18px;
  background: #fbfdff;
  @media (max-width: 600px) {
    margin: 3rem 0;
    padding: 1.5rem 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin: 3.25rem 0;
    padding: 1.7rem 1.4rem;
  }
`;
export const ProcessIntro = styled.header`
  max-width: 760px;
  margin: 0 auto 1.8rem;
  text-align: center;
  > span {
    color: #176fb7;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.09em;
  }
  h2 {
    margin: 0.42rem 0 0.62rem;
    color: #17365d;
    font-size: clamp(1.7rem, 2.7vw, 2.35rem);
    line-height: 1.16;
  }
  p { margin: 0; color: #546c84; line-height: 1.55; }
  @media (max-width: 600px) { text-align: left; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin-bottom: 1.45rem;
    h2 { font-size: 2.15rem; line-height: 1.13; }
    p { font-size: 0.94rem; line-height: 1.48; }
  }
`;
export const ProcessTimeline = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
  margin: 0;
  padding: 0;
  list-style: none;
  &::before {
    position: absolute;
    top: 23px;
    right: 12.5%;
    left: 12.5%;
    height: 2px;
    background: #bddaf0;
    content: '';
  }
  > div { position: relative; z-index: 1; min-width: 0; height: 100%; }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    &::before { display: none; }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    &::before {
      display: block;
      top: 25px;
      bottom: 25px;
      left: 22px;
      width: 2px;
      height: auto;
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 0.75rem;
    &::before { top: 21px; }
  }
`;
export const ProcessStep = styled.li`
  height: 100%;
  text-align: center;
  h3 { margin: 0.78rem 0 0.35rem; color: #17365d; font-size: 1rem; line-height: 1.28; }
  p { margin: 0; color: #587088; font-size: 0.87rem; line-height: 1.45; }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: start;
    gap: 0.8rem;
    text-align: left;
    h3 { margin: 0.1rem 0 0.3rem; }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    h3 { margin: 0.65rem 0 0.3rem; font-size: 0.98rem; }
    p { font-size: 0.84rem; line-height: 1.4; }
  }
`;
export const ProcessMarker = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  margin: 0 auto;
  border: 2px solid #9bc9e8;
  border-radius: 50%;
  background: #fff;
  color: #176fb7;
  svg { width: 20px; height: 20px; }
  span {
    position: absolute;
    right: -8px;
    bottom: -6px;
    min-width: 21px;
    padding: 0.12rem 0.25rem;
    border-radius: 999px;
    background: #176fb7;
    color: #fff;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  @media (max-width: 600px) { margin: 0; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 42px;
    height: 42px;
    svg { width: 18px; height: 18px; }
  }
`;
export const AudienceSection = styled.section`
  margin: 3.5rem 0;
  padding: 2.2rem 1.7rem;
  border-radius: 18px;
  background: #f0f8fe;
  @media (max-width: 600px) { margin: 3rem 0; padding: 1.5rem 1rem; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin: 3.25rem 0;
    padding: 1.85rem 1.4rem;
  }
`;
export const AudienceIntro = styled.header`
  max-width: 760px;
  margin: 0 auto 1.55rem;
  text-align: center;
  > span { color: #176fb7; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.09em; }
  h2 { margin: 0.42rem 0 0.62rem; color: #17365d; font-size: clamp(1.7rem, 2.7vw, 2.35rem); line-height: 1.16; }
  p { margin: 0; color: #546c84; line-height: 1.55; }
  @media (max-width: 600px) { text-align: left; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 850px;
    margin-bottom: 1.35rem;
    h2 { font-size: 2.15rem; line-height: 1.13; }
    p { font-size: 0.94rem; line-height: 1.48; }
  }
`;
export const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  > div { min-width: 0; height: 100%; }
  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 0.8rem; }
  @media (min-width: 1025px) and (max-width: 1440px) { gap: 0.85rem; }
`;
export const AudienceCard = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.25rem;
  border: 1px solid #d5e5f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(25, 70, 105, 0.05);
  > svg { width: 24px; height: 24px; margin-bottom: 0.8rem; color: #176fb7; }
  h3 { margin: 0.68rem 0 0.45rem; color: #17365d; font-size: 1.08rem; line-height: 1.28; }
  > p { margin: 0; color: #556f87; font-size: 0.89rem; line-height: 1.48; }
  @media (hover: hover) and (pointer: fine) {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    &:hover { transform: translateY(-3px); border-color: #9ac7e7; box-shadow: 0 10px 22px rgba(25, 70, 105, 0.11); }
  }
  @media (max-width: 600px) { padding: 1.1rem; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 1.12rem;
    > svg { width: 22px; height: 22px; margin-bottom: 0.65rem; }
    h3 { margin: 0.58rem 0 0.35rem; font-size: 1.04rem; }
    > p { font-size: 0.86rem; line-height: 1.43; }
  }
`;
export const AudienceBadge = styled.span`
  align-self: flex-start;
  color: #47738f;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;
export const AudienceHighlight = styled.p`
  display: flex;
  gap: 0.4rem;
  margin: auto 0 0;
  padding: 0.75rem 0 0;
  border-top: 1px solid #e2edf5;
  color: #416887;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.42;
  svg { flex: none; width: 15px; height: 15px; margin-top: 0.06rem; color: #168a58; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    padding-top: 0.62rem;
    font-size: 0.79rem;
    line-height: 1.38;
  }
`;
export const AudienceConclusion = styled.p`
  max-width: 780px;
  margin: 1.3rem auto 0;
  color: #28577c;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  @media (max-width: 600px) { text-align: left; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 850px;
    margin-top: 1rem;
  }
`;
export const ComplementarySection = styled.section`
  margin: 3.5rem 0 4rem;
  @media (min-width: 1025px) and (max-width: 1440px) { margin: 3.25rem 0 3.5rem; }
`;
export const ComplementaryIntro = styled.header`
  max-width: 780px;
  margin: 0 auto 1.55rem;
  text-align: center;
  > span { color: #176fb7; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.09em; }
  h2 { margin: 0.42rem 0 0.62rem; color: #17365d; font-size: clamp(1.7rem, 2.7vw, 2.35rem); line-height: 1.16; }
  p { margin: 0; color: #546c84; line-height: 1.55; }
  @media (max-width: 600px) { text-align: left; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 850px;
    margin-bottom: 1.35rem;
    h2 { font-size: 2.15rem; line-height: 1.13; }
    p { font-size: 0.94rem; line-height: 1.48; }
  }
`;
export const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  > div { min-width: 0; height: 100%; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 0.8rem; }
  @media (min-width: 1025px) and (max-width: 1440px) { gap: 0.9rem; }
`;
export const SolutionCard = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.3rem;
  border: 1px solid #d5e5f1;
  border-left: 3px solid #6cb88f;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 13px rgba(25, 70, 105, 0.05);
  h3 { margin: 0.85rem 0 0.4rem; color: #17365d; font-size: 1.12rem; }
  > p { margin: 0; color: #556f87; font-size: 0.9rem; line-height: 1.48; }
  @media (hover: hover) and (pointer: fine) {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    &:hover { transform: translateY(-4px); border-color: #8bbce0; box-shadow: 0 11px 24px rgba(25, 70, 105, 0.11); }
    &:hover a svg { transform: translateX(3px); }
  }
  @media (max-width: 600px) { padding: 1.15rem; }
  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 1.18rem;
    h3 { margin: 0.72rem 0 0.32rem; font-size: 1.08rem; }
    > p { font-size: 0.88rem; line-height: 1.43; }
  }
`;
export const SolutionIcon = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eef7fc;
  color: #176fb7;
  svg { width: 21px; height: 21px; }
`;
export const SolutionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  align-self: flex-start;
  min-height: 44px;
  margin-top: auto;
  padding-top: 0.85rem;
  color: #176fb7;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  svg { width: 17px; height: 17px; transition: transform 0.2s ease; }
  &:focus-visible { outline: 3px solid rgba(31, 128, 209, 0.35); outline-offset: 3px; border-radius: 4px; }
  @media (min-width: 1025px) and (max-width: 1440px) { padding-top: 0.7rem; }
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
  > div,
  > div + div {
    min-width: 0;
  }
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
  @media (max-width: 767px) {
    box-sizing: border-box;
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    padding: 1.2rem 1.2rem 5.75rem;
    overflow-x: clip;
    > div,
    > div + div {
      width: 100%;
      min-width: 0;
      max-width: 100%;
    }
    > div > span {
      color: #176fb7;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.09em;
    }
    h2 {
      width: 100%;
      margin: 0.42rem 0 0.7rem;
      font-size: clamp(1.75rem, 7vw, 2rem);
      line-height: 1.13;
      word-break: normal;
      overflow-wrap: normal;
    }
    > div > p {
      width: 100%;
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }
  @media (max-width: 390px) { padding: 1rem 1rem 5.5rem; }
  @media (max-width: 379px) { padding: 0.9rem 0.9rem 5.25rem; }
`;
export const FormCard = styled.div`
  box-sizing: border-box;
  min-width: 0;
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
  .privacy a:focus-visible {
    outline: 3px solid rgba(31, 128, 209, 0.3);
    outline-offset: 2px;
    border-radius: 3px;
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    padding: 1rem;
    box-shadow: 0 5px 14px rgba(15, 60, 96, 0.06);
    form { gap: 0.8rem; }
    button {
      width: 100%;
      max-width: 100%;
      min-height: 50px;
      font-size: 1rem;
      text-align: center;
    }
    .privacy { width: 100%; font-size: 0.82rem; line-height: 1.45; }
  }
  @media (max-width: 390px) { padding: 0.9rem; }
  @media (max-width: 379px) { padding: 0.8rem; }
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
  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
    min-width: 0;
    label {
      min-width: 0;
      gap: 0.3rem;
      font-size: 0.92rem;
      line-height: 1.35;
      word-break: normal;
    }
    .full { grid-column: auto; }
    input,
    select,
    textarea {
      box-sizing: border-box;
      width: 100%;
      max-width: 100%;
      min-width: 0;
      min-height: 48px;
      padding: 0.7rem 0.75rem;
      font-size: 16px;
    }
    textarea { min-height: 108px; }
    em { width: 100%; font-size: 0.8rem; line-height: 1.35; }
  }
`;
