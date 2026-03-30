import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, #0f3d63, #0a2540);
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 24px 40px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 0.95rem;

  a {
    color: #cbd5e1;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span{
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1.8;
    font-size: 0.95rem;
    font-weight: 600;

      svg {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }


`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
    font-size: 0.95rem;
    font-weight: 600;

  li {
    margin-bottom: 10px;
  }

  a {
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;

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
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.whatsappGreen};
      transform: scale(1.15);
    }
  }
`;

export const Copy = styled.div`
  text-align: center;
  margin-top: 56px;
  padding-top: 16px;

  border-top: 1px solid rgba(255, 255, 255, 0.1);

  font-size: 0.85rem;
  color: #94a3b8;
`;
