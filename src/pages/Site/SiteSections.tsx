import { FormContactSite } from '@/components/FormContactSite/FormContactSite';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { FaReact } from 'react-icons/fa';
import {
  FiArrowLeft,
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiGlobe,
  FiLayout,
  FiMaximize2,
  FiMessageCircle,
  FiMonitor,
  FiSearch,
  FiSmartphone,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import { SiNextdotjs } from 'react-icons/si';
import { projects, siteFaqs, type Project } from './Site.data';
import * as S from './Site.styles';

const benefits = [
  {
    icon: FiSearch,
    title: 'Preparado para o Google',
    description:
      'SEO técnico para ajudar o site a ser encontrado nas pesquisas.',
  },
  {
    icon: FiZap,
    title: 'Alta performance',
    description: 'Carregamento rápido e navegação estável.',
  },
  {
    icon: FiSmartphone,
    title: 'Responsivo em todos os dispositivos',
    description: 'Experiência adequada em computador, tablet e celular.',
  },
  {
    icon: FiMessageCircle,
    title: 'Preparado para gerar contatos',
    description: 'Formulários, WhatsApp e chamadas para ação.',
  },
  {
    icon: FiBarChart2,
    title: 'Preparado para Google Ads',
    description: 'Estrutura para anunciar e medir os contatos gerados.',
  },
];

const problems = [
  {
    icon: FiMonitor,
    title: 'Visual pouco profissional',
    description: 'Reduz a confiança na empresa.',
  },
  {
    icon: FiZap,
    title: 'Carregamento lento',
    description: 'Faz o visitante abandonar a página.',
  },
  {
    icon: FiSmartphone,
    title: 'Experiência ruim no celular',
    description: 'Prejudica a navegação e o contato.',
  },
  {
    icon: FiLayout,
    title: 'Serviços pouco claros',
    description: 'O cliente não entende rapidamente a oferta.',
  },
  {
    icon: FiMessageCircle,
    title: 'Contato difícil',
    description: 'A oportunidade comercial é perdida.',
  },
  {
    icon: FiSearch,
    title: 'Pouca visibilidade no Google',
    description: 'A empresa não aparece para quem está procurando.',
  },
];

const deliverables = [
  {
    icon: FiLayout,
    title: 'Planejamento da estrutura',
    text: 'Páginas, serviços, conteúdo e chamadas para ação organizados conforme os objetivos da empresa.',
  },
  {
    icon: FiMonitor,
    title: 'Design profissional',
    text: 'Layout personalizado e coerente com a identidade e o posicionamento da empresa.',
  },
  {
    icon: FiSmartphone,
    title: 'Responsividade',
    text: 'Experiência adequada em computador, tablet e celular.',
  },
  {
    icon: FiSearch,
    title: 'SEO técnico',
    text: 'Títulos, descrições, páginas e conteúdo organizados para facilitar a leitura do Google.',
  },
  {
    icon: FiZap,
    title: 'Performance',
    text: 'Imagens, carregamento e estabilidade visual otimizados.',
  },
  {
    icon: FiMessageCircle,
    title: 'Geração de contatos',
    text: 'Formulários, WhatsApp e chamadas para facilitar pedidos de orçamento.',
  },
  {
    icon: FiBarChart2,
    title: 'Integração com o Google',
    text: 'Preparação para Analytics, Tag Manager, Search Console e medição de contatos, conforme o escopo.',
  },
  {
    icon: FiGlobe,
    title: 'Publicação e acompanhamento',
    text: 'Domínio, rotas, formulários, indexação e funcionamento validados.',
  },
];

const processSteps = [
  ['Diagnóstico', 'Entendimento da empresa, público, serviços e objetivos.'],
  ['Planejamento', 'Definição de páginas, conteúdo e estrutura comercial.'],
  ['Design', 'Criação e aprovação da identidade visual da página.'],
  ['Desenvolvimento', 'Programação, responsividade e integrações.'],
  ['SEO e validação', 'Otimização técnica, testes e revisão.'],
  ['Publicação', 'Entrada em produção e acompanhamento inicial.'],
];

const whyItems = [
  {
    icon: FiUsers,
    title: 'Experiência empresarial',
    text: 'Mais de 20 anos atuando com tecnologia, sistemas, infraestrutura e suporte para empresas.',
  },
  {
    icon: FiTrendingUp,
    title: 'Visão além do layout',
    text: 'O projeto considera posicionamento, atendimento, operação, geração de contatos e crescimento.',
  },
  {
    icon: FiMessageCircle,
    title: 'Acompanhamento próximo',
    text: 'A empresa participa do planejamento, das revisões, da publicação e do início da operação do site.',
  },
];

const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  document.querySelector(event.currentTarget.hash)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export const HeroActions = () => {
  return (
    <MotionReveal distance={20} duration={1.45} direction="left">
      <S.HeroActions>
        <S.PrimaryAnchor href="#site-orcamento" onClick={scrollToSection}>
          Solicitar análise e orçamento
        </S.PrimaryAnchor>
        <S.SecondaryAnchor href="#site-projetos" onClick={scrollToSection}>
          Ver projetos desenvolvidos
        </S.SecondaryAnchor>
        <S.HeroTrust>
          Atendimento em todo Brasil <span>•</span> Projeto sob medida{' '}
          <span>•</span> Formulário e WhatsApp integrados
        </S.HeroTrust>
      </S.HeroActions>
    </MotionReveal>
  );
};

export const BenefitsBar = () => (
  <S.BenefitsBar aria-label="Benefícios do serviço de criação de sites">
    {benefits.map(({ icon: Icon, title, description }, index) => (
      <MotionReveal
        key={title}
        delay={index * 0.08}
        distance={20}
        duration={0.45}
      >
        <S.Benefit>
          <Icon aria-hidden="true" />

          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </S.Benefit>
      </MotionReveal>
    ))}
  </S.BenefitsBar>
);

export const ProjectsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const hasMultipleProjects = projects.length > 1;

  const scrollProjects = useCallback((direction: number) => {
    const viewport = carouselRef.current;

    if (!viewport) return;

    const firstCard = viewport.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const styles = window.getComputedStyle(viewport);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
    const step = firstCard.offsetWidth + gap;

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const nextPosition = viewport.scrollLeft + step * direction;

    if (direction > 0 && viewport.scrollLeft >= maxScroll - 4) {
      viewport.scrollTo({
        left: 0,
        behavior: 'smooth',
      });

      return;
    }

    if (direction < 0 && nextPosition <= 0) {
      viewport.scrollTo({
        left: maxScroll,
        behavior: 'smooth',
      });

      return;
    }

    viewport.scrollBy({
      left: step * direction,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (!hasMultipleProjects || isPaused) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    autoplayRef.current = setInterval(() => {
      scrollProjects(1);
    }, 8000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [hasMultipleProjects, isPaused, scrollProjects]);

  const openProjectImage = (project: Project, trigger: HTMLButtonElement) => {
    openerRef.current = trigger;
    setIsPaused(true);
    setSelectedProject(project);
  };

  const closeProjectImage = () => {
    setSelectedProject(null);
    setIsPaused(false);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  const handleLightboxKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      closeProjectImage();
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      closeButtonRef.current?.focus();
    }
  };

  return (
    <S.Section id="site-projetos">
      <MotionReveal distance={20} duration={0.85}>
        <S.SectionHeading>
          <span>PORTFÓLIO</span>

          <h2>Sites desenvolvidos para empresas reais</h2>

          <p>
            Conheça alguns projetos planejados e desenvolvidos pela INVETEC.
          </p>
        </S.SectionHeading>
      </MotionReveal>

      <MotionReveal delay={0.08} distance={20} duration={0.85}>
        <S.CarouselWrap
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          {hasMultipleProjects && (
            <S.CarouselButton
              type="button"
              aria-label="Ver projeto anterior"
              onClick={() => scrollProjects(-1)}
            >
              <FiArrowLeft aria-hidden="true" />
            </S.CarouselButton>
          )}

          <S.CarouselViewport
            ref={carouselRef}
            aria-label="Projetos desenvolvidos"
          >
            {projects.map(project => (
              <S.ProjectCard key={project.name}>
                <S.ProjectImageButton
                  type="button"
                  onClick={event =>
                    openProjectImage(project, event.currentTarget)
                  }
                  aria-label={`Ampliar imagem do projeto ${project.name}`}
                >
                  <S.ProjectImage>
                    <img
                      src={project.image}
                      alt={`Prévia do site desenvolvido para ${project.name}`}
                      width={720}
                      height={1150}
                      loading="lazy"
                    />
                    <S.ProjectZoomIcon aria-hidden="true">
                      <FiMaximize2 />
                    </S.ProjectZoomIcon>
                  </S.ProjectImage>
                </S.ProjectImageButton>

                <S.ProjectContent>
                  <span>{project.segment}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <ul>
                    {project.highlights.map(highlight => (
                      <li key={highlight}>
                        <FiCheck aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {project.url && (
                    <S.ProjectLink
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar site
                      <FiArrowRight aria-hidden="true" />
                    </S.ProjectLink>
                  )}
                </S.ProjectContent>
              </S.ProjectCard>
            ))}
          </S.CarouselViewport>

          {hasMultipleProjects && (
            <S.CarouselButton
              type="button"
              aria-label="Ver próximo projeto"
              onClick={() => scrollProjects(1)}
            >
              <FiArrowRight aria-hidden="true" />
            </S.CarouselButton>
          )}
        </S.CarouselWrap>
      </MotionReveal>
      {selectedProject &&
        createPortal(
          <S.LightboxOverlay
            onMouseDown={event =>
              event.target === event.currentTarget && closeProjectImage()
            }
          >
            <S.LightboxDialog
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-lightbox-title"
              onKeyDown={handleLightboxKeyDown}
              onMouseDown={event => event.stopPropagation()}
            >
              <S.LightboxHeader>
                <h2 id="project-lightbox-title">{selectedProject.name}</h2>
                <S.LightboxClose
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeProjectImage}
                  aria-label="Fechar visualização ampliada"
                >
                  ×
                </S.LightboxClose>
              </S.LightboxHeader>
              <S.LightboxImageWrap>
                <S.LightboxImage
                  src={selectedProject.fullImage ?? selectedProject.image}
                  alt={`Visualização ampliada do site desenvolvido para ${selectedProject.name}`}
                  loading="eager"
                />
              </S.LightboxImageWrap>
            </S.LightboxDialog>
          </S.LightboxOverlay>,
          document.body
        )}
    </S.Section>
  );
};

export const ProblemsSection = () => (
  <S.ProblemsSection>
    <MotionReveal direction="left" distance={20} duration={0.45}>
      <S.ProblemsCopy>
        <span>SEU SITE ATUAL</span>
        <h2>
          Seu site gera oportunidades — ou apenas ocupa espaço na internet?
        </h2>
        <p>
          Ter um site não significa ter uma presença digital eficiente. Ele
          precisa explicar claramente o que sua empresa faz, transmitir
          confiança, funcionar bem no celular e facilitar o contato de
          potenciais clientes.
        </p>
        <p>
          Quando isso não acontece, o visitante sai sem entender a proposta da
          empresa e a oportunidade comercial é perdida.
        </p>
        <S.TextAnchor href="#site-orcamento">
          Quero transformar meu site <FiArrowRight aria-hidden="true" />
        </S.TextAnchor>
      </S.ProblemsCopy>
    </MotionReveal>
    <MotionReveal direction="right" delay={0.08} distance={20} duration={0.45}>
      <S.ProblemList>
        {problems.map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </S.ProblemList>
    </MotionReveal>
  </S.ProblemsSection>
);

export const DeliverablesSection = () => (
  <S.Section id="site-incluido">
    <MotionReveal distance={20} duration={0.45}>
    <S.DeliverablesHeading>
      <span>ESTRUTURA COMPLETA</span>
      <h2>
        Tudo que sua empresa precisa para ter uma presença digital profissional
      </h2>
    </S.DeliverablesHeading>
    </MotionReveal>
    <S.DeliverablesGrid>
      {deliverables.map(({ icon: Icon, title, text }, index) => (
        <MotionReveal key={title} delay={(index % 4) * 0.05} distance={20} duration={0.45}>
          <S.DeliverableCard tabIndex={0}>
            <Icon aria-hidden="true" />
            <div><h3>{title}</h3><p>{text}</p></div>
          </S.DeliverableCard>
        </MotionReveal>
      ))}
    </S.DeliverablesGrid>
    <MotionReveal delay={0.1} distance={20} duration={0.45}>
      <S.DeliverablesCta href="#site-orcamento" onClick={scrollToSection}>
        Quero transformar meu site <FiArrowRight aria-hidden="true" />
      </S.DeliverablesCta>
    </MotionReveal>
  </S.Section>
);

export const TechnologyHighlight = () => (
  <S.TechnologyHighlight>
    <MotionReveal direction="left" distance={20} duration={0.45}>
      <S.TechnologyVisual>
        <FaReact aria-hidden="true" />
        <SiNextdotjs aria-hidden="true" />
      </S.TechnologyVisual>
    </MotionReveal>
    <MotionReveal direction="right" delay={0.1} distance={80} duration={0.45}>
      <div>
        <span>TECNOLOGIA INVETEC</span>
        <h2>Tecnologia moderna para um site preparado para evoluir</h2>
        <p>
          A INVETEC desenvolve seus projetos principalmente com React e Next.js,
          tecnologias modernas utilizadas para criar sites rápidos, organizados
          e preparados para crescer junto com a empresa.
        </p>
        <p>
          O React foi criado pela Meta e é utilizado em produtos digitais como
          Facebook e Instagram. Já o Next.js complementa essa base com recursos
          voltados a performance, organização e SEO. Quando o projeto exige uma
          solução específica ou uma administração mais simples de conteúdo,
          outras tecnologias, como WordPress, também podem ser consideradas.
        </p>
      </div>
    </MotionReveal>
  </S.TechnologyHighlight>
);

export const GoogleAdsBonus = () => (
  <MotionReveal distance={20} duration={2}>
    <S.GoogleAdsSection aria-labelledby="google-ads-bonus-title">
      <S.GoogleAdsBadge>
        <FiTarget aria-hidden="true" />
        BÔNUS EXCLUSIVO
      </S.GoogleAdsBadge>
      <h2 id="google-ads-bonus-title">Bônus exclusivo na contratação</h2>
      <p>
        Consultoria inicial e configuração da conta Google Ads para divulgar o
        novo site e alcançar pessoas que já estão procurando pelos seus produtos
        ou serviços no Google.
      </p>
      <S.BonusCard>
        <ul>
          {[
            'Consultoria inicial sobre Google Ads',
            'Criação ou configuração inicial da conta',
            'Orientação sobre região, orçamento e palavras-chave',
            'Configuração de uma conversão principal',
            'Validação inicial do funcionamento',
          ].map(item => (
            <li key={item}>
              <FiCheck aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <small>
          O investimento em mídia e a gestão contínua das campanhas não estão
          incluídos no desenvolvimento do site e podem ser contratados
          separadamente.
        </small>
      </S.BonusCard>
    </S.GoogleAdsSection>
  </MotionReveal>
);

export const WhyInvetec = () => (
  <S.Section>
    <MotionReveal distance={20} duration={0.45}>
      <S.WhyHeading>
        <span>PARCERIA DE NEGÓCIO</span>
        <h2>Mais do que desenvolvimento de sites</h2>
        <p>Aqui você não contrata apenas alguém para montar páginas.</p>
      </S.WhyHeading>
    </MotionReveal>
    <S.WhyGrid>
      {whyItems.map(({ icon: Icon, title, text }, index) => (
        <MotionReveal
          key={title}
          delay={index * 0.08}
          distance={20}
          duration={0.45}
        >
          <S.WhyCard>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </S.WhyCard>
        </MotionReveal>
      ))}
    </S.WhyGrid>
  </S.Section>
);

export const ProcessTimeline = () => (
  <S.Section id="site-processo">
    <MotionReveal distance={20} duration={0.45}>
      <S.ProcessHeading>
        <span>PROCESSO CLARO</span>
        <h2>Como funciona o desenvolvimento do seu site</h2>
      </S.ProcessHeading>
    </MotionReveal>
    <S.ProcessGrid>
      {processSteps.map(([title, text], index) => (
        <MotionReveal
          key={title}
          delay={index * 0.05}
          distance={20}
          duration={0.45}
        >
          <S.ProcessStep key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </S.ProcessStep>
        </MotionReveal>
      ))}
    </S.ProcessGrid>
    <MotionReveal delay={0.1} distance={20} duration={0.45}>
      <S.DeliverablesCta href="#site-orcamento" onClick={scrollToSection}>
        Quero transformar meu site <FiArrowRight aria-hidden="true" />
      </S.DeliverablesCta>
    </MotionReveal>
  </S.Section>
);

export const SiteFaq = () => (
  <S.Section id="site-faq">
    <MotionReveal distance={80} duration={0.45}>
      <S.SectionHeading>
        <span>DÚVIDAS FREQUENTES</span>
        <h2>Perguntas frequentes</h2>
      </S.SectionHeading>
    </MotionReveal>
    <MotionReveal delay={0.08} distance={20} duration={0.45}>
    <S.FaqList>
  {siteFaqs.map(({ question, answer }) => (
    <details key={question}>
      <summary>
        {question}
        <FiArrowRight aria-hidden="true" />
      </summary>

      <S.FaqAnswer>
        {Array.isArray(answer) ? (
          answer.map((paragraph, index) => (
            <p key={`${question}-${index}`}>{paragraph}</p>
          ))
        ) : (
          <p>{answer}</p>
        )}
      </S.FaqAnswer>
    </details>
  ))}
</S.FaqList>
    </MotionReveal>
  </S.Section>
);

export const SiteBudgetForm = () => (
  <S.FormArea id="site-orcamento">
    <MotionReveal>
      <S.SectionHeading>
        <span>VAMOS CONVERSAR</span>
        <h2>Vamos estruturar o site ideal para sua empresa?</h2>
        <p>
          Preencha as informações e vamos analisar a melhor estrutura digital
          para o seu negócio.
        </p>
      </S.SectionHeading>
      <FormContactSite />
    </MotionReveal>
  </S.FormArea>
);
