import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { SEO } from '@/components/SEO/Seo';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import {
  FiActivity,
  FiAlertCircle,
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCloud,
  FiCpu,
  FiGlobe,
  FiHeadphones,
  FiLock,
  FiLayers,
  FiMail,
  FiMonitor,
  FiSearch,
  FiServer,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiWifi,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './SuporteTI.styles';
import heroImage from '@/assets/images/PagesHero-Suporte-v2.jpg';

const benefits = [
  [
    FiActivity,
    'Menos problemas recorrentes',
    'Atuação sobre causas, não apenas sobre sintomas.',
  ],
  [
    FiUsers,
    'Mais controle',
    'Organização de equipamentos, usuários, acessos e serviços.',
  ],
  [
    FiShield,
    'Mais segurança',
    'Redução de riscos e melhoria das práticas de proteção.',
  ],
  [
    FiHeadphones,
    'Suporte alinhado ao negócio',
    'Tecnologia analisada conforme o impacto na operação.',
  ],
] as const;
const pains = [
  'Problemas que sempre voltam',
  'Computadores configurados de formas diferentes',
  'Usuários e acessos sem controle',
  'Backups sem validação',
  'Rede instável ou mal documentada',
  'Decisões tomadas apenas quando algo quebra',
];
const services = [
  [
    FiHeadphones,
    'Suporte aos usuários',
    'Atendimento para dúvidas, configurações e problemas do dia a dia.',
  ],
  [
    FiMonitor,
    'Computadores e dispositivos',
    'Padronização, configuração, atualização e orientação sobre substituições.',
  ],
  [
    FiWifi,
    'Redes e conectividade',
    'Organização da rede, identificação de falhas e melhoria da estabilidade.',
  ],
  [
    FiServer,
    'Servidores e serviços em nuvem',
    'Acompanhamento de recursos locais e soluções em nuvem usadas pela empresa.',
  ],
  [
    FiLock,
    'Segurança e controle de acessos',
    'Organização de usuários, permissões e práticas de proteção do ambiente.',
  ],
  [
    FiCloud,
    'Backup e continuidade',
    'Estruturação de rotinas de backup e recuperação de informações.',
  ],
] as const;
const servicePillars = [
  {
    number: '01',
    icon: FiHeadphones,
    title: 'Suporte, usuários e equipamentos',
    description:
      'Apoio técnico para manter a equipe produtiva e reduzir dificuldades recorrentes no dia a dia.',
    items: [
      'Suporte remoto aos usuários',
      'Configuração e padronização de computadores',
      'Instalação e atualização de programas',
      'Administração de contas e permissões',
      'Orientação para compra e substituição de equipamentos',
      'Inventário e organização dos dispositivos',
    ],
  },
  {
    number: '02',
    icon: FiServer,
    title: 'Infraestrutura, redes e segurança',
    description:
      'Organização dos recursos que sustentam a operação e a conectividade da empresa.',
    items: [
      'Redes cabeadas e Wi-Fi',
      'Servidores locais e compartilhamentos',
      'Impressoras e dispositivos de rede',
      'Controle de usuários e acessos',
      'Antivírus e boas práticas de segurança',
      'Identificação de riscos e instabilidades',
    ],
  },
  {
    number: '03',
    icon: FiCloud,
    title: 'Cloud, backup e comunicação',
    description:
      'Proteção dos dados e serviços essenciais para manter informações e comunicação mais organizadas.',
    items: [
      'Backup em nuvem',
      'File Server em nuvem',
      'Recuperação e continuidade de informações',
      'E-mail corporativo profissional',
      'INVETEC Mail',
      'Organização de contas corporativas',
    ],
  },
  {
    number: '04',
    icon: FiLayers,
    title: 'Sistemas e operação empresarial',
    description:
      'Tecnologia analisada conforme seu impacto nos processos e na rotina da empresa.',
    items: [
      'ERP para empresas',
      'Apoio em W3ERP, Bling e processos relacionados',
      'Integração entre setores',
      'Documentação do ambiente tecnológico',
      'Gestão de fornecedores de tecnologia',
      'Acompanhamento de licenças e serviços contratados',
    ],
  },
] as const;
const steps = [
  [
    '01',
    'Entendimento do ambiente',
    'Levantamento da estrutura, usuários, equipamentos e principais dificuldades.',
  ],
  [
    '02',
    'Identificação de prioridades',
    'Análise dos riscos, falhas recorrentes e melhorias mais importantes.',
  ],
  [
    '03',
    'Organização e execução',
    'Aplicação das ações aprovadas conforme o escopo definido.',
  ],
  [
    '04',
    'Acompanhamento',
    'Suporte e evolução do ambiente de acordo com o modelo contratado.',
  ],
] as const;
const processSteps = [
  {
    number: '01',
    icon: FiSearch,
    title: 'Entendimento do ambiente',
    description:
      'Levantamento da estrutura, equipamentos, usuários, sistemas e principais dificuldades da empresa.',
  },
  {
    number: '02',
    icon: FiAlertCircle,
    title: 'Definição de prioridades',
    description:
      'Identificação dos riscos, problemas recorrentes e melhorias com maior impacto na operação.',
  },
  {
    number: '03',
    icon: FiSettings,
    title: 'Organização e execução',
    description:
      'Aplicação das ações aprovadas conforme o escopo, a urgência e as prioridades definidas.',
  },
  {
    number: '04',
    icon: FiTrendingUp,
    title: 'Suporte e evolução',
    description:
      'Acompanhamento do ambiente e orientação sobre melhorias de acordo com o modelo contratado.',
  },
] as const;
const audienceProfiles = [
  {
    icon: FiUserCheck,
    label: 'SEM EQUIPE INTERNA',
    title: 'Empresas sem equipe interna de TI',
    description:
      'Para empresas que precisam de uma referência técnica para organizar usuários, equipamentos, acessos e serviços.',
    highlight:
      'A INVETEC pode atuar como apoio técnico recorrente para o ambiente.',
  },
  {
    icon: FiUserPlus,
    label: 'APOIO ESPECIALIZADO',
    title: 'Empresas com profissional ou equipe interna',
    description:
      'Para complementar conhecimentos, executar projetos específicos ou apoiar infraestrutura, cloud, segurança e sistemas.',
    highlight:
      'A empresa mantém sua estrutura interna e ganha apoio especializado quando necessário.',
  },
  {
    icon: FiTrendingUp,
    label: 'EMPRESA EM CRESCIMENTO',
    title: 'Pequenas e médias empresas em crescimento',
    description:
      'Para ambientes que começaram de forma simples e agora precisam de mais padrão, controle e segurança.',
    highlight: 'A tecnologia evolui junto com as necessidades do negócio.',
  },
] as const;
const complementarySolutions = [
  {
    icon: FiGlobe,
    title: 'Criação de sites profissionais',
    description:
      'Sites institucionais com SEO, performance e estrutura de conversão para fortalecer a presença digital e gerar oportunidades.',
    path: '/servicos/criacao-de-sites',
  },
  {
    icon: FiMail,
    title: 'INVETEC Mail',
    description:
      'E-mail corporativo com organização, segurança, controle administrativo e suporte especializado.',
    path: '/servicos/invetec-mail',
  },
  {
    icon: FiBriefcase,
    title: 'ERP para empresas',
    description:
      'Sistemas para integrar vendas, financeiro, estoque e processos internos com mais controle.',
    path: '/servicos/erp',
  },
  {
    icon: FiCloud,
    title: 'Serviços em nuvem',
    description:
      'Backup e File Server em nuvem para proteger dados, centralizar arquivos e facilitar o acesso da equipe.',
    path: undefined,
  },
] as const;
type FormData = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  computadores: string;
  necessidade: string;
  mensagem: string;
  origem: string;
};

