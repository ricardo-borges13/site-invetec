
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Wrapper,
  Embla,
  EmblaContainer,
  EmblaSlide,
  Navigation,
  NavButton,
  Dots,
  Dot,
} from './Depoimentos.styles';

import { VideoModal } from './VideoModal';

import avatar1 from '@/assets/images/Depoimentos/Avatar1.png';
import avatar2 from '@/assets/images/Depoimentos/Avatar2.png';
import avatar3 from '@/assets/images/Depoimentos/Avatar3.png';
import avatar4 from '@/assets/images/Depoimentos/Avatar4.png';
import avatar5 from '@/assets/images/Depoimentos/Avatar5.png';
import avatar6 from '@/assets/images/Depoimentos/Avatar6.png';
import { DepoimentosCard } from './DepoimentosCard';


export interface Depoimento {
  id: number;
  name: string;
  company: string;
  role?: string;
  testimonial: string;
  avatar?: string;
  videoUrl?: string;
}

const depoimentosMock: Depoimento[] = [
  {
    id: 1,
    name: 'Elizeu Condé',
    company: 'JCL Empilhadeiras',
    role: 'Diretor Comercial',
    testimonial:
      'Os equipamentos entregues superaram nossas expectativas. As empilhadeiras trouxeram mais agilidade para a movimentação interna e aumentaram muito nossa produtividade.',
    avatar: avatar1,

  },
  {
    id: 2,
    name: 'Ariadina Santos',
    company: 'Catellar Móveis',
    role: 'Gerente de Marketing',
    testimonial:
      'Os maquinários adquiridos melhoraram significativamente nosso processo de produção. Tivemos mais precisão nos cortes e redução no tempo de fabricação.',
    avatar: avatar2,

  },
  {
    id: 3,
    name: 'Marcos Silva',
    company: 'Itatiaia Móveis',
    role: 'Gerente Operacional',
    testimonial:
      'A qualidade dos equipamentos e o suporte prestado fizeram toda diferença na nossa operação industrial. Hoje temos mais eficiência e segurança na linha de produção.',
    avatar: avatar3,

  },
  {
    id: 4,
    name: 'Simone Teixeira',
    company: 'Modecor',
    role: 'Diretora',
    testimonial:
      'Os equipamentos atenderam perfeitamente às necessidades da nossa fábrica. Conseguimos otimizar processos e aumentar nossa capacidade produtiva.',
    avatar: avatar4,

  },
  {
    id: 5,
    name: 'Marcos Silva',
    company: 'Distripack',
    role: 'Gerente Operacional',
    testimonial:
      'Além da excelente qualidade dos maquinários, o atendimento foi rápido e muito profissional. Tivemos um ótimo retorno no desempenho da produção.',
    avatar: avatar5,

  },
  {
    id: 6,
    name: 'Rosânela Maria',
    company: 'Paropas',
    role: 'Coordenadora',
    testimonial:
      'As soluções fornecidas ajudaram bastante na organização e movimentação de materiais dentro da fábrica. Equipamentos robustos e extremamente confiáveis.',
    avatar: avatar6,

  },
];

export const Depoimentos = () => {
  const [selectedVideo, setSelectedVideo] =
    useState<string | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 7000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);

    onSelect();
  }, [emblaApi]);

  return (
    <>
      <Wrapper>
        <Embla ref={emblaRef}>
          <EmblaContainer>
            {depoimentosMock.map(item => (
              <EmblaSlide key={item.id}>
                <DepoimentosCard
                  testimonial={item}
                  onOpenVideo={setSelectedVideo}
                />
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </Embla>

        <Navigation>
          <NavButton onClick={scrollPrev}>
            ‹
          </NavButton>

          <Dots>
            {depoimentosMock.map((_, index) => (
              <Dot
                key={index}
                $active={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </Dots>

          <NavButton onClick={scrollNext}>
            ›
          </NavButton>
        </Navigation>
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
