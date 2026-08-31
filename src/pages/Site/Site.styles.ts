import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
  overflow: clip;

  @media (max-width: 600px) {
    padding: 1rem 1rem 4rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  max-width: 860px;
  margin: 1.75rem auto 0;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
`;

const HeroAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.25rem;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover { transform: translateY(-2px); }
  &:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
`;

export const PrimaryAnchor = styled(HeroAnchor)`
  color: #fff;
  background: #25d366;
  &:hover { background: #1ebe57; }
`;

export const SecondaryAnchor = styled(HeroAnchor)`
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.08);
`;

export const HeroTrust = styled.p`
  width: 100%;
  margin: 0.55rem 0 0 !important;
  font-size: 0.88rem !important;
  span { margin: 0 0.35rem; }
`;

export const BenefitsBar = styled.section`
  display: grid;
  width: 100%;
  max-width: 1080px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
  margin: 0 auto 5rem;
  position: relative;
  z-index: 3;

  > div {
    min-width: 0;
    height: 100%;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.75rem;

    > div {
      grid-column: span 2;
    }

    > div:nth-child(4) {
      grid-column: 2 / span 2;
    }
  }

    @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 460px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 520px) {
    gap: 0.6rem;

    > div {
      width: 100%;
      min-width: 0;
      height: auto;
    }
  }
`;

export const Benefit = styled.article`
  display: flex;
  height: 100%;
box-sizing: border-box;
  align-items: flex-start;
  min-width: 0;
  min-height: 128px;
  gap: 0.65rem;
  padding: 1rem 0.9rem;
  border: 1px solid #dbe7f4;
  border-radius: 14px;
  background: #fff;
  color: #17365d;
  box-shadow: 0 5px 14px rgba(14, 48, 79, 0.04);

  svg { flex: 0 0 auto; margin-top: 0.1rem; color: ${({ theme }) => theme.colors.primary}; font-size: 1.2rem; }
  h3 { margin: 0; color: #17365d; font-size: 0.92rem; line-height: 1.3; }
  p { margin: 0.35rem 0 0; color: #526a82; font-size: 0.8rem; line-height: 1.45; }

  @media (min-width: 900px) {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 9px 20px rgba(14, 48, 79, 0.1);
    }
  }

  @media (max-width: 520px) {
    height: auto;
    min-height: auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem;

    h3 { font-size: 0.9rem; line-height: 1.28; }
    p { margin-top: 0.25rem; font-size: 0.79rem; line-height: 1.4; }
  }
`;

export const Section = styled.section`
  margin: 0 0 5.5rem;
  scroll-margin-top: 120px;

  @media (max-width: 600px) { margin-bottom: 4rem; }
`;

export const SectionHeading = styled.div`
  max-width: 800px;
  margin: 0 auto 2.25rem;
  text-align: center;

  > span, > div > span { color: ${({ theme }) => theme.colors.primary}; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; }
  h2 { margin: 0.55rem 0 0.8rem; color: #123a63; font-size: clamp(1.85rem, 3.2vw, 2.65rem); line-height: 1.18; }
  p { margin: 0; color: #4b6178; line-height: 1.7; }
`;

export const CarouselWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const CarouselViewport = styled.div`
  display: flex;
  width: 100%;
  gap: 1.25rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border: 1px solid #c9d9ea;
  border-radius: 50%;
  background: #fff;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  z-index: 2;

  @media (max-width: 700px) {
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;

    &:first-of-type {
      left: 0.5rem;
    }

    &:last-of-type {
      right: 0.5rem;
    }
  }
`;

export const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: minmax(250px, 0.9fr) minmax(0, 1.1fr);
  align-items: stretch;
  flex: 0 0 100%;
  min-width: 0;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border: 1px solid #dbe7f4;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 14px 32px rgba(14, 48, 79, 0.07);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  min-height: 0;
  height: 100%;
  overflow: hidden;
  background: #edf3f9;

  img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.2s ease;
  }

  @media (max-width: 700px) {
    height: 260px;
    min-height: 260px;

    img {
      position: absolute;
    }
  }
`;

export const ProjectImageButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;

  &:hover img { transform: scale(1.025); }
  &:focus-visible { outline: 3px solid ${({ theme }) => theme.colors.primary}; outline-offset: 3px; }
`;

export const ProjectZoomIcon = styled.span`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 50%;
  background: rgba(13, 41, 69, 0.86);
  color: #fff;
  font-size: 1rem;
  pointer-events: none;
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  z-index: 2000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 5vh 3vw;
  background: rgba(6, 18, 31, 0.88);
  backdrop-filter: blur(4px);
`;

