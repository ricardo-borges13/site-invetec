import styled from 'styled-components';

const sectionSpace = 'clamp(3.5rem, 7vw, 6rem)';

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
export const HeroShell = styled.div`
  overflow-x: clip;

  header {
    background-position: center 42%;
  }

  header > div:first-child {
    background:
      linear-gradient(
        90deg,
        rgba(7, 31, 55, 0.72) 0%,
        rgba(7, 31, 55, 0.62) 42%,
        rgba(7, 31, 55, 0.2) 72%,
        rgba(7, 31, 55, 0.08) 100%
      ),
      linear-gradient(180deg, rgba(7, 31, 55, 0.15), rgba(7, 31, 55, 0.3));
  }

  header h1 {
    max-width: 1040px;
    font-size: clamp(2.35rem, 3vw, 3.25rem);
  }

  header p {
    max-width: 900px;
    margin: 0.9rem auto 0;
    font-size: clamp(1.05rem, 1.35vw, 1.2rem);
    line-height: 1.5;
  }

  @media (max-width: 1440px) {
    header h1 {
      max-width: 960px;
      font-size: clamp(2.25rem, 3vw, 3rem);
    }
    header p {
      max-width: 820px;
    }
  }

  @media (max-width: 768px) {
    header {
      background-position: 58% 42%;
    }
    header h1 {
      max-width: 100%;
      font-size: clamp(1.8rem, 5.4vw, 2.35rem);
    }
    header p {
      max-width: 100%;
      font-size: 1rem;
    }
  }
`;
export const Eyebrow = styled.span`
  display: block;
  color: #16613c;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
`;
export const HeroEyebrow = styled.span`
  display: block;
  color: #d9f5e4;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 0.8rem;
`;
export const HeroContent = styled.div`
  margin-top: 1.2rem;
`;
export const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const HeroSecondary = styled.button`
  min-height: 48px;
  background: rgba(10, 37, 64, 0.76);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 0.82rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: rgba(10, 37, 64, 0.94);
  }
  &:focus-visible {
    outline: 3px solid white;
    outline-offset: 3px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Credibility = styled.div`
  display: flex;
  gap: 1.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.65rem;
  font-size: 1rem;
  span {
    display: flex;
    gap: 0.45rem;
    align-items: center;
    white-space: nowrap;
  }
  svg {
    color: #8ce5a9;
    font-size: 1.08rem;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
    font-size: 0.95rem;
    gap: 0.7rem 1rem;
    span {
      white-space: normal;
    }
  }
`;
export const SectionLead = styled.div`
  max-width: 720px;
  h2 {
    margin: 0 0 0.85rem;
    color: #1a2e4a;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    line-height: 1.15;
    text-wrap: balance;
  }
  p {
    color: #475569;
    line-height: 1.7;
    margin: 0.65rem 0;
  }
  .support {
    font-size: 0.93rem;
  }
`;
export const VideoSection = styled.section`
  padding: clamp(4.5rem, 5vw, 5.5rem) 0 clamp(3.5rem, 5vw, 4.75rem);
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  scroll-margin-top: 100px;
  @media (max-width: 1440px) {
    padding-top: clamp(3.5rem, 4.5vw, 4.5rem);
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: clamp(3rem, 6vw, 4rem);
    padding-bottom: 3.5rem;
  }
  @media (max-width: 600px) {
    padding-top: clamp(2.5rem, 10vw, 3.25rem);
    padding-bottom: 2.75rem;
    gap: 1.6rem;
  }
`;
export const QuickPoints = styled.ul`
  display: grid;
  gap: 0.6rem;
  padding: 0;
  margin: 1.3rem 0 1.35rem;
  list-style: none;
  color: #334155;
  font-size: 0.96rem;
  line-height: 1.45;
  li {
    display: flex;
    align-items: flex-start;
  }
  li:before {
    content: '✓';
    color: #1e7f4f;
    font-weight: 800;
    margin-right: 0.6rem;
  }
  @media (max-width: 600px) {
    font-size: 0.94rem;
    gap: 0.65rem;
  }
