import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from './Depoimentos.data';
import {
  Dot,
  Dots,
  Embla,
  EmblaContainer,
  EmblaSlide,
  NavButton,
  Navigation,
  Wrapper,
} from './Depoimentos.styles';
import { DepoimentosCard } from './DepoimentosCard';
import { VideoModal } from './VideoModal';

export const Depoimentos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: testimonials.length > 2, skipSnaps: false },
    testimonials.length > 1 ? [autoplay.current] : []
  );

  const updateControls = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateControls();
    emblaApi.on('select', updateControls);
    emblaApi.on('reInit', updateControls);
    return () => {
      emblaApi.off('select', updateControls);
      emblaApi.off('reInit', updateControls);
    };
  }, [emblaApi, updateControls]);

  const showControls = scrollSnaps.length > 1;
  return (
    <>
      <Wrapper aria-label="Depoimentos de clientes">
        <Embla ref={emblaRef}>
          <EmblaContainer>
            {testimonials.map(testimonial => (
              <EmblaSlide key={testimonial.id}>
                <DepoimentosCard
                  testimonial={testimonial}
                  onOpenVideo={setSelectedVideo}
                />
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </Embla>
        {showControls && (
          <Navigation aria-label="Controles do carrossel de depoimentos">
            <NavButton
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Ver depoimentos anteriores"
            >
              <FiChevronLeft aria-hidden="true" />
            </NavButton>
            <Dots>
              {scrollSnaps.map((_, index) => (
                <Dot
                  key={index}
                  type="button"
                  $active={index === selectedIndex}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Ir para a página ${index + 1} de ${scrollSnaps.length}`}
                  aria-current={index === selectedIndex ? 'true' : undefined}
                />
              ))}
            </Dots>
            <NavButton
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Ver próximos depoimentos"
            >
              <FiChevronRight aria-hidden="true" />
            </NavButton>
          </Navigation>
        )}
      </Wrapper>
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};
