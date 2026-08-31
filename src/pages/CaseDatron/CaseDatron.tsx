import heroImage from '@/assets/images/PagesHero-Datron.webp';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import type { IconType } from 'react-icons';
import {
  FiBarChart2,
  FiCheck,
  FiCloud,
  FiFileText,
  FiGlobe,
  FiMail,
  FiMonitor,
  FiServer,
  FiSettings,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './CaseDatron.styles';

type IconItem = { icon: IconType; title: string; text?: string };

const solutionAreas: IconItem[] = [
  { icon: FiBarChart2, title: 'ERP e gestão' },
  { icon: FiMonitor, title: 'Infraestrutura e TI' },
  { icon: FiMail, title: 'INVETEC Mail' },
  { icon: FiCloud, title: 'File Server em Nuvem' },
  { icon: FiGlobe, title: 'Site, SEO e presença digital' },
];

const strategicDecisions: IconItem[] = [
  { icon: FiCheck, title: 'Migrar para uma solução 100% web' },
  { icon: FiServer, title: 'Eliminar a dependência de servidores locais' },
  { icon: FiTrendingUp, title: 'Reduzir custos com licenças e infraestrutura' },
  { icon: FiSettings, title: 'Simplificar manutenção e atualizações' },
  { icon: FiShield, title: 'Manter o controle operacional da empresa' },
  { icon: FiGlobe, title: 'Tornar o acesso ao sistema mais flexível' },
];

const additionalSolutions: IconItem[] = [
  {
    icon: FiMonitor,
    title: 'Infraestrutura e suporte de TI',
    text: 'Organização do ambiente tecnológico, suporte aos usuários e acompanhamento contínuo para manter a operação estável e segura.',
  },
  {
    icon: FiMail,
    title: 'INVETEC Mail',
    text: 'Comunicação corporativa profissional, com mais organização, controle administrativo e suporte direto da INVETEC.',
  },
  {
    icon: FiCloud,
    title: 'File Server em Nuvem',
    text: 'Centralização e compartilhamento de arquivos com acesso controlado, disponibilidade e mais organização para a equipe.',
  },
  {
    icon: FiGlobe,
    title: 'Site institucional e presença digital',
    text: 'Novo site com páginas por segmento, responsividade, SEO, formulário de orçamento e preparação técnica para integração com Google Ads.',
  },
];

const outcomes: IconItem[] = [
  {
    icon: FiTrendingUp,
    title: 'Redução de custos de infraestrutura',
    text: 'Eliminação da necessidade de novos investimentos em servidores e licenças locais.',
  },
  {
    icon: FiGlobe,
    title: 'Sistema 100% web',
    text: 'Acesso ao sistema sem dependência da estrutura interna da empresa.',
  },
  {
    icon: FiSettings,
    title: 'Menos complexidade operacional',
    text: 'Atualizações, manutenção e suporte realizados de forma mais simples.',
  },
  {
    icon: FiShield,
    title: 'Controle mantido',
    text: 'Contratos, faturamento, financeiro e demais processos continuaram integrados.',
  },
  {
    icon: FiFileText,
    title: 'Comunicação e arquivos organizados',
    text: 'INVETEC Mail e File Server em Nuvem organizaram a comunicação e o compartilhamento de documentos.',
  },
  {
    icon: FiMonitor,
    title: 'Presença digital modernizada',
    text: 'Novo site, SEO, páginas por segmento e estrutura preparada para geração de contatos.',
  },
];

export const CaseDatron = () => (
  <>
    <SEO
      title="Case Datron Tecnologia | ERP, TI, Cloud e Site | INVETEC"
      description="Conheça o projeto da Datron Tecnologia com ERP, infraestrutura de TI, INVETEC Mail, File Server em Nuvem, site institucional, SEO e preparação para Google Ads."
      image="https://www.invetec.com.br/images/SEO-Case-Datron.jpg"
      url="https://www.invetec.com.br/cases/datron"
    />
    <PageHeroSection
      title="Uma parceria tecnológica construída desde 2005"
      subTitle="ERP, infraestrutura, INVETEC Mail, File Server, site institucional e SEO aplicados de forma contínua à realidade da empresa."
      image={heroImage}
      compactMobile
      overlayOpacity={0.6}
      brandContent={<S.Eyebrow>Case Datron Tecnologia</S.Eyebrow>}
    >
      <S.Container>
        <S.PartnerGrid>
          <MotionReveal direction="left">
            <S.CopyBlock>
              <h2>Sobre a Datron Tecnologia</h2>
              <p>
                A Datron Tecnologia atua com locação de radiocomunicação para
                empresas, atendendo operações que dependem de controle de
                equipamentos, contratos recorrentes, faturamento e suporte
                técnico.
              </p>
              <p>
                Sua operação exige continuidade, organização e acompanhamento
                constante dos recursos utilizados pelos clientes.
              </p>
            </S.CopyBlock>
          </MotionReveal>
          <MotionReveal direction="right">
            <S.PartnerPanel>
              <span>Desde 2005</span>
              <h2>Uma parceria tecnológica contínua</h2>
              <p>
                A INVETEC acompanha a evolução tecnológica da Datron, atuando
                em sistemas de gestão, infraestrutura, comunicação corporativa,
                cloud e presença digital.
              </p>
            </S.PartnerPanel>
          </MotionReveal>
        </S.PartnerGrid>

        <S.Section>
          <MotionReveal>
            <S.SectionHeading>
              <h2>Soluções aplicadas</h2>
              <p>
                O projeto reuniu diferentes soluções da INVETEC para apoiar a
                gestão, a continuidade da operação, a comunicação e a presença
                digital da Datron.
              </p>
            </S.SectionHeading>
          </MotionReveal>
          <S.SolutionStrip>
            {solutionAreas.map(({ icon: Icon, title }, index) => (
              <MotionReveal key={title} delay={index * 0.05}>
                <S.SolutionItem>
                  <Icon aria-hidden="true" />
                  <span>{title}</span>
                </S.SolutionItem>
              </MotionReveal>
            ))}
          </S.SolutionStrip>
        </S.Section>

        <S.Section>
          <MotionReveal>
            <S.CopyBlock>
              <h2>O cenário inicial</h2>
              <p>
                A Datron já utilizava um sistema robusto da TOTVS, com processos
                estruturados e controle eficiente de contratos, faturamento e
                gestão financeira.
              </p>
              <p>
                O sistema atendia às necessidades da operação. O problema estava
                no custo de atualização, na infraestrutura exigida e na
                complexidade de manutenção.
              </p>
            </S.CopyBlock>
          </MotionReveal>
        </S.Section>

        <S.Warning>
          <MotionReveal>
            <h2>
              O desafio era reduzir custo e complexidade sem perder controle
            </h2>
            <p>
              A atualização do sistema anterior exigiria investimento superior a
              R$ 30.000 em infraestrutura, incluindo servidores, licenças de
              Windows Server e banco de dados.
            </p>
            <p>
              Além do investimento inicial, permaneceriam os custos recorrentes
              de manutenção, atualização e aquisição de máquinas mais potentes
              para executar o sistema.
            </p>
            <p>
              A meta era simplificar a estrutura e reduzir custos sem
              comprometer contratos, faturamento, controle financeiro e os
              demais processos da operação.
            </p>
          </MotionReveal>
        </S.Warning>

        <S.Section>
          <MotionReveal>
            <S.SectionHeading>
              <h2>A decisão estratégica</h2>
            </S.SectionHeading>
          </MotionReveal>
          <S.DecisionList>
            {strategicDecisions.map(({ icon: Icon, title }, index) => (
              <MotionReveal key={title} delay={index * 0.06}>
                <li>
                  <Icon aria-hidden="true" />
                  <span>{title}</span>
                </li>
              </MotionReveal>
            ))}
          </S.DecisionList>
        </S.Section>

        <S.ERPSection>
          <MotionReveal>
            <S.CopyBlock>
              <h2>ERP e gestão</h2>
              <p>
                A migração para o W3ERP permitiu manter o controle da operação
                com uma estrutura mais simples, acessível e menos dependente de
                infraestrutura local.
              </p>
            </S.CopyBlock>
          </MotionReveal>
          <S.ERPList>
            <li>Sistema 100% web</li>
            <li>Acesso sem dependência de servidor local</li>
            <li>Contratos, faturamento e gestão financeira integrados</li>
            <li>Atualizações mais simples</li>
            <li>Menor dependência de infraestrutura interna</li>
            <li>Suporte mais direto</li>
          </S.ERPList>
          <MotionReveal delay={0.1}>
            <S.ERPNote>
              <span>Adequação à operação</span>
              <p>
                O W3ERP passou a atender melhor as necessidades atuais da
                Datron na gestão de contratos, mantendo os demais processos
                integrados.
              </p>
            </S.ERPNote>
          </MotionReveal>
        </S.ERPSection>

        <S.Section>
          <MotionReveal>
            <S.SectionHeading>
              <h2>Soluções além do ERP</h2>
              <p>
                A atuação da INVETEC também envolve a infraestrutura, a
                comunicação corporativa, os arquivos em nuvem e a presença
                digital da Datron.
              </p>
            </S.SectionHeading>
          </MotionReveal>
          <S.SolutionsGrid>
            {additionalSolutions.map(({ icon: Icon, title, text }, index) => (
              <MotionReveal key={title} direction="up" delay={index * 0.05}>
                <S.SolutionCard>
                  <S.SolutionCardHeader>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                  </S.SolutionCardHeader>
                  <p>{text}</p>
                </S.SolutionCard>
              </MotionReveal>
            ))}
          </S.SolutionsGrid>
        </S.Section>

        <S.Results>
          <MotionReveal>
            <S.SectionHeading>
              <h2>Melhorias alcançadas</h2>
              <p>
                As soluções foram aplicadas para reduzir complexidade, manter o
                controle da operação e apoiar diferentes áreas da empresa.
              </p>
            </S.SectionHeading>
          </MotionReveal>
          <S.ResultsGrid>
            {outcomes.map(({ icon: Icon, title, text }, index) => (
              <MotionReveal key={title} direction="up" delay={index * 0.05}>
                <S.ResultCard>
                  <S.ResultCardHeader>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                  </S.ResultCardHeader>
                  <p>{text}</p>
                </S.ResultCard>
              </MotionReveal>
            ))}
          </S.ResultsGrid>
        </S.Results>

        <S.Conclusion>
          <MotionReveal direction="up">
            <h2>Tecnologia aplicada de forma contínua</h2>
            <p>
              O projeto da Datron mostra que a tecnologia gera mais resultado
              quando sistemas, infraestrutura, comunicação e presença digital
              evoluem de forma integrada.
            </p>
            <p>
              A atuação da INVETEC não se limitou à implantação de uma solução.
              O acompanhamento contínuo permite adaptar os recursos conforme a
              operação e as necessidades da empresa evoluem.
            </p>
          </MotionReveal>
        </S.Conclusion>

        <S.CTA>
          <MotionReveal direction="up">
            <div>
              <h2>
                Sua empresa também precisa integrar tecnologia e operação?
              </h2>
              <p>
                Converse com a INVETEC para avaliar quais soluções fazem sentido
                para a realidade da sua empresa.
              </p>
            </div>
            <Link to="/contato">Entre em contato</Link>
          </MotionReveal>
        </S.CTA>
      </S.Container>
    </PageHeroSection>
  </>
);
