import { motion } from 'framer-motion';
import { useEffect } from 'react';

import {
  Overlay,
  ModalContent,
  CloseButton,
  VideoWrapper,
} from './VideoModal.styles';

type Props = {
  videoUrl: string;
  onClose: () => void;
};

export const VideoModal = ({ videoUrl, onClose }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <Overlay
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        as={motion.div}
        initial={{ y: 20, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.96, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>✕</CloseButton>

        <VideoWrapper>
          <iframe src={videoUrl} title="Depoimento" allowFullScreen />
        </VideoWrapper>
      </ModalContent>
    </Overlay>
  );
};
