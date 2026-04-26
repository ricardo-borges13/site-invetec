import heroImage from '@/assets/images/PagesHero-Data.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './CalculadoraData.styles';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é uma calculadora de datas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uma calculadora de datas é uma ferramenta que permite somar ou subtrair dias a partir de uma data inicial, facilitando o cálculo de prazos, vencimentos e períodos futuros.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como calcular uma data futura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para calcular uma data futura, basta informar a data inicial e a quantidade de dias desejada. A calculadora soma automaticamente os dias e apresenta a data final.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para que serve uma calculadora de datas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essa ferramenta é utilizada para calcular prazos contratuais, vencimentos de boletos, planejamento de atividades, controle de entregas e gestão de projetos.',
      },
    },
    {
      '@type': 'Question',
      name: 'É possível calcular datas para contratos e prazos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, a calculadora de datas é ideal para contratos, permitindo calcular prazos de vencimento, períodos de locação, serviços e datas futuras com precisão.',
      },
    },
  ],
};

export const CalculadoraData = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function pad2(n: number) {
    return String(n).padStart(2, '0');
  }

  function formatDateInput(date: Date) {
    const yyyy = date.getFullYear();
    const mm = pad2(date.getMonth() + 1);
    const dd = pad2(date.getDate());
    return `${yyyy}-${mm}-${dd}`;
  }

  function parseDateInput(value: string) {
    const parts = value.split('-');
    if (parts.length !== 3) return null;

    const [y, m, d] = parts.map(Number);
    const dt = new Date(y, m - 1, d);

    if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d)
      return null;

    return dt;
  }

  function addDaysLocal(date: Date, days: number) {
    const out = new Date(date);
    out.setDate(out.getDate() + days);
    return out;
  }

  function formatDatePt(date: Date) {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
    }).format(date);
  }

  const [dataInicial, setDataInicial] = useState(() => {
    const now = new Date();
    return formatDateInput(now);
  });

  const [dias, setDias] = useState('');

  // 🔥 cálculo direto (sem useEffect)
  const resultadoCalculado = (() => {
    if (!dataInicial || dias === '') return '—';

    const baseDate = parseDateInput(dataInicial);
    const diasNum = Number(dias);

    if (!baseDate || !Number.isFinite(diasNum)) {
      return 'Dados inválidos';
    }

    const future = addDaysLocal(baseDate, diasNum);
    return formatDatePt(future);
  })();

  return (
    <>
      <SEO
        title="Calculadora de Datas Online | Somar dias a uma data - Invetec"
        description="Calcule datas futuras online somando dias a uma data inicial de forma rápida e precisa. Ideal para prazos, contratos, vencimentos e planejamento."
        image="https://www.invetec.com.br/images/SEO-Data.jpg"
        url="https://www.invetec.com.br/servicos/ferramentas-uteis/calculadora-de-datas"
        schema={faqSchema}
      />
      <PageHeroSection
        title="Calculadora de Datas Online"
        subTitle="Some dias a uma data e descubra prazos, vencimentos e períodos de forma rápida"
        image={heroImage}
      >
        <S.BackLink to="/servicos/ferramentas-uteis">
          ← Voltar para Ferramentas Úteis
        </S.BackLink>
        <S.Container>
          <S.InfoBox>
            <h2>Como calcular datas futuras online de forma simples e rápida</h2>
            <p>
              Utilize nossa calculadora de datas online para somar dias a uma
              data inicial e descobrir prazos futuros com precisão. Ideal para
              contratos, vencimentos, planejamento e controle de prazos.
            </p>
          </S.InfoBox>
          <MotionReveal>
            <S.FormSection>
              <h3>Calcular data futura online</h3>

              <S.Form>
                <S.Field>
                  <label>Data inicial</label>
                  <input
                    type="date"
                    value={dataInicial}
                    onChange={e => setDataInicial(e.target.value)}
                  />
                </S.Field>

                <S.Field>
                  <label>Dias</label>
                  <input
                    type="number"
                    placeholder="Ex: 30"
                    value={dias}
                    onChange={e => setDias(e.target.value)}
                  />
                </S.Field>
              </S.Form>

              <S.ResultCard>
                <span>Resultado</span>
                <h2>{resultadoCalculado}</h2>
              </S.ResultCard>
            </S.FormSection>
          </MotionReveal>

          <S.Accordion>
            <S.Item>
              <S.Header onClick={() => toggleAccordion(0)}>
                O que é uma calculadora de datas?
                <span>{openIndex === 0 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 0 && (
                <p>
                  É uma ferramenta que permite somar ou subtrair dias de uma
                  data, facilitando o cálculo de prazos, vencimentos e períodos
                  futuros.
                </p>
              )}
            </S.Item>

            <S.Item>
              <S.Header onClick={() => toggleAccordion(1)}>
                Como calcular uma data futura?
                <span>{openIndex === 1 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 1 && (
                <p>
                  Basta informar uma data inicial e a quantidade de dias
                  desejada. O sistema realiza o cálculo automaticamente e
                  apresenta a data final.
                </p>
              )}
            </S.Item>

            <S.Item>
              <S.Header onClick={() => toggleAccordion(2)}>
                Para que serve a calculadora de datas?
                <span>{openIndex === 2 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 2 && (
                <p>
                  • Controle de prazos contratuais • Cálculo de vencimentos •
                  Planejamento de atividades • Gestão de entregas e projetos
                </p>
              )}
            </S.Item>

            <S.Item>
              <S.Header onClick={() => toggleAccordion(3)}>
                É possível calcular datas para contratos e prazos?
                <span>{openIndex === 3 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 3 && (
                <p>
                  Sim, a calculadora de datas é ideal para contratos, permitindo
                  calcular prazos de vencimento, períodos de locação, serviços e
                  datas futuras com precisão.
                </p>
              )}
            </S.Item>
          </S.Accordion>

          <S.Highlight>
            <h3>Quer automatizar ainda mais sua empresa?</h3>
            <p>
              Além de ferramentas como essa, oferecemos soluções completas para
              organizar processos, melhorar produtividade e reduzir erros
              operacionais.
            </p>
            <Link to="/contato">Falar com especialista</Link>
          </S.Highlight>
        </S.Container>

        <S.BackLink to="/servicos/ferramentas-uteis">
          ← Voltar para Ferramentas Úteis
        </S.BackLink>
      </PageHeroSection>
    </>
  );
};