`;
export const TextButton = styled.button`
  min-height: 44px;
  padding: 0.5rem 0;
  border: 0;
  background: none;
  color: #1557b0;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  &:hover {
    text-decoration: underline;
    color: #0f3d7a;
  }
  &:focus-visible {
    outline: 3px solid #1557b0;
    outline-offset: 3px;
  }
`;
export const VideoWrapper = styled.div`
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.15);
  aspect-ratio: 16/9;
  background: #0f172a;
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
export const VideoChannel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 0.8rem;
  color: #64748b;
  font-size: 0.78rem;
  line-height: 1.4;
  a {
    color: #1557b0;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
    &:focus-visible {
      outline: 3px solid #1557b0;
      outline-offset: 3px;
    }
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;
    a {
      white-space: normal;
      font-size: 0.88rem;
    }
  }
`;
export const PainSection = styled.section`display:grid;grid-template-columns:minmax(0,38fr) minmax(0,62fr);gap:clamp(1.5rem,2.5vw,2rem);align-items:start;background:#f8fafc;margin:0 calc(50% - 50vw);padding:clamp(4.5rem,5vw,5.5rem) max(1.5rem,calc((100vw - 1160px)/2));> div:first-child h2{max-width:470px;color:#1a2e4a;font-size:clamp(2.25rem,2.7vw,2.75rem);line-height:1.14;margin:.15rem 0 .9rem;text-wrap:balance}> div:first-child p{max-width:445px;color:#475569;line-height:1.65;margin:0}@media(max-width:1440px){padding-top:clamp(3.5rem,4.5vw,4.5rem);padding-bottom:clamp(3.5rem,4.5vw,4.5rem)}@media(max-width:900px){grid-template-columns:1fr;gap:1.75rem;padding-top:clamp(3rem,6vw,4rem);padding-bottom:clamp(3rem,6vw,4rem)}> div:first-child h2{max-width:680px;font-size:clamp(2.1rem,4vw,2.5rem)}> div:first-child p{max-width:700px}}@media(max-width:600px){gap:1.75rem;padding:clamp(2.5rem,10vw,3.25rem) 1rem}> div:first-child h2{font-size:clamp(1.75rem,8vw,2rem);line-height:1.18}> div:first-child p{font-size:.96rem;line-height:1.6}}`;
export const PainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  align-items: start;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.3rem;
  }
