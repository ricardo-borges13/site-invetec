import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
`;

export const Embla = styled.div`
  overflow-x: hidden;
  overflow-y: visible;

  padding: 8px 0;
`;

export const EmblaContainer = styled.div`
  display: flex;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 50%;

  min-width: 0;

  padding: 0 10px;

  @media (max-width: 1440px) {
    flex: 0 0 50%;
    padding: 0 8px;
  }

  @media (max-width: 1024px) {
    flex: 0 0 100%;
    padding: 0;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  margin-top: 18px;

  @media (max-width: 1440px) {
    margin-top: 14px;
  }
`;

export const NavButton = styled.button`
  width: 42px;
  height: 42px;

  border-radius: 50%;
  border: none;

  background: #ffffff;

  color: #111827;

  font-size: 1rem;

  cursor: pointer;

  box-shadow:
    0 8px 24px rgba(0,0,0,0.12);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) =>
    $active ? '24px' : '8px'};

  height: 8px;

  border: none;

  border-radius: 999px;

  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(90deg, #f97316, #fb923c)'
      : 'rgba(255,255,255,0.22)'};

  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 10px rgba(249,115,22,0.4)'
      : 'none'};

  transition:
    width 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
