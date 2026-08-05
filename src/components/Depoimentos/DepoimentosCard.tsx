import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

import {
  Card,
  QuoteIcon,
  Header,
  Avatar,
  UserInfo,
  Stars,
  TestimonialText,
  VideoButton,
} from './DepoimentosCard.styles';

import type { Depoimento } from './Depoimentos';

type Props = {
  testimonial: Depoimento;
  onOpenVideo: (url: string) => void;
};

export const DepoimentosCard = ({
  testimonial,
  onOpenVideo,
}: Props) => {
  return (
    <Card
      as={motion.div}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <QuoteIcon>“</QuoteIcon>

      <Header>
        {testimonial.avatar && (
          <Avatar
            src={testimonial.avatar}
            alt={testimonial.name}
          />
        )}

        <UserInfo>
          <h3>{testimonial.name}</h3>

          <span>
            {testimonial.role && `${testimonial.role} — `}
            {testimonial.company}
          </span>

          <Stars>★★★★★</Stars>
        </UserInfo>
      </Header>

      <TestimonialText>
        {testimonial.testimonial}
      </TestimonialText>

      {testimonial.videoUrl && (
        <VideoButton
          onClick={() =>
            onOpenVideo(testimonial.videoUrl!)
          }
        >
          <FaPlay />
          Assistir depoimento
        </VideoButton>
      )}
    </Card>
  );
};
