import heroImage from '@/assets/images/PagesHero-Case-v2.webp';
import datronImage from '@/assets/images/PagesHero-Datron.webp';
import jpmImage from '@/assets/images/case-jpm.webp';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import {
  FiBarChart2,
  FiCheckCircle,
  FiMail,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';
import * as S from './Cases.styles';

const solutions = [
  'ERP e gestão',
  'Infraestrutura de TI',
  'INVETEC Mail',
  'Cloud',
  'Criação de sites',
  'Presença digital',
];

const cases = [
  {
    name: 'Datron Tecnologia',
    path: '/cases/datron',
    image: datronImage,
    description:
      'Soluções integradas para melhorar a gestão, a infraestrutura de TI e a presença digital da empresa.',
    items: [
      'ERP e organização da operação',
      'Infraestrutura de TI',
      'INVETEC Mail',
      'File Server em Nuvem',
      'Criação do novo site institucional',
      'SEO e preparação para Google Ads',
    ],
  },
  {
    name: 'Grupo JPM',
    path: '/cases/jpm',
    image: jpmImage,
    description:
      'Projeto integrado para organizar processos, modernizar a estrutura tecnológica e melhorar o site institucional da empresa.',
    items: [
      'ERP e integração de processos',
      'Gestão e suporte de TI',
      'INVETEC Mail',
      'File Server e Backup em Nuvem',
      'Modernização do site institucional',
      'SEO e organização do conteúdo',
    ],
  },
];

export const Cases = () => (
  <>
    <SEO
      title="Casos reais de tecnologia para empresas | INVETEC"
      description="Conheça projetos da INVETEC envolvendo ERP, infraestrutura de TI, INVETEC Mail, File Server em Nuvem, criação de sites e SEO."
      image="https://www.invetec.com.br/images/SEO-Case.jpg"
      url="https://www.invetec.com.br/cases"
    />
    <PageHeroSection
      title="Casos reais de empresas que confiaram na INVETEC"
      subTitle="Conheça projetos em que aplicamos tecnologia para organizar processos, melhorar a infraestrutura e fortalecer a presença digital de empresas."
      image={heroImage}
      overlayOpacity={0.7}
    >
      <S.Container>
        <S.Intro>
          <MotionReveal>
            <span>Casos reais</span>
            <h2>Cada empresa tem necessidades diferentes</h2>
            <p>
              Cada projeto combina soluções diferentes, definidas de acordo com a operação, a estrutura e os objetivos de cada empresa.
            </p>
          </MotionReveal>
        </S.Intro>
        <MotionReveal delay={0.08}>
          <S.Solutions aria-label="Soluções presentes nestes projetos">
            <p>Soluções aplicadas nestes projetos</p>
            <S.Chips>
              {solutions.map(solution => (
                <span key={solution}>{solution}</span>
              ))}
            </S.Chips>
          </S.Solutions>
        </MotionReveal>
        <S.CaseGrid>
          {cases.map((caseItem, index) => (
            <MotionReveal
              key={caseItem.name}
              direction={index === 0 ? 'left' : 'right'}
              delay={index * 0.08}
            >
              <S.CaseCard>
                <img
                  src={caseItem.image}
                  alt={`Projeto realizado para ${caseItem.name}`}
                />
                <S.CardContent>
                  <h2>{caseItem.name}</h2>
                  <p>{caseItem.description}</p>
                  <ul>
                    {caseItem.items.map(item => (
                      <li key={item}>
                        <FiCheckCircle aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <S.CardLink to={caseItem.path}>
                    Ver o case completo <span aria-hidden="true">→</span>
                  </S.CardLink>
                </S.CardContent>
              </S.CaseCard>
            </MotionReveal>
          ))}
        </S.CaseGrid>
        <MotionReveal>
          <S.Institutional>
            <div>
              <h2>Cada empresa tem um cenário único. A solução também.</h2>
              <p>
                A INVETEC analisa a operação, identifica as necessidades reais e
                combina as soluções adequadas para melhorar organização,
                segurança, comunicação e presença digital.
              </p>
            </div>
            <S.Benefits>
              <S.Benefit>
                <FiBarChart2 />
                <span>Mais organização e controle</span>
              </S.Benefit>
              <S.Benefit>
                <FiShield />
                <span>Infraestrutura mais segura</span>
              </S.Benefit>
              <S.Benefit>
                <FiMail />
                <span>Comunicação profissional</span>
              </S.Benefit>
              <S.Benefit>
                <FiTrendingUp />
                <span>Mais eficiência operacional</span>
              </S.Benefit>
            </S.Benefits>
          </S.Institutional>
        </MotionReveal>
        <MotionReveal>
          <S.FinalCTA>
            <div>
              <h2>Qual é o próximo desafio da sua empresa?</h2>
              <p>
                Converse com a INVETEC para avaliar quais soluções podem melhorar
                sua operação, infraestrutura ou presença digital.
              </p>
            </div>
            <S.CTAActions>
              <S.ContactLink to="/contato">Entre em contato</S.ContactLink>
            </S.CTAActions>
          </S.FinalCTA>
        </MotionReveal>
      </S.Container>
    </PageHeroSection>
  </>
);