`;
export const PainList = styled.ul`
  margin: 0;
  padding: 1.5rem;
  list-style: none;
  background: white;
  border: 1px solid #fed7aa;
  border-radius: 12px;
  h3 {
    margin: 0 0 0.8rem;
    color: #9a3412;
    font-size: 1rem;
  }
  li {
    padding: 0.42rem 0;
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.4;
    border-bottom: 1px solid #f8fafc;
  }
  li:last-child {
    border: 0;
  }
  li:before {
    content: '•';
    color: #ea580c;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 600px) {
    padding: 1.3rem 1.25rem;
    h3 {
      margin-bottom: 0.65rem;
    }
    li {
      padding: 0.33rem 0;
      font-size: 0;
    }
    li:before {
      font-size: 1.1rem;
    }
    li:after {
      content: attr(data-mobile);
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`;
export const Solution = styled.div`
  padding: 1.5rem;
  background: #eaf4ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  svg {
    color: #1557b0;
    font-size: 1.55rem;
    margin-bottom: 0.45rem;
  }
  h3 {
    margin: 0 0 0.55rem;
    color: #1a2e4a;
    font-size: 1.12rem;
    line-height: 1.28;
  }
  p {
    margin: 0;
    color: #475569;
    line-height: 1.55;
    font-size: 0.92rem;
  }
  small {
    display: block;
    margin-top: 0.85rem;
    color: #64748b;
    font-size: 0.8rem;
    line-height: 1.45;
  }
  @media (max-width: 600px) {
    padding: 1.3rem 1.25rem;
    h3 {
      font-size: 1.08rem;
    }
    p {
      font-size: 0.91rem;
    }
  }
`;
export const IntegrationSection = styled.section`
  padding: clamp(4.5rem, 5vw, 5.5rem) 0;
  .${SectionLead.styledComponentId} {
    max-width: 920px;
    text-align: center;
    margin: 0 auto;
    .support {
      max-width: 920px;
    }
  }
  @media (max-width: 1440px) {
    padding: clamp(3.25rem, 4vw, 4rem) 0;
  }
  @media (max-width: 600px) {
    padding: clamp(2.5rem, 10vw, 3rem) 0;
    .${SectionLead.styledComponentId} {
      text-align: left;
    }
  }
`;
export const IntegrationCore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  max-width: 620px;
  margin: 1.55rem auto 1.1rem;
  padding: 0.9rem 1.5rem;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  background: #eaf4ff;
  color: #1a2e4a;
  text-align: center;
  strong {
    font-size: 1.12rem;
    letter-spacing: 0.04em;
  }
  span {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.45;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    text-align: left;
    margin: 1.2rem 0 0.9rem;
    padding: 0.9rem 1.1rem;
  }
`;
export const IntegrationGrid = styled.div`
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  article {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.55rem;
    padding: 1rem;
    text-align: center;
    border: 1px solid #dbeafe;
    border-radius: 12px;
    background: white;
    color: #1a2e4a;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.35;
    box-shadow: 0 5px 16px rgba(15, 23, 42, 0.05);
    transition:
      transform 220ms ease,
      box-shadow 220ms ease,
      border-color 220ms ease,
      background-color 220ms ease;
  }
  svg {
    font-size: 1.35rem;
    color: #1557b0;
    transition:
      color 220ms ease,
      transform 220ms ease;
  }
  @media (hover: hover) and (pointer: fine) {
    article:hover {
      transform: translateY(-5px);
      background: #f4f9ff;
      border-color: #93c5fd;
      box-shadow: 0 12px 26px rgba(15, 23, 42, 0.12);
    }
    article:hover svg {
      color: #0f5cad;
      transform: scale(1.06);
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    article {
      min-height: 0;
      padding: 1rem 1.1rem;
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
    }
  }
`;
export const IntegrationNote = styled.p`
  max-width: 760px;
  margin: 1.1rem auto 0;
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.55;
  text-align: center;
  @media (max-width: 600px) {
    text-align: left;
    margin-top: 0.9rem;
  }
`;
export const BenefitsSection = styled.section`
  padding: clamp(4.5rem, 5vw, 5.5rem) 0;
  .${SectionLead.styledComponentId} {
    max-width: 760px;
  }
  @media (max-width: 1440px) {
    padding: clamp(3.25rem, 4vw, 4rem) 0;
  }
  @media (max-width: 600px) {
    padding: clamp(2.5rem, 10vw, 3rem) 0;
    .${SectionLead.styledComponentId} h2 {
      font-size: clamp(1.75rem, 8vw, 2rem);
      line-height: 1.18;
    }
  }
`;
export const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.75rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    margin-top: 1.35rem;
  }
`;
export const BenefitCard = styled.article`
  height: 100%;
  padding: 1.4rem 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  box-shadow: 0 7px 18px rgba(15, 23, 42, 0.04);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease,
    background-color 220ms ease;
  svg {
    color: #16613c;
    font-size: 1.45rem;
    transition:
      color 220ms ease,
      transform 220ms ease;
  }
  h3 {
    color: #1a2e4a;
    font-size: 1.06rem;
    line-height: 1.3;
    margin: 0.7rem 0 0.45rem;
  }
  p {
    margin: 0;
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.55;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-5px);
      background: #f4f9ff;
      border-color: #93c5fd;
      box-shadow: 0 12px 26px rgba(15, 23, 42, 0.12);
    }
    &:hover svg {
      color: #16613c;
      transform: scale(1.06);
    }
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 1.15rem 1.25rem;
    svg {
      font-size: 1.4rem;
    }
    h3 {
      margin: 0.55rem 0 0.35rem;
      font-size: 1.05rem;
    }
    p {
      font-size: 0.91rem;
      line-height: 1.5;
    }
  }
