import fileServerImage from '@/assets/images/Cloud-FileServer.webp';
import backupImage from '@/assets/images/Cloud-backup.webp';
import heroImage from '@/assets/images/PagesHero-Cloud.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContact, type CloudServiceInterest } from '@/components/FormContact/FormContact';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useEffect, useState } from 'react';
import { FiCheck, FiCloud, FiFolder, FiShield } from 'react-icons/fi';
import * as S from './Cloud.styles';

type Solution = {
  id: 'file-server' | 'backup';
  icon: typeof FiCloud;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  cta: string;
};
const solutions: Solution[] = [
  {
    id: 'file-server',
    icon: FiFolder,
    title: 'File Server em Nuvem',
    subtitle: 'TRABALHO E ACESSO',
    description:
      'Centralize os arquivos da empresa e permita que a equipe acesse documentos e pastas com controle de usuários e permissões.',
    benefits: [
      'Arquivos centralizados',
      'Acesso remoto controlado',
      'Permissões por usuário ou setor',
    ],
    cta: 'Ver detalhes do File Server',
  },
  {
    id: 'backup',
    icon: FiShield,
    title: 'Backup em Nuvem',
    subtitle: 'PROTEÇÃO E RECUPERAÇÃO',
    description:
      'Automatize cópias dos dados e mantenha pontos de recuperação protegidos para situações de perda, falha ou incidente.',
    benefits: [
      'Rotinas automáticas',
      'Proteção contra ransomware',
      'Pontos de restauração',
    ],
    cta: 'Ver detalhes do Backup',
  },
];
const scrollTo = (id: string) =>
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
const handleHeroSecondary = (event: React.MouseEvent<HTMLElement>) => {
  if ((event.target as HTMLElement).closest('a[href*="wa.me"]')) {
    event.preventDefault();
    scrollTo('contato-cloud');
  }
};

