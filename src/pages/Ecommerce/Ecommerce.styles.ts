import styled from 'styled-components';

export const Container = styled.main`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 72px;

  @media (max-width: 1440px) {
    padding: 52px 0 60px;
  }

  @media (max-width: 768px) {
    width: min(100% - 32px, 1120px);
    padding: 44px 0 52px;
  }

  @media (max-width: 430px) {
    width: min(100% - 24px, 1120px);
    padding: 36px 0 44px;
  }
`;

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const IntroSection = styled.section`
  max-width: 860px;
  margin: 0 auto 64px;
  text-align: center;

  h2 {
    margin: 0 0 18px;
    color: ${({ theme }) => theme.colors.black};
    font-size: clamp(1.75rem, 3vw, 2.4rem);
    font-weight: 750;
    line-height: 1.15;
  }

  p {
    max-width: 760px;
    margin: 0 auto 10px;
    color: #4b5563;
    font-size: 1.02rem;
    line-height: 1.7;
  }

  @media (max-width: 1440px) {
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    margin-bottom: 44px;

    h2 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.98rem;
      line-height: 1.6;
    }
  }
`;

export const ButtonGroup = styled.div<{ $align?: 'left' | 'center' }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $align = 'center' }) =>
    $align === 'left' ? 'flex-start' : 'center'};
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 520px) {
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`;

export const BenefitsSection = styled.section`
  margin-bottom: 64px;

  @media (max-width: 1440px) {
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    margin-bottom: 44px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 30px;
  text-align: center;

  h2 {
    margin: 0 0 12px;
    color: ${({ theme }) => theme.colors.black};
    font-size: clamp(1.7rem, 2.7vw, 2.2rem);
    font-weight: 750;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: #5b6472;
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 600px) {
    margin-bottom: 24px;

    h2 {
      font-size: 1.55rem;
    }
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  > * {
    height: 100%;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const BenefitCard = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  height: 100%;
  padding: 24px;
  border: 1px solid #e6ebf1;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 112, 224, 0.22);
    box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
  }

  h3 {
    margin: 1px 0 8px;
    color: #162236;
    font-size: 1.15rem;
    font-weight: 750;
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: #5c6675;
    font-size: 0.95rem;
    line-height: 1.55;
  }

  @media (max-width: 1440px) {
    padding: 21px;
  }

  @media (max-width: 430px) {
    gap: 13px;
    padding: 19px 17px;
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  flex: 0 0 46px;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(0, 112, 224, 0.08);

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
  }
`;

export const PlatformSection = styled.section`
  margin-bottom: 64px;

  @media (max-width: 1440px) {
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    margin-bottom: 44px;
  }
`;

export const PlatformContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 46px;
  align-items: center;
  padding: 42px;
  border: 1px solid #dcefe3;
  border-radius: 18px;
  background: linear-gradient(135deg, #f3fbf6 0%, #e7f8ed 100%);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: 1440px) {
    padding: 34px;
  }

  @media (max-width: 600px) {
    gap: 24px;
    padding: 26px 20px;
    border-radius: 15px;
  }
`;

export const PlatformIntro = styled.div`
  h2 {
    margin: 0 0 14px;
    color: #132033;
    font-size: clamp(1.65rem, 2.5vw, 2.15rem);
    font-weight: 750;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: #4c5b54;
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.52rem;
    }
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.article`
  display: flex;
  gap: 11px;
  padding: 16px;
  border: 1px solid rgba(20, 120, 67, 0.11);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.72);

  h3 {
    margin: 0 0 4px;
    color: #173026;
    font-size: 0.98rem;
    font-weight: 750;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: #5b6b63;
    font-size: 0.88rem;
    line-height: 1.5;
  }
`;

export const CheckIcon = styled.span`
  display: inline-flex;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #ffffff;
  background: #1e8e52;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1;
`;

export const ShowcaseSection = styled.section`
  margin-bottom: 64px;

  @media (max-width: 1440px) {
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    margin-bottom: 44px;
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;

  .carousel {
    overflow: hidden;
    border: 1px solid #e3e8ef;
    border-radius: 18px;
    background: #f5f7fa;
    box-shadow: 0 16px 42px rgba(15, 23, 42, 0.09);
  }

  .carousel-item {
    padding: 24px 68px 48px;
    text-align: center;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 56px;
    opacity: 1;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: rgba(10, 35, 65, 0.78);
    background-size: 48% 48%;
  }

  .carousel-indicators {
    bottom: 12px;
    margin-bottom: 0;
  }

  .carousel-indicators [data-bs-target] {
    width: 28px;
    height: 4px;
    margin-right: 4px;
    margin-left: 4px;
    border: 0;
    border-radius: 4px;
    background-color: #8e9bad;
    opacity: 0.38;
  }

  .carousel-indicators .active {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }

  @media (max-width: 700px) {
    .carousel-item {
      padding: 18px 42px 44px;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: 38px;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 29px;
      height: 29px;
    }
  }

  @media (max-width: 430px) {
    .carousel {
      border-radius: 14px;
    }

    .carousel-item {
      padding: 14px 34px 42px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-item {
      transition: none;
    }
  }
`;

export const StorePreview = styled.div`
  overflow: hidden;
  border: 1px solid #dce2e9;
  border-radius: 12px;
  background: #ffffff;

  img {
    display: block;
    width: 100%;
    max-height: 560px;
    object-fit: contain;
    object-position: top center;
    background: #ffffff;
  }

  @media (max-width: 1440px) {
    img {
      max-height: 430px;
    }
  }

  @media (max-width: 700px) {
    img {
      max-height: 470px;
    }
  }

  @media (max-width: 430px) {
    img {
      max-height: 440px;
    }
  }
`;

export const BrowserBar = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  border-bottom: 1px solid #e5e9ee;
  background: #f1f3f6;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #aab3bf;
  }
`;

export const StoreLabel = styled.p`
  margin: 13px 0 0;
  color: #27354a;
  font-size: 0.92rem;
  font-weight: 750;
`;

export const ImplementationSection = styled.section`
  margin-bottom: 64px;

  @media (max-width: 1440px) {
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    margin-bottom: 44px;
  }
`;

export const ImplementationGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  gap: 42px;
  align-items: center;
  padding: 42px;
  border: 1px solid #e1e7ef;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: 1440px) {
    padding: 34px;
  }

  @media (max-width: 600px) {
    gap: 24px;
    padding: 26px 20px;
    border-radius: 15px;
  }
`;

export const ImplementationContent = styled.div`
  h2 {
    margin: 0 0 14px;
    color: #142033;
    font-size: clamp(1.65rem, 2.5vw, 2.15rem);
    font-weight: 750;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: #596474;
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.52rem;
    }
  }
`;

export const ImplementationList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 11px;
    min-height: 48px;
    padding: 11px 14px;
    border: 1px solid #e8ecf1;
    border-radius: 11px;
    color: #354154;
    background: #f8fafc;
    font-size: 0.96rem;
    line-height: 1.45;
  }
`;

export const FinalCTA = styled.section`
  padding: 46px 32px;
  border-radius: 18px;
  color: #ffffff;
  background: linear-gradient(135deg, #0b4f91 0%, #0874c9 100%);
  box-shadow: 0 18px 42px rgba(8, 79, 145, 0.2);
  text-align: center;

  ${Eyebrow} {
    color: #bfe3ff;
  }

  h2 {
    max-width: 760px;
    margin: 0 auto 12px;
    color: #ffffff;
    font-size: clamp(1.75rem, 2.8vw, 2.3rem);
    font-weight: 750;
    line-height: 1.2;
  }

  p {
    max-width: 720px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.86);
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 600px) {
    padding: 34px 20px;
    border-radius: 15px;

    h2 {
      font-size: 1.55rem;
    }
  }
`;
