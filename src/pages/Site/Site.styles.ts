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
  }

  @media (max-width: 700px) {
    height: 260px;
    min-height: 260px;

    img {
      position: absolute;
    }
  }
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
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2rem, 7vw, 6rem);
  align-items: center;
  margin-bottom: 5.5rem;
  padding: clamp(2rem, 5vw, 4rem);
  background: #f8fbfe;
  border: 1px solid #e2edf7;
  border-radius: 20px;
  scroll-margin-top: 120px;

  @media (max-width: 750px) { grid-template-columns: 1fr; margin-bottom: 4rem; }
`;

export const ProblemsCopy = styled.div`
  > span { color: #bf6b19; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; }
  h2 { margin: 0.55rem 0 0.85rem; color: #123a63; font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.2; }
  p { color: #4b6178; line-height: 1.7; }
`;

export const TextAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
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

  li { display: flex; min-width: 0; align-items: flex-start; gap: 0.6rem; padding: 0.9rem; border-radius: 10px; background: #fff; color: #34516e; box-shadow: 0 5px 14px rgba(14, 48, 79, 0.04); }
  svg { flex: 0 0 auto; color: #d97706; margin-top: 0.18rem; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

export const DeliverablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 950px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 540px) { grid-template-columns: 1fr; }
`;

export const DeliverableCard = styled.article`
  min-width: 0;
  padding: 1.35rem;
  border: 1px solid #dbe7f4;
  border-radius: 14px;
  background: #fff;
  svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.4rem; }
  h3 { margin: 0.75rem 0 0.45rem; color: #17365d; font-size: 1rem; }
  p { margin: 0; color: #526a82; font-size: 0.89rem; line-height: 1.6; }
`;

export const TechnologyHighlight = styled.section`
  display: grid;
  grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1.55fr);
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
  margin-bottom: 5.5rem;
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 20px;
  background: #0d2945;
  color: #fff;
  scroll-margin-top: 120px;

  > div > div > span { color: #7dd3fc; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; }
  h2 { margin: 0.55rem 0 0.85rem; font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.2; }
  p { color: #d8e8f6; line-height: 1.7; }
  @media (max-width: 700px) { grid-template-columns: 1fr; margin-bottom: 4rem; }
`;

export const TechnologyVisual = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: #7dd3fc;
  font-size: clamp(3.5rem, 8vw, 6rem);
  svg:last-child { color: #fff; }
`;

export const TechnologyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;
  span { padding: 0.42rem 0.7rem; border: 1px solid rgba(125, 211, 252, 0.4); border-radius: 999px; color: #e4f4ff; font-size: 0.8rem; }
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
  gap: 1.25rem;
  @media (max-width: 750px) { grid-template-columns: 1fr; }
`;

export const WhyCard = styled.article`
  padding: 1.5rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background: #f8fbfe;
  h3 { margin: 0.8rem 0 0.45rem; color: #17365d; }
  p { margin: 0; color: #526a82; line-height: 1.65; }
  > svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.5rem; }
`;

export const ProcessGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.85rem;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: 950px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const ProcessStep = styled.li`
  position: relative;
  min-width: 0;
  padding: 1.2rem;
  border: 1px solid #dbe7f4;
  border-radius: 14px;
  background: #fff;
  span { color: ${({ theme }) => theme.colors.primary}; font-weight: 800; font-size: 0.8rem; }
  h3 { margin: 0.45rem 0; color: #17365d; font-size: 1rem; }
  p { margin: 0; color: #526a82; font-size: 0.86rem; line-height: 1.55; }
`;

export const FaqList = styled.div`
  max-width: 850px;
  margin: auto;
  display: grid;
  gap: 0.7rem;
  details { border: 1px solid #dbe7f4; border-radius: 10px; background: #fff; }
  summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem 1.15rem; color: #17365d; font-weight: 700; cursor: pointer; }
  summary svg { flex: 0 0 auto; transition: transform 0.2s ease; }
  details[open] summary svg { transform: rotate(90deg); }
  p { margin: 0; padding: 0 1.15rem 1.15rem; color: #526a82; line-height: 1.7; }
`;

export const FormArea = styled.section`
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 20px;
  background: #eff6ff;
  border: 1px solid #cfe2ff;
  scroll-margin-top: 120px;
  .${SectionHeading.styledComponentId} { margin-bottom: 1.75rem; }
`;