const ChoiceCards = () => (
  <S.Section id="solucoes">
    <MotionReveal>
      <S.Intro>
        <S.Eyebrow>ESCOLHA A SOLUÇÃO</S.Eyebrow>
        <h2>Duas soluções para necessidades diferentes</h2>
        <p>
          Um serviço organiza o uso diário dos arquivos. O outro protege cópias
          para recuperação quando algo dá errado.
        </p>
      </S.Intro>
    </MotionReveal>
    <S.ChoiceGrid>
      {solutions.map(
        ({ id, title, subtitle, description, benefits, cta }, index) => (
          <MotionReveal key={id} delay={index * 0.08}>
            <S.ChoiceCard $variant={id}>
              <S.ChoiceVisual $variant={id}>
                <img
                  src={id === 'file-server' ? fileServerImage : backupImage}
                  alt={
                    id === 'file-server'
                      ? 'Arquivos corporativos organizados em nuvem'
                      : 'Proteção e recuperação de dados em nuvem'
                  }
                />
              </S.ChoiceVisual>
              <S.ChoiceBadge $variant={id}>{subtitle}</S.ChoiceBadge>
              <h3>{title}</h3>
              <p>{description}</p>
              <S.Ideal $variant={id}>
                Ideal para{' '}
                {id === 'file-server'
                  ? 'organizar o trabalho diário e reduzir a dependência de servidor físico.'
                  : 'reduzir riscos e recuperar dados quando algo sair do planejado.'}
              </S.Ideal>
              <ul>
                {benefits.map(item => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => scrollTo(id)}>
                {cta}
              </button>
            </S.ChoiceCard>
          </MotionReveal>
        )
      )}
    </S.ChoiceGrid>
  </S.Section>
);
const scenarios = [
  {
    title: 'File Server em Nuvem',
    badge: 'ORGANIZAÇÃO E ACESSO',
    text: 'Para empresas que querem centralizar os arquivos, facilitar o acesso da equipe e reduzir a dependência de um servidor físico.',
    benefits: [
      'Arquivos e pastas em um ambiente centralizado',
      'Acesso remoto com usuários e permissões',
      'Lixeira por até 30 dias para exclusões acidentais',
    ],
    note: 'Pode ser contratado como solução principal de armazenamento e trabalho diário da empresa.',
    image: fileServerImage,
    variant: 'file-server' as const,
  },
  {
    title: 'Backup em Nuvem',
    badge: 'PROTEÇÃO DO AMBIENTE ATUAL',
    text: 'Para empresas que já possuem dados em servidores locais, computadores ou outros sistemas e precisam manter cópias externas protegidas.',
    benefits: [
      'Backup do ambiente já utilizado pela empresa',
      'Rotinas e retenções definidas conforme a necessidade',
      'Recuperação após falhas, exclusões ou incidentes',
    ],
    note: 'Pode ser contratado sem a necessidade de utilizar o File Server em Nuvem.',
    image: backupImage,
    variant: 'backup' as const,
  },
];
const ScenarioSection = () => (
  <S.Section>
    <MotionReveal>
      <S.Intro>
        <S.Eyebrow>CENÁRIOS DIFERENTES</S.Eyebrow>
        <h2>Escolha a solução conforme a estrutura da sua empresa</h2>
        <p>
          O File Server organiza e disponibiliza os arquivos para a equipe. O
          Backup protege dados que podem estar em servidores locais,
          computadores ou outros ambientes. As soluções podem ser contratadas
          separadamente ou em conjunto.
        </p>
      </S.Intro>
    </MotionReveal>
    <S.ScenarioGrid>
      {scenarios.map((item, index) => (
        <MotionReveal key={item.title} delay={index * 0.08}>
          <S.ScenarioCard $variant={item.variant}>
            <img
              src={item.image}
              alt={
                item.title === 'File Server em Nuvem'
                  ? 'Arquivos corporativos organizados em nuvem'
                  : 'Backup e recuperação de dados em nuvem'
              }
            />
            <span>{item.badge}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.benefits.map(benefit => (
                <li key={benefit}>
                  <FiCheck aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <strong>{item.note}</strong>
          </S.ScenarioCard>
        </MotionReveal>
      ))}
    </S.ScenarioGrid>
    <S.ScenarioConclusion>
      <FiCloud aria-hidden="true" />
      <div>
        <h3>File Server, Backup ou as duas soluções</h3>
        <p>
          A configuração ideal depende de onde os dados estão hoje, de como a
          equipe trabalha e do nível de proteção necessário.
        </p>
      </div>
    </S.ScenarioConclusion>
  </S.Section>
);

type DetailSolution = {
  id: 'file-server' | 'backup';
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  panels: Array<{ title: string; items: string[]; note?: string }>;
  stepsTitle: string;
  steps: Array<{ title: string; description: string }>;
  resourcesTitle: string;
  resources: string[];
  cta: string;
};

const detailSolutions: DetailSolution[] = [
  {
    id: 'file-server',
    eyebrow: 'ARQUIVOS ORGANIZADOS',
    title:
      'Centralize os arquivos da empresa sem depender de um servidor físico',
    description:
      'O File Server em Nuvem cria um ambiente centralizado para armazenar e acessar os documentos utilizados diariamente pela equipe, com estrutura de pastas, usuários e permissões definidos conforme a operação da empresa.',
    image: fileServerImage,
    imageAlt: 'Ilustração de arquivos corporativos organizados em nuvem',
    panels: [
      {
        title: 'Quando o File Server faz sentido',
        items: [
          'Arquivos espalhados em computadores ou unidades diferentes',
          'Dificuldade para acessar documentos fora da empresa',
          'Dependência de um servidor físico local',
          'Necessidade de controlar acessos por usuário ou setor',
          'Equipes trabalhando em locais diferentes',
          'Crescimento do volume de arquivos sem estrutura adequada',
        ],
      },
      {
        title: 'Como funciona no dia a dia',
        items: [
          'Arquivos centralizados em uma estrutura corporativa',
          'Acesso somente às pastas autorizadas',
          'Utilização dentro ou fora da empresa',
          'Permissões por usuário, setor ou grupo',
          'Lixeira por até 30 dias para exclusões acidentais',
          'Espaço ajustável conforme o crescimento da empresa',
        ],
      },
    ],
    stepsTitle: 'Implantação acompanhada pela INVETEC',
    steps: [
      {
        title: 'Levantamento',
        description:
          'Analisamos arquivos, usuários, setores, acessos e volume de dados.',
      },
      {
        title: 'Organização',
        description:
          'Definimos estrutura de pastas e permissões conforme a rotina da empresa.',
      },
      {
        title: 'Migração e configuração',
        description:
          'Preparamos o ambiente, configuramos os acessos e realizamos a migração conforme o escopo definido.',
      },
      {
        title: 'Orientação e suporte',
        description:
          'Orientamos os usuários e acompanhamos a utilização após a implantação.',
      },
    ],
    resourcesTitle: 'Recursos do File Server em Nuvem',
    resources: [
      'Arquivos e pastas centralizados',
      'Acesso remoto controlado',
      'Usuários, grupos e permissões',
      'Organização por setor',
      'Lixeira por até 30 dias',
      'Expansão de espaço conforme a necessidade',
    ],
    cta: 'Solicitar avaliação do File Server',
  },
  {
    id: 'backup',
    eyebrow: 'PROTEÇÃO E RECUPERAÇÃO',
    title: 'Mantenha cópias protegidas dos dados da sua empresa',
    description:
      'O Backup em Nuvem automatiza cópias dos dados existentes em servidores, computadores ou outros ambientes da empresa, mantendo pontos de recuperação para situações de falha, exclusão ou incidente.',
    image: backupImage,
    imageAlt: 'Ilustração de backup e proteção de dados em nuvem',
    panels: [
      {
        title: 'Quando o Backup em Nuvem faz sentido',
        items: [
          'A empresa já possui servidor de arquivos local',
          'Dados importantes ficam armazenados em computadores',
          'O backup atual depende de HD externo ou processo manual',
          'Existe necessidade de retenções maiores',
          'Arquivos ou sistemas são críticos para a operação',
          'A empresa precisa reduzir riscos de perda após falhas ou incidentes',
        ],
        note: 'O Backup pode ser contratado independentemente do File Server em Nuvem para proteger o ambiente que a empresa já utiliza.',
      },
      {
        title: 'Como funciona a proteção dos dados',
        items: [
          'Definição dos dados que precisam ser protegidos',
          'Configuração da rotina conforme o ambiente',
          'Definição de horários, frequência e retenções',
          'Cópias armazenadas fora do ambiente original',
          'Pontos de recuperação disponíveis quando necessário',
          'Acompanhamento técnico de alertas e resultados',
        ],
      },
    ],
    stepsTitle: 'Configuração e acompanhamento pela INVETEC',
    steps: [
      {
        title: 'Análise do ambiente',
        description:
          'Identificamos servidores, computadores, sistemas e dados que precisam ser protegidos.',
      },
      {
        title: 'Definição da política',
        description:
          'Definimos rotina, frequência, retenção e escopo conforme a necessidade da empresa.',
      },
      {
        title: 'Configuração',
        description:
          'Instalamos e configuramos a solução nos equipamentos incluídos no escopo.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Acompanhamos alertas e auxiliamos quando houver necessidade de recuperação.',
      },
    ],
    resourcesTitle: 'Recursos do Backup em Nuvem',
    resources: [
      'Rotinas automáticas',
      'Cópias externas ao ambiente original',
      'Criptografia',
      'Pontos de recuperação',
      'Retenções configuráveis',
      'Proteção contra ransomware',
      'Backup imutável conforme a solução contratada',
      'Apoio técnico em recuperações',
    ],
    cta: 'Solicitar avaliação do Backup',
  },
];

type DetailedSolutionSectionsProps = {
  onContact: (serviceInterest: CloudServiceInterest) => void;
};

const DetailedSolutionSections = ({ onContact }: DetailedSolutionSectionsProps) => (
  <>
    {detailSolutions.map(solution => (
      <S.DetailedSection
        id={solution.id}
        $variant={solution.id}
        key={solution.id}
      >
        <S.DetailedHeader $reverse={solution.id === 'backup'}>
          <MotionReveal direction={solution.id === 'backup' ? 'right' : 'left'}>
            <S.DetailedCopy>
              <S.Eyebrow>{solution.eyebrow}</S.Eyebrow>
              <h2>{solution.title}</h2>
              <p>{solution.description}</p>
            </S.DetailedCopy>
          </MotionReveal>
          <MotionReveal direction={solution.id === 'backup' ? 'left' : 'right'}>
            <S.DetailedVisual $variant={solution.id}>
              <img src={solution.image} alt={solution.imageAlt} />
            </S.DetailedVisual>
          </MotionReveal>
        </S.DetailedHeader>
        <S.DetailPanelGrid>
          {solution.panels.map((panel, panelIndex) => (
            <MotionReveal key={panel.title} delay={panelIndex * 0.06}>
              <S.DetailPanel $variant={solution.id}>
                <h3>{panel.title}</h3>
                <ul>
                  {panel.items.map(item => (
                    <li key={item}>
                      <FiCheck aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {panel.note && <S.DetailNote>{panel.note}</S.DetailNote>}
              </S.DetailPanel>
            </MotionReveal>
          ))}
        </S.DetailPanelGrid>
        <S.DetailBlockTitle>{solution.stepsTitle}</S.DetailBlockTitle>
        <S.DetailSteps>
          {solution.steps.map((step, stepIndex) => (
            <MotionReveal key={step.title} delay={stepIndex * 0.05}>
              <article>
                <b>0{stepIndex + 1}</b>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </MotionReveal>
          ))}
        </S.DetailSteps>
        <S.DetailBlockTitle>{solution.resourcesTitle}</S.DetailBlockTitle>
        <S.DetailResources>
          {solution.resources.map((resource, resourceIndex) => (
            <MotionReveal key={resource} delay={resourceIndex * 0.035}>
              <span>
                <FiCheck aria-hidden="true" />
                {resource}
              </span>
            </MotionReveal>
          ))}
        </S.DetailResources>
        <S.DetailCta>
          <CustomButton variant="cta" onClick={() => onContact(solution.id)}>
            {solution.cta}
          </CustomButton>
        </S.DetailCta>
      </S.DetailedSection>
    ))}
  </>
);

export const Cloud = () => {
  const [serviceInterest, setServiceInterest] = useState<CloudServiceInterest>();
  const scrollToContact = (interest?: CloudServiceInterest) => {
    setServiceInterest(current => interest ?? current ?? 'unsure');
    scrollTo('contato-cloud');
  };

  useEffect(() => {
    const link = document.querySelector(
      'main header a[href*="wa.me/5531997101336"]'
    );
    if (link) {
      link.textContent = 'Solicitar uma avaliação';
      link.setAttribute('aria-label', 'Solicitar uma avaliação');
      const handleClick = (event: Event) => {
        event.preventDefault();
        scrollToContact();
      };
      link.addEventListener('click', handleClick);
      return () => link.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <>
      <SEO
        title="Soluções Cloud para Empresas | File Server e Backup | INVETEC"
        description="Centralize arquivos e proteja os dados da sua empresa com File Server e Backup em Nuvem. Implantação, configuração e suporte especializado da INVETEC."
        image="https://www.invetec.com.br/images/SEO-Cloud.jpg"
        url="https://www.invetec.com.br/servicos/cloud"
      />
      <PageHeroSection
        image={heroImage}
        compactMobile
        overlayOpacity={0.62}
        contentAlign="left"
        heroTopPadding="clamp(122px, 9vw, 140px)"
        brandContent={<S.Eyebrow>SOLUÇÕES EM NUVEM</S.Eyebrow>}
        title="Cloud para organizar e proteger os dados da sua empresa"
        subTitle="Centralize os arquivos da sua empresa, facilite o acesso da equipe e mantenha cópias protegidas contra falhas, perdas e imprevistos."
        benefit={
          <S.HeroBenefits>
            <span>Arquivos centralizados</span>
            <span>Acesso seguro</span>
            <span>Backup automatizado</span>
          </S.HeroBenefits>
        }
        heroContent={
          <S.HeroActions>
            <CustomButton variant="cta" onClick={() => scrollTo('solucoes')}>
              Conhecer as soluções
            </CustomButton>
            <S.WhatsApp href="https://wa.me/5531997101336?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20Cloud.">
              Falar com um especialista
            </S.WhatsApp>
          </S.HeroActions>
        }
      >
        <S.Page onClick={handleHeroSecondary}>
          <ChoiceCards />
          <ScenarioSection />
          <DetailedSolutionSections onContact={scrollToContact} />

          <MotionReveal>
            <S.Partnership>
              <h2>Infraestrutura especializada com implantação e suporte da INVETEC</h2>
              <p>A INVETEC analisa o ambiente, configura a solução, acompanha a implantação e presta suporte ao cliente durante a operação.</p>
              <S.PartnershipPoints>
                <span><FiCheck aria-hidden="true" />Análise do ambiente</span>
                <span><FiCheck aria-hidden="true" />Implantação e configuração</span>
                <span><FiCheck aria-hidden="true" />Suporte próximo</span>
              </S.PartnershipPoints>
            </S.Partnership>
          </MotionReveal>
          <MotionReveal>
            <S.FinalCta>
              <div>
                <h2>Qual solução Cloud faz sentido para sua empresa?</h2>
                <p>Conte como seus arquivos estão armazenados hoje. Avaliamos se sua empresa precisa de File Server, Backup em Nuvem ou das duas soluções.</p>
              </div>
              <CustomButton variant="cta" onClick={() => scrollToContact()}>
                Solicitar uma avaliação
              </CustomButton>
            </S.FinalCta>
          </MotionReveal>
          <S.Contact id="contato-cloud">
            <div>
              <S.Eyebrow>AVALIAÇÃO CLOUD</S.Eyebrow>
              <h2>Vamos entender o cenário da sua empresa</h2>
              <p>Envie seus dados e conte brevemente como os arquivos da sua empresa são armazenados hoje. A INVETEC avaliará o cenário e entrará em contato.</p>
            </div>
            <FormContact variant="cloud" serviceInterest={serviceInterest} onServiceInterestChange={setServiceInterest} />
          </S.Contact>
        </S.Page>
      </PageHeroSection>
    </>
  );
};
