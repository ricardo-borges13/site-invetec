import infrastructureImage from '@/assets/images/CTA2.jpg';
import logoInvetecMail from '@/assets/images/INVETEC-Mail-site.png';
import heroImage from '@/assets/images/PagesHero-Email-InvetecMail.png';
import supportImage from '@/assets/images/PagesHero-Suporte.jpg';
import imageZimbraFull from '@/assets/images/Zimbra-Full.jpg';
import imageZimbra from '@/assets/images/Zimbra-Leve.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { type MouseEvent, useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCalendar,
  FiChevronDown,
  FiDollarSign,
  FiGrid,
  FiHeadphones,
  FiKey,
  FiLock,
  FiMail,
  FiMessageCircle,
  FiRotateCcw,
  FiSearch,
  FiServer,
  FiShield,
  FiSliders,
  FiSmartphone,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiVideo,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './Zimbra.styles';

type ComparisonRow = {
  criterion: string;
  icon: IconType;
  hosting: string;
  invetec: string;
  suites: string;
};
type SupportItem = { title: string; text: string };
type FeatureSlide = {
  id: string;
  label: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  availabilityNote?: string;
};
type ControlFeature = {
  title: string;
  text: string;
  tag: string;
  icon: typeof FiShield;
};
type FaqItem = { question: string; answer: string };

