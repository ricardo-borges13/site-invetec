import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(6px);
`;
export const ModalContent = styled.div`
  position: relative;
  width: min(900px, 100%);
  overflow: hidden;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.white};
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background: rgba(26, 46, 74, 0.9);
  color: #fff;
  cursor: pointer;
  font-size: 1.45rem;
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
`;
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
