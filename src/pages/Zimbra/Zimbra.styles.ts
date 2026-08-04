import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1180px;
  margin: auto;
  padding: 3rem 1.5rem 4rem;
  overflow: visible;
  @media (max-width: 600px) {
    padding: 2rem 1rem 3rem;
  }
`;
export const HeroActions = styled.div`
  display: flex;
  max-width: 760px;
  margin: 1.15rem auto 0;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
const HeroAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.25rem;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s,
    background-color 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
`;
export const HeroPrimaryButton = styled(HeroAction)`
  background: #25d366;
  color: #fff;
  &:hover {
    background: #1ebe57;
  }
`;
export const HeroSecondaryLink = styled(HeroAction)`
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.08);
`;
export const HeroTrust = styled.p`
  width: 100%;
  margin: 0.35rem 0 0 !important;
  font-size: 0.9rem !important;
  span {
    margin: 0 0.35rem;
  }
`;
export const HeroBrand = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;
  padding-top: 2.5rem;
  overflow: visible;
  img {
    display: block;
    width: auto;
    height: auto;
    max-width: min(230px, 100%);
    max-height: none;
    margin: 0;
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-bottom: 0.55rem;
    img { max-width: min(180px, 100%); }
  }
  @media (max-width: 420px) {
    padding-top: 1.25rem;
    img { max-width: min(160px, 100%); }
  }
`;
export const SectionHeading = styled.header`
  max-width: 760px;
  margin: 0 auto 2rem;
  text-align: center;
  > span,
  .SupportContent > span,
  .FormCopy > span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }
  h2 {
    margin: 0.45rem 0 0.8rem;
    color: #142b4a;
    font-size: clamp(1.55rem, 2.4vw, 2.2rem);
    line-height: 1.2;
  }
  p {
    margin: 0;
    color: #526a82;
    line-height: 1.65;
  }
`;
export const Positioning = styled.section`
  margin-bottom: 5rem;
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) {
    margin-bottom: 3.5rem;
  }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) {
    margin-bottom: 3rem;
  }
`;
export const PositioningHeading = styled.header`
  max-width: 780px;
  margin: 0 auto 2rem;
  text-align: center;
  > span { color: ${({ theme }) => theme.colors.primary}; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; }
  h2 { margin: 0.45rem 0 0.8rem; color: #142b4a; font-size: clamp(1.55rem, 2.4vw, 2.2rem); line-height: 1.2; }
  p { margin: 0; color: #526a82; line-height: 1.65; }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) {
    margin-bottom: 1.35rem;
    h2 { margin: 0.35rem 0 0.55rem; font-size: clamp(1.42rem, 2.1vw, 1.9rem); }
    p { line-height: 1.5; }
  }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) {
    margin-bottom: 1.1rem;
    p { font-size: 0.93rem; }
  }
`;
export const PositioningHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
  margin-bottom: 1rem;
  @media (max-width: 850px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) { gap: 0.7rem; margin-bottom: 0.75rem; }
