import heroImage from '@/assets/images/PagesHero-W3ERP.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { testimonials } from '@/components/Depoimentos/Depoimentos.data';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useRef } from 'react';
import {
  FiActivity,
  FiBarChart2,
  FiCheck,
  FiClipboard,
  FiCreditCard,
  FiFileText,
  FiLayers,
  FiPackage,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';
import * as S from './W3ERP.styles';

const scrollToElement = (element: HTMLElement | null) => {
  element?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  });
};

const benefits = [
  [
    'Setores integrados',
    'Comercial, estoque, compras, faturamento, financeiro e demais áreas trabalham sobre uma única base de informações.',
    FiLayers,
  ],
  [
    'Informações em tempo real',
    'Indicadores e dados atualizados ajudam gestores e equipes a acompanhar a operação com mais segurança.',
    FiActivity,
  ],
  [
    'Controle financeiro e operacional',
    'Centralize informações importantes e reduza a dependência de planilhas, controles paralelos e conferências manuais.',
    FiBarChart2,
  ],
  [
    'Processos parametrizados',
    'O sistema é configurado conforme regras, fluxos e necessidades específicas da empresa.',
    FiClipboard,
  ],
  [
    'Estrutura preparada para crescer',
    'A estrutura pode evoluir com novos processos, integrações, controles e necessidades da operação.',
    FiTrendingUp,
  ],
  [
    'Implantação acompanhada',
    'A INVETEC participa do diagnóstico, definição dos processos, parametrização, treinamento e acompanhamento da implantação.',
    FiUsers,
  ],
] as const;

const faqs = [
  [
    'O W3ERP funciona pela internet?',
    'Sim. O W3ERP é um sistema 100% web e funciona pela internet, sem necessidade de instalar o sistema em cada computador. O acesso é realizado pelo navegador, conforme os usuários e permissões definidos para a empresa. Como a operação depende de conexão online, é importante contar com internet estável e um plano de contingência compatível com a criticidade do negócio.',
  ],
  [
    'Quais áreas da empresa podem ser integradas?',
    'O W3ERP pode integrar áreas como comercial e CRM, estoque, suprimentos, compras, faturamento, fiscal, financeiro, contábil, serviços, patrimônio, logística e gestão por indicadores. Os módulos, integrações e processos utilizados são definidos conforme o segmento e o escopo de cada implantação.',
  ],
  [
    'O sistema pode ser adaptado aos processos da empresa?',
    'Sim. O W3ERP permite parametrizar regras, fluxos, permissões, controles e rotinas conforme as necessidades da operação. A aderência é avaliada durante o diagnóstico, pois nem toda demanda exige customização e algumas alterações podem depender do escopo técnico do projeto.',
  ],
  [
    'A INVETEC acompanha a implantação?',
    'Sim. A INVETEC participa do diagnóstico da operação, do mapeamento dos processos, da definição das necessidades e do acompanhamento técnico do projeto. Também apoia a comunicação com a W3ERP, o treinamento da equipe e os ajustes necessários durante a implantação.',
  ],
  [
    'Existe treinamento para a equipe?',
    'Sim. O treinamento é planejado conforme os módulos contratados, os perfis de acesso e as rotinas que cada usuário realizará no sistema. A quantidade de treinamentos, os participantes e o formato são definidos no escopo da implantação.',
  ],
  [
    'Como é definido o investimento?',
    'O investimento é definido após a análise dos processos, módulos, número de usuários, integrações, migração de dados, treinamentos e complexidade da implantação. Por isso, o W3ERP não possui uma proposta única que atenda igualmente a todas as empresas.',
  ],
  [
    'O W3ERP pode substituir outro ERP?',
    'Sim, desde que exista aderência entre o W3ERP e os processos da empresa. A substituição exige análise do sistema atual, dados que precisam ser migrados, integrações, regras de negócio, riscos e planejamento da transição.',
  ],
  [
    'O W3ERP pode atender empresas que hoje utilizam TOTVS?',
    'Pode, dependendo dos processos, integrações, regras de negócio e objetivos da empresa. A INVETEC possui aproximadamente 15 anos de experiência com ambientes TOTVS e já acompanhou uma operação que migrou de TOTVS para W3ERP. A recomendação depende de uma análise técnica e operacional, não apenas da comparação entre marcas.',
  ],
  [
    'Quanto tempo leva uma implantação?',
    'O prazo varia conforme a complexidade da operação, os módulos contratados, a necessidade de parametrizações, integrações, migração de dados, treinamentos e disponibilidade da equipe da empresa. O cronograma é definido após o diagnóstico e a aprovação do escopo.',
  ],
] as const;

