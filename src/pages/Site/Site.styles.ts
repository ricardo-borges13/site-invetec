// Site.styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
`;

export const Tag = styled.div`
  display: inline-flex;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.12)};
  border: 1px solid ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.3)};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
`;

export const Section = styled.section`
  margin-bottom: 5rem;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    max-width: 760px;
    margin: 0 auto 1.2rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
  }
`;

export const Highlight = styled.section`
  background: linear-gradient(
    135deg,
    #fff7ed,
    #ffedd5
  );

  border: 1px solid ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.25)};
  border-radius: 24px;
  padding: 4rem 2rem;
  margin-bottom: 5rem;
`;

export const Warning = styled.section`
  background: linear-gradient(
    180deg,
    #eff6ff,
    #ffffff
  );

  border: 1px solid #bfdbfe;
  border-radius: 24px;
  padding: 4rem 2rem;
  margin-bottom: 5rem;
  text-align: center;

  h2 {
    color: #1d4ed8;
  }

  p {
    max-width: 760px;
    margin: 0 auto 1rem;
    line-height: 1.8;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 18px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.15)};
  transition: all 0.3s ease;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.15rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(0,0,0,0.08);
  }
`;

export const TechnologySection = styled.section`
  margin-bottom: 5rem;
  text-align: center;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }
`;

export const TechInfo = styled.p`
  margin-top: 2rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.7)};
`;

export const ProjectSection = styled.section`
  margin-bottom: 5rem;
  text-align: center;
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 3rem;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    padding: 2rem;
    text-align: left;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    display: grid;
    gap: 0.8rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const RegionSection = styled.section`
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 760px;
    margin: 0 auto 1rem;
    line-height: 1.8;
  }
`;

export const Steps = styled.div`
  display: grid;
  gap: 16px;
  max-width: 700px;
  margin: 2rem auto 0;

  div {
    background: white;
    border-radius: 12px;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const FormArea = styled.section`
  margin-top: 4rem;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    #eff6ff,
    #dbeafe
  );

  border-radius: 24px;
  text-align: center;
  border: 1px solid #bfdbfe;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const QuestionBox = styled.section`
  background: white;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-bottom: 5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);

  span {
    font-size: 2rem;
  }

  h2 {
    margin: 1rem 0;
    font-size: clamp(2rem, 4vw, 2.8rem);
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

export const List = styled.ul`
  margin-top: 2rem;
  display: inline-grid;
  gap: 0.8rem;
  text-align: left;

  li {
    list-style: none;
  }
`;

export const ProjectImageLink = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;