const positioningComparisonRows: ComparisonRow[] = [
  { criterion: 'Foco principal', icon: FiTarget, hosting: 'Menor custo por conta', invetec: 'E-mail corporativo com colaboração e suporte', suites: 'Suíte completa de produtividade' },
  { criterion: 'Webmail profissional', icon: FiMail, hosting: 'Simples', invetec: 'Sim, completo e personalizável', suites: 'Sim, completo' },
  { criterion: 'Calendário e agenda', icon: FiCalendar, hosting: 'Limitado ou básico', invetec: 'Sim, compartilhado*', suites: 'Sim, integrado' },
  { criterion: 'Pastas e contas compartilhadas', icon: FiUsers, hosting: 'Limitado', invetec: 'Sim*', suites: 'Sim' },
  { criterion: 'Chat interno', icon: FiMessageCircle, hosting: 'Geralmente não', invetec: 'Sim, chat integrado', suites: 'Sim' },
  { criterion: 'Videoconferência', icon: FiVideo, hosting: 'Geralmente não', invetec: 'Sim*', suites: 'Sim, integrada' },
  { criterion: 'Sincronização avançada', icon: FiSmartphone, hosting: 'Limitada', invetec: 'Sim, ActiveSync no plano Professional*', suites: 'Sim, nativo' },
  { criterion: 'Suporte', icon: FiHeadphones, hosting: 'Suporte da plataforma', invetec: 'Suporte especializado INVETEC', suites: 'Suporte do fornecedor / parceiro' },
  { criterion: 'Custo', icon: FiDollarSign, hosting: 'Baixo', invetec: 'Intermediário (excelente custo-benefício)', suites: 'Mais alto' },
];
const supportItems: SupportItem[] = [
  {
    title: 'Diagnóstico do ambiente atual',
    text: 'Analisamos domínio, quantidade de usuários, dispositivos e serviço utilizado atualmente.',
  },
  {
    title: 'Implantação personalizada',
    text: 'Criamos contas, grupos, aliases, permissões e padrões de uso conforme a rotina da empresa.',
  },
  {
    title: 'Migração assistida',
    text: 'Planejamos a transferência das mensagens e configurações do serviço anterior.',
  },
  {
    title: 'Configuração dos dispositivos',
    text: 'Apoiamos o acesso pelo navegador, celular e programas de e-mail compatíveis.',
  },
  {
    title: 'Suporte humanizado',
    text: 'Quando necessário e autorizado, o técnico pode acessar remotamente o computador do usuário para configurar ou resolver a solicitação.',
  },
];
const featureSlides: FeatureSlide[] = [
  {
    id: 'email',
    label: 'E-mail',
    title: 'Caixa de entrada organizada',
    description:
      'Organize mensagens com pastas, filtros, marcadores e recursos de busca.',
    benefits: [
      'Interface corporativa e organizada',
      'Busca rápida de mensagens',
      'Filtros e pastas para reduzir retrabalho',
    ],
    image: imageZimbra,
  },
  {
    id: 'calendario',
    label: 'Calendário',
    title: 'Calendários compartilhados',
    description:
      'Organize compromissos, convites e agendas da equipe em um único ambiente.',
    benefits: [
      'Agendas individuais e compartilhadas',
      'Convites e lembretes',
      'Mais visibilidade sobre os compromissos',
    ],
    image: imageZimbra,
  },
  {
    id: 'contatos',
    label: 'Contatos',
    title: 'Contatos centralizados',
    description:
      'Mantenha contatos pessoais, corporativos e listas organizados para facilitar a comunicação.',
    benefits: [
      'Catálogos de contatos',
      'Listas de distribuição',
      'Informações acessíveis à equipe',
    ],
    image: imageZimbra,
  },
  {
    id: 'tarefas',
    label: 'Tarefas',
    title: 'Tarefas e lembretes',
    description:
      'Acompanhe atividades, responsabilidades e prazos relacionados à rotina da empresa.',
    benefits: [
      'Organização de atividades',
      'Controle de prazos',
      'Acompanhamento de responsabilidades',
    ],
    image: imageZimbra,
  },
  {
    id: 'arquivos',
    label: 'Arquivos',
    title: 'Arquivos e compartilhamentos',
    description:
      'Compartilhe documentos com mais organização e menos dependência de anexos espalhados.',
    benefits: [
      'Documentos centralizados',
      'Compartilhamento controlado',
      'Menos versões dispersas',
    ],
    image: imageZimbra,
  },
  {
    id: 'chat',
    label: 'Chat',
    title: 'Chat e comunicação interna',
    description:
      'Facilite conversas rápidas e alinhamentos entre os usuários do ambiente corporativo.',
    benefits: [
      'Comunicação mais direta',
      'Menos dispersão entre ferramentas',
      'Integração com a rotina de trabalho',
    ],
    image: imageZimbra,
    availabilityNote:
      'Disponibilidade conforme o plano e a configuração contratada.',
  },
  {
    id: 'reunioes',
    label: 'Reuniões',
    title: 'Integrações para reuniões online',
    description:
      'Possibilidade de integrar recursos de reunião e videoconferência à rotina da equipe.',
    benefits: [
      'Convites vinculados à agenda',
      'Organização dos compromissos',
      'Integração com ferramentas compatíveis',
    ],
    image: imageZimbra,
    availabilityNote:
      'Disponibilidade conforme o plano, integração e configuração contratada.',
  },
  {
    id: 'administracao',
    label: 'Administração',
    title: 'Administração de contas e acessos',
    description:
      'Tenha mais controle sobre usuários, senhas, aliases, grupos e permissões.',
    benefits: [
      'Criação e bloqueio de contas',
      'Redefinição de senhas',
      'Organização de grupos e permissões',
    ],
    image: imageZimbra,
  },
];
const controlFeatures: ControlFeature[] = [
  {
    title: 'Proteção antispam e antivírus',
    text: 'Filtros para reduzir mensagens indesejadas e ameaças recebidas por e-mail.',
    tag: 'Disponível',
    icon: FiShield,
  },
  {
    title: 'Gestão centralizada de contas',
    text: 'Criação, bloqueio, redefinição de senhas e organização dos usuários.',
    tag: 'Disponível',
    icon: FiUsers,
  },
  {
    title: 'Autenticação em dois fatores',
    text: 'Camada adicional de proteção para o acesso às contas corporativas.',
    tag: 'Conforme o plano',
    icon: FiLock,
  },
  {
    title: 'Backup e recuperação',
    text: 'Recursos de proteção e recuperação conforme a configuração contratada.',
    tag: 'Conforme o plano',
    icon: FiRotateCcw,
  },
  {
    title: 'Logs e auditoria',
    text: 'Acompanhamento de atividades para empresas que precisam de maior controle.',
    tag: 'Opcional',
    icon: FiSearch,
  },
  {
    title: 'Políticas de acesso',
    text: 'Regras e permissões ajustadas à necessidade e à estrutura da empresa.',
    tag: 'Conforme o plano',
    icon: FiKey,
  },
];
const implementationSteps = [
  [
    'Entendimento do cenário',
    'Levantamos quantidade de contas, domínio, dispositivos, serviço atual e objetivos.',
  ],
  [
    'Planejamento',
    'Definimos a estrutura, os acessos e a estratégia de implantação e migração.',
  ],
  [
    'Implantação e migração',
    'Criamos o ambiente, configuramos as contas e realizamos a migração planejada.',
  ],
  [
    'Suporte contínuo',
    'Orientamos os usuários e prestamos atendimento técnico quando necessário.',
  ],
] as const;
const faqItems: FaqItem[] = [
  {
    question: 'O e-mail utiliza o domínio da minha empresa?',
    answer:
      'Sim. As contas podem utilizar o domínio da empresa, como nome@suaempresa.com.br, reforçando a identidade profissional da comunicação.',
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
    question: 'Qual é a diferença para o e-mail comum da hospedagem?',
    answer:
      'O INVETEC Mail oferece uma plataforma corporativa com tecnologia Zimbra, recursos de colaboração, administração centralizada, implantação assistida e suporte técnico da INVETEC.',
  },
  {
    question: 'O que está incluído no suporte da INVETEC?',
    answer:
      'O suporte pode envolver implantação, configuração, orientação aos usuários e atendimento remoto autorizado para resolver solicitações relacionadas ao serviço contratado.',
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
      'Conforme o plano, a solução pode oferecer calendário, contatos, tarefas, arquivos, chat, administração centralizada e integrações para colaboração.',
  },
];