`;
export const Authority = styled.section`
  margin-top: 0;
  padding: clamp(3.5rem, 4vw, 4.25rem) clamp(4rem, 5vw, 5rem);
  background: #102a43;
  color: white;
  .${Eyebrow.styledComponentId} {
    color: #9ee6b4;
  }
  @media (max-width: 1440px) {
    padding: clamp(3rem, 4vw, 3.625rem) clamp(3.25rem, 4vw, 4rem);
  }
  @media (max-width: 1400px) {
    padding: clamp(2.5rem, 3.5vw, 3.25rem) clamp(2.75rem, 4vw, 3.5rem);
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    padding-top: clamp(2.25rem, 3vw, 2.75rem);
    padding-bottom: clamp(2.25rem, 3vw, 2.75rem);
  }
  @media (max-width: 600px) {
    padding: clamp(2.5rem, 10vw, 3rem) 1rem;
  }
`;
export const AuthorityLayout = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.06fr);
  gap: clamp(3rem, 4vw, 4rem);
  align-items: center;
  @media (min-width: 1600px) {
    grid-template-columns: minmax(0, 0.98fr) minmax(0, 1.02fr);
    gap: clamp(2.5rem, 3vw, 3.5rem);
  }
  @media (max-width: 1440px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(2rem, 3vw, 2.5rem);
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export const AuthorityIntro = styled.div`
  h2 {
    max-width: 500px;
    font-size: clamp(2.75rem, 2.75vw, 3rem);
    margin: 0.1rem 0 0.9rem;
    line-height: 1.12;
    text-wrap: balance;
  }
  p {
    max-width: 520px;
    line-height: 1.55;
    color: #dbeafe;
    margin: 0;
  }
  @media (min-width: 1600px) {
    h2 {
      max-width: 620px;
      font-size: clamp(2.875rem, 2.6vw, 3.125rem);
    }
  }
  @media (max-width: 1440px) {
    h2 {
      max-width: 465px;
      font-size: clamp(2.375rem, 2.8vw, 2.625rem);
    }
  }
  @media (max-width: 1400px) {
    h2 {
      max-width: 440px;
      font-size: clamp(2.125rem, 2.65vw, 2.375rem);
    }
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    h2 {
      font-size: clamp(2rem, 2.45vw, 2.25rem);
      margin-bottom: 0.8rem;
    }
    p {
      line-height: 1.5;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: clamp(1.75rem, 8vw, 2rem);
      line-height: 1.18;
    }
    p {
      font-size: 0.96rem;
      line-height: 1.6;
    }
  }
`;
export const AuthorityActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.45rem;
  button,
  a {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
  a {
    padding: 0.8rem 1.05rem;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 8px;
    color: white;
    font-size: 0.93rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    &:focus-visible {
      outline: 3px solid white;
      outline-offset: 3px;
    }
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    margin-top: 1.25rem;
    button,
    a {
      min-height: 44px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    button,
    a {
      width: 100%;
    }
  }
`;
export const AuthorityEvidence = styled.div`
  display: grid;
  gap: 0.85rem;
`;
export const AuthorityCard = styled.div<{ $featured?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.35rem 1.4rem;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid
    ${({ $featured }) =>
      $featured ? 'rgba(158,230,180,.52)' : 'rgba(255,255,255,.16)'};
  border-radius: 12px;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
  > svg {
    flex: none;
    color: ${({ $featured }) => ($featured ? '#9ee6b4' : '#bfdbfe')};
    font-size: 1.4rem;
    margin-top: 0.1rem;
  }
  h3 {
    margin: 0 0 0.3rem;
    color: white;
    font-size: 1.08rem;
    line-height: 1.28;
  }
  p {
    margin: 0;
    color: #dbeafe;
    font-size: 0.94rem;
    line-height: 1.5;
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    padding: 1.15rem 1.25rem;
    gap: 0.8rem;
    h3 {
      font-size: 1.04rem;
    }
    p {
      font-size: 0.91rem;
      line-height: 1.46;
    }
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: rgba(158, 230, 180, 0.7);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
    }
  }
  @media (max-width: 600px) {
    padding: 1.2rem;
    gap: 0.8rem;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.89rem;
    }
  }