const jpmTestimonial = testimonials.find(
  testimonial => testimonial.company === 'JPM Borrachas e Materiais Elétricos'
);
const hasJpmProfile = Boolean(
  jpmTestimonial?.avatar && jpmTestimonial.name && jpmTestimonial.role
);

export const W3ERP = () => {
  const formRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLElement | null>(null);
  const whatsappUrl =
    'https://wa.me/5531997101336?text=Olá%2C%20gostaria%20de%20avaliar%20o%20W3ERP%20para%20minha%20empresa.';

  return (
    <>
      <SEO
        title="W3ERP | ERP Integrado para Empresas | INVETEC"
        description="Integre vendas, estoque, faturamento e financeiro com o W3ERP. Implantação acompanhada, processos parametrizados e suporte da INVETEC."
        image="https://www.invetec.com.br/images/SEO-W3ERP.jpg"
        url="https://www.invetec.com.br/servicos/erp/w3erp"
      />
      <S.HeroShell>
        <PageHeroSection
          compactMobile
          brandContent={
            <S.HeroEyebrow>ERP PARA OPERAÇÕES ESTRUTURADAS</S.HeroEyebrow>
          }
          title="Integre vendas, estoque, financeiro e faturamento em um único sistema"
          subTitle="Centralize sua operação em um ERP parametrizado conforme os processos da empresa, com implantação acompanhada pela INVETEC."
          image={heroImage}
          overlayOpacity={0.62}
          heroContent={
            <S.HeroContent>
              <S.HeroActions>
                <CustomButton
                  variant="cta"
                  onClick={() => scrollToElement(formRef.current)}
                >
                  Solicitar análise da operação
                </CustomButton>
                <S.HeroSecondary
                  type="button"
                  onClick={() => scrollToElement(videoRef.current)}
                >
                  Assistir ao vídeo de 1 minuto
                </S.HeroSecondary>
              </S.HeroActions>
              <S.Credibility>
                <span>
                  <FiCheck aria-hidden="true" />
                  Integração entre setores
                </span>
                <span>
                  <FiCheck aria-hidden="true" />
                  Implantação acompanhada
                </span>
                <span>
                  <FiCheck aria-hidden="true" />
                  Sistema preparado para crescer
                </span>
              </S.Credibility>
            </S.HeroContent>
          }
        >
          <S.Container>
            <S.VideoSection ref={videoRef} id="video-w3erp">
              <MotionReveal direction="left">
                <S.SectionLead>
                  <S.Eyebrow>VISÃO GERAL DA SOLUÇÃO</S.Eyebrow>
                  <h2>Conheça a proposta do W3ERP em 1 minuto</h2>
                  <p>
                    Em uma apresentação rápida, veja como o W3ERP conecta
                    processos, integra áreas da empresa e oferece uma estrutura
                    preparada para operações que precisam de mais controle e
                    capacidade de crescimento.
                  </p>
                  <p className="support">
                    O vídeo apresenta uma visão geral da solução. Ao longo da
                    página, você encontra detalhes sobre integração,
                    implantação, recursos e aplicação prática.
                  </p>
                  <S.QuickPoints>
                    <li>Integração das operações da empresa</li>
                    <li>Gestão financeira, fiscal, contábil e de serviços</li>
                    <li>Sistema web, customizável e preparado para crescer</li>
                  </S.QuickPoints>
                  <S.TextButton
                    type="button"
                    onClick={() => scrollToElement(formRef.current)}
                  >
                    Avaliar o W3ERP para minha empresa{' '}
                    <span aria-hidden="true">→</span>
                  </S.TextButton>
                </S.SectionLead>
              </MotionReveal>
              <MotionReveal direction="right">
                <div>
                  <S.VideoWrapper>
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/-ljZXEjkMpE"
                      title="Vídeo institucional W3ERP — Acelerador de Crescimento"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </S.VideoWrapper>
                  <S.VideoChannel>
                    <span>Vídeo institucional da W3ERP</span>
                    <a
                      href="https://www.youtube.com/channel/UCfatHXP7RtjG397T6xTyirQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conhecer o canal oficial da W3ERP{' '}
                      <span aria-hidden="true">→</span>
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </S.VideoChannel>
                </div>
              </MotionReveal>
            </S.VideoSection>

            <S.PainSection>
              <MotionReveal direction="left">
                <div>
                  <S.Eyebrow>DESAFIOS OPERACIONAIS</S.Eyebrow>
                  <h2>
                    A operação cresceu, mas as informações continuam separadas?
                  </h2>
                  <p>
                    Quando vendas, estoque, faturamento e financeiro trabalham
                    em sistemas ou controles diferentes, a empresa perde tempo,
                    aumenta o retrabalho e toma decisões com menos segurança.
                  </p>
                </div>
              </MotionReveal>
              <MotionReveal direction="right">
                <S.PainGrid>
                  <S.PainList>
                    <h3>Onde surgem os gargalos</h3>
                    {[
                      ['Informações espalhadas', 'Informações espalhadas'],
                      ['Retrabalho entre setores', 'Retrabalho entre setores'],
                      [
                        'Estoque sem atualização confiável',
                        'Estoque desatualizado',
                      ],
                      [
                        'Financeiro desconectado da operação',
                        'Financeiro desconectado',
                      ],
                      [
                        'Faturamento sem integração com vendas',
                        'Faturamento sem integração',
                      ],
                      [
                        'Relatórios produzidos manualmente',
                        'Relatórios manuais',
                      ],
                      [
                        'Dificuldade para acompanhar resultados em tempo real',
                        'Falta de visão em tempo real',
                      ],
                    ].map(([item, mobileItem]) => (
                      <li key={item} data-mobile={mobileItem}>
                        {item}
                      </li>
                    ))}
                  </S.PainList>
                  <S.Solution>
                    <FiLayers aria-hidden="true" />
                    <h3>O W3ERP conecta essas áreas em uma única operação</h3>
                    <p>
                      O sistema centraliza informações, reduz atividades
                      duplicadas e melhora a visibilidade sobre os processos da
                      empresa.
                    </p>
                    <small>
                      O próximo passo é integrar esses processos em uma única
                      gestão.
                    </small>
                  </S.Solution>
                </S.PainGrid>
              </MotionReveal>
            </S.PainSection>

            <S.IntegrationSection>
              <MotionReveal>
                <S.SectionLead>
                  <S.Eyebrow>VISÃO INTEGRADA</S.Eyebrow>
                  <h2>Um ERP integrado à realidade da sua empresa</h2>
                  <p>
                    O W3ERP conecta áreas, processos e informações em uma única
                    plataforma. Sua estrutura é parametrizada conforme o
                    segmento, as regras e as necessidades de cada operação,
                    permitindo que diferentes setores trabalhem com dados
                    integrados.
                  </p>
                </S.SectionLead>
              </MotionReveal>
              <MotionReveal>
                <S.IntegrationCore>
                  <strong>W3ERP</strong>
                  <span>
                    Uma única base de informações para toda a operação
                  </span>
                </S.IntegrationCore>
              </MotionReveal>
              <S.IntegrationGrid>
                {[
                  [FiUsers, 'Comercial e CRM'],
                  [FiPackage, 'Estoque e suprimentos'],
                  [FiClipboard, 'Compras'],
                  [FiFileText, 'Faturamento e fiscal'],
                  [FiCreditCard, 'Financeiro e contábil'],
                  [FiLayers, 'Serviços e patrimônio'],
                  [FiActivity, 'Logística e operações'],
                  [FiBarChart2, 'Gestão e indicadores'],
                ].map(([Icon, label], index) => {
                  const AreaIcon = Icon as typeof FiShoppingBag;
                  return (
                    <MotionReveal key={label as string} delay={index * 0.04}>
                      <article>
                        <AreaIcon aria-hidden="true" />
                        <span>{label as string}</span>
                      </article>
                    </MotionReveal>
                  );
                })}
              </S.IntegrationGrid>
              <S.IntegrationNote>
                Os módulos, integrações e processos são definidos conforme o
                segmento e o escopo de cada implantação.
              </S.IntegrationNote>
            </S.IntegrationSection>

            <S.BenefitsSection>
              <MotionReveal>
                <S.SectionLead>
                  <S.Eyebrow>BENEFÍCIOS NA PRÁTICA</S.Eyebrow>
                  <h2>O que muda na operação com o W3ERP</h2>
                </S.SectionLead>
              </MotionReveal>
              <S.BenefitGrid>
                {benefits.map(([title, text, Icon], index) => (
                  <MotionReveal key={title} delay={index * 0.05}>
                    <S.BenefitCard>
                      <Icon aria-hidden="true" />
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </S.BenefitCard>
                  </MotionReveal>
                ))}
              </S.BenefitGrid>
            </S.BenefitsSection>

            <S.Authority>
              <MotionReveal>
                <S.AuthorityLayout>
                  <S.AuthorityIntro>
                    <S.Eyebrow>ROBUSTEZ E EXPERIÊNCIA</S.Eyebrow>
                    <h2>
                      Experiência para avaliar operações que exigem mais do ERP
                    </h2>
                    <p>
                      O W3ERP atende empresas que precisam integrar setores,
                      parametrizar regras de negócio e estruturar processos mais
                      complexos. Dependendo do cenário, pode ser uma alternativa
                      para operações que também avaliam plataformas de maior
                      porte.
                    </p>
                    <S.AuthorityActions>
                      <CustomButton
                        variant="cta"
                        onClick={() => scrollToElement(formRef.current)}
                      >
                        Avaliar meu cenário de ERP
                      </CustomButton>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Falar com um especialista
                      </a>
                    </S.AuthorityActions>
                  </S.AuthorityIntro>
                  <S.AuthorityEvidence>
                    <S.AuthorityCard>
                      <FiLayers aria-hidden="true" />
                      <div>
                        <h3>Experiência com ambientes TOTVS</h3>
                        <p>
                          O responsável técnico pelos projetos da INVETEC
                          trabalhou por aproximadamente 15 anos com ambientes
                          TOTVS, acumulando experiência em processos, aderência,
                          implantação e suporte.
                        </p>
                      </div>
                    </S.AuthorityCard>
                    <S.AuthorityCard $featured>
                      <FiTrendingUp aria-hidden="true" />
                      <div>
                        <h3>Migração real para o W3ERP</h3>
                        <p>
                          A INVETEC também possui experiência em uma operação
                          que migrou de TOTVS para W3ERP, com análise dos
                          processos e adequação da nova solução ao negócio.
                        </p>
                      </div>
                    </S.AuthorityCard>
                    <S.AuthorityNote>
                      A escolha deve considerar processos, integrações,
                      complexidade da operação, implantação, suporte e custo
                      total do projeto.
                    </S.AuthorityNote>
                  </S.AuthorityEvidence>
                </S.AuthorityLayout>
              </MotionReveal>
            </S.Authority>

            <S.FitSection>
              <MotionReveal>
                <S.SectionLead>
                  <S.Eyebrow>ANÁLISE CONSULTIVA</S.Eyebrow>
                  <h2>O W3ERP faz sentido para sua empresa?</h2>
                </S.SectionLead>
                <S.FitGrid>
                  <S.FitCard>
                    <FiLayers aria-hidden="true" />
                    <h3>O W3ERP costuma fazer sentido quando a empresa</h3>
                    {[
                      'possui vários setores e processos interdependentes',
                      'precisa adaptar regras, fluxos e controles do sistema',
                      'busca substituir controles paralelos ou um ERP pouco aderente',
                      'está preparada para participar de uma implantação estruturada',
                    ].map(item => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </S.FitCard>
                  <S.FitCard $neutral>
                    <FiClipboard aria-hidden="true" />
                    <h3>Uma solução mais simples pode ser suficiente quando</h3>
                    {[
                      'a operação possui poucos processos e baixa complexidade',
                      'a necessidade está concentrada em emissão fiscal e controles básicos',
                      'existem poucos usuários e pouca necessidade de parametrização',
                      'a empresa não pretende revisar processos ou participar da implantação',
                    ].map(item => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </S.FitCard>
                </S.FitGrid>
                <p className="conclusion">
                  Antes de recomendar o W3ERP, a INVETEC avalia processos,
                  complexidade, integrações e objetivos da empresa.
                </p>
                <S.FitCta
                  type="button"
                  onClick={() => scrollToElement(formRef.current)}
                >
                  Avaliar meu cenário de ERP <span aria-hidden="true">→</span>
                </S.FitCta>
              </MotionReveal>
            </S.FitSection>

            <S.Implementation>
              <MotionReveal>
                <S.SectionLead>
                  <S.Eyebrow>IMPLANTAÇÃO ACOMPANHADA</S.Eyebrow>
                  <h2>Um bom ERP depende de uma implantação bem conduzida</h2>
                  <p>
                    Uma implantação eficiente depende de análise dos processos,
                    parametrização adequada, treinamento e acompanhamento da
                    equipe.
                  </p>
                  <p className="support">
                    A INVETEC atua na compreensão da operação, na definição das
                    necessidades e no acompanhamento técnico durante a
                    implantação do W3ERP.
                  </p>
                </S.SectionLead>
                <S.ProjectTitle>
                  Como funciona um projeto de W3ERP
                </S.ProjectTitle>
                <S.ProjectGrid>
                  {[
                    [
                      '01',
                      'Diagnóstico da operação',
                      'A empresa apresenta seus processos, sistemas atuais, dificuldades e objetivos.',
                    ],
                    [
                      '02',
                      'Mapeamento dos processos',
                      'A INVETEC analisa setores, fluxos, controles, integrações e pontos que precisam ser estruturados.',
                    ],
                    [
                      '03',
                      'Demonstração orientada',
                      'O W3ERP é apresentado com foco no cenário real da empresa, evitando uma demonstração genérica de funcionalidades.',
                    ],
                    [
                      '04',
                      'Definição do escopo',
                      'São definidos módulos, usuários, integrações, responsabilidades e etapas do projeto.',
                    ],
                    [
                      '05',
                      'Parametrização e implantação',
                      'O sistema é configurado conforme os processos aprovados e preparado para a entrada em operação.',
                    ],
                    [
                      '06',
                      'Treinamento e acompanhamento',
                      'A equipe recebe orientação e suporte durante o uso inicial, ajustes e evolução do sistema.',
                    ],
                  ].map(([number, title, text]) => (
                    <article key={number}>
                      <b>{number}</b>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </S.ProjectGrid>
                <S.ImplementationNote>
                  A INVETEC acompanha a comunicação técnica com a W3ERP e ajuda
                  a garantir que as necessidades da empresa sejam compreendidas
                  durante a definição e execução do projeto.
                </S.ImplementationNote>
                <S.ImplementationCta
                  type="button"
                  onClick={() => scrollToElement(formRef.current)}
                >
                  Quero avaliar como seria a implantação na minha empresa{' '}
                  <span aria-hidden="true">→</span>
                </S.ImplementationCta>
              </MotionReveal>
            </S.Implementation>

            <S.CaseSection>
              <MotionReveal>
                <S.CaseLayout>
                  <S.CaseIntro>
                    <S.Eyebrow>APLICAÇÃO REAL</S.Eyebrow>
                    <h2>W3ERP integrado à operação da JPM</h2>
                    <p>
                      A JPM utiliza o W3ERP para integrar faturamento, estoque,
                      financeiro e comercial, centralizando informações
                      importantes da operação.
                    </p>
                  </S.CaseIntro>
                  <S.TestimonialCard>
                    <blockquote>
                      “O W3ERP trouxe uma mudança importante para a nossa
                      empresa. Conseguimos integrar faturamento, estoque,
                      financeiro e comercial em um único sistema, melhorando o
                      controle das informações e a organização dos processos.
                      Com o suporte e as soluções da INVETEC, nossas operações
                      passaram a fluir de forma mais tranquila no dia a dia.”
                    </blockquote>
                    <S.TestimonialIdentity>
                      {hasJpmProfile ? (
                        <>
                          <img
                            src={jpmTestimonial?.avatar}
                            alt={jpmTestimonial?.name}
                          />
                          <div>
                            <strong>{jpmTestimonial?.name}</strong>
                            <span>{jpmTestimonial?.role} — JPM</span>
                          </div>
                        </>
                      ) : (
                        <div>
                          <strong>Equipe JPM</strong>
                          <span>Cliente INVETEC</span>
                        </div>
                      )}
                    </S.TestimonialIdentity>
                  </S.TestimonialCard>
                  <S.CaseActions>
                    <CustomButton
                      variant="cta"
                      onClick={() => scrollToElement(formRef.current)}
                    >
                      Avaliar o W3ERP para minha empresa
                    </CustomButton>
                    <a
                      href="/cases/jpm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver detalhes do caso da JPM{' '}
                      <span aria-hidden="true">→</span>
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </S.CaseActions>
                </S.CaseLayout>
              </MotionReveal>
            </S.CaseSection>



            <S.FormArea id="analise-w3erp" ref={formRef}>
              <MotionReveal>
                <S.SectionLead>
                  <S.Eyebrow>PRÓXIMO PASSO</S.Eyebrow>
                  <h2>Conte brevemente como funciona sua operação</h2>
                  <p>
                    A INVETEC analisa seu cenário e entra em contato para
                    entender se o W3ERP é adequado para sua empresa.
                  </p>
                </S.SectionLead>
                <FormContactERP origem="w3erp" />
              </MotionReveal>
            </S.FormArea>

            <S.FaqSection>
              <MotionReveal>
                <S.SectionLead>
                  <S.Eyebrow>DÚVIDAS FREQUENTES</S.Eyebrow>
                  <h2>Perguntas sobre o W3ERP</h2>
                </S.SectionLead>
                <div>
                  {faqs.map(([question, answer]) => (
                    <details key={question}>
                      <summary>{question}</summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </MotionReveal>
            </S.FaqSection>
          </S.Container>
          <S.FinalCta>
            <MotionReveal>
              <h2>
                Organize sua operação com um ERP preparado para o seu negócio
              </h2>
              <p>
                Converse com a INVETEC para avaliar processos, integrações e o
                modelo de implantação adequado para sua empresa.
              </p>
              <S.CtaActions>
                <CustomButton
                  variant="cta"
                  onClick={() => scrollToElement(formRef.current)}
                >
                  Solicitar análise
                </CustomButton>
              </S.CtaActions>
            </MotionReveal>
          </S.FinalCta>
        </PageHeroSection>
      </S.HeroShell>
    </>
  );
};