export const LightboxDialog = styled.div`
  width: min(1200px, 94vw);
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);

  @media (max-width: 600px) {
    width: 96vw;
    max-height: 93vh;
    border-radius: 12px;
  }
`;

export const LightboxHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 58px;
  padding: 0.7rem 0.85rem 0.7rem 1.1rem;
  border-bottom: 1px solid #dbe7f4;
  background: #fff;

  h2 { margin: 0; color: #17365d; font-size: 1rem; }
`;

export const LightboxClose = styled.button`
  display: grid;
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid #c9d9ea;
  border-radius: 50%;
  background: #fff;
  color: #17365d;
  cursor: pointer;
  font-size: 1.7rem;
  line-height: 1;

  &:focus-visible { outline: 3px solid ${({ theme }) => theme.colors.primary}; outline-offset: 2px; }
`;

export const LightboxImageWrap = styled.div`
  padding: 1rem;
`;

export const LightboxImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
export const ProjectContent = styled.div`
  min-width: 0;
  padding: clamp(1.4rem, 3vw, 2.5rem);
  text-align: left;

  > span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0.4rem 0 0.75rem;
    color: #123a63;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
  }

  p {
    margin: 0;
    color: #4b6178;
    line-height: 1.7;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    padding: 0;
    margin: 1.25rem 0;
    list-style: none;
  }

  li {
    display: flex;
    min-width: 0;
    gap: 0.4rem;
    color: #285276;
    font-size: 0.9rem;
  }

  li svg {
    flex: 0 0 auto;
    color: #1e7f4f;
    margin-top: 0.2rem;
  }

  @media (max-width: 700px) {
    padding: 1rem;

    > span,
    p,
    ul {
      display: none;
    }

    h3 {
      margin: 0 0 1rem;
      font-size: 1.35rem;
      line-height: 1.2;
    }
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.7rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 700px) {
    width: 100%;
    min-height: 48px;
    font-size: 1rem;
  }
`;

export const ProblemsSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: center;
  margin-bottom: 4.5rem;
  padding: clamp(1.75rem, 4vw, 3rem);
  background: #f2f7fb;
  border: 1px solid #d5e4f1;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(14, 48, 79, 0.035);
  scroll-margin-top: 120px;

  @media (max-width: 1366px) and (min-width: 901px) {
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 900px) { grid-template-columns: 1fr; margin-bottom: 4rem; }
  @media (max-width: 600px) { padding: 1.5rem 1.25rem; }
  @media (max-width: 520px) { padding: 1.25rem 1rem; }
`;

export const ProblemsCopy = styled.div`
  > span { color: #bf6b19; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; }
  h2 { max-width: 590px; margin: 0.55rem 0 0.85rem; color: #123a63; font-size: clamp(1.8rem, 2.7vw, 2.35rem); line-height: 1.18; }
  p { margin: 0.7rem 0 0; color: #4b6178; line-height: 1.65; }

  @media (max-width: 1366px) and (min-width: 901px) {
    h2 { margin-bottom: 0.65rem; font-size: clamp(1.7rem, 2.5vw, 2.15rem); line-height: 1.14; }
    p { margin-top: 0.55rem; line-height: 1.58; }
  }
`;

export const TextAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  min-height: 44px;
  padding: 0.35rem 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  text-decoration: none;
`;

export const ProblemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    min-width: 0;
    min-height: 124px;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 1rem;
    border: 1px solid #e7d4c0;
    border-radius: 12px;
    background: #fff;
    color: #34516e;
    box-shadow: 0 5px 14px rgba(14, 48, 79, 0.045);
    transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

    &:active {
      transform: translateY(1px) scale(0.99);
      border-color: #d97706;
      background: #fff9f2;
      box-shadow: 0 3px 8px rgba(14, 48, 79, 0.06);
    }
  }

  li > svg { flex: 0 0 auto; color: #d97706; margin-top: 0.16rem; font-size: 1.15rem; }
  h3 { margin: 0; color: #17365d; font-size: 0.93rem; line-height: 1.32; }
  p { margin: 0.35rem 0 0; color: #526a82; font-size: 0.82rem; line-height: 1.45; }

  @media (hover: hover) and (pointer: fine) {
    li:hover {
      transform: translateY(-3px);
      border-color: #d97706;
      background: #fffaf5;
      box-shadow: 0 9px 20px rgba(14, 48, 79, 0.1);
    }
  }

  @media (max-width: 1366px) and (min-width: 901px) {
    gap: 0.65rem;

    li { min-height: 110px; padding: 0.85rem; }
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;

    li { min-height: 0; padding: 0.75rem 0.85rem; }
    li > svg { font-size: 1.05rem; }
    p { font-size: 0.78rem; line-height: 1.4; }
  }
`;

