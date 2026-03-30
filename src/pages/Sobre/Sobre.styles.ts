import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 60px auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

export const Intro = styled.div`
  max-width: 750px;
  margin: 0 auto 80px;
  text-align: center;

  h2 {
    font-size: 2.4rem;
  font-weight: 700;
  }

 p:not(.highlight) {
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;

export const Highlight = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

export const Block = styled.section`
  margin-bottom: 80px;
  text-align: center;

  p {
    max-width: 700px;
    margin: 0 auto 20px;
    line-height: 1.6;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin-top: 20px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

export const Grid3 = styled.div`
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #007bff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  transition: 0.3s;

&:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}
`;

export const SolutionCard = styled.div`
  background: white;
  border: 1px solid #007bff;
  padding: 24px;
  border-radius: 16px;
  text-align: left;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  font-weight: 500;

  transition: 0.3s;

&:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}
`;

export const CTA = styled.div`
  margin-top: 100px;
  padding: 70px 20px;
  text-align: center;

  background: linear-gradient(135deg, #1e3a8a, #2563eb);
  color: white;

  border-radius: 20px;

  h2 {
    font-size: 1.8rem;
  }

  p {
    margin: 15px 0 25px;
    opacity: 0.9;
  }

  a {
    display: inline-block;
    background: #22c55e;
    padding: 14px 30px;
    border-radius: 999px;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    background: #16a34a;
  }
`;

export const SectionAlt = styled.section`
  background: #f8fafc;
  padding: 80px 20px;
  border-radius: 20px;
`;
