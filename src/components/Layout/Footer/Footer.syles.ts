import styled from 'styled-components';

const linkStyle = `
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
`;

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, #0f3d63, #0a2540);
  color: ${({ theme }) => theme.colors.white};
  padding: 30px 24px 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }

    @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); // tablet
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // mobile
    text-align: center;
  }
`;

export const Section = styled.div``;

export const LogoImage = styled.img`
  height: 90px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
`;

export const Text = styled.p`
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 0.95rem;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #cbd5e1;
  font-size: 0.95rem;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    margin-bottom: 12px;

    svg {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    ${linkStyle}
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;

  li {
    margin-bottom: 10px;
  }

  a {
    ${linkStyle}
    display: inline-block;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateX(4px);
    }
  }
`;

export const Social = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }

  a {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.whatsappGreen};
      transform: scale(1.15);
    }
  }
`;

export const Copy = styled.div`
  text-align: center;
  margin-top: 36px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  color: #94a3b8;
`;
