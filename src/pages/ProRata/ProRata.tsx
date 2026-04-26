import imageProRata from '@/assets/images/PagesHero-Pro-Rata.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProRata.styles';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é cálculo pró-rata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O cálculo pró-rata é a divisão proporcional de um valor mensal com base na quantidade de dias utilizados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como calcular pró-rata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'text: "O cálculo de pró-rata é feito dividindo o valor mensal por 30 dias e multiplicando pelo número de dias utilizados dentro do período, garantindo uma cobrança proporcional correta."',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando usar cálculo pró-rata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O pró-rata é utilizado em contratos de locação, serviços iniciados no meio do mês, cancelamentos antecipados e ajustes de cobrança.',
      },
    },
  ],
};

export const ProRata = () => {
  const [segmento, setSegmento] = useState<'locacao' | 'servico' | 'outro'>(
    'locacao'
  );
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [valor, setValor] = useState('');
  const [dias, setDias] = useState<number | null>(null);
  const [resultado, setResultado] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [textButCopiar, setTextButCopiar] = useState('📋 Copiar resultado');

  function formatarData(data: string) {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  const calcular = () => {
    if (!dataInicial || !dataFinal) {
      alert('Preencha as datas');
      return;
    }

    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);

    if (fim < inicio) {
      alert('Data final não pode ser menor que a inicial');
      return;
    }

    const diff =
      Math.ceil((fim.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    const valorNumerico = parseFloat(valor || '0');
    const total = (valorNumerico * diff) / 30;

    setDias(diff);
    setResultado(total);
  };

  function formatarDecimal(valueInput: string) {
    const num = Number(valueInput);
    if (isNaN(num)) return '';
    return num.toFixed(2);
  }

  const copiar = () => {
    if (!dias || !resultado) return;

    let complemento = '';

    if (segmento === 'locacao') {
      complemento = quantidade
        ? ` de locação de ${quantidade} equipamentos`
        : ' de locação de equipamentos';
    }

    if (segmento === 'servico') {
      complemento = descricao ? ` de ${descricao}` : ' de serviços';
    }

    if (segmento === 'outro') {
      complemento = descricao ? ` de ${descricao}` : '';
    }

    const texto = `Cobrança pró-rata referente a ${dias} dias${complemento}, período de ${formatarData(dataInicial)} a ${formatarData(dataFinal)} - Valor: R$ ${resultado
      .toFixed(2)
      .replace('.', ',')}`;

    navigator.clipboard.writeText(texto).then(() => {
      setTextButCopiar('✔️ Copiado!');
      setTimeout(() => setTextButCopiar('📋 Copiar resultado'), 2000);
    });
  };

  return (
    <>
      <SEO
        title="Cálculo Pro Rata Online | Calculadora de Pró-Rata Grátis - Invetec"
        description="Faça cálculo pró-rata online de forma rápida e precisa. Calcule valores proporcionais por período, contratos, locação e serviços. Ferramenta gratuita e fácil de usar."
        image="https://www.invetec.com.br/images/SEO-Pro-Rata.jpg"
        url="https://www.invetec.com.br/servicos/ferramentas-uteis/pro-rata"
        schema={faqSchema}
      />

      <PageHeroSection
        title="Calculadora de Pró-Rata Online"
        subTitle="Calcule valores proporcionais por período de forma rápida, precisa e sem erros para contratos, locações e serviços"
        image={imageProRata}
      >
        <S.BackLink to="/servicos/ferramentas-uteis">
          ← Voltar para Ferramentas Úteis
        </S.BackLink>
        <S.Container>
          <MotionReveal>
            <S.InfoBox>
              <h2>Como calcular pró-rata online de forma correta e sem erros</h2>
              <p>
                Utilize nossa calculadora de pró-rata para calcular valores
                proporcionais com base em datas e períodos. Ideal para contratos
                de locação, serviços recorrentes, faturamento proporcional e
                ajustes contratuais.
              </p>
            </S.InfoBox>

            <S.FormSection>
              <S.TitleForm>
                <h3>Calcular pró-rata online</h3>
              </S.TitleForm>

              <S.Field>
                <label>Data Inicial</label>
                <input
                  type="date"
                  value={dataInicial}
                  onChange={e => setDataInicial(e.target.value)}
                />
              </S.Field>

              <S.Field>
                <label>Data Final</label>
                <input
                  type="date"
                  value={dataFinal}
                  onChange={e => setDataFinal(e.target.value)}
                />
              </S.Field>
              <S.divValor>
                <S.Field>
                  <label>Valor Mensal (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    onBlur={() => setValor(formatarDecimal(valor))}
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                  />
                </S.Field>
              </S.divValor>

              <S.Button onClick={calcular}>Calcular</S.Button>
            </S.FormSection>
          </MotionReveal>

          {resultado !== null && (
            <MotionReveal delay={0.1}>
              <S.Result>
                <S.ResultCard>
                  <S.ResultPeriod>
                    Período: <strong>{dias} dias</strong>
                  </S.ResultPeriod>

                  <S.ResultValue>
                    R$ {resultado.toFixed(2).replace('.', ',')}
                  </S.ResultValue>
                </S.ResultCard>
                <S.UsageBox>
                  <S.Field>
                    <label>Tipo de uso</label>

                    <S.RadioGroup>
                      <label>
                        <input
                          type="radio"
                          checked={segmento === 'locacao'}
                          onChange={() => setSegmento('locacao')}
                        />
                        Locação
                      </label>

                      <label>
                        <input
                          type="radio"
                          checked={segmento === 'servico'}
                          onChange={() => setSegmento('servico')}
                        />
                        Serviço
                      </label>

                      <label>
                        <input
                          type="radio"
                          checked={segmento === 'outro'}
                          onChange={() => setSegmento('outro')}
                        />
                        Outros
                      </label>
                    </S.RadioGroup>
                  </S.Field>

                  {segmento === 'locacao' && (
                    <S.Field>
                      <label>Quantidade de equipamentos (opcional)</label>
                      <input
                        type="number"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                      />
                    </S.Field>
                  )}

                  {segmento !== 'locacao' && (
                    <S.Field>
                      <label>Descrição (opcional)</label>
                      <input
                        type="text"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                      />
                    </S.Field>
                  )}

                  <S.CopyButton onClick={copiar}>{textButCopiar}</S.CopyButton>
                </S.UsageBox>
              </S.Result>
            </MotionReveal>
          )}

          <S.Divider />

          <S.Accordion>
            <S.Item>
              <S.Header
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              >
                O que é cálculo pró-rata?
                <span>{openIndex === 0 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 0 && (
                <p>
                  É o cálculo proporcional de um valor mensal com base na
                  quantidade de dias utilizados dentro de um período. Muito
                  utilizado em contratos de locação, serviços recorrentes e
                  faturamentos proporcionais.
                </p>
              )}
            </S.Item>

            <S.Item>
              <S.Header
                onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
              >
                Como o cálculo é feito?
                <span>{openIndex === 1 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 1 && (
                <p>
                  O cálculo de pró-rata é feito dividindo o valor mensal por 30
                  dias e multiplicando pelo número de dias utilizados no
                  período.
                  <br />
                  <br />
                  <strong>Valor ÷ 30 × dias utilizados</strong>
                </p>
              )}
            </S.Item>

            <S.Item>
              <S.Header
                onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
              >
                Quando usar?
                <span>{openIndex === 2 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 2 && (
                <p>
                  • Locação de equipamentos
                  <br />
                  • Serviços iniciados no meio do mês
                  <br />
                  • Cancelamentos antecipados
                  <br />• Ajustes de contrato
                  <br />• Cobranças proporcionais
                  <br />• Faturamento parcial
                </p>
              )}
            </S.Item>
          </S.Accordion>

          <S.Highlight>
            <h3>Precisa automatizar esse processo?</h3>
            <p>
              Além do cálculo pró-rata, oferecemos soluções completas para
              organizar e estruturar sua operação.
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
