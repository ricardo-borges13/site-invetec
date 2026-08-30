import infrastructureImage from '@/assets/images/CTA2.webp';
import supportImage from '@/assets/images/e-mail-zimbra.jpg';
import logoInvetecMail from '@/assets/images/INVETEC-Mail-Branco.png';
import heroImage from '@/assets/images/PagesHero-Email-v4.jpg';
import imageAgenda from '@/assets/images/Zimbra-Agenda.webp';
import imageArquivosFull from '@/assets/images/Zimbra-Arquivos-Full.webp';
import imageArquivos from '@/assets/images/Zimbra-Arquivos.webp';
import imageChat from '@/assets/images/Zimbra-Chat.webp';
import imageContatosFull from '@/assets/images/Zimbra-Contato-Full.webp';
import imageContatos from '@/assets/images/Zimbra-Contato.webp';
import imageAgendaFull from '@/assets/images/Zimbra-Full-Agenda.webp';
import imageChatFull from '@/assets/images/Zimbra-Full-Chat.webp';
import imageZimbraFull from '@/assets/images/Zimbra-Mail-Full.webp';
import imageZimbra from '@/assets/images/Zimbra-Mail.webp';
import imageMeetFull from '@/assets/images/Zimbra-Meet-Full.webp';
import imageMeet from '@/assets/images/Zimbra-Meet.webp';
import imagePreferencesFull from '@/assets/images/Zimbra-Preferencia-Full.webp';
import imagePreferences from '@/assets/images/Zimbra-Preferencia.webp';
import imageZimbraTarefasFull from '@/assets/images/Zimbra-Tarefa-Full.webp';
import imageZimbraTarefas from '@/assets/images/Zimbra-Tarefa.webp';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import {
  type MouseEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { IconType } from 'react-icons';
import {
  FiArrowLeft,
  FiArrowRight,
  FiArchive,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiDollarSign,
  FiGrid,
  FiHeadphones,
  FiInfo,
  FiKey,
  FiLock,
  FiMail,
  FiMessageCircle,
  FiSearch,
  FiServer,
  FiSettings,
  FiShield,
  FiSliders,
  FiSmartphone,
  FiTarget,
  FiTrendingUp,
  FiUploadCloud,
  FiUsers,
  FiVideo,
} from 'react-icons/fi';

import * as S from './Zimbra.styles';

type ComparisonView = 'hosting' | 'invetec' | 'suites';

type ComparisonRow = {
  criterion: string;
  icon: IconType;
  hosting: string;
  invetec: string;
  suites: string;
};

type SupportItem = {
  title: string;
  text: string;
  icon: IconType;
};

type FeatureSlide = {
  id: string;
  label: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  fullImage: string;
  availabilityNote?: string;
  highlightNote?: string;
};

type ControlFeatureStatus = 'included' | 'conditional' | 'additional';
type InfrastructureMobileGroup = 'primary' | 'secondary';

type ControlFeature = {
  title: string;
  text: string;
  tag: string;
  status: ControlFeatureStatus;
  icon: IconType;
  featured?: boolean;
  supportText?: string;
  actionLabel?: string;
};

type InfrastructureItem = {
  label: string;
  mobileGroup: InfrastructureMobileGroup;
};

type FaqItem = {
  question: string;
  answer: string;
};

const positioningComparisonRows: ComparisonRow[] = [
  {
    criterion: 'Foco principal',
    icon: FiTarget,
    hosting: 'Menor custo por conta',
    invetec: 'E-mail corporativo com colaboração e suporte',
    suites: 'Suíte completa de produtividade',
  },
  {
    criterion: 'Webmail profissional',
    icon: FiMail,
    hosting: 'Simples',
    invetec: 'Sim, completo e personalizável',
    suites: 'Sim, completo',
  },
  {
    criterion: 'Calendário e agenda',
    icon: FiCalendar,
    hosting: 'Limitado ou básico',
    invetec: 'Sim, compartilhado*',
    suites: 'Sim, integrado',
  },
  {
    criterion: 'Pastas e contas compartilhadas',
    icon: FiUsers,
    hosting: 'Limitado',
    invetec: 'Sim*',
    suites: 'Sim',
  },
  {
    criterion: 'Chat interno',
    icon: FiMessageCircle,
    hosting: 'Geralmente não',
    invetec: 'Sim, chat integrado',
    suites: 'Sim',
  },
  {
    criterion: 'Videoconferência',
    icon: FiVideo,
    hosting: 'Geralmente não',
    invetec: 'Sim*',
    suites: 'Sim, integrada',
  },
  {
    criterion: 'Sincronização avançada',
    icon: FiSmartphone,
    hosting: 'Limitada',
    invetec: 'Sim, ActiveSync no plano Professional*',
    suites: 'Sim, nativo',
  },
  {
    criterion: 'Suporte',
    icon: FiHeadphones,
    hosting: 'Suporte da plataforma',
    invetec: 'Suporte especializado INVETEC',
    suites: 'Suporte do fornecedor / parceiro',
  },
  {
    criterion: 'Custo',
    icon: FiDollarSign,
    hosting: 'Baixo',
    invetec: 'Intermediário (excelente custo-benefício)',
    suites: 'Mais alto',
  },
];

const supportItems: SupportItem[] = [
  {
    title: 'Diagnóstico do ambiente atual',
    text: 'Análise da estrutura, usuários, dispositivos e serviço utilizado.',
    icon: FiSearch,
  },
  {
    title: 'Implantação personalizada',
    text: 'Contas, grupos, aliases e permissões conforme a rotina da empresa.',
    icon: FiSettings,
  },
  {
    title: 'Migração assistida',
    text: 'Planejamento da transferência das mensagens e configurações.',
    icon: FiUploadCloud,
  },
  {
    title: 'Configuração dos dispositivos',
    text: 'Acesso pelo navegador, celular e programas de e-mail compatíveis.',
    icon: FiSmartphone,
  },
  {
    title: 'Suporte humanizado',
    text: 'Atendimento próximo e acesso remoto autorizado quando necessário.',
    icon: FiHeadphones,
  },
];

const featureSlides: FeatureSlide[] = [
  {
    id: 'email',
    label: 'E-mail',
    title: 'Caixa de entrada organizada',
    description:
      'Organize mensagens com pastas, filtros e recursos de busca em uma interface profissional, acessível pelo navegador e compatível com programas de e-mail como Outlook.',
    benefits: [
      'Interface corporativa e organizada',
      'Mais de uma conta no mesmo painel',
      'Acesso 100% web, de qualquer lugar',
      'Pastas compartilhadas para equipes',
      'Histórico completo das conversas com clientes',
    ],
    highlightNote:
      'A equipe acompanha mensagens enviadas e recebidas em sequência, sabe o que já foi tratado e reduz respostas duplicadas.',
    image: imageZimbra,
    fullImage: imageZimbraFull,
  },
  {
    id: 'contatos',
    label: 'Contatos',
    title: 'Contatos centralizados',
    description:
      'Organize contatos pessoais, corporativos e listas de distribuição em um único ambiente, com acesso facilitado pela equipe e possibilidade de importar ou exportar dados.',
    benefits: [
      'Contatos pessoais e corporativos organizados',
      'Listas de distribuição para envios em grupo',
      'Importação e exportação de contatos',
      'Compatibilidade com formatos usados pelo Outlook',
      'Informações acessíveis e compartilháveis pela equipe',
    ],
    highlightNote:
      'Os contatos importantes deixam de ficar dispersos em agendas individuais e passam a compor uma base organizada para clientes, fornecedores e parceiros.',
    image: imageContatos,
    fullImage: imageContatosFull,
  },
  {
    id: 'calendario',
    label: 'Calendário',
    title: 'Calendários compartilhados',
    description:
      'Centralize reuniões, compromissos e atividades da equipe em agendas individuais e compartilhadas, com mais controle sobre horários e responsabilidades.',
    benefits: [
      'Agendas individuais e compartilhadas',
      'Convites, confirmações e lembretes',
      'Visualização da disponibilidade da equipe',
      'Menos conflitos e compromissos duplicados',
      'Acesso pelo navegador e dispositivos compatíveis',
    ],
      highlightNote:
      'A equipe visualiza os compromissos em um único ambiente, encontra horários disponíveis e reduz desencontros na organização da rotina.',
    image: imageAgenda,
    fullImage: imageAgendaFull,
  },

  {
    id: 'tarefas',
    label: 'Tarefas',
    title: 'Tarefas organizadas e lembretes',
    description:
      'Registre atividades importantes ou pequenas pendências, defina prazos e receba lembretes para não depender de anotações espalhadas ou da memória.',
    benefits: [
      'Tarefas importantes e pequenas pendências em um só lugar',
      'Prazos, prioridades, status e lembretes',
      'Organização por listas e marcadores',
      'Transforme um e-mail diretamente em tarefa',
      'Acompanhe o que está pendente, em andamento ou concluído',
    ],
    highlightNote:
      'Solicitações recebidas por e-mail podem ser transformadas em tarefas, evitando que atividades importantes fiquem esquecidas na caixa de entrada.',
    image: imageZimbraTarefas,
    fullImage: imageZimbraTarefasFull,
  },
  {
    id: 'arquivos',
    label: 'Arquivos',
    title: 'Arquivos corporativos no próprio e-mail',
    description:
      'Centralize documentos importantes da empresa, organize pastas por setor e compartilhe arquivos com usuários autorizados diretamente no ambiente do INVETEC Mail.',
    benefits: [
      'Documentos e arquivos centralizados',
      'Pastas compartilhadas por equipe ou departamento',
      'Controle de acesso aos materiais',
      'Visualização e edição de documentos compatíveis pelo navegador',
      'Menos anexos duplicados e versões dispersas',
    ],
      highlightNote:
      'Contratos, dados cadastrais, manuais, instaladores e materiais internos ficam disponíveis em um único local para os usuários autorizados.',
    image: imageArquivos,
    fullImage: imageArquivosFull,
  },
  {
    id: 'chat',
    label: 'Chat',
    title: 'Chat interno para a equipe',
    description:
      'Centralize conversas profissionais entre funcionários dentro do INVETEC Mail, facilitando alinhamentos rápidos e reduzindo a dependência de aplicativos pessoais.',
    benefits: [
      'Mensagens diretas entre colaboradores',
      'Canais organizados por setor, projeto ou assunto',
      'Visualização de usuários disponíveis',
      'Histórico das conversas de trabalho',
      'Comunicação integrada ao ambiente corporativo',
    ],
    highlightNote:
      'Assuntos internos deixam de ficar espalhados em grupos pessoais e passam a ser tratados em um canal corporativo integrado à rotina da empresa.',
    image: imageChat,
    fullImage: imageChatFull,
  },
  {
    id: 'reunioes',
    label: 'Reuniões',
    title: 'Videoconferência integrada ao INVETEC Mail',
    description:
      'Reuniões online no mesmo ambiente da sua equipe',
    benefits: [
      'Criação e acesso a reuniões pelo navegador',
      'Chamadas de vídeo individuais ou em grupo',
      'Compartilhamento de tela durante a reunião',
      'Envio de arquivos e mensagens no ambiente de colaboração',
      'Histórico e organização das reuniões realizadas',
    ],
      highlightNote:
      'A equipe pode conversar, compartilhar a tela e trocar arquivos sem sair do ambiente corporativo de comunicação.',
    image: imageMeet,
    fullImage: imageMeetFull,
    availabilityNote:
      'Disponibilidade conforme o plano, integração e configuração contratada.',
  },
  {
    id: 'preferencias',
    label: 'Preferências',
    title: 'Preferências e organização do e-mail',
    description:
      'Configure o ambiente conforme a rotina da empresa, automatize a organização das mensagens e compartilhe recursos com usuários autorizados.',
    benefits: [
      'Acesso a múltiplas contas no mesmo painel',
      'Filtros e regras automáticas para organizar mensagens',
      'Assinaturas personalizadas para novos e-mails e respostas',
      'Resposta automática para férias e ausência',
      'Compartilhamento de pastas e recursos com permissões',
    ],
    highlightNote:
      'Configurações bem definidas reduzem tarefas manuais, padronizam a comunicação e facilitam o trabalho entre usuários e departamentos.',
    image: imagePreferences,
    fullImage: imagePreferencesFull,
    availabilityNote:
      'Alguns recursos dependem do plano contratado, das permissões atribuídas e da configuração definida para cada empresa.',
  },
];

const controlFeatures: ControlFeature[] = [
  {
    title: 'Proteção antispam e contra ameaças',
    text: 'Filtros para reduzir spam, mensagens maliciosas e riscos recebidos por e-mail.',
    tag: 'Incluído',
    status: 'included',
    icon: FiShield,
  },
  {
    title: 'Gestão centralizada de contas',
    text: 'Administre usuários, senhas, aliases e grupos em um painel próprio, com suporte técnico da INVETEC quando necessário.',
    tag: 'Incluído',
    status: 'included',
    icon: FiUsers,
  },
  {
    title: 'Autenticação em dois fatores',
    text: 'Camada adicional de proteção para o acesso às contas corporativas, quando habilitada.',
    tag: 'Incluído',
    status: 'included',
    icon: FiLock,
  },
  {
    title: 'Auditoria de e-mail',
    text: 'Preserva cópias das mensagens enviadas e recebidas para pesquisa, retenção e consulta conforme a política contratada.',
    tag: 'Serviço adicional',
    status: 'additional',
    icon: FiArchive,
    featured: true,
    supportText:
      'Indicado para empresas que precisam manter o histórico das comunicações.',
    actionLabel: 'Falar com um especialista',
  },
  {
    title: 'Registros de acesso e alterações',
    text: 'Histórico técnico para acompanhar acessos e mudanças realizadas no ambiente, conforme os recursos contratados.',
    tag: 'Incluído',
    status: 'included',
    icon: FiSearch,
  },
  {
    title: 'Políticas e permissões de acesso',
    text: 'Regras e permissões ajustadas à necessidade e à estrutura da empresa.',
    tag: 'Incluído',
    status: 'included',
    icon: FiKey,
  },
];

const infrastructureItems: InfrastructureItem[] = [
  { label: '99,9% de disponibilidade', mobileGroup: 'primary' },
  { label: '5 data centers TIER III', mobileGroup: 'primary' },
  { label: 'Segurança certificada ISO 27001', mobileGroup: 'primary' },
  { label: 'Proteção antispam', mobileGroup: 'primary' },
  { label: 'Administração centralizada', mobileGroup: 'secondary' },
  { label: 'Suporte especializado', mobileGroup: 'secondary' },
  {
    label: 'Estrutura preparada para apoiar a conformidade com a LGPD',
    mobileGroup: 'secondary',
  },
  {
    label: 'Infraestrutura parceira utilizada por mais de 1.600 empresas',
    mobileGroup: 'secondary',
  },
];

const faqItems: FaqItem[] = [
   {
    question: 'O que está incluído no suporte da INVETEC?',
    answer:
      'A INVETEC atua como uma extensão da equipe de TI da sua empresa para tudo o que envolve o e-mail corporativo. O suporte pode incluir implantação, configuração de contas e dispositivos, orientação aos usuários, atendimento remoto e acompanhamento técnico das solicitações relacionadas ao serviço.',
  },
  {
    question: 'O e-mail utiliza o domínio da minha empresa?',
    answer:
      'Sim. As contas utilizam o domínio da empresa, como nome@suaempresa.com.br, reforçando a identidade profissional e a credibilidade da comunicação.',
  },
  {
    question: 'É possível migrar os e-mails antigos?',
    answer:
      'Sim. A INVETEC avalia o serviço atual, o volume de dados e a estrutura das contas para definir a estratégia de migração mais adequada.',
  },
  {
    question: 'Posso acessar pelo celular e por programas como Outlook?',
    answer:
      'O acesso pode ser realizado pelo navegador, celular e programas de e-mail compatíveis. A configuração disponível depende do plano, do dispositivo e do cliente utilizado.',
  },
  {
    question: 'Qual é o diferencial do INVETEC Mail em relação a uma hospedagem comum?',
    answer:
      'Enquanto a hospedagem comum oferece apenas caixas de e-mail básicas, o INVETEC Mail entrega uma plataforma corporativa com tecnologia Zimbra, administração centralizada, recursos de colaboração, implantação assistida e suporte técnico próximo da INVETEC.',
  },
  {
    question: 'Existe proteção contra spam e mensagens maliciosas?',
    answer:
      'A plataforma utiliza filtros antispam e recursos de proteção. Essas ferramentas reduzem riscos, mas nenhuma solução elimina completamente todas as mensagens ou ameaças.',
  },
  {
    question: 'Como o valor do serviço é calculado?',
    answer:
      'A proposta considera quantidade de contas, recursos necessários, espaço, estrutura atual e eventual necessidade de migração.',
  },
  {
    question: 'Quais recursos estão disponíveis além do e-mail?',
    answer:
      'Conforme o plano, o INVETEC Mail pode incluir calendário, contatos, tarefas, armazenamento e compartilhamento de arquivos, chat corporativo, reuniões por vídeo, administração centralizada e outros recursos de colaboração.',
  },
];

export const Zimbra = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [comparisonView, setComparisonView] =
    useState<ComparisonView>('invetec');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [isCarouselFocused, setIsCarouselFocused] = useState(false);
  const [isTouchInteracting, setIsTouchInteracting] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [autoplayRestart, setAutoplayRestart] = useState(0);

  const formRef = useRef<HTMLElement | null>(null);
  const resourcesRef = useRef<HTMLElement | null>(null);
  const touchResumeTimeoutRef = useRef<number | null>(null);

  const currentSlide = featureSlides[slideIndex];
  const currentSlideImageAlt =
    currentSlide.id === 'preferencias'
      ? 'Tela de preferências e organização do INVETEC Mail'
      : `Interface do INVETEC Mail: ${currentSlide.label}`;
  const currentSlideFullImageAlt =
    currentSlide.id === 'preferencias'
      ? 'Tela ampliada de preferências e organização do INVETEC Mail'
      : `Interface ampliada do INVETEC Mail: ${currentSlide.label}`;

  const scrollTo = (element: HTMLElement | null) => {
    element?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  };

  const scrollToForm = () => {
    scrollTo(formRef.current);
  };

  const scrollToFormFromHero = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToForm();
  };

  const scrollToResources = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(resourcesRef.current);
  };

  const changeSlide = (next: number) => {
    setSlideIndex((next + featureSlides.length) % featureSlides.length);
    setAutoplayRestart(restart => restart + 1);
  };

  const selectSlide = (next: number) => {
    setSlideIndex(next);
    setAutoplayRestart(restart => restart + 1);
  };

  const pauseForTouchInteraction = () => {
    if (touchResumeTimeoutRef.current !== null) {
      window.clearTimeout(touchResumeTimeoutRef.current);
    }

    setIsTouchInteracting(true);
  };

  const resumeAfterTouchInteraction = () => {
    if (touchResumeTimeoutRef.current !== null) {
      window.clearTimeout(touchResumeTimeoutRef.current);
    }

    touchResumeTimeoutRef.current = window.setTimeout(() => {
      setIsTouchInteracting(false);
      touchResumeTimeoutRef.current = null;
    }, 10000);
  };

  const handleCarouselPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') {
      pauseForTouchInteraction();
    }
  };

  const handleCarouselPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') {
      resumeAfterTouchInteraction();
    }
  };

  const openCurrentSlideImage = () => {
    setSelectedImage(currentSlide.fullImage);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const updatePageVisibility = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', updatePageVisibility);

    return () => {
      document.removeEventListener('visibilitychange', updatePageVisibility);
    };
  }, []);

  useEffect(() => {
    const shouldAutoplay =
      !prefersReducedMotion &&
      !isCarouselHovered &&
      !isCarouselFocused &&
      !isTouchInteracting &&
      !selectedImage &&
      isPageVisible;

    if (!shouldAutoplay) {
      return;
    }

    const autoplayTimeout = window.setTimeout(() => {
      setSlideIndex(currentIndex => (currentIndex + 1) % featureSlides.length);
    }, 7000);

    return () => {
      window.clearTimeout(autoplayTimeout);
    };
  }, [
    isCarouselFocused,
    isCarouselHovered,
    isPageVisible,
    isTouchInteracting,
    prefersReducedMotion,
    selectedImage,
    slideIndex,
    autoplayRestart,
  ]);

  useEffect(() => {
    return () => {
      if (touchResumeTimeoutRef.current !== null) {
        window.clearTimeout(touchResumeTimeoutRef.current);
      }
    };
  }, []);

  const renderFaqItem = (item: FaqItem, index: number) => {
    const isOpen = openFaq === index;
    const questionId = `faq-question-${index}`;
    const answerId = `faq-answer-${index}`;

    return (
      <article key={item.question} data-open={isOpen}>
        <button
          id={questionId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => setOpenFaq(isOpen ? null : index)}
        >
          <span>{item.question}</span>
          <FiChevronDown aria-hidden="true" />
        </button>

        <div
          id={answerId}
          role="region"
          aria-labelledby={questionId}
          aria-hidden={!isOpen}
        >
          <p>{item.answer}</p>
        </div>
      </article>
    );
  };

  return (
    <>
      <SEO
        title="E-mail Corporativo Zimbra | Mais controle e economia | INVETEC Mail"
        description="Tenha um e-mail corporativo profissional com tecnologia Zimbra. Mais organização, segurança e controle para sua empresa — sem pagar caro como Google ou Microsoft."
        image="https://www.invetec.com.br/images/SEO-Invetec-Mail.jpg"
        url="https://www.invetec.com.br/servicos/invetec-mail"
      />

      <PageHeroSection
        brandContent={
          <S.HeroBrand>
            <img src={logoInvetecMail} alt="INVETEC Mail" />
          </S.HeroBrand>
        }
        title="E-mail corporativo profissional"
        benefit="Mais controle, organização e suporte para a comunicação da sua empresa."
        allowContentOverflow
        image={heroImage}
        overlayOpacity={0.74}
        heroContent={
          <MotionReveal direction="up" delay={0.08}>
            <S.HeroActions>
              <S.HeroPrimaryButton
                href="#email-contact-form"
                onClick={scrollToFormFromHero}
              >
                Solicitar proposta
              </S.HeroPrimaryButton>

              <S.HeroSecondaryLink
                href="#invetec-mail-recursos"
                onClick={scrollToResources}
              >
                Ver recursos do INVETEC Mail
              </S.HeroSecondaryLink>

              <S.HeroTrust>
                Domínio próprio <span>•</span> Implantação e migração assistidas{' '}
                <span>•</span> Suporte técnico humanizado
              </S.HeroTrust>
            </S.HeroActions>
          </MotionReveal>
        }
      >
        <S.Container>
          <MotionReveal>
            <S.Positioning>
              <S.PositioningHeading>
                <span>POSICIONAMENTO DO INVETEC MAIL</span>

                <h2>
                  Mais recursos que o e-mail comum. Mais flexível e econômico
                  que uma suíte completa.
                </h2>

                <p>
                  O INVETEC Mail combina tecnologia Zimbra, recursos de
                  colaboração, gestão centralizada e suporte técnico da INVETEC
                  em planos ajustados à necessidade de cada empresa.
                </p>
              </S.PositioningHeading>

              <S.PositioningHighlights>
                {[
                  {
                    icon: FiTrendingUp,
                    title: 'Mais estrutura que o e-mail básico',
                    text: 'Recursos de organização, colaboração e administração que vão além de uma caixa postal simples.',
                  },
                  {
                    icon: FiSliders,
                    title: 'Planos ajustados à necessidade',
                    text: 'Business, Standard e Professional permitem escolher espaço, colaboração e sincronização conforme o perfil dos usuários.',
                  },
                  {
                    icon: FiHeadphones,
                    title: 'Suporte próximo e especializado',
                    text: 'A INVETEC acompanha implantação, migração, configuração e atendimento técnico dos usuários.',
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <S.PositioningHighlight key={title}>
                    <span>
                      <Icon />
                    </span>

                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </S.PositioningHighlight>
                ))}
              </S.PositioningHighlights>

              <S.PositioningStatement>
                <FiTrendingUp />

                <p>
                  O <strong>INVETEC Mail</strong> oferece uma estrutura
                  corporativa acima do e-mail básico e se aproxima das grandes
                  suítes em recursos de colaboração, com suporte técnico próximo
                  e planos ajustados ao perfil de cada empresa.
                </p>
              </S.PositioningStatement>

              <S.ComparisonTableContainer>
                <S.ComparisonTable>
                  <caption>
                    Comparativo de posicionamento entre e-mail básico, INVETEC
                    Mail e suítes completas.
                  </caption>

                  <thead>
                    <tr>
                      <th scope="col">Critério</th>

                      <th scope="col">
                        <S.ComparisonHeaderContent>
                          <FiMail />

                          <S.ComparisonHeaderTitle>
                            E-mail básico / hospedagem
                          </S.ComparisonHeaderTitle>
                        </S.ComparisonHeaderContent>
                      </th>

                      <th scope="col" className="invetec">
                        <S.ComparisonHeaderContent>
                          <S.ComparisonHeaderLogo
                            src={logoInvetecMail}
                            alt="Logo do INVETEC Mail"
                          />

                          <S.ComparisonHeaderSubtitle>
                            Tecnologia Zimbra
                          </S.ComparisonHeaderSubtitle>
                        </S.ComparisonHeaderContent>
                      </th>

                      <th scope="col">
                        <S.ComparisonHeaderContent>
                          <FiGrid />

                          <S.ComparisonBrandStack>
                            <S.ComparisonHeaderTitle>
                              Google Workspace
                            </S.ComparisonHeaderTitle>

                            <S.ComparisonHeaderSubtitle>
                              Microsoft 365
                            </S.ComparisonHeaderSubtitle>
                          </S.ComparisonBrandStack>
                        </S.ComparisonHeaderContent>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {positioningComparisonRows.map(
                      ({ criterion, icon: Icon, hosting, invetec, suites }) => (
                        <tr key={criterion}>
                          <th scope="row">
                            <Icon />
                            {criterion}
                          </th>

                          <td>{hosting}</td>

                          <td className="invetec">{invetec}</td>

                          <td>{suites}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </S.ComparisonTable>
              </S.ComparisonTableContainer>

              <S.ComparisonMobile>
                <S.ComparisonTabs aria-label="Escolha uma solução para comparar">
                  {(
                    [
                      ['hosting', 'Hospedagem'],
                      ['invetec', 'INVETEC Mail'],
                      ['suites', 'Google/Microsoft'],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={comparisonView === value}
                      onClick={() => setComparisonView(value)}
                    >
                      {label}
                    </button>
                  ))}
                </S.ComparisonTabs>

                <S.ComparisonMobileList>
                  {positioningComparisonRows.map(row => {
                    const Icon = row.icon;
                    const detail = row[comparisonView];

                    return (
                      <li key={row.criterion}>
                        <span>
                          <Icon />
                          {row.criterion}
                        </span>

                        <p>{detail}</p>
                      </li>
                    );
                  })}
                </S.ComparisonMobileList>
              </S.ComparisonMobile>

              <S.ComparisonNote>
                * Algumas funcionalidades do INVETEC Mail variam conforme o
                plano escolhido (Business, Standard ou Professional). A INVETEC
                recomenda a combinação ideal conforme a operação da empresa.
              </S.ComparisonNote>

              <S.InlineCta>
                <div>
                  <strong>
                    Não sabe qual plano ou combinação de recursos faz sentido para
                    sua empresa?
                  </strong>
                  <span>
                    A INVETEC avalia usuários, espaço, colaboração e sincronização
                    necessários para a operação.
                  </span>
                </div>
                <S.InlineCtaButton
                  type="button"
                  data-cta="comparacao-plano"
                  onClick={scrollToForm}
                >
                  Encontrar o plano ideal
                </S.InlineCtaButton>
              </S.InlineCta>
            </S.Positioning>
          </MotionReveal>

          <S.SupportSection>
            <MotionReveal direction="left">
              <S.SupportVisual>
                <img
                  src={supportImage}
                  alt="Profissional da INVETEC prestando suporte técnico"
                  loading="lazy"
                />

                <div>
                  <img src={logoInvetecMail} alt="INVETEC Mail" />

                  <FiHeadphones />

                  <strong>Suporte humano de verdade</strong>

                  <small>
                    Acompanhamento próximo durante implantação, configuração e
                    uso do serviço.
                  </small>
                </div>
              </S.SupportVisual>
            </MotionReveal>

            <MotionReveal direction="right" delay={0.08}>
              <S.SupportContent>
                <span>IMPLANTAÇÃO, MIGRAÇÃO E SUPORTE DA INVETEC</span>

                <h2>
                  Você não recebe só contas de e-mail. Você tem a INVETEC ao seu
                  lado.
                </h2>

                <p>
                  Entendemos o cenário atual, configuramos o ambiente e
                  acompanhamos a implantação para reduzir impactos na rotina da
                  empresa.
                </p>

                <S.SupportList>
                  {supportItems.map(({ icon: Icon, title, text }) => (
                    <li key={title}>
                      <span aria-hidden="true">
                        <Icon />
                      </span>

                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </S.SupportList>

                <S.PriceBand>
                  <div>
                    <strong>Planos a partir de R$ 9,90 por usuário/mês*</strong>

                    <small>
                      *Valor inicial. Recursos, quantidade mínima, implantação e
                      condições de migração variam conforme o cenário da
                      empresa.
                    </small>
                  </div>

                  <CustomButton variant="cta" onClick={scrollToForm}>
                    Solicitar uma avaliação
                  </CustomButton>
                </S.PriceBand>
              </S.SupportContent>
            </MotionReveal>
          </S.SupportSection>

          <S.Resources id="invetec-mail-recursos" ref={resourcesRef}>
            <MotionReveal>
              <S.SectionHeading>
                <span>CONHEÇA O INVETEC MAIL NA PRÁTICA</span>

                <h2>
                  Uma plataforma completa para a comunicação da sua equipe
                </h2>

                <p>
                  Centralize e-mails, compromissos, contatos e recursos de
                  colaboração em um ambiente corporativo baseado em tecnologia
                  Zimbra.
                </p>
              </S.SectionHeading>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <S.ResourceCarousel
                onMouseEnter={() => setIsCarouselHovered(true)}
                onMouseLeave={() => setIsCarouselHovered(false)}
                onFocusCapture={() => setIsCarouselFocused(true)}
                onBlurCapture={event => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsCarouselFocused(false);
                  }
                }}
                onPointerDown={handleCarouselPointerDown}
                onPointerUp={handleCarouselPointerUp}
                onPointerCancel={resumeAfterTouchInteraction}
              >
                <S.ResourceLayout>
                  <S.ResourceImage>
                    <button
                      type="button"
                      onClick={openCurrentSlideImage}
                      aria-label={`Ampliar imagem do recurso ${currentSlide.label}`}
                    >
                      <img
                        src={currentSlide.image}
                        alt={currentSlideImageAlt}
                        width={900}
                        height={506}
                        loading="lazy"
                      />
                    </button>

                    <S.SlideControls>
                      <button
                        type="button"
                        onClick={() => changeSlide(slideIndex - 1)}
                        aria-label="Recurso anterior"
                      >
                        <FiArrowLeft />
                      </button>

                      <span aria-live="polite">
                        {slideIndex + 1} de {featureSlides.length}
                      </span>

                      <button
                        type="button"
                        onClick={() => changeSlide(slideIndex + 1)}
                        aria-label="Próximo recurso"
                      >
                        <FiArrowRight />
                      </button>
                    </S.SlideControls>
                  </S.ResourceImage>
                  <S.ResourcePanel aria-live="polite">
                    <span>{currentSlide.label}</span>

                    <h3>{currentSlide.title}</h3>

                    <p>{currentSlide.description}</p>

                    <ul>
                      {currentSlide.benefits.map(item => (
                        <li key={item}>
                          <FiCheck />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {currentSlide.highlightNote && (
                      <S.ResourceHighlight>
                        <FiMessageCircle aria-hidden="true" />
                        <p>{currentSlide.highlightNote}</p>
                      </S.ResourceHighlight>
                    )}

                    {currentSlide.availabilityNote && (
                      <small>{currentSlide.availabilityNote}</small>
                    )}
                  </S.ResourcePanel>
                </S.ResourceLayout>

                <S.SlideTabs aria-label="Recursos do INVETEC Mail">
                  {featureSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Ver recurso ${slide.label}`}
                      aria-pressed={index === slideIndex}
                      onClick={() => selectSlide(index)}
                    >
                      {slide.label}
                    </button>
                  ))}
                </S.SlideTabs>
              </S.ResourceCarousel>
            </MotionReveal>
          </S.Resources>

          <MotionReveal>
            <S.Controls>
              <S.SectionHeading>
                <h2>Mais controle sobre a comunicação da sua empresa</h2>

                <p>
                  Recursos para proteger, administrar e acompanhar o ambiente de
                  e-mail corporativo.
                </p>
              </S.SectionHeading>

              <S.ControlGrid>
                {controlFeatures.map(
                  ({
                    title,
                    text,
                    tag,
                    status,
                    icon: Icon,
                    featured,
                    supportText,
                    actionLabel,
                  }) => (
                    <S.ControlCard
                      key={title}
                      $featured={featured}
                      $status={status}
                    >
                      <S.ControlCardHeader>
                        <S.ControlIcon $status={status}>
                          <Icon aria-hidden="true" />
                        </S.ControlIcon>
                        <S.ControlTag $status={status}>{tag}</S.ControlTag>
                      </S.ControlCardHeader>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      {supportText && <S.ControlSupport>{supportText}</S.ControlSupport>}
                      {actionLabel && (
                        <S.ControlAction type="button" onClick={scrollToForm}>
                          {actionLabel}
                        </S.ControlAction>
                      )}
                    </S.ControlCard>
                  )
                )}
              </S.ControlGrid>

              <S.ControlsNote>
                <FiInfo aria-hidden="true" />
                <p>
                Os recursos disponíveis variam conforme o plano e a configuração contratada. A Auditoria de e-mail é um serviço adicional para retenção e consulta de mensagens, inclusive após exclusões na caixa postal.
                </p>
              </S.ControlsNote>
            </S.Controls>
          </MotionReveal>

          <MotionReveal>
            <S.ConsultativeSection>
              <S.ConsultativeIntro>
                <span>ATENDIMENTO CONSULTIVO</span>
                <h2>
                  Não é só e-mail — implantamos a estrutura certa para a sua empresa
                </h2>
                <p>
                  Cada empresa usa o e-mail de um jeito. Por isso, a INVETEC não
                  entrega apenas contas prontas: analisamos sua operação, organizamos
                  o ambiente e configuramos tudo para que a equipe comece a usar com
                  segurança, padrão e suporte próximo.
                </p>
                <S.ConsultativeAction
                  type="button"
                  data-cta="consultivo-avaliacao"
                  onClick={scrollToForm}
                >
                  Solicitar avaliação do ambiente
                </S.ConsultativeAction>
              </S.ConsultativeIntro>

              <S.ConsultativeList>
                {[
                  'Entendemos como sua empresa utiliza o e-mail no dia a dia',
                  'Definimos contas, grupos, pastas e regras conforme a rotina da equipe',
                  'Migramos mensagens, contatos e histórico do ambiente anterior',
                  'Configuramos acesso no navegador, celular e Outlook, quando necessário',
                  'Padronizamos assinaturas, permissões, atalhos e organização dos usuários',
                  'Acompanhamos a implantação e prestamos suporte humano após a entrega',
                ].map(item => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </S.ConsultativeList>

              <S.ConsultativeHighlight>
                Se a empresa preferir, a INVETEC pode assumir toda a configuração
                técnica para que os usuários comecem a trabalhar sem precisar lidar
                com os detalhes da implantação.
              </S.ConsultativeHighlight>
            </S.ConsultativeSection>
          </MotionReveal>

          <MotionReveal>
            <S.Infrastructure $image={infrastructureImage}>
              <div>
                <span>INFRAESTRUTURA</span>

                <h2>
                  Infraestrutura profissional para a comunicação da sua empresa
                </h2>

                <p>
                  O INVETEC Mail utiliza tecnologia Zimbra Network Edition e uma
                  infraestrutura preparada para oferecer estabilidade, proteção e
                  continuidade à comunicação corporativa.
                </p>

                <p>
                  Uma plataforma corporativa administrada e acompanhada pela
                  equipe técnica da INVETEC.
                </p>
              </div>

              <S.InfrastructureGrid>
                {infrastructureItems.map(({ label, mobileGroup }) => (
                  <S.InfrastructureItem key={label} $mobileGroup={mobileGroup}>
                    <FiServer aria-hidden="true" />
                    {label}
                  </S.InfrastructureItem>
                ))}
              </S.InfrastructureGrid>
              <S.InfrastructureSummary>
                {infrastructureItems.map(({ label }) => (
                  <li key={label}>
                    <FiServer aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </S.InfrastructureSummary>
            </S.Infrastructure>
          </MotionReveal>

          <MotionReveal>
            <S.Faq>
              <S.SectionHeading>
                <h2>Perguntas frequentes</h2>

                <p>
                  Tire suas dúvidas sobre implantação, migração, recursos e suporte
                  do INVETEC Mail.
                </p>
              </S.SectionHeading>

              <S.FaqList>
                <S.FaqColumns>
                  <S.FaqColumn>
                    {faqItems
                      .filter((_, index) => index % 2 === 0)
                      .map((item, columnIndex) =>
                        renderFaqItem(item, columnIndex * 2),
                      )}
                  </S.FaqColumn>

                  <S.FaqColumn>
                    {faqItems
                      .filter((_, index) => index % 2 !== 0)
                      .map((item, columnIndex) =>
                        renderFaqItem(item, columnIndex * 2 + 1),
                      )}
                  </S.FaqColumn>
                </S.FaqColumns>

                <S.FaqMobileList>
                  {faqItems.map(renderFaqItem)}
                </S.FaqMobileList>
              </S.FaqList>
            </S.Faq>
          </MotionReveal>

          <S.FormArea id="email-contact-form" ref={formRef}>
            <S.FormCopy>
              <span>FALE COM A INVETEC</span>

              <h2>Receba uma proposta para o cenário da sua empresa</h2>

              <p hidden>
                Informe quantas contas sua empresa utiliza e como funciona o
                e-mail atualmente. A INVETEC avaliará implantação, migração,
                recursos e suporte necessários.
              </p>


              <p>
                Informe quantas contas sua empresa utiliza e como o e-mail funciona
                atualmente. A INVETEC analisará o cenário e indicará uma solução
                adequada para implantação, organização e suporte.
              </p>

              <S.FormBenefits>
                <li><FiCheck aria-hidden="true" />Implantação e configuração assistidas</li>
                <li><FiCheck aria-hidden="true" />Suporte próximo da INVETEC</li>
                <li><FiCheck aria-hidden="true" />Solução dimensionada para sua empresa</li>
              </S.FormBenefits>
            </S.FormCopy>

            <S.FormPanel>
              <FormContactEmail />
            </S.FormPanel>
          </S.FormArea>
        </S.Container>

        {selectedImage && (
          <S.Lightbox
            role="dialog"
            aria-modal="true"
            aria-label={currentSlideFullImageAlt}
            onClick={closeLightbox}
          >
            <S.CloseButton
              type="button"
              aria-label="Fechar imagem ampliada"
              onClick={event => {
                event.stopPropagation();
                closeLightbox();
              }}
            >
              ×
            </S.CloseButton>

            <img
              src={selectedImage}
              alt={currentSlideFullImageAlt}
              onClick={event => event.stopPropagation()}
            />
          </S.Lightbox>
        )}
      </PageHeroSection>
    </>
  );
};