`;
export const AuthorityNote = styled.p`
  margin: 0.1rem 0.15rem 0;
  color: #bfdbfe;
  font-size: 0.9rem;
  line-height: 1.45;
  @media (min-width: 1024px) and (max-height: 800px) {
    font-size: 0.88rem;
    line-height: 1.42;
  }
`;
export const FitSection = styled.section`
  padding: clamp(4rem, 5vw, 4.75rem) 0;
  text-align: center;
  .${SectionLead.styledComponentId} {
    max-width: 760px;
    margin: 0 auto;
  }
  .conclusion {
    max-width: 680px;
    margin: 1.5rem auto 0;
    color: #475569;
    line-height: 1.55;
    font-size: 0.96rem;
  }
  @media (max-width: 1440px) {
    padding: clamp(3rem, 4vw, 3.75rem) 0;
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    padding: clamp(2.5rem, 3.5vw, 3.25rem) 0;
  }
  @media (max-width: 600px) {
    padding: clamp(2.5rem, 10vw, 3rem) 0;
    text-align: left;
    .${SectionLead.styledComponentId} h2 {
      font-size: clamp(1.75rem, 8vw, 2rem);
      line-height: 1.18;
    }
    .conclusion {
      margin: 1.25rem 0 0;
      font-size: 0.94rem;
      line-height: 1.55;
    }
  }
