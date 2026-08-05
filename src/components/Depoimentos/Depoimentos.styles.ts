import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Embla = styled.div`
  overflow: hidden;
  padding: 4px 0 8px;
`;

export const EmblaContainer = styled.div`
  display: flex;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 50%;
  min-width: 0;
  padding: 0 10px;

  @media (max-width: 900px) {
    flex-basis: 100%;
    padding: 0;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;
`;

export const NavButton = styled.button`
  display: inline-grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid rgba(0, 123, 255, 0.28);
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightPrimary};
  cursor: pointer;
  font-size: 1.25rem;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;

  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.35);
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.42;
  }

  @media (hover: hover) and (pointer: fine) {
    &:not(:disabled):hover {
      background: #f2f7ff;
      border-color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '22px' : '8px')};
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'rgba(26, 46, 74, 0.22)'};
  cursor: pointer;
  transition: width 0.25s ease, background 0.25s ease;

  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.35);
    outline-offset: 3px;
  }
`;