export const DeliverablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  > div { min-width: 0; height: 100%; }

  @media (min-width: 951px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 520px) { grid-template-columns: 1fr; gap: 0.6rem; }
`;

export const DeliverablesHeading = styled(SectionHeading)`
  margin-bottom: 1.6rem;

  @media (min-width: 951px) and (max-width: 1440px) {
    max-width: 760px;
    margin-bottom: 1.5rem;

    h2 { font-size: clamp(1.65rem, 2.6vw, 2.2rem); line-height: 1.13; }
  }
`;

export const DeliverablesCta = styled.a`
  display: flex;
  width: fit-content;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1.35rem auto 0;
  padding: 0.75rem 1.2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover { background: #0d5d96; transform: translateY(-2px); }
  &:focus-visible { outline: 3px solid #123a63; outline-offset: 3px; }

  @media (min-width: 951px) and (max-width: 1440px) {
    margin-top: 1.25rem;
  }

  @media (max-width: 520px) {
    width: 100%;
    margin-top: 1rem;
    white-space: nowrap;
  }
`;

export const DeliverableCard = styled.article`
  height: 100%;
  min-width: 0;
  padding: 1.1rem;
  border: 1px solid #dbe7f4;
  border-radius: 14px;
  background: #fff;
  outline: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.3rem; transition: color 0.2s ease; }
  h3 { margin: 0.65rem 0 0.35rem; color: #17365d; font-size: 0.96rem; line-height: 1.32; }
  p { margin: 0; color: #526a82; font-size: 0.84rem; line-height: 1.5; }

  &:focus-visible,
  &:active {
    border-color: ${({ theme }) => theme.colors.primary};
    background: #f8fbfe;
    box-shadow: 0 5px 12px rgba(14, 48, 79, 0.08);
  }

  &:active { transform: translateY(1px) scale(0.99); }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: ${({ theme }) => theme.colors.primary};
      background: #f8fbfe;
      box-shadow: 0 9px 20px rgba(14, 48, 79, 0.1);
    }

    &:hover svg { color: #0d5d96; }
  }

  @media (min-width: 951px) and (max-width: 1440px) {
    padding: 1rem;
    svg { font-size: 1.2rem; }
    h3 { margin: 0.55rem 0 0.3rem; font-size: 0.95rem; }
    p { font-size: 0.82rem; line-height: 1.46; }
  }

  @media (max-width: 520px) {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    height: auto;
    padding: 0.8rem;

    > div { min-width: 0; }
    svg { flex: 0 0 auto; font-size: 1.15rem; }
    h3 { margin: 0; font-size: 0.9rem; }
    p { margin-top: 0.25rem; font-size: 0.79rem; line-height: 1.4; }
  }
`;

export const TechnologyHighlight = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1.55fr);
  gap: clamp(1.25rem, 3vw, 2.75rem);
  align-items: center;
  margin-bottom: 4.5rem;
  padding: clamp(1.5rem, 3.5vw, 3rem);
  border-radius: 20px;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 18%, rgba(83, 176, 233, 0.14), transparent 34%),
    #0d2945;
  color: #fff;
  scroll-margin-top: 120px;

  &::before {
    position: absolute;
    z-index: 0;
    inset: 0;
    background-image:
      linear-gradient(rgba(125, 211, 252, 0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(125, 211, 252, 0.045) 1px, transparent 1px);
    background-size: 34px 34px;
    content: '';
    pointer-events: none;
  }

  > div { position: relative; z-index: 1; }
  > div > div > span { color: #7dd3fc; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; }
  > div:last-child > div { max-width: 720px; }
  h2 { margin: 0.5rem 0 0.6rem; font-size: clamp(1.65rem, 2.4vw, 2.25rem); line-height: 1.18; }
  p { margin: 0.7rem 0 0; color: #d8e8f6; line-height: 1.62; }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 3.5rem;
    padding: 1.75rem 1.4rem;
  }
`;

export const TechnologyVisual = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: #7dd3fc;
  font-size: clamp(3.5rem, 8vw, 6rem);
  svg:last-child { color: #fff; }
`;

export const GoogleAdsSection = styled.section`
  max-width: 1040px;
  margin: -1.5rem auto 1.5rem;
  padding: clamp(1.35rem, 3vw, 2rem);
  border: 1px solid #b9dfca;
  border-radius: 18px;
  background: #f1faf4;
  box-shadow: 0 10px 24px rgba(14, 48, 79, 0.08);
  text-align: left;
  scroll-margin-top: 120px;

  h2 { margin: 0.65rem 0 0.55rem; color: #123a63; font-size: clamp(1.35rem, 2.2vw, 1.85rem); line-height: 1.2; }
  > p { max-width: 880px; margin: 0; color: #36526d; font-size: 0.96rem; line-height: 1.6; }
  @media (max-width: 600px) { margin-top: -1rem; }
`;

export const GoogleAdsBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.38rem 0.65rem;
  border-radius: 999px;
  background: #d8f0e1;
  color: #16613c;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;

  svg { font-size: 0.95rem; }
`;

export const BonusCard = styled.div`
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid #cce8d5;
  ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.65rem 1rem; padding: 0; margin: 0; list-style: none; }
  li { display: flex; align-items: flex-start; gap: 0.45rem; color: #285276; font-size: 0.88rem; line-height: 1.45; }
  li svg { flex: 0 0 auto; color: #1e7f4f; margin-top: 0.2rem; }
  small { display: block; margin-top: 1rem; color: #45605a; font-size: 0.82rem; line-height: 1.55; }
  @media (max-width: 600px) { ul { grid-template-columns: 1fr; } }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 1.1rem;

  > div {
    min-width: 0;
    height: 100%;
  }

  @media (min-width: 851px) and (max-width: 1366px) {
    gap: 0.9rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const WhyHeading = styled(SectionHeading)`
  max-width: 980px;
  margin-bottom: 1.8rem;

  h2 {
    font-size: clamp(1.85rem, 3vw, 2.55rem);
    line-height: 1.15;
    text-wrap: balance;
  }

  @media (min-width: 851px) {
    h2 { white-space: nowrap; }
  }

  @media (min-width: 851px) and (max-width: 1366px) {
    margin-bottom: 1.5rem;

    h2 { font-size: clamp(1.75rem, 2.6vw, 2.25rem); }
  }

  @media (max-width: 850px) {
    margin-bottom: 1.4rem;

    h2 {
      font-size: clamp(1.7rem, 6vw, 2.1rem);
      white-space: normal;
    }
  }
`;

export const WhyCard = styled.article`
  height: 100%;
  min-width: 0;
  padding: 1.35rem 1.4rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0 0.7rem 0.7rem 0;
  background: #f8fbfe;
  box-shadow: 0 1px 0 rgba(21, 73, 120, 0.04);
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  h3 { margin: 0.7rem 0 0.4rem; color: #17365d; }
  p { margin: 0; color: #526a82; line-height: 1.6; }
  > svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.5rem; transition: color 180ms ease; }

  &:focus-within {
    background: #f2f8fd;
    border-left-color: #0e619c;
    box-shadow: 0 0.45rem 1.1rem rgba(21, 73, 120, 0.1);
  }

  &:active {
    transform: translateY(1px);
    background: #eef6fc;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      background: #f2f8fd;
      border-left-color: #0e619c;
      box-shadow: 0 0.5rem 1.2rem rgba(21, 73, 120, 0.1);

      > svg { color: #0e619c; }
    }
  }

  @media (min-width: 851px) and (max-width: 1366px) {
    padding: 1.15rem 1.2rem;
    h3 { margin-top: 0.6rem; }
  }

  @media (max-width: 850px) {
    padding: 1rem 1.1rem;
    h3 { margin-top: 0.6rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    &, > svg { transition: none; }
  }
`;

export const ProcessGrid = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  gap: 0.7rem;
  padding: 0;
  margin: 0;
  list-style: none;

  > div {
    min-width: 0;
    height: 100%;
  }

  @media (min-width: 601px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  @media (min-width: 951px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }

  @media (min-width: 1441px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.85rem;

    > div:not(:last-child) {
      position: relative;

      &::after {
        position: absolute;
        top: 2.15rem;
        right: -0.85rem;
        width: 0.85rem;
        height: 1px;
        background: rgba(30, 111, 172, 0.28);
        content: '';
      }
    }
  }
`;

export const ProcessHeading = styled(SectionHeading)`
  max-width: 760px;
  margin-bottom: 1.55rem;

  h2 {
    font-size: clamp(1.75rem, 2.8vw, 2.45rem);
    line-height: 1.16;
    text-wrap: balance;
  }

  @media (min-width: 951px) and (max-width: 1440px) {
    margin-bottom: 1.35rem;

    h2 { font-size: clamp(1.7rem, 2.5vw, 2.2rem); }
  }

  @media (max-width: 600px) {
    margin-bottom: 1.25rem;
    h2 { font-size: clamp(1.65rem, 6vw, 2rem); }
  }
`;

export const ProcessStep = styled.li`
  position: relative;
  height: 100%;
  min-width: 0;
  padding: 1.05rem;
  border: 1px solid #cfe1f1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(14, 48, 79, 0.045);
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;

  span { color: ${({ theme }) => theme.colors.primary}; font-weight: 800; font-size: 0.8rem; transition: color 180ms ease; }
  h3 { margin: 0.4rem 0 0.35rem; color: #17365d; font-size: 0.98rem; line-height: 1.3; transition: color 180ms ease; }
  p { margin: 0; color: #526a82; font-size: 0.83rem; line-height: 1.48; }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    background: #f5faff;
    box-shadow: 0 0.5rem 1.1rem rgba(14, 48, 79, 0.09);
  }

  &:active {
    transform: translateY(1px);
    background: #f1f8fe;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: ${({ theme }) => theme.colors.primary};
      background: #f5faff;
      box-shadow: 0 0.55rem 1.2rem rgba(14, 48, 79, 0.1);

      span, h3 { color: #0e619c; }
    }
  }

  @media (min-width: 951px) and (max-width: 1440px) {
    padding: 0.9rem;
    span { font-size: 0.74rem; }
    h3 { margin: 0.32rem 0 0.25rem; font-size: 0.92rem; }
    p { font-size: 0.79rem; line-height: 1.42; }
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 0.7rem;
    align-items: start;
    padding: 0.8rem 0.85rem;
    border-left: 3px solid ${({ theme }) => theme.colors.primary};

    span { grid-row: 1 / span 2; font-size: 0.78rem; }
    h3 { margin: 0; font-size: 0.92rem; }
    p { grid-column: 2; margin-top: 0.25rem; font-size: 0.79rem; line-height: 1.42; }
  }

  @media (prefers-reduced-motion: reduce) {
    &, span, h3 { transition: none; }
  }
`;

export const FaqList = styled.div`
  max-width: 880px;
  margin: auto;
  display: grid;
  gap: 0.6rem;

  details {
    border: 1px solid #d5e4f1;
    border-radius: 10px;
    background: #fff;
    transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
  }

  summary {
    display: flex;
    min-height: 54px;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 1rem;
    color: #17365d;
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.4;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker { display: none; }
    &::marker { content: ''; }
    &:focus-visible { outline: 3px solid #1e6fac; outline-offset: -3px; border-radius: 9px; }
  }

  summary svg {
    flex: 0 0 auto;
    font-size: 1.05rem;
    transition: transform 180ms ease, color 180ms ease;
  }

  details[open] {
    border-color: #9ec7e6;
    background: #f7fbff;
    box-shadow: 0 0.25rem 0.8rem rgba(14, 48, 79, 0.055);

    summary svg { transform: rotate(90deg); color: ${({ theme }) => theme.colors.primary}; }
  }

  details > div {
    padding: 0.1rem 1rem 0.9rem;
    border-top: 1px solid #dceaf5;
  }

  @media (hover: hover) and (pointer: fine) {
    details:hover {
      transform: translateY(-1px);
      border-color: #a9cde8;
      background: #f7fbff;
      box-shadow: 0 0.25rem 0.7rem rgba(14, 48, 79, 0.045);
    }
  }

  @media (max-width: 600px) {
    gap: 0.5rem;

    summary {
      min-height: 48px;
      padding: 0.72rem 0.9rem;
      font-size: 0.94rem;
    }

    details > div { padding: 0.1rem 0.9rem 0.85rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    details, summary svg { transition: none; }
  }
`;

export const FaqHeading = styled(SectionHeading)`
  margin-bottom: 1.7rem;

  h2 {
    font-size: clamp(1.8rem, 2.8vw, 2.45rem);
    line-height: 1.16;
  }

  @media (max-width: 600px) {
    margin-bottom: 1.25rem;
    h2 { font-size: clamp(1.65rem, 6vw, 2rem); }
  }
`;

export const FaqAnswer = styled.div`
  p {
    margin: 0;
    color: #526a82;
    font-size: 0.91rem;
    line-height: 1.65;
  }

  p + p {
    margin-top: 0.75rem;
  }
`;

export const FormArea = styled.section`
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 20px;
  background: #eff6ff;
  border: 1px solid #cfe2ff;
  scroll-margin-top: 120px;
  .${SectionHeading.styledComponentId} { margin-bottom: 1.75rem; }
`;
