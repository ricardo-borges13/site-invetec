import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 1.9rem;
  }

  @media (max-width: 1112px) {
    gap: 1.8rem;
  }

  @media (max-width: 1074px) {
    gap: 1.6rem;
  }

  @media (max-width: 1020px) {
    gap: 1.3rem;
  }

  @media (max-width: 1002px) {
    gap: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.2rem;
  }

  @media (max-width: 794px) {
    align-items: center;
    gap: 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }

  @media (max-width: 400px) {
    gap: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: 350px) {
    gap: 0.9rem;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

   &:hover > a::before {
    width: 100%;
  }

  &:hover > a::before {
    width: 100%;
  }

  /* Ajuste para mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    display: block;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};

  font-weight: 800;
  transition: color 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 0%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 990px) {
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    color: ${({ theme }) => theme.colors.white};
    display: block;
    width: 100%;
    padding: 0.6rem 0;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Submenu = styled.ul<{ $isOpen?: boolean }>`
  list-style: none;
  background: #ffffff;
  border-radius: 12px;

  /* 🔥 MELHOR SOMBRA */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

  padding: 8px 0;

  /* 🔥 RESOLVE QUEBRA DE TEXTO */
  min-width: 280px;

  z-index: 1000;
  position: absolute;
  top: calc(100% - 10px);
  left: 0;

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-8px)'};

  transition: all 0.25s ease;

  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  /* MOBILE */
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    position: static;
    background: transparent;
    box-shadow: none;
    min-width: unset;
    padding: 0 20px;
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    overflow: hidden;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: none;
  }
`;

export const SubmenuItem = styled.li`
  padding: 0;


  a {
    display: block;
    padding: 12px 20px;

    color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)};
    text-decoration: none;

    font-weight: 600;

    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

    position: relative;

    /* 🔥 NÃO QUEBRA TEXTO */
    white-space: nowrap;

    &:hover {
      background: #eff6ff;
      color: ${({ theme }) => theme.colors.primary};
      
    }

    /* 🔥 BARRA LATERAL (UX TOP) */
    &:hover::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
    }

    @media (max-width: 774px) {
      white-space: normal;
      padding: 0.4rem 0;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background: none;
        color: ${({ theme }) => theme.colors.secondary};
        transform: none;
      }

      &::before {
        display: none;
      }
    }
  }
`;
