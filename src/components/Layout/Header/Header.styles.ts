import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  user-select: none;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px
    ${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.15)};
  transition: all 0.3s ease;
  z-index: 100;

  height: ${({ $isScrolled }) => ($isScrolled ? '70px' : '110px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ $isScrolled }) => ($isScrolled ? '100px' : '110px')};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  width: 100%;
  box-sizing: border-box;
`;

export const Image = styled.img<{ $isScrolled: boolean }>`
  height: ${({ $isScrolled }) => ($isScrolled ? '60px' : '100px')};
  width: auto;
  margin-right: 40px;
  transition: height 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ $isScrolled }) => ($isScrolled ? '45px' : '60px')};
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    display: block;
  }
`;

export const MenuContainer = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    width: 100vw;
    padding: ${({ theme }) => theme.spacing.medium} 0;
    gap: ${({ theme }) => theme.spacing.medium};
    box-shadow: 0 4px 10px
      ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.1)};

    transform: ${({ $open }) =>
      $open ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: all 0.3s ease;
  }
`;
