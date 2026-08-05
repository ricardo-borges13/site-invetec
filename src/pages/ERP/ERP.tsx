import heroImage from '@/assets/images/PagesHero-ERP-v2.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useRef } from 'react';
import {
  FiBarChart2,
  FiCheck,
  FiClipboard,
  FiLayers,
  FiPackage,
  FiRefreshCw,
  FiTrendingUp,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as S from './ERP.styles';

const signs = [
  [FiClipboard, 'Informações em várias planilhas'],
  [FiPackage, 'Estoque sem atualização confiável'],
  [FiLayers, 'Financeiro separado das vendas'],
  [FiRefreshCw, 'Retrabalho entre os setores'],
  [FiBarChart2, 'Dificuldade para acompanhar resultados'],
] as const;
const stages = [
  [
    'Análise do cenário',
    'Levantamento dos processos, usuários e necessidades.',
  ],
  [
    'Escolha da solução',
    'Recomendação baseada na operação atual e no crescimento esperado.',
  ],
  [
    'Implantação e parametrização',
    'Configuração do sistema conforme a rotina da empresa.',
  ],
  [
    'Treinamento e acompanhamento',
    'Orientação aos usuários e suporte durante a utilização.',
  ],
] as const;

export const ERP = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLElement | null>(null);
  const comparisonRef = useRef<HTMLElement | null>(null);
  const scrollTo = (element: HTMLElement | null) =>
    element?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  return (
    <>
      <SEO
        title="Sistema ERP para Empresas | Bling e W3ERP | INVETEC"
        description="Encontre o sistema ERP ideal para sua empresa. A INVETEC analisa sua operação, indica entre Bling e W3ERP e acompanha implantação, treinamento e suporte."
        image="https://www.invetec.com.br/images/SEO-ERP.jpg"
        url="https://www.invetec.com.br/servicos/erp"
      />
      <PageHeroSection
        compactMobile
        title="Sistema ERP para organizar sua empresa e apoiar o crescimento"
        subTitle="A INVETEC analisa seus processos e indica a solução mais adequada para sua operação."
        image={heroImage}
        heroContent={
          <S.HeroActions>
            <CustomButton
              variant="cta"
              onClick={() => scrollTo(formRef.current)}
            >
              Solicitar diagnóstico
            </CustomButton>
            <S.HeroSecondary
              type="button"
              onClick={() => scrollTo(comparisonRef.current)}
            >
              Comparar soluções
            </S.HeroSecondary>
          </S.HeroActions>
        }
      >
        <S.Container>
          <S.Section>
            <MotionReveal>
              <S.Intro>
                <span>GESTÃO EMPRESARIAL</span>
                <h2>Sua empresa perdeu o controle dos processos?</h2>
                <p>
                  Informações espalhadas, retrabalho e falta de integração
                  dificultam a gestão e aumentam o custo da operação.
                </p>
              </S.Intro>
            </MotionReveal>
            <S.Signs>
              {signs.map(([Icon, text], index) => (
                <MotionReveal key={text} delay={index * 0.06}>
                  <article>
                    <Icon aria-hidden="true" />
                    <span>{text}</span>
                  </article>
                </MotionReveal>
              ))}
            </S.Signs>
          </S.Section>
          <S.Consulting>
            <MotionReveal direction="left">
              <div>
                <span>CONSULTORIA E IMPLANTAÇÃO</span>
                <h2>Mais do que indicar um sistema</h2>
                <p>
                  A INVETEC avalia a rotina da empresa, identifica os principais
                  gargalos e recomenda uma solução compatível com o nível de
                  complexidade da operação.
                </p>
              </div>
            </MotionReveal>
            <S.StageGrid>
              {stages.map(([title, text], index) => (
                <MotionReveal key={title} delay={index * 0.07}>
                  <article>
                    <b>0{index + 1}</b>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </MotionReveal>
              ))}
            </S.StageGrid>
          </S.Consulting>
          <S.Section id="comparacao-erp" ref={comparisonRef}>
            <MotionReveal>
              <S.Intro>
                <span>COMPARAÇÃO DE SOLUÇÕES</span>
                <h2>Qual sistema ERP combina com sua operação?</h2>
                <p>
                  Bling e W3ERP atendem cenários diferentes. A escolha deve
                  considerar processos, quantidade de usuários, integrações e
                  necessidade de personalização.
                </p>
              </S.Intro>
            </MotionReveal>
            <S.Comparison>
              <MotionReveal direction="left">
                <S.ProductCard>
                  <S.Badge>Operações mais enxutas</S.Badge>
                  <h3>Bling</h3>
                  <p>
                    Indicado para pequenas empresas que precisam organizar
                    vendas, estoque, financeiro e emissão fiscal com implantação
                    mais rápida.
                  </p>
                  <ul>
                    {[
                      'Interface simples e operação padronizada',
                      'Implantação mais rápida',
                      'Controle de vendas, estoque e financeiro',
                      'Integração com canais de venda',
                      'Menor complexidade operacional',
                    ].map(item => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <strong>
                    Planos contratados conforme a necessidade da empresa.
                  </strong>
                  <CustomButton
                    variant="primary"
                    onClick={() => navigate('/servicos/erp/bling')}
                  >
                    Conhecer o Bling
                  </CustomButton>
                </S.ProductCard>
              </MotionReveal>
              <MotionReveal direction="right">
                <S.ProductCard $featured>
                  <S.Badge>Operações estruturadas</S.Badge>
                  <h3>W3ERP</h3>
                  <p>
                    Indicado para empresas que precisam integrar setores,
                    controlar processos mais complexos e adaptar o sistema à
                    própria operação.
                  </p>
                  <ul>
                    {[
                      'Integração entre áreas da empresa',
                      'Maior controle operacional e gerencial',
                      'Parametrizações conforme o negócio',
                      'Estrutura escalável',
                      'Implantação acompanhada',
                    ].map(item => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <strong>
                    Investimento definido após análise do projeto.
                  </strong>
                  <CustomButton
                    variant="primary"
                    onClick={() => navigate('/servicos/erp/w3erp')}
                  >
                    Conhecer o W3ERP
                  </CustomButton>
                </S.ProductCard>
              </MotionReveal>
            </S.Comparison>
          </S.Section>
          <MotionReveal>
            <S.Advisory>
              <FiTrendingUp aria-hidden="true" />
              <div>
                <h2>Ainda não sabe qual ERP escolher?</h2>
                <p>
                  A escolha errada pode gerar retrabalho, custos adicionais e
                  dificuldade de adaptação. A INVETEC analisa sua operação antes
                  de recomendar a solução.
                </p>
              </div>
              <CustomButton
                variant="cta"
                onClick={() => scrollTo(formRef.current)}
              >
                Solicitar diagnóstico gratuito
              </CustomButton>
            </S.Advisory>
          </MotionReveal>
          <S.FormArea id="diagnostico-erp" ref={formRef}>
            <MotionReveal direction="left">
              <div>
                <span>ANÁLISE INICIAL</span>
                <h2>Solicite uma análise inicial</h2>
                <p>
                  Preencha os dados principais da sua empresa. A INVETEC
                  avaliará o cenário e entrará em contato para entender a
                  operação.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal direction="right">
              <FormContactERP />
            </MotionReveal>
          </S.FormArea>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