`;
export const FitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.15rem;
  margin-top: 1.8rem;
  text-align: left;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.95rem;
    margin-top: 1.45rem;
  }
`;
export const FitCard = styled.div<{ $neutral?: boolean }>`
  padding: 1.4rem 1.5rem;
  border: 1px solid ${({ $neutral }) => ($neutral ? '#e2e8f0' : '#bfdbfe')};
  border-radius: 12px;
  background: ${({ $neutral }) => ($neutral ? '#f8fafc' : '#f8fbff')};
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
  > svg {
    display: block;
    color: ${({ $neutral }) => ($neutral ? '#64748b' : '#1e7f4f')};
    font-size: 1.35rem;
    margin-bottom: 0.65rem;
  }
  h3 {
    color: #1a2e4a;
    margin: 0 0 0.7rem;
    font-size: 1.05rem;
    line-height: 1.35;
  }
  li {
    display: flex;
    gap: 0.5rem;
    margin: 0.55rem 0;
    color: #475569;
    line-height: 1.45;
    font-size: 0.9rem;
  }
  li svg {
    min-width: 16px;
    margin-top: 3px;
    color: ${({ $neutral }) => ($neutral ? '#64748b' : '#1e7f4f')};
    font-size: 1rem;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: ${({ $neutral }) => ($neutral ? '#cbd5e1' : '#93c5fd')};
      box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
    }
  }
  @media (max-width: 600px) {
    padding: 1.2rem;
    h3 {
      font-size: 1.02rem;
      margin-bottom: 0.6rem;
    }
    li {
      font-size: 0.9rem;
      margin: 0.5rem 0;
    }
  }
`;
export const FitCta = styled.button`
  min-height: 44px;
  margin: 1rem auto 0;
  padding: 0.45rem 0;
  border: 0;
  background: none;
  color: #1557b0;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #0f3d7a;
  }
  &:focus-visible {
    outline: 3px solid #1557b0;
    outline-offset: 3px;
  }
  @media (max-width: 600px) {
    margin: 1rem 0 0;
    text-align: left;
  }
`;
export const Implementation = styled.section`
  padding: clamp(3.5rem, 4.5vw, 4.25rem) 0;
  .${SectionLead.styledComponentId} {
    max-width: 900px;
    text-align: center;
    margin: 0 auto;
    h2 {
      max-width: 920px;
      margin: 0 0 1rem;
      font-size: clamp(2.5rem, 3vw, 3rem);
      line-height: 1.12;
    }
    p {
      max-width: 880px;
      margin: 0 auto;
      font-size: 1rem;
      line-height: 1.55;
    }
    p + p {
      margin-top: 0.6rem;
    }
  }
  .support {
    font-size: 0.94rem;
  }
  @media (max-width: 1440px) {
    padding: clamp(2.75rem, 3.8vw, 3.5rem) 0;
    .${SectionLead.styledComponentId} {
      max-width: 860px;
      h2 {
        max-width: 840px;
        font-size: clamp(2.25rem, 2.8vw, 2.6rem);
      }
      p {
        max-width: 840px;
      }
    }
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    padding: clamp(2.25rem, 3vw, 2.75rem) 0;
    .${SectionLead.styledComponentId} {
      h2 {
        max-width: 800px;
        margin-bottom: 0.75rem;
        font-size: clamp(2.125rem, 2.6vw, 2.35rem);
      }
      p {
        font-size: 0.96rem;
        line-height: 1.5;
      }
      p + p {
        margin-top: 0.45rem;
      }
    }
  }
  @media (min-width: 1024px) and (max-height: 680px) {
    padding: 2rem 0 2.25rem;
    .${SectionLead.styledComponentId} h2 {
      font-size: clamp(2rem, 2.45vw, 2.25rem);
    }
  }
  @media (max-width: 600px) {
    padding: clamp(2.5rem, 10vw, 3rem) 0;
    .${SectionLead.styledComponentId} {
      text-align: left;
    }
    .support {
      font-size: 0.93rem;
    }
  }
`;
export const ProjectTitle = styled.h3`
  margin: 1.4rem 0 1.15rem;
  color: #1a2e4a;
  font-size: clamp(1.5rem, 2vw, 1.75rem);
  line-height: 1.2;
  text-align: center;
  @media (min-width: 1024px) and (max-height: 800px) {
    margin: 1.15rem 0 1rem;
    font-size: clamp(1.45rem, 1.8vw, 1.65rem);
  }
  @media (max-width: 600px) {
    margin: 1.35rem 0 1rem;
    text-align: left;
    font-size: 1.2rem;
  }
`;
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.35rem 1.25rem;
  article {
    padding: 1rem 1.1rem 0.8rem;
    border-top: 3px solid #1e7f4f;
    background: #f8fafc;
  }
  b {
    color: #1e7f4f;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
  }
  h3 {
    color: #1a2e4a;
    font-size: 1.08rem;
    line-height: 1.3;
    margin: 0.5rem 0 0.35rem;
  }
  p {
    color: #475569;
    font-size: 0.92rem;
    line-height: 1.48;
    margin: 0;
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    gap: 1.25rem 1.1rem;
    article {
      padding: 0.9rem 1rem 0.7rem;
    }
    h3 {
      margin: 0.45rem 0 0.3rem;
      font-size: 1.04rem;
    }
    p {
      font-size: 0.88rem;
      line-height: 1.45;
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    article {
      padding: 1.15rem 1.2rem;
    }
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
export const ImplementationNote = styled.p`
  max-width: 940px;
  margin: 1.4rem auto 0;
  color: #64748b;
  font-size: 0.93rem;
  line-height: 1.45;
  text-align: center;
  @media (min-width: 1024px) and (max-height: 800px) {
    margin-top: 1.2rem;
    font-size: 0.88rem;
    line-height: 1.42;
  }
  @media (max-width: 600px) {
    text-align: left;
    margin-top: 0.9rem;
    font-size: 0.89rem;
  }
`;
export const ImplementationCta = styled.button`
  min-height: 44px;
  display: block;
  margin: 1.15rem auto 0;
  padding: 0.45rem 0;
  border: 0;
  background: none;
  color: #1557b0;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #0f3d7a;
  }
  &:focus-visible {
    outline: 3px solid #1557b0;
    outline-offset: 3px;
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    margin: 1rem 0 0;
    text-align: left;
  }
`;
export const CaseSection = styled.section`
  margin-top: clamp(4rem, 5vw, 4.75rem);
  padding: clamp(3.5rem, 5vw, 4.75rem) clamp(1.5rem, 4vw, 4rem);
  background: #f0fdf4;
  border-top: 1px solid #bbf7d0;
  border-bottom: 1px solid #bbf7d0;
  .${Eyebrow.styledComponentId} {
    color: #16613c;
  }
  @media (max-width: 1440px) {
    padding: clamp(3rem, 4vw, 3.75rem) clamp(1.5rem, 3vw, 3rem);
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    padding: clamp(2.5rem, 3.5vw, 3.25rem) clamp(1.5rem, 3vw, 2.5rem);
  }
  @media (max-width: 600px) {
    margin-top: clamp(2.5rem, 10vw, 3rem);
    padding: clamp(2.5rem, 10vw, 3rem) 1rem;
  }
`;
export const CaseLayout = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  grid-template-areas: 'intro testimonial' 'actions testimonial';
  column-gap: clamp(2.25rem, 4vw, 3.5rem);
  row-gap: 1rem;
  align-items: center;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'intro' 'testimonial' 'actions';
    gap: 1rem;
  }
`;
export const CaseIntro = styled.div`
  grid-area: intro;
  h2 {
    max-width: 460px;
    color: #1a2e4a;
    margin: 0.15rem 0 0.8rem;
    font-size: clamp(2rem, 2.7vw, 2.6rem);
    line-height: 1.15;
    text-wrap: balance;
  }
  p {
    max-width: 460px;
    margin: 0;
    color: #475569;
    font-size: 0.96rem;
    line-height: 1.6;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: clamp(1.75rem, 8vw, 2rem);
      line-height: 1.18;
    }
  }
