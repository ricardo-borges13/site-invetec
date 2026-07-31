import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';

export const Portal = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    display: block;
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  }
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 900;
  background: rgba(10, 37, 64, 0.56);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 240ms ease;

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 901;
  display: flex;
  flex-direction: column;
  width: min(88vw, 380px);
  height: 100vh;
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f8fafc;
  box-shadow: -16px 0 40px rgba(10, 37, 64, 0.18);
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 240ms ease;

  @media (max-width: 390px) { width: 94vw; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const DrawerHeader = styled.div`
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid #e2e8f0;
  background: #fff;
`;

export const Logo = styled.img`
  display: block;
  width: auto;
  height: 44px;
`;

export const CloseButton = styled.button`
  display: inline-grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #eff6ff;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;

  svg { width: 22px; height: 22px; }
  &:hover { background: #dbeafe; }
  &:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 2px; }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 14px;
`;

const itemStyles = `
  position: relative;
  display: flex;
  width: 100%;
  min-height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border: 0;
  border-radius: 11px;
  color: #1e293b;
  background: transparent;
  font: inherit;
  font-size: 0.97rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover { color: #005fc6; background: #eff6ff; }
  &:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 2px; }
`;

const activeStyles = `
  color: #005fc6;
  background: #eaf4ff;
  font-weight: 700;

  &::before {
    position: absolute;
    top: 11px;
    bottom: 11px;
    left: 0;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background: #007bff;
    content: '';
  }
`;

export const NavigationLink = styled(Link)<{ $active: boolean }>`
  ${itemStyles}
  ${({ $active }) => $active && activeStyles}
`;

export const NavigationButton = styled.button<{ $active: boolean }>`
  ${itemStyles}
  ${({ $active }) => $active && activeStyles}
`;

export const NavigationGroup = styled.div``;

export const ServicesButton = styled.button<{ $active: boolean }>`
  ${itemStyles}
  ${({ $active }) => $active && activeStyles}

`;

export const Chevron = styled(FiChevronDown)<{ $open: boolean }>`
  width: 20px;
  height: 20px;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0')});
  transition: transform 180ms ease;
`;

export const Submenu = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  margin: 4px 0 2px 13px;
  border-left: 1px solid #cbd5e1;
  transition: grid-template-rows 200ms ease;

  > * { min-height: 0; overflow: hidden; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export const SubmenuContent = styled.div``;

export const SubmenuLink = styled(Link)<{ $active: boolean }>`
  position: relative;
  display: block;
  margin: 3px 0 3px 10px;
  padding: 10px 12px;
  border-radius: 9px;
  color: ${({ $active }) => ($active ? '#005fc6' : '#475569')};
  background: ${({ $active }) => ($active ? '#eaf4ff' : 'transparent')};
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  line-height: 1.35;
  text-decoration: none;

  &:hover { color: #005fc6; background: #eff6ff; }
  &:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 2px; }
`;

export const Signature = styled.p`
  margin: auto 18px max(20px, env(safe-area-inset-bottom));
  padding-top: 18px;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.78rem;
  line-height: 1.5;
`;
