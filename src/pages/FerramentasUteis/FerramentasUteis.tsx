import heroImage from '@/assets/images/PagesHero-Case.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import * as S from './FerramentasUteis.styles';

export const FerramentasUteis = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ferramentas = [
    {
      title: 'Cálculo Pro Rata',
      description:
        'Calcule valores proporcionais de contratos de forma rápida e precisa.',
      link: '/servicos/ferramentas-uteis/pro-rata',
    },
    {
      title: 'Calculadora de Datas',
      description:
        'Descubra datas futuras ou diferenças entre períodos facilmente.',
      link: '/ferramentas/calculadora-data',
    },
    {
      title: 'Consulta de NF-e / DANFE',
      description:
        'Consulta Grátis de NF-e, geração de DANFE, conversão de XML da Nota Fiscal Eletrônica em DANFE / PDF',
      link: 'https://meudanfe.com.br/',
      external: true,
    },
    {
      title: 'Editor de PDF',
      description:
        'Ferramenta online para editar, juntar ou dividir arquivos PDF.',
      link: 'https://www.ilovepdf.com/pt',
      external: true,
    },
  ];

  return (
    <>
      <SEO
        title="Ferramentas úteis para empresas | Invetec"
        description="Acesse ferramentas úteis para o dia a dia da sua empresa. Cálculos, utilidades e recursos práticos para facilitar sua rotina."
        url="https://www.invetec.com.br/ferramentas"
      />

      <PageHeroSection
        title="Ferramentas úteis para o dia a dia da empresa"
        subTitle="Recursos simples que ajudam na operação e organização do seu negócio"
        image={heroImage}
      >
        <S.Container>
          {/* INTRO */}
          <S.Section>
            <MotionReveal>
              <h2>Ferramentas práticas para facilitar sua rotina</h2>
              <p>
                Reunimos algumas ferramentas úteis que ajudam em tarefas do dia a
                dia. Algumas desenvolvidas por nós, outras selecionadas para
                apoiar sua operação.
              </p>
            </MotionReveal>
          </S.Section>

          {/* GRID */}
          <S.Grid>
            {ferramentas.map((item, index) => (
              <MotionReveal key={index} delay={index * 0.05}>
                <S.Card>
                  <S.CardHeader onClick={() => toggleAccordion(index)}>
                    <h3>{item.title}</h3>
                    <span>{openIndex === index ? '−' : '+'}</span>
                  </S.CardHeader>

                  <S.AccordionContent $open={openIndex === index}>
                    <p>{item.description}</p>

                    <S.Button
                      href={item.link}
                      target={item.external ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      {item.external
                        ? 'Acessar ferramenta externa'
                        : 'Usar ferramenta'}
                    </S.Button>
                  </S.AccordionContent>
                </S.Card>
              </MotionReveal>
            ))}
          </S.Grid>

          {/* CTA leve */}
          <S.Highlight>
            <h2>Quer parar de fazer processos manuais?</h2>
            <p>
              Organize sua empresa com soluções completas de e-mail, sistemas e
              suporte técnico especializado.
            </p>
          </S.Highlight>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