`;
export const TestimonialCard = styled.div`
  grid-area: testimonial;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  background: white;
  border: 1px solid #dbeafe;
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.07);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
  blockquote {
    position: relative;
    margin: 0;
    color: #334155;
    font-size: 1rem;
    line-height: 1.72;
    font-style: normal;
    &:before {
      content: '“';
      display: block;
      color: #1e7f4f;
      font-size: 2rem;
      line-height: 0.7;
      margin-bottom: 0.45rem;
    }
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: #bfdbfe;
      box-shadow: 0 14px 28px rgba(15, 23, 42, 0.1);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition:
      border-color 220ms ease,
      box-shadow 220ms ease;
    &:hover {
      transform: none;
    }
  }
  @media (max-width: 600px) {
    padding: 1.25rem;
    blockquote {
      font-size: 0.95rem;
      line-height: 1.65;
    }
  }
`;
export const TestimonialIdentity = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e2e8f0;
  img {
    width: 60px;
    height: 60px;
    flex: none;
    object-fit: cover;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.12rem;
  }
  strong {
    color: #1a2e4a;
    font-size: 0.98rem;
  }
  span {
    color: #64748b;
    font-size: 0.86rem;
    line-height: 1.4;
  }
  @media (max-width: 600px) {
    margin-top: 1.35rem;
    padding-top: 1.15rem;
    gap: 0.75rem;
    img {
      width: 52px;
      height: 52px;
    }
  }
`;
export const CaseActions = styled.div`
  grid-area: actions;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 0.2rem;
  button {
    min-height: 46px;
  }
  a {
    color: #1557b0;
    font-size: 0.94rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #0f3d7a;
    }
    &:focus-visible {
      outline: 3px solid #1557b0;
      outline-offset: 3px;
    }
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  @media (max-width: 600px) {
    align-items: stretch;
    button {
      width: 100%;
    }
  }
`;
export const CtaActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.2rem;
    border: 1px solid currentColor;
    border-radius: 8px;
    color: #1557b0;
    font-weight: 700;
    text-decoration: none;
  }