`;
export const PositioningHighlight = styled.article`
  display: flex;
  gap: 0.8rem;
  position: relative;
  padding: 1.1rem 1rem 1rem;
  border: 1px solid #dce8f3;
  border-radius: 14px;
  background: #fff;
  border-top: 3px solid #1677d2;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  > span { display: grid; flex: none; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: #e8f3ff; color: #1677d2; }
  > span svg { width: 20px; height: 20px; }
  h3 { margin: 0 0 0.35rem; color: #17365d; font-size: 1rem; font-weight: 700; line-height: 1.3; }
  p { margin: 0; color: #526a82; font-size: 0.9rem; line-height: 1.5; }
  &:nth-child(2) { border-top-color: #169b62; > span { background: #e2f6ec; color: #169b62; } }
  &:nth-child(3) { border-top-color: #7557c8; > span { background: #eee9fb; color: #7557c8; } }
  @media (hover: hover) {
    &:hover { transform: translateY(-3px); border-color: #1677d2; box-shadow: 0 10px 24px rgba(15, 54, 92, 0.09); }
    &:nth-child(2):hover { border-color: #169b62; }
    &:nth-child(3):hover { border-color: #7557c8; }
  }
  @media (prefers-reduced-motion: reduce) { transition: none; }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) {
    gap: 0.65rem;
    padding: 0.85rem 0.85rem 0.8rem;
    > span { width: 40px; height: 40px; }
    > span svg { width: 18px; height: 18px; }
    h3 { margin-bottom: 0.25rem; font-size: 0.94rem; }
    p { font-size: 0.84rem; line-height: 1.42; }
  }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) {
    padding: 0.75rem 0.8rem;
    > span { width: 38px; height: 38px; }
    p { font-size: 0.81rem; }
  }
`;
export const PositioningStatement = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.15rem;
  margin: 0 0 1.35rem;
  border: 1px solid #cfe3f6;
  border-radius: 14px;
  background: #eef7ff;
  color: #234b70;
  > svg { flex: none; margin-top: 0.2rem; color: #1671bd; }
  p { margin: 0; line-height: 1.55; }
  strong { color: #125b9b; }
  @media (max-width: 500px) { padding: 0.9rem; gap: 0.6rem; }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) { padding: 0.8rem 1rem; margin-bottom: 1rem; p { font-size: 0.9rem; line-height: 1.45; } }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) { padding: 0.7rem 0.9rem; }
`;
export const ComparisonTableContainer = styled.div`
  overflow: hidden; border: 1px solid #d9e1ea; border-radius: 15px; background: #fff;
  @media (max-width: 700px) { display: none; }
`;
export const ComparisonTable = styled.table`
  width: 100%; border-collapse: separate; border-spacing: 0; table-layout: fixed; font-size: 0.85rem;
  caption { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  th, td { padding: 0.9rem 0.8rem; border-bottom: 1px solid #e4e8ee; vertical-align: middle; }
  thead th { background: #f8f9fb; color: #16284a; text-align: center; font-size: 0.89rem; font-weight: 700; line-height: 1.3; }
  thead th:first-child { width: 21%; background: #07134b; color: #fff; text-align: left; border-radius: 14px 0 0 0; }
  thead th:nth-child(2), thead th:nth-child(4) { width: 26.3%; }
  tbody th { display: flex; align-items: center; gap: 0.75rem; color: #16284a; text-align: left; font-size: 0.88rem; font-weight: 700; line-height: 1.15; }
  tbody th svg { flex: none; font-size: 1.4rem; color: #10255a; }
  td { color: #30476b; text-align: center; font-size: 0.87rem; line-height: 1.28; }
  .invetec { background: #f8fbff; border-left: 2px solid #096cf2; border-right: 2px solid #096cf2; color: #0563e6; font-weight: 700; }
  thead .invetec { background: linear-gradient(120deg, #075be2, #056ef9); color: #fff; border-left-color: #096cf2; border-right-color: #096cf2; }
  tbody tr:last-child th, tbody tr:last-child td { border-bottom: 0; }
  tbody tr:last-child .invetec { border-bottom: 2px solid #096cf2; border-radius: 0 0 14px 14px; }
  @media (max-width: 900px) { font-size: 0.76rem; th, td { padding: 0.7rem 0.5rem; } tbody th { gap: 0.45rem; font-size: 0.77rem; } td { font-size: 0.76rem; } }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) {
    font-size: 0.79rem;
    th, td { padding: 0.66rem 0.65rem; }
    thead th { font-size: 0.82rem; }
    tbody th { gap: 0.6rem; font-size: 0.81rem; }
    tbody th svg { font-size: 1.2rem; }
    td { font-size: 0.81rem; line-height: 1.2; }
  }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) {
    th, td { padding: 0.56rem 0.55rem; }
    tbody th { font-size: 0.78rem; }
    td { font-size: 0.78rem; }
  }
`;
export const ComparisonHeaderContent = styled.div`
  display: flex;
  min-height: 62px;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  .invetec & { flex-direction: column; gap: 0.2rem; }
  > svg { flex: none; width: 1.4rem; height: 1.4rem; color: #172b55; }
  @media (max-width: 900px) { min-height: 52px; gap: 0.35rem; > svg { width: 1.15rem; height: 1.15rem; } }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) { min-height: 50px; }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) { min-height: 44px; }
`;
export const ComparisonHeaderLogo = styled.img`
  display: block;
  width: min(145px, 100%);
  max-height: 30px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  @media (max-width: 900px) { max-height: 24px; }
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) { max-height: 26px; }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) { max-height: 23px; }
`;
export const ComparisonHeaderTitle = styled.span`
  display: block;
  color: #16284a;
  font-size: 0.89rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: left;
  @media (max-width: 900px) { font-size: 0.76rem; }
`;
export const ComparisonHeaderSubtitle = styled.small`
  display: block;
  color: #5d7190;
  font-size: 0.71rem;
  font-weight: 600;
  line-height: 1.25;
  text-align: left;
  .invetec & { color: #dff1ff; text-align: center; }
  @media (max-width: 900px) { font-size: 0.62rem; }
`;
export const ComparisonBrandStack = styled.div`
  display: grid;
  gap: 0.12rem;
  text-align: left;
`;
export const ComparisonMobile = styled.div`
  display: none;
  @media (max-width: 700px) { display: block; }
`;
export const ComparisonTabs = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; margin-bottom: 0.75rem;
  button { min-height: 42px; padding: 0.45rem; border: 1px solid #d4e2ee; border-radius: 10px; background: #fff; color: #45647f; font: inherit; font-size: 0.76rem; font-weight: 700; cursor: pointer; }
  button[aria-pressed='true'] { border-color: #176fb7; background: #176fb7; color: #fff; }
  button:focus-visible { outline: 3px solid #1f80d1; outline-offset: 2px; }
`;
export const ComparisonMobileList = styled.ul`
  padding: 0; margin: 0; list-style: none; border: 1px solid #d7e5f1; border-radius: 14px; overflow: hidden;
  li { padding: 0.8rem 0.9rem; border-bottom: 1px solid #e1ebf3; background: #fff; }
  li:last-child { border-bottom: 0; }
  span { display: flex; align-items: center; gap: 0.45rem; color: #1b5f9b; font-size: 0.8rem; font-weight: 700; }
  svg { flex: none; }
  p { margin: 0.3rem 0 0; color: #526a82; font-size: 0.86rem; line-height: 1.45; }
`;
export const ComparisonNote = styled.p`
  max-width: 940px; margin: 0.85rem auto 0; color: #64748b; font-size: 0.76rem; line-height: 1.45; text-align: center;
  @media (min-width: 1024px) and (max-width: 1599px) and (max-height: 900px) { margin-top: 0.65rem; font-size: 0.72rem; line-height: 1.35; }
`;
export const SupportSection = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2.5rem;
  align-items: center;
  margin: 4rem 0;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;
export const SupportVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  min-height: clamp(450px, 34vw, 520px);
  background: #eaf3fe;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 58% 18%;
    position: absolute;
    inset: 0;
  }
  > div {
    position: absolute;
    inset: auto 1rem 1rem;
    background: rgba(8, 39, 76, 0.88);
    padding: 1rem;
    color: #fff;
    border-radius: 12px;
    display: grid;
    gap: 0.4rem;
  }
  > div img {
    height: 30px;
    width: auto;
    filter: brightness(0) invert(1);
  }
  > div svg {
    font-size: 1.35rem;
    color: #79d7ff;
  }
  strong { font-size: 1rem; }
  small { color: #d9eafa; font-size: 0.78rem; line-height: 1.4; }
  @media (max-width: 850px) {
    min-height: 330px;
    > img { object-position: 58% 20%; }
  }
  @media (min-width: 1024px) and (max-width: 1440px) and (max-height: 800px) { min-height: 450px; }
`;
export const SupportContent = styled.div`
  > span {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }
  h2 {
    color: #082b5c;
    max-width: 620px;
    font-size: clamp(1.55rem, 2.2vw, 2.12rem);
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.16;
    margin: 0 0 0.75rem;
  }
  > p {
    color: #526a82;
    line-height: 1.55;
    margin: 0 0 1rem;
  }
`;
export const SupportList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 0.8rem;
  li {
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 0.7rem;
  }
  li > span {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 50%;
    background: #eaf4ff;
    color: #1260a6;
  }
  li > span svg { width: 19px; height: 19px; }
  h3 {
    font-size: 0.98rem;
    margin: 0 0 0.18rem;
    color: #17365d;
  }
  p {
    margin: 0;
    line-height: 1.45;
    color: #526a82;
    font-size: 0.88rem;
  }
`;
export const PriceBand = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0 0;
  padding: 0.85rem 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.ctaGreen};
  background: #f0fbf4;
  color: #174a2b;
  strong { display: block; margin-bottom: 0.25rem; }
  small {
    display: block;
    color: #587061;
    line-height: 1.45;
    font-size: 0.76rem;
  }
  button {
    white-space: nowrap;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    justify-items: start;
    button { min-height: 44px; }
  }
`;
export const Resources = styled.section`
  width: min(1440px, 92vw);
  margin: 5rem 50%;
  transform: translateX(-50%);
  scroll-margin-top: 90px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 4rem 0;
    transform: none;
  }
`;
export const ResourceCarousel = styled.div`
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }
`;
export const ResourceLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(300px, 1fr);
  align-items: start;
  border: 1px solid #dbe7f4;
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const ResourceImage = styled.div`
  padding: clamp(0.65rem, 1vw, 1rem);
  background: #f3f8fe;
  button {
    padding: 0;
    border: 0;
    background: none;
    width: 100%;
    cursor: zoom-in;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 12px 28px rgba(14, 48, 79, 0.14);
  }
`;
export const SlideControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.7rem;
  color: #526a82;
  font-size: 0.9rem;
  button {
    width: 38px;
    height: 38px;
    border: 1px solid #cfe0f2;
    border-radius: 50%;
    background: #fff;
    color: #174a7c;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  & button:focus-visible {
    outline: 3px solid #1f80d1;
    outline-offset: 2px;
  }
`;
export const ResourcePanel = styled.div`
  padding: clamp(1.25rem, 2.2vw, 2rem);
  align-self: start;
  > span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 0.85rem;
  }
  h3 {
    font-size: 1.55rem;
    color: #142b4a;
    margin: 0.5rem 0 0.8rem;
  }
  p {
    color: #526a82;
    line-height: 1.6;
  }
  ul {
    padding: 0;
    margin: 1.2rem 0;
    list-style: none;
    display: grid;
    gap: 0.65rem;
  }
  li {
    display: flex;
    gap: 0.55rem;
    color: #324d67;
    line-height: 1.4;
  }
  svg {
    color: ${({ theme }) => theme.colors.ctaGreen};
    flex: none;
    margin-top: 0.15rem;
  }
  small {
    display: block;
    padding-top: 0.9rem;
    border-top: 1px solid #dde8f3;
    color: #64748b;
    line-height: 1.45;
  }
`;
export const SlideTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.8rem 0 0.25rem;
  button {
    flex: none;
    border: 1px solid #d8e4f0;
    border-radius: 999px;
    padding: 0.45rem 0.75rem;
    background: #fff;
    color: #47627d;
    cursor: pointer;
    font-size: 0.85rem;
  }
  & button[aria-pressed='true'] {
    background: #eaf4ff;
    color: #1766ae;
    border-color: #90c3ef;
  }
  & button:focus-visible {
    outline: 3px solid #1f80d1;
    outline-offset: 2px;
  }
`;
export const Controls = styled.section`
  margin: 5rem 0;
`;
export const ControlGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
export const ControlCard = styled.article`
  display: flex;
  gap: 0.8rem;
  padding: 1.15rem;
  border: 1px solid #e1eaf3;
  border-radius: 14px;
  background: #fff;
  svg {
    flex: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  span {
    display: inline-block;
    color: #4c718f;
    font-size: 0.72rem;
    font-weight: 700;
    margin-bottom: 0.35rem;
  }
  h3 {
    font-size: 1rem;
    color: #17365d;
    margin: 0 0 0.4rem;
  }
  p {
    color: #526a82;
    font-size: 0.9rem;
    line-height: 1.45;
    margin: 0;
  }
`;
export const Infrastructure = styled.section<{ $image: string }>`
  margin: 5rem 0;
  padding: 3rem;
  border-radius: 18px;
  color: #fff;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2rem;
  background:
    linear-gradient(100deg, rgba(5, 24, 53, 0.96), rgba(6, 44, 86, 0.82)),
    url(${({ $image }) => $image}) center/cover;
  > div,
  > div + div {
    position: relative;
    z-index: 1;
  }
  > div > span {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #83d4ff;
  }
  h2 {
    font-size: clamp(1.6rem, 2.5vw, 2.3rem);
    line-height: 1.2;
    margin: 0.5rem 0 0.9rem;
  }
  p {
    line-height: 1.6;
    margin: 0.65rem 0;
    color: #e0edf9;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 1.7rem;
  }
`;
export const InfrastructureHighlight = styled.strong`
  display: inline-block;
  background: rgba(86, 193, 255, 0.15);
  border: 1px solid rgba(156, 220, 255, 0.35);
  border-radius: 8px;
  padding: 0.65rem 0.8rem;
  margin-top: 0.5rem;
`;
export const InfrastructureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  align-content: center;
  span {
    display: flex;
    gap: 0.55rem;
    align-items: center;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 10px;
    font-size: 0.9rem;
    line-height: 1.3;
  }
  svg {
    flex: none;
    color: #91e6c0;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
export const Process = styled.section`
  margin: 5rem 0;
`;
export const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
  article {
    position: relative;
  }
  b {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #e9f4ff;
    color: #1260a6;
    margin-bottom: 0.8rem;
  }
  h3 {
    color: #17365d;
    font-size: 1rem;
    margin: 0 0 0.45rem;
  }
  p {
    color: #526a82;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    article {
      display: grid;
      grid-template-columns: 42px 1fr;
      column-gap: 0.8rem;
    }
    b {
      grid-row: span 2;
    }
    h3 {
      margin-top: 0.2rem;
    }
  }
`;
export const Faq = styled.section`
  margin: 5rem 0;
`;
export const FaqList = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
  article {
    border: 1px solid #dce8f3;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
  }
  button {
    width: 100%;
    border: 0;
    background: #fff;
    padding: 1rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    color: #17365d;
    font-weight: 700;
    cursor: pointer;
  }
  button svg {
    flex: none;
    transition: transform 0.2s;
  }
  button[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
  button:focus-visible {
    outline: 3px solid #1f80d1;
    outline-offset: -3px;
  }
  div {
    border-top: 1px solid #e4edf5;
    padding: 0 1rem;
  }
  p {
    color: #526a82;
    line-height: 1.55;
    font-size: 0.92rem;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
export const FormArea = styled.section`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 2rem;
  padding: 2rem;
  background: #eef5fb;
  border: 1px solid #d7e5f1;
  border-radius: 18px;
  scroll-margin-top: 90px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 1.25rem;
  }
`;
export const FormCopy = styled.div`
  align-self: center;
  > span {
    display: block;
    margin-bottom: 0.5rem;
  }
  h2 {
    color: #17365d;
    font-size: clamp(1.55rem, 2.4vw, 2.15rem);
    line-height: 1.2;
    margin: 0 0 0.85rem;
  }
  p {
    color: #526a82;
    line-height: 1.6;
    margin: 0.7rem 0;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    text-decoration: none;
  }
`;
export const FormPanel = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  min-width: 0;
  @media (max-width: 430px) {
    padding: 1rem;
  }
`;
export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(2, 12, 27, 0.86);
  display: grid;
  place-items: center;
  padding: 2rem;
  img {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 10px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  font-size: 1.6rem;
  background: #fff;
  color: #17365d;
  cursor: pointer;
`;
