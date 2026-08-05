import { useEffect } from 'react';
import {
  CloseButton,
  ModalContent,
  Overlay,
  VideoWrapper,
} from './VideoModal.styles';

type VideoModalProps = { videoUrl: string; onClose: () => void };

export const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <Overlay role="presentation" onClick={onClose}>
      <ModalContent
        role="dialog"
        aria-modal="true"
        aria-label="Depoimento em vídeo"
        onClick={event => event.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label="Fechar vídeo">
          ×
        </CloseButton>
        <VideoWrapper>
          <iframe src={videoUrl} title="Depoimento em vídeo" allowFullScreen />
        </VideoWrapper>
      </ModalContent>
    </Overlay>
  );
};
