import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background:
    radial-gradient(
      circle at center,
      rgba(15,23,42,0.72),
      rgba(2,6,23,0.92)
    );

  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;

  padding: 24px;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 900px;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 24px;

  overflow: hidden;

  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 18px;
  right: 18px;

  width: 52px;
  height: 52px;

  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);

  background: rgba(15,23,42,0.82);

  backdrop-filter: blur(10px);

  color: #fff;

  font-size: 1.5rem;

  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  z-index: 10;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: scale(1.08);

    background: rgba(249,115,22,0.95);

    border-color: rgba(255,255,255,0.2);
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

    border: none;
  }
`;
