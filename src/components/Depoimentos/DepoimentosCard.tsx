import { FiPlay } from 'react-icons/fi';
import type { Testimonial } from './Depoimentos.data';
import {
  Author,
  AuthorImage,
  Card,
  Identification,
  QuoteIcon,
  Rating,
  Services,
  TestimonialText,
  VideoButton,
} from './DepoimentosCard.styles';

type DepoimentosCardProps = {
  testimonial: Testimonial;
  onOpenVideo: (videoUrl: string) => void;
};

export const DepoimentosCard = ({
  testimonial,
  onOpenVideo,
}: DepoimentosCardProps) => {
  const image = testimonial.avatar ?? testimonial.companyLogo;
  const rating = testimonial.rating
    ? Math.min(5, Math.max(0, testimonial.rating))
    : 0;

  return (
    <Card>
      <QuoteIcon aria-hidden="true">“</QuoteIcon>
      <TestimonialText>
        <blockquote>{testimonial.testimonial}</blockquote>
      </TestimonialText>
      <Author>
        {image && <AuthorImage src={image} alt={testimonial.imageAlt ?? ''} />}
        <Identification>
          <strong>{testimonial.name}</strong>
          {(testimonial.role || testimonial.company) && (
            <cite>
              {[testimonial.role, testimonial.company]
                .filter(Boolean)
                .join(' · ')}
            </cite>
          )}
          {rating > 0 && (
            <Rating aria-label={`${rating} de 5 estrelas`}>
              {'★'.repeat(rating)}
            </Rating>
          )}
        </Identification>
      </Author>
      {testimonial.services && testimonial.services.length > 0 && (
        <Services aria-label="Soluções utilizadas">
          {testimonial.services.map(service => (
            <li key={service}>{service}</li>
          ))}
        </Services>
      )}
      {testimonial.videoUrl && (
        <VideoButton
          type="button"
          onClick={() => onOpenVideo(testimonial.videoUrl!)}
        >
          <FiPlay aria-hidden="true" />
          Assistir depoimento
        </VideoButton>
      )}
    </Card>
  );
};