export const SuporteTI = () => {
  const formRef = useRef<HTMLElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    shouldFocusError: true,
    defaultValues: { origem: 'Página Gestão e Suporte de TI' },
  });
  const scrollForm = () =>
    formRef.current?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  const whatsapp = () =>
    window.open(
      `https://wa.me/5531997101336?text=${encodeURIComponent('Olá, gostaria de saber mais sobre Gestão e Suporte de TI.')}`,
      '_blank',
      'noopener,noreferrer'
    );
  void whatsapp;
  const submit = async (data: FormData) => {
    try {
      const r = await fetch('https://formspree.io/f/xpqkzqaz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw Error();
      toast.success(
        'Recebemos suas informações. A INVETEC entrará em contato em breve.'
      );
      reset();
    } catch {
      toast.error('Não foi possível enviar agora. Tente novamente mais tarde.');
    }
  };
  return (
    <>
      <SEO
        title="Gestão e Suporte de TI para Empresas | INVETEC"
        description="Organize a tecnologia da sua empresa com gestão e suporte de TI. Mais controle, segurança, estabilidade, prevenção de falhas e acompanhamento técnico."
        image="https://www.invetec.com.br/images/SEO-SuporteTI.jpg"
        url="https://www.invetec.com.br/servicos/suporte-ti"
      />
      <S.Hero $image={heroImage}>
        <S.HeroContent>
          <span>GESTÃO E SUPORTE DE TI PARA EMPRESAS</span>
          <h1><span hidden>
            Tecnologia organizada para sua empresa trabalhar com mais segurança
          </span><span>Tecnologia organizada para uma operação mais segura</span></h1>
          <p hidden>
            A INVETEC ajuda sua empresa a organizar computadores, acessos,
            redes, segurança e serviços essenciais, reduzindo improvisos e
            problemas recorrentes na operação.
          </p><p>A INVETEC organiza infraestrutura, acessos, sistemas e serviços essenciais para reduzir improvisos, riscos e problemas recorrentes na sua empresa.</p>
          <S.Actions>
            <CustomButton variant="cta" onClick={scrollForm}>
              Solicitar avaliação de TI
            </CustomButton>
          </S.Actions>
          <small>
            Atendimento consultivo <b>•</b> Suporte remoto <b>•</b> Soluções de
            acordo com o ambiente
          </small>
        </S.HeroContent>
      </S.Hero>
      <S.Page>
        <S.Benefits>
          {benefits.map(([Icon, title, text]) => (
            <MotionReveal key={title}>
              <article>
                <Icon />
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </S.Benefits>
        <S.Problems>
          <MotionReveal direction="left">
            <S.ProblemsContent>
              <span>ORGANIZAÇÃO E PREVENÇÃO</span>
              <h2>Sua empresa ainda depende de uma TI improvisada?</h2>
              <p>
                Quando não existem padrões, documentação e acompanhamento,
                pequenos problemas passam a afetar produtividade, segurança e
                continuidade da operação.
              </p>
              <S.ImpactCard>
                <FiAlertCircle aria-hidden="true" />
                <div>
                  <h3>O impacto vai além da tecnologia</h3>
                  <p>
                    Falhas recorrentes geram retrabalho, atrasos, riscos e perda
                    de controle sobre a operação.
                  </p>
                </div>
              </S.ImpactCard>
              <strong>
                Uma gestão organizada reduz recorrências e melhora o controle da
                operação.
              </strong>
            </S.ProblemsContent>
          </MotionReveal>
          <S.ProblemsGrid>
            {pains.map((item, index) => (
              <MotionReveal key={item} direction="up" delay={(index + 1) * 0.05}>
                <article>
                  <S.ProblemCardHeader>
                    <small>0{index + 1}</small>
                    <span><FiAlertCircle aria-hidden="true" /></span>
                  </S.ProblemCardHeader>
                  <h3>{item}</h3>
                </article>
              </MotionReveal>
            ))}
          </S.ProblemsGrid>
        </S.Problems>
        <S.Section hidden>
          <S.Intro>
            <span>ORGANIZAÇÃO E PREVENÇÃO</span>
            <h2>Sua empresa ainda administra a TI no improviso?</h2>
            <p>
              Quando não existem padrões, documentação e acompanhamento,
              pequenos problemas passam a afetar produtividade, segurança e
              continuidade da operação.
            </p>
          </S.Intro>
          <S.Grid>
            {pains.map(item => (
              <article key={item}>
                <FiAlertCircle />
                {item}
              </article>
            ))}
          </S.Grid>
          <S.Note>
            Esses sinais geram retrabalho, interrupções e riscos que poderiam
            ser reduzidos com uma gestão mais organizada.
          </S.Note>
        </S.Section>
        <S.ManagementCompare>
          <MotionReveal direction="up">
            <S.CompareIntro>
              <span>GESTÃO DE TI</span>
              <h2>Mais do que resolver problemas: organizar a TI da empresa</h2>
              <p>O suporte pontual resolve uma ocorrência. A gestão de TI analisa o ambiente como um conjunto, identifica prioridades e acompanha sua evolução.</p>
            </S.CompareIntro>
          </MotionReveal>
          <S.CompareLayout>
            <MotionReveal direction="left" delay={0.08}>
              <S.CompareCard>
                <S.CompareBadge>MODELO REATIVO</S.CompareBadge>
                <h3>Suporte reativo</h3>
                <ul>{['Atua somente depois que o problema aparece','Resolve ocorrências isoladas','Mantém dependência de emergências','Acumula pouco conhecimento do ambiente','Não cria planejamento ou documentação'].map(item => <li key={item}><FiAlertCircle aria-hidden="true" />{item}</li>)}</ul>
              </S.CompareCard>
            </MotionReveal>
            <MotionReveal direction="up" delay={0.14}>
              <S.EvolutionIndicator><span>EVOLUA PARA</span><FiArrowRight aria-hidden="true" /></S.EvolutionIndicator>
            </MotionReveal>
            <MotionReveal direction="right" delay={0.2}>
              <S.CompareCard $featured>
                <S.CompareBadge>ABORDAGEM CONSULTIVA</S.CompareBadge>
                <h3>Gestão de TI com a INVETEC</h3>
                <ul>{['Identificação de causas recorrentes','Organização de equipamentos e acessos','Documentação do ambiente','Definição de prioridades','Acompanhamento das necessidades da empresa','Recomendações de melhorias'].map(item => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}</ul>
              </S.CompareCard>
            </MotionReveal>
          </S.CompareLayout>
          <MotionReveal direction="up"><S.CompareConclusion>A gestão de TI reduz improvisos e cria uma visão contínua do ambiente tecnológico.</S.CompareConclusion></MotionReveal>
        </S.ManagementCompare>
        <S.Section hidden>
          <S.Intro>
            <span>GESTÃO DE TI</span>
            <h2>
              Mais do que corrigir problemas: organizar a tecnologia da empresa
            </h2>
            <p>
              O suporte pontual resolve uma ocorrência. A gestão de TI analisa o
              ambiente como um conjunto e acompanha sua evolução.
            </p>
          </S.Intro>
          <S.Compare>
            <article>
              <h3>Suporte apenas reativo</h3>
              {[
                'Atua depois que o problema aparece',
                'Resolve ocorrências isoladas',
                'Mantém dependência de emergências',
                'Pouco conhecimento do ambiente',
                'Falta de planejamento e documentação',
              ].map(x => (
                <p key={x}>
                  <FiCheck />
                  {x}
                </p>
              ))}
            </article>
            <article className="featured">
              <h3>Gestão de TI com a INVETEC</h3>
              {[
                'Identificação de causas recorrentes',
                'Organização de equipamentos e acessos',
                'Documentação do ambiente',
                'Definição de prioridades',
                'Acompanhamento das necessidades da empresa',
                'Recomendações de melhorias',
              ].map(x => (
                <p key={x}>
                  <FiCheck />
                  {x}
                </p>
              ))}
            </article>
          </S.Compare>
        </S.Section>
        <S.Cta>
          <div>
            <h2>Sua empresa enfrenta problemas recorrentes de TI?</h2>
            <p>
              Uma análise inicial pode ajudar a identificar prioridades e os
              pontos que mais afetam a operação.
            </p>
          </div>
          <CustomButton variant="cta" onClick={scrollForm}>
            Solicitar avaliação
          </CustomButton>
        </S.Cta>
        <S.PillarsSection>
          <MotionReveal direction="up" distance={20} duration={0.5}>
            <S.PillarsIntro>
              <span>ÁREAS DE ATUAÇÃO</span>
              <h2>Gestão de TI integrada às necessidades da empresa</h2>
              <p>
                A INVETEC atua em diferentes frentes para organizar usuários,
                infraestrutura, dados, comunicação e sistemas conforme a
                realidade de cada negócio.
              </p>
              <S.ScopeNote>
                <FiAlertCircle aria-hidden="true" />
                <span>
                  O escopo é definido conforme o ambiente, as prioridades e o
                  modelo de atendimento contratado.
                </span>
              </S.ScopeNote>
            </S.PillarsIntro>
          </MotionReveal>
          <S.PillarsGrid>
            {servicePillars.map(({ number, icon: Icon, title, description, items }, index) => (
              <MotionReveal
                key={title}
                direction={index % 2 === 0 ? 'left' : 'right'}
                distance={22}
                duration={0.5}
                delay={0.05 * (index + 1)}
              >
                <S.PillarCard $variant={index}>
                  <S.PillarHeader>
                    <S.PillarIcon>
                      <Icon aria-hidden="true" />
                    </S.PillarIcon>
                    <h3>{title}</h3>
                    <S.PillarNumber>{number}</S.PillarNumber>
                  </S.PillarHeader>
                  <p>{description}</p>
                  <S.PillarList>
                    {items.map(item => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </S.PillarList>
                </S.PillarCard>
              </MotionReveal>
            ))}
          </S.PillarsGrid>
        </S.PillarsSection>
        <S.Section hidden>
          <S.Intro>
            <span>ÁREAS DE ATUAÇÃO</span>
            <h2>Como a INVETEC pode apoiar sua empresa</h2>
            <p>
              A estrutura do serviço é definida conforme o ambiente, as
              necessidades e o modelo de atendimento contratado.
            </p>
          </S.Intro>
          <S.ServiceGrid>
            {services.map(([Icon, title, text]) => (
              <MotionReveal key={title}>
                <article>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </MotionReveal>
            ))}
          </S.ServiceGrid>
        </S.Section>
 
        <S.ProcessSection>
          <MotionReveal direction="up" distance={20} duration={0.5}>
            <S.ProcessIntro>
              <span>ATENDIMENTO</span>
              <h2>Como funciona o atendimento</h2>
              <p>
                O trabalho começa pelo entendimento do ambiente e evolui
                conforme as prioridades, o escopo aprovado e o modelo de
                atendimento contratado.
              </p>
            </S.ProcessIntro>
          </MotionReveal>
          <S.ProcessTimeline>
            {processSteps.map(({ number, icon: Icon, title, description }, index) => (
              <MotionReveal key={number} direction="up" distance={20} delay={0.05 * (index + 1)}>
                <S.ProcessStep>
                  <S.ProcessMarker>
                    <Icon aria-hidden="true" />
                    <span>{number}</span>
                  </S.ProcessMarker>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </S.ProcessStep>
              </MotionReveal>
            ))}
          </S.ProcessTimeline>
        </S.ProcessSection>
        <S.AudienceSection>
          <MotionReveal direction="up" distance={20} duration={0.5}>
            <S.AudienceIntro>
              <span>PARA QUEM É INDICADO</span>
              <h2>Para empresas que precisam de uma TI mais organizada</h2>
              <p>
                A INVETEC adapta o apoio técnico à estrutura, ao momento e às
                prioridades de cada empresa.
              </p>
            </S.AudienceIntro>
          </MotionReveal>
          <S.AudienceGrid>
            {audienceProfiles.map(({ icon: Icon, label, title, description, highlight }, index) => (
              <MotionReveal key={title} direction="up" distance={20} delay={0.05 * (index + 1)}>
                <S.AudienceCard>
                  <Icon aria-hidden="true" />
                  <S.AudienceBadge>{label}</S.AudienceBadge>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <S.AudienceHighlight>
                    <FiCheck aria-hidden="true" />
                    <span>{highlight}</span>
                  </S.AudienceHighlight>
                </S.AudienceCard>
              </MotionReveal>
            ))}
          </S.AudienceGrid>
          <MotionReveal direction="up" distance={18} delay={0.18}>
            <S.AudienceConclusion>
              A gestão de TI não depende do tamanho da empresa, mas do quanto
              sua operação depende de tecnologia, dados e sistemas.
            </S.AudienceConclusion>
          </MotionReveal>
        </S.AudienceSection>
        <S.ComplementarySection>
          <MotionReveal direction="up" distance={20} duration={0.5}>
            <S.ComplementaryIntro>
              <span>SOLUÇÕES COMPLEMENTARES</span>
              <h2>Outras soluções para organizar e fortalecer sua empresa</h2>
              <p>
                A INVETEC também integra tecnologia, sistemas, comunicação e
                presença digital para apoiar diferentes áreas do negócio.
              </p>
            </S.ComplementaryIntro>
          </MotionReveal>
          <S.SolutionsGrid>
            {complementarySolutions.map(({ icon: Icon, title, description, path }, index) => (
              <MotionReveal key={title} direction="up" distance={20} delay={0.05 * (index + 1)}>
                <S.SolutionCard>
                  <S.SolutionIcon>
                    <Icon aria-hidden="true" />
                  </S.SolutionIcon>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {path ? (
                    <S.SolutionLink as={Link} to={path} aria-label={`Conhecer solução: ${title}`}>
                      Conhecer solução
                      <FiArrowRight aria-hidden="true" />
                    </S.SolutionLink>
                  ) : null}
                </S.SolutionCard>
              </MotionReveal>
            ))}
          </S.SolutionsGrid>
        </S.ComplementarySection>
        <S.Section hidden>
          <S.Intro>
            <span>ATENDIMENTO</span>
            <h2>Como funciona o atendimento</h2>
          </S.Intro>
          <S.Steps>
            {steps.map(([n, t, d]) => (
              <article key={n}>
                <b>{n}</b>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </S.Steps>
        </S.Section>
        <S.Section hidden>
          <S.Intro>
            <span>PARA QUEM É INDICADO</span>
            <h2>
              Para empresas que precisam de TI organizada, mesmo sem uma equipe
              interna
            </h2>
          </S.Intro>
          <S.Audience>
            {[
              [
                'Empresas sem profissional interno de TI',
                'Para quem precisa de apoio técnico e organização recorrente.',
              ],
              [
                'Empresas que precisam complementar sua equipe',
                'Apoio especializado em demandas, projetos e infraestrutura.',
              ],
              [
                'Pequenas e médias empresas',
                'Estrutura compatível com a realidade e as prioridades do negócio.',
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <FiCpu />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </S.Audience>
          <S.Center>
            A gestão de TI não é exclusiva de grandes empresas. Quanto maior a
            dependência da tecnologia, maior a importância de organização e
            prevenção.
          </S.Center>
        </S.Section>
        <S.Related hidden>
          <h2>Soluções que complementam a gestão de TI</h2>
          <div>
            <Link to="/servicos/invetec-mail">INVETEC Mail</Link>
            <Link to="/servicos/erp">ERP para empresas</Link>
            <Link to="/servicos/erp/bling">ERP Bling</Link>
          </div>
        </S.Related>
        <S.FormArea id="avaliacao-ti" ref={formRef}>
          <Toaster position="top-center" />
          <div>
            <span>AVALIAÇÃO DE TI</span>
            <h2>Vamos entender a estrutura de TI da sua empresa</h2>
            <p>
              Envie as informações principais. A INVETEC entrará em contato para
              entender o ambiente e avaliar os próximos passos.
            </p>
          </div>
          <S.FormCard>
            <form onSubmit={handleSubmit(submit)}>
              <input type="hidden" {...register('origem')} />
              <S.FormGrid>
                <label>
                  Nome *
                  <input
                    autoComplete="name"
                    {...register('nome', { required: 'Informe seu nome.' })}
                  />
                  {errors.nome && <em>{errors.nome.message}</em>}
                </label>
                <label>
                  Empresa *
                  <input
                    autoComplete="organization"
                    {...register('empresa', { required: 'Informe a empresa.' })}
                  />
                  {errors.empresa && <em>{errors.empresa.message}</em>}
                </label>
                <label>
                  Telefone ou WhatsApp *
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    {...register('telefone', {
                      required: 'Informe um telefone.',
                    })}
                  />
                  {errors.telefone && <em>{errors.telefone.message}</em>}
                </label>
                <label>
                  E-mail corporativo *
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Informe um e-mail.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Informe um e-mail válido.',
                      },
                    })}
                  />
                  {errors.email && <em>{errors.email.message}</em>}
                </label>
                <label>
                  Quantidade aproximada de computadores
                  <select {...register('computadores')}>
                    <option value="">Selecione uma opção</option>
                    {[
                      'Até 5',
                      'De 6 a 15',
                      'De 16 a 30',
                      'De 31 a 50',
                      'Mais de 50',
                      'Ainda não sei informar',
                    ].map(x => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Principal necessidade
                  <select {...register('necessidade')}>
                    <option value="">Selecione uma opção</option>
                    {[
                      'Suporte para usuários',
                      'Organização da infraestrutura',
                      'Redes e conectividade',
                      'Segurança e controle de acessos',
                      'Backup e serviços em nuvem',
                      'Servidores',
                      'Avaliação geral da TI',
                      'Outro',
                    ].map(x => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label className="full">
                  Mensagem opcional
                  <textarea
                    rows={3}
                    placeholder="Conte um pouco sobre o cenário da sua empresa."
                    {...register('mensagem')}
                  />
                </label>
              </S.FormGrid>
              <p className="privacy">
                Ao enviar, você concorda com o tratamento dos dados conforme a{' '}
                <a
                  href="/politica-de-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
                .
              </p>
              <CustomButton type="submit" variant="cta" loading={isSubmitting}>
                Solicitar avaliação de TI
              </CustomButton>
            </form>
          </S.FormCard>
        </S.FormArea>
      </S.Page>
    </>
  );
};
