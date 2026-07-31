import { FaWhatsapp } from 'react-icons/fa';
import * as S from './WhatsAppButton.styles';

type WhatsAppButtonProps = {
  phone: string;
  message?: string;
  hidden?: boolean;
};

export const WhatsAppButton = ({ phone, message, hidden = false }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <S.Container $hidden={hidden} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </S.Container>
  );
};
