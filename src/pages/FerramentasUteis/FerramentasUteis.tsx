import heroImage from '@/assets/images/PagesHero-Ferramentas.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './FerramentasUteis.styles';

export const FerramentasUteis = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ferramentas = [
    {
      title: 'Cálculo Pro Rata Online',
      description:
        'Calcule valores proporcionais de contratos de locação e serviços com precisão. Ideal para faturamento mensal e ajustes contratuais.',
      link: '/servicos/ferramentas-uteis/pro-rata',
    },
    {
      title: 'Calculadora de Datas',
      description:
        'Descubra datas futuras somando dias ou calcule períodos entre datas. Útil para contratos, prazos e planejamento.',
      link: '/servicos/ferramentas-uteis/calculadora-de-datas',
    },
    {
      title: 'Consulta de NF-e e DANFE',
      description:
        'Consulte nota fiscal eletrônica, visualize DANFE e converta XML para PDF de forma rápida e gratuita.',
      link: 'https://meudanfe.com.br/',
      external: true,
    },
    {
      title: 'Converter PDF para Word',
      description:
        'Converta arquivos PDF em documentos Word editáveis mantendo a formatação. Ideal para edição e reaproveitamento de conteúdo.',
      link: 'https://www.onlineocr.net/pt/',
      external: true,
    },
  ];

  return (
    <>
      <SEO
        title="Ferramentas online para empresas | Pro-rata, calculadora de datas e NF-e"
        description="Acesse ferramentas online gratuitas para empresas: cálculo pro-rata, calculadora de datas, consulta de NF-e e conversão de PDF. Recursos práticos para facilitar sua rotina."
        image="https://www.invetec.com.br/images/SEO-Ferramentas.jpg"
        url="https://www.invetec.com.br/servicos/ferramentas-uteis"
      />

      <PageHeroSection
        title="Ferramentas online para facilitar a rotina da sua empresa"
        subTitle="Cálculos, utilidades e recursos práticos como pro-rata, datas e NF-e em um só lugar"
        image={heroImage}
      >
        <S.Container>
          {/* INTRO */}
          <S.Section>
            <MotionReveal>
              <h2>
                Ferramentas empresariais para otimizar processos do dia a dia
              </h2>
              <p>
                Se você precisa calcular valores proporcionais, descobrir datas
                futuras ou consultar notas fiscais, reunimos aqui ferramentas
                online que ajudam a automatizar tarefas operacionais e reduzir
                erros no dia a dia. Algumas foram desenvolvidas por nós com base
                em necessidades reais de clientes, outras selecionadas para
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

                    {item.external ? (
                      <S.Button
                        as="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Acessar ferramenta externa
                      </S.Button>
                    ) : (
                      <S.Button as={Link} to={item.link}>
                        Usar ferramenta
                      </S.Button>
                    )}
                  </S.AccordionContent>
                </S.Card>
              </MotionReveal>
            ))}
          </S.Grid>
          <S.Section>
            <MotionReveal>
              <h2>Como essas ferramentas ajudam sua empresa?</h2>

              <p>
                Muitas empresas ainda realizam tarefas manuais como cálculos
                proporcionais, controle de datas e manipulação de documentos
                fiscais. Com ferramentas online simples, é possível ganhar
                agilidade, reduzir erros e padronizar processos.
              </p>

              <p>
                Utilize calculadoras de pro-rata, ferramentas de datas e
                consultas de NF-e para melhorar a eficiência operacional e
                facilitar o dia a dia da sua equipe.
              </p>
            </MotionReveal>
          </S.Section>
          {/* CTA leve */}
          <S.Highlight>
            <h2>Precisa automatizar ainda mais sua empresa?</h2>
            <p>
              Além dessas ferramentas, oferecemos soluções completas como e-mail
              corporativo, sistemas ERP e suporte técnico para estruturar sua
              operação com mais eficiência.
            </p>
            <Link to="/contato">Falar com especialista</Link>
          </S.Highlight>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