export const Zimbra = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [comparisonView, setComparisonView] = useState<'hosting' | 'invetec' | 'suites'>('invetec');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const formRef = useRef<HTMLElement | null>(null);
  const resourcesRef = useRef<HTMLElement | null>(null);
  const currentSlide = featureSlides[slideIndex];
  const scrollTo = (element: HTMLElement | null) =>
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToForm = () => scrollTo(formRef.current);
  const scrollToFormFromHero = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToForm();
  };
  const scrollToResources = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(resourcesRef.current);
  };
  const changeSlide = (next: number) =>
    setSlideIndex((next + featureSlides.length) % featureSlides.length);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <>
      <SEO
        title="E-mail Corporativo Zimbra | Mais controle e economia | INVETEC Mail"
        description="Tenha um e-mail corporativo profissional com tecnologia Zimbra. Mais organização, segurança e controle para sua empresa — sem pagar caro como Google ou Microsoft."
        image="https://www.invetec.com.br/images/SEO-Invetec-Mail.jpg"
        url="https://www.invetec.com.br/servicos/invetec-mail"
      />
      <PageHeroSection
        title="INVETEC Mail: e‑mail corporativo profissional com mais controle e suporte"
        subTitle="Tenha e‑mails com o domínio da sua empresa, tecnologia Zimbra e acesso pelo navegador, celular ou programas de e‑mail, com implantação, migração e suporte técnico da INVETEC."
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
                <h2>Mais recursos que o e-mail comum. Mais flexível e econômico que uma suíte completa.</h2>
                <p>O INVETEC Mail combina tecnologia Zimbra, recursos de colaboração, gestão centralizada e suporte técnico da INVETEC em planos ajustados à necessidade de cada empresa.</p>
              </S.PositioningHeading>
              <S.PositioningHighlights>
                {[
                  { icon: FiTrendingUp, title: 'Mais estrutura que o e-mail básico', text: 'Recursos de organização, colaboração e administração que vão além de uma caixa postal simples.' },
                  { icon: FiSliders, title: 'Planos ajustados à necessidade', text: 'Business, Standard e Professional permitem escolher espaço, colaboração e sincronização conforme o perfil dos usuários.' },
                  { icon: FiHeadphones, title: 'Suporte próximo e especializado', text: 'A INVETEC acompanha implantação, migração, configuração e atendimento técnico dos usuários.' },
                ].map(({ icon: Icon, title, text }) => (
                  <S.PositioningHighlight key={title}>
                    <span><Icon /></span><div><h3>{title}</h3><p>{text}</p></div>
                  </S.PositioningHighlight>
                ))}
              </S.PositioningHighlights>
              <S.PositioningStatement>
                <FiTrendingUp />
                <p>O <strong>INVETEC Mail</strong> oferece uma estrutura corporativa acima do e-mail básico e se aproxima das grandes suítes em recursos de colaboração, com suporte técnico próximo e planos ajustados ao perfil de cada empresa.</p>
              </S.PositioningStatement>
              <S.ComparisonTableContainer>
                <S.ComparisonTable>
                  <caption>Comparativo de posicionamento entre e-mail básico, INVETEC Mail e suítes completas.</caption>
                  <thead>
                    <tr>
                      <th scope="col">Critério</th>
                      <th scope="col">
                        <S.ComparisonHeaderContent>
                          <FiMail />
                          <S.ComparisonHeaderTitle>E-mail básico / hospedagem</S.ComparisonHeaderTitle>
                        </S.ComparisonHeaderContent>
                      </th>
                      <th scope="col" className="invetec">
                        <S.ComparisonHeaderContent>
                          <S.ComparisonHeaderLogo src={logoInvetecMail} alt="Logo do INVETEC Mail" />
                          <S.ComparisonHeaderSubtitle>Tecnologia Zimbra</S.ComparisonHeaderSubtitle>
                        </S.ComparisonHeaderContent>
                      </th>
                      <th scope="col">
                        <S.ComparisonHeaderContent>
                          <FiGrid />
                          <S.ComparisonBrandStack>
                            <S.ComparisonHeaderTitle>Google Workspace</S.ComparisonHeaderTitle>
                            <S.ComparisonHeaderSubtitle>Microsoft 365</S.ComparisonHeaderSubtitle>
                          </S.ComparisonBrandStack>
                        </S.ComparisonHeaderContent>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{positioningComparisonRows.map(({ criterion, icon: Icon, hosting, invetec, suites }) => <tr key={criterion}><th scope="row"><Icon />{criterion}</th><td>{hosting}</td><td className="invetec">{invetec}</td><td>{suites}</td></tr>)}</tbody>
                </S.ComparisonTable>
              </S.ComparisonTableContainer>
              <S.ComparisonMobile>
                <S.ComparisonTabs aria-label="Escolha uma solução para comparar">
                  {([['hosting', 'Hospedagem'], ['invetec', 'INVETEC Mail'], ['suites', 'Google/Microsoft']] as const).map(([value, label]) => <button key={value} type="button" aria-pressed={comparisonView === value} onClick={() => setComparisonView(value)}>{label}</button>)}
                </S.ComparisonTabs>
                <S.ComparisonMobileList>{positioningComparisonRows.map(({ criterion, icon: Icon, [comparisonView]: detail }) => <li key={criterion}><span><Icon />{criterion}</span><p>{detail}</p></li>)}</S.ComparisonMobileList>
              </S.ComparisonMobile>
              <S.ComparisonNote>* Algumas funcionalidades do INVETEC Mail variam conforme o plano escolhido (Business, Standard ou Professional). A INVETEC recomenda a combinação ideal conforme a operação da empresa.</S.ComparisonNote>
            </S.Positioning>
          </MotionReveal>
          <S.SupportSection>
            <MotionReveal direction="left">
              <S.SupportVisual>
                <img
                  src={supportImage}
                  alt="Profissional de suporte técnico em ambiente de tecnologia"
                  loading="lazy"
                />
                <div>
                  <img src={logoInvetecMail} alt="INVETEC Mail" />
                  <FiHeadphones />
                  <strong>Suporte humano de verdade</strong>
                </div>
              </S.SupportVisual>
            </MotionReveal>
            <MotionReveal direction="right" delay={0.08}>
              <S.SupportContent>
                <span>IMPLANTAÇÃO, MIGRAÇÃO E SUPORTE DA INVETEC</span>
                <h2>
                  Você não recebe apenas contas de e-mail. Recebe uma
                  implantação acompanhada pela INVETEC.
                </h2>
                <p>
                  Antes de configurar o ambiente, entendemos como sua empresa
                  utiliza o e-mail, quais dispositivos precisam ser preparados e
                  como a migração pode ser realizada com o menor impacto
                  possível.
                </p>
                <S.SupportList>
                  {supportItems.map(item => (
                    <li key={item.title}>
                      <FiCheck />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </S.SupportList>
                <S.PriceBand>
                  <strong>Planos a partir de R$ 9,90 por usuário/mês*</strong>
                  <small>
                    *Valor inicial de referência. Recursos, quantidade mínima,
                    implantação e condições de migração podem variar conforme o
                    cenário da empresa.
                  </small>
                </S.PriceBand>
                <CustomButton variant="cta" onClick={scrollToForm}>
                  Solicitar uma avaliação
                </CustomButton>
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
              <S.ResourceLayout>
                <S.ResourceImage>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(currentSlide.image)}
                    aria-label="Ampliar imagem da interface do INVETEC Mail"
                  >
                    <img
                      src={currentSlide.image}
                      alt={`Interface do INVETEC Mail: ${currentSlide.label}`}
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
                    onClick={() => setSlideIndex(index)}
                  >
                    {slide.label}
                  </button>
                ))}
              </S.SlideTabs>
            </MotionReveal>
          </S.Resources>
          <MotionReveal>
            <S.Controls>
              <S.SectionHeading>
                <h2>Mais controle sobre a comunicação da sua empresa</h2>
                <p>
                  Recursos para proteger, administrar e organizar o ambiente de
                  e-mail corporativo.
                </p>
              </S.SectionHeading>
              <S.ControlGrid>
                {controlFeatures.map(({ title, text, tag, icon: Icon }) => (
                  <S.ControlCard key={title}>
                    <Icon />
                    <div>
                      <span>{tag}</span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </S.ControlCard>
                ))}
              </S.ControlGrid>
            </S.Controls>
          </MotionReveal>
          <MotionReveal>
            <S.Infrastructure $image={infrastructureImage}>
              <div>
                <span>INFRAESTRUTURA</span>
                <h2>
                  Infraestrutura profissional para a comunicação da sua empresa
                </h2>
                <p>
                  O INVETEC Mail utiliza tecnologia Zimbra e uma estrutura
                  preparada para oferecer estabilidade, proteção e continuidade
                  à comunicação corporativa.
                </p>
                <S.InfrastructureHighlight>
                  Tecnologia Zimbra Network Edition
                </S.InfrastructureHighlight>
                <p>
                  Uma plataforma corporativa administrada e acompanhada pela
                  equipe técnica da INVETEC.
                </p>
              </div>
              <S.InfrastructureGrid>
                {[
                  '99,9% de disponibilidade',
                  '5 data centers TIER III',
                  'Segurança certificada ISO 27001',
                  'Proteção antispam',
                  'Administração centralizada',
                  'Suporte especializado',
                ].map(item => (
                  <span key={item}>
                    <FiServer />
                    {item}
                  </span>
                ))}
              </S.InfrastructureGrid>
            </S.Infrastructure>
          </MotionReveal>
          <MotionReveal>
            <S.Process>
              <S.SectionHeading>
                <span>COMO FUNCIONA A IMPLANTAÇÃO</span>
                <h2>Um processo simples e acompanhado em quatro etapas</h2>
              </S.SectionHeading>
              <S.ProcessSteps>
                {implementationSteps.map(([title, text], index) => (
                  <article key={title}>
                    <b>{index + 1}</b>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </S.ProcessSteps>
            </S.Process>
          </MotionReveal>
          <MotionReveal>
            <S.Faq>
              <S.SectionHeading>
                <h2>Perguntas frequentes</h2>
                <p>
                  Confira as principais dúvidas sobre implantação, migração,
                  recursos e suporte do INVETEC Mail.
                </p>
              </S.SectionHeading>
              <S.FaqList>
                {faqItems.map((item, index) => (
                  <article key={item.question}>
                    <button
                      type="button"
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      {item.question}
                      <FiChevronDown />
                    </button>
                    <div id={`faq-answer-${index}`} hidden={openFaq !== index}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                ))}
              </S.FaqList>
            </S.Faq>
          </MotionReveal>
          <S.FormArea id="email-contact-form" ref={formRef}>
            <S.FormCopy>
              <span>FALE COM A INVETEC</span>
              <h2>Receba uma proposta para o cenário da sua empresa</h2>
              <p>
                Informe quantas contas sua empresa utiliza e como funciona o
                e-mail atualmente. A INVETEC avaliará implantação, migração,
                recursos e suporte necessários.
              </p>
              <p>Possui poucas contas e uma operação mais simples?</p>
              <Link to="/servicos/invetec-mail-mei">
                Conheça o INVETEC Mail MEI
              </Link>
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
            aria-label="Interface do INVETEC Mail ampliada"
            onClick={() => setSelectedImage(null)}
          >
            <S.CloseButton
              type="button"
              aria-label="Fechar imagem ampliada"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </S.CloseButton>
            <img
              src={imageZimbraFull}
              alt="Interface do INVETEC Mail ampliada"
            />
          </S.Lightbox>
        )}
      </PageHeroSection>
    </>
  );
};
