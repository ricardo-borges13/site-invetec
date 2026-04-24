import imageProRata from '@/assets/images/PagesHero-Pro-Rata.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import * as S from './ProRata.styles';

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
        title="Cálculo Pro Rata | Invetec"
        description="Calcule valores proporcionais de contratos de forma rápida e precisa."
        image="https://www.invetec.com.br/images/SEO-Pro-Rata.jpg"
        url="https://www.invetec.com.br/servicos/ferramentas-uteis/pro-rata"
      />

      <PageHeroSection
        title="Cálculo Pro Rata"
        subTitle="Calcule valores proporcionais de forma rápida e sem erros"
        image={imageProRata}
      >
        <S.BackLink to="/servicos/ferramentas-uteis">
          ← Voltar para Ferramentas Úteis
        </S.BackLink>
        <S.Container>
          <MotionReveal>
            <S.InfoBox>
              <h2>Calcule valores proporcionais com precisão</h2>
              <p>
                O cálculo de pró-rata é essencial para contratos de locação,
                serviços recorrentes e faturamentos proporcionais.
              </p>

              {/* <ul>
                <li> Evite erros de cobrança</li>
                <li> Ganhe agilidade no faturamento</li>
                <li> Tenha um cálculo padronizado e confiável</li>
              </ul> */}
            </S.InfoBox>

            <S.FormSection>
              <S.TitleForm>
                <h3>Cáculo Pro Rata</h3>
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
                  quantidade de dias utilizados dentro de um período.
                </p>
              )}
            </S.Item>

            <S.Item>
              <S.Header
                onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
              >
                Como o cálculo é feito?
                <span>{openIndex === 0 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 1 && (
                <p>
                  Calculamos a quantidade de dias entre a data inicial e final e
                  aplicamos a proporção sobre o valor mensal:
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
                <span>{openIndex === 0 ? '−' : '+'}</span>
              </S.Header>

              {openIndex === 2 && (
                <p>
                  • Locação de equipamentos
                  <br />
                  • Serviços iniciados no meio do mês
                  <br />
                  • Cancelamentos antecipados
                  <br />• Ajustes de contrato
                </p>
              )}
            </S.Item>
          </S.Accordion>
        </S.Container>
         <S.BackLink to="/servicos/ferramentas-uteis">
          ← Voltar para Ferramentas Úteis
        </S.BackLink>
      </PageHeroSection>
    </>
  );
};
