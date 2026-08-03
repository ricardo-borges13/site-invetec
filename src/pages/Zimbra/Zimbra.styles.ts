import styled from 'styled-components';
type Tone = 'personal' | 'hosting' | 'invetec';
export const Container = styled.div`
  max-width: 1180px;
  margin: auto;
  padding: 3rem 1.5rem 4rem;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 2rem 1rem 3rem;
  }
`;
export const HeroActions = styled.div`
  display: flex;
  max-width: 760px;
  margin: 1.5rem auto 0;
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
`;
export const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  > :last-child {
    order: -1;
    @media (min-width: 851px) {
      order: initial;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ComparisonCard = styled.article<{ $tone: Tone }>`
  padding: 1.45rem;
  border: 1px solid
    ${({ $tone }) =>
      $tone === 'personal'
        ? '#f4cccc'
        : $tone === 'hosting'
          ? '#f6d9b8'
          : '#bcd9f7'};
  border-radius: 16px;
  background: ${({ $tone }) =>
    $tone === 'personal'
      ? '#fffafa'
      : $tone === 'hosting'
        ? '#fffaf4'
        : '#f4f9ff'};
  h3 {
    margin: 0 0 0.7rem;
    color: #17365d;
  }
  ul {
    padding: 0;
    margin: 1rem 0 0;
    list-style: none;
    display: grid;
    gap: 0.7rem;
  }
  li {
    display: flex;
    gap: 0.55rem;
    font-size: 0.92rem;
    line-height: 1.4;
    color: #425a73;
  }
  svg {
    flex: none;
    margin-top: 0.15rem;
    color: ${({ $tone }) =>
      $tone === 'personal'
        ? '#c95555'
        : $tone === 'hosting'
          ? '#c77b28'
          : '#1877d1'};
  }
`;
export const Badge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.55rem;
  border-radius: 999px;
  background: #dff4e6;
  color: #15713a;
  font-size: 0.75rem;
  font-weight: 700;
`;
export const PositioningNote = styled.p`
  max-width: 950px;
  margin: 1.5rem auto 0;
  color: #526a82;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
`;
export const SupportSection = styled.section`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 3rem;
  align-items: center;
  margin: 5rem 0;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export const SupportVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  min-height: 430px;
  background: #eaf3fe;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }
  div {
    position: absolute;
    inset: auto 1.25rem 1.25rem;
    background: rgba(8, 39, 76, 0.88);
    padding: 1.2rem;
    color: #fff;
    border-radius: 12px;
    display: grid;
    gap: 0.55rem;
  }
  div img {
    height: 30px;
    width: auto;
    filter: brightness(0) invert(1);
  }
  svg {
    font-size: 1.55rem;
    color: #79d7ff;
  }
  @media (max-width: 850px) {
    min-height: 270px;
  }
`;
export const SupportContent = styled.div`
  > span {
    display: block;
    margin-bottom: 0.5rem;
  }
  h2 {
    color: #142b4a;
    font-size: clamp(1.55rem, 2.4vw, 2.2rem);
    line-height: 1.2;
    margin: 0 0 1rem;
  }
  > p {
    color: #526a82;
    line-height: 1.65;
    margin: 0 0 1.25rem;
  }
`;
export const SupportList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  li {
    display: flex;
    gap: 0.7rem;
  }
  svg {
    flex: none;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.ctaGreen};
  }
  h3 {
    font-size: 1rem;
    margin: 0 0 0.2rem;
    color: #17365d;
  }
  p {
    margin: 0;
    line-height: 1.5;
    color: #526a82;
    font-size: 0.92rem;
  }
`;
export const PriceBand = styled.div`
  margin: 1.3rem 0;
  padding: 0.9rem 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.ctaGreen};
  background: #f0fbf4;
  display: grid;
  gap: 0.35rem;
  color: #174a2b;
  small {
    color: #587061;
    line-height: 1.45;
  }
`;
export const Resources = styled.section`
  margin: 5rem 0;
  scroll-margin-top: 90px;
`;
export const ResourceLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  border: 1px solid #dbe7f4;
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const ResourceImage = styled.div`
  padding: 1rem;
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
    border-radius: 10px;
    box-shadow: 0 12px 28px rgba(14, 48, 79, 0.14);
  }
`;
export const SlideControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.9rem;
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
  padding: 2rem;
  align-self: center;
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
  padding: 0.9rem 0 0.25rem;
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