`;
export const FormArea = styled.section`
  scroll-margin-top: 100px;
  max-width: 820px;
  margin: ${sectionSpace} auto 0;
  padding: 0 0.25rem;
  .${SectionLead.styledComponentId} {
    text-align: center;
    margin: 0 auto 1.5rem;
  }
`;
export const FaqSection = styled.section`
  padding: ${sectionSpace} 0 clamp(3rem, 4vw, 4rem);
  .${SectionLead.styledComponentId} {
    text-align: center;
    margin: 0 auto 1.5rem;
  }
  details {
    max-width: 820px;
    margin: 0 auto;
    border-bottom: 1px solid #e2e8f0;
    padding: 0.95rem 0.2rem;
  }
  summary {
    cursor: pointer;
    color: #1a2e4a;
    font-weight: 700;
    list-style: none;
    padding-right: 2rem;
    position: relative;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary:after {
    content: '+';
    position: absolute;
    right: 0.2rem;
    color: #1557b0;
    font-size: 1.3rem;
  }
  details[open] summary:after {
    content: '−';
  }
  p {
    color: #475569;
    line-height: 1.65;
    font-size: 0.92rem;
    margin: 0.8rem 0 0.2rem;
  }
  @media (max-width: 600px) {
    padding-bottom: 2.5rem;
  }
`;
export const FinalCta = styled.section`
  margin-top: 0;
  text-align: center;
  background: #102a43;
  color: white;
  padding: clamp(3.25rem, 3.5vw, 3.75rem) 1.5rem;
  > div {
    max-width: 1200px;
    margin: 0 auto;
  }
  h2 {
    max-width: 840px;
    margin: 0 auto 0.9rem;
    font-size: clamp(2rem, 2.6vw, 2.75rem);
    line-height: 1.12;
    text-wrap: balance;
  }
  p {
    max-width: 720px;
    margin: 0 auto;
    color: #dbeafe;
    font-size: 1.05rem;
    line-height: 1.52;
  }
  .${CtaActions.styledComponentId} {
    justify-content: center;
    gap: 0.85rem;
    margin-top: 1.5rem;
  }
  .${CtaActions.styledComponentId} button,
  .${CtaActions.styledComponentId} a {
    min-height: 50px;
    padding: 0.7rem 1.75rem;
    font-size: 1rem;
  }
  a {
    color: white;
    border-color: rgba(255, 255, 255, 0.7);
    transition: background-color 200ms ease, border-color 200ms ease;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
    &:focus-visible {
      outline: 3px solid white;
      outline-offset: 3px;
    }
  }
  @media (min-width: 1024px) and (max-height: 800px) {
    padding: clamp(2.5rem, 3vw, 2.9rem) 1.5rem;
    h2 {
      max-width: 780px;
      margin-bottom: 0.75rem;
      font-size: clamp(2rem, 2.5vw, 2.35rem);
    }
    p {
      font-size: 1rem;
    }
    .${CtaActions.styledComponentId} {
      margin-top: 1.35rem;
    }
  }
  @media (min-width: 1024px) and (max-height: 680px) {
    padding: 2.15rem 1.5rem 2.35rem;
  }
  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem;
  }
  @media (max-width: 600px) {
    padding: 2.25rem 1.25rem;
    h2 {
      font-size: clamp(1.7rem, 7.5vw, 2rem);
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
    .${CtaActions.styledComponentId} {
      align-items: stretch;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 1.35rem;
    }
    .${CtaActions.styledComponentId} button,
    .${CtaActions.styledComponentId} a {
      width: 100%;
    }
  }
`;
