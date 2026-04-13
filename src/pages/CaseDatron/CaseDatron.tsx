import heroImage from '@/assets/images/PagesHero-Datron.jpg';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import * as S from './CaseDatron.styles';

export const CaseDatron = () => {
  return (
    <>
      <SEO
        title="Case ERP: Como a DATRON Reduziu Custos e Simplificou a Operação | Invetec"
        description="Veja como a DATRON reduziu custos com ERP ao migrar da TOTVS para o W3ERP, mantendo controle e simplificando a operação."
        image="https://www.invetec.com.br/images/SEO-Case-Datron.jpg"
        url="https://www.invetec.com.br/cases/datron"
      />
      <PageHeroSection
        title="Como a DATRON reduziu custos sem perder o controle da operação"
        subTitle="Migração estratégica de um ERP TOTVS robusto para uma solução mais simples e eficiente"
        image={heroImage}
      >
        <S.Container>
          {/* 🔥 CONTEXTO */}
          <S.Section>
            <MotionReveal>
              <h2>Sobre a empresa</h2>
              <p>
                A DATRON atua com locação de radiocomunicação, com operação
                baseada em controle de equipamentos, contratos recorrentes,
                faturamento e gestão financeira.
              </p>
            </MotionReveal>
          </S.Section>

          <S.Section>
            <MotionReveal>
              <h2>O cenário inicial</h2>

              <p>
                A DATRON já utilizava um sistema robusto da TOTVS, com processos
                bem estruturados e controle eficiente de contratos, faturamento
                e gestão financeira.
              </p>

              <p>
                👉 Ou seja, o sistema atendia bem — o problema não estava na
                operação.
              </p>
            </MotionReveal>
          </S.Section>

          <S.Warning>
            <MotionReveal>
              <h2>
                O problema não era o sistema — era o custo e a complexidade
              </h2>

              <p>
                Com a necessidade de atualização do sistema da TOTVS, seria
                necessário investir mais de R$30.000 em infraestrutura,
                incluindo servidores, licenças de Windows Server e banco de
                dados.
              </p>

              <p>
                Além disso, havia custos contínuos com manutenção, atualizações
                e necessidade de máquinas mais potentes para rodar o sistema.
              </p>

              <p>
                O desafio era manter o nível de controle da operação, mas com
                uma estrutura mais simples e sustentável.
              </p>
            </MotionReveal>
          </S.Warning>
          {/* ⚙️ SOLUÇÃO */}
          <S.Section>
            <MotionReveal>
              <h2>A decisão estratégica</h2>

              <ul>
                <li>✔ Migração para um sistema 100% web</li>
                <li>✔ Eliminação da necessidade de servidores locais</li>
                <li>✔ Redução de custos com licenças e infraestrutura</li>
                <li>✔ Manutenção do nível de controle operacional</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* 📊 RESULTADOS */}
          <S.Highlight>
            <MotionReveal>
              <h2>Resultados reais após a migração</h2>
              <p>Veja o impacto direto na operação:</p>

              <S.Grid>
                <S.Card>
                  <h3>💰 Redução de custos</h3>
                  <p>Eliminação de investimentos em servidores e licenças.</p>
                </S.Card>

                <S.Card>
                  <h3>☁️ Sistema 100% web</h3>
                  <p>
                    Acesso de qualquer lugar, sem necessidade de servidor ou
                    estrutura interna.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>⚙️ Menos complexidade</h3>
                  <p>Fim da gestão de infraestrutura e atualizações locais.</p>
                </S.Card>

                <S.Card>
                  <h3>📊 Controle mantido</h3>
                  <p>Todas as operações continuaram funcionando normalmente.</p>
                </S.Card>

                 <S.Card>
                  <h3>📄 Melhor gestão de contratos</h3>
                  <p>
                    W3ERP atendeu melhor que o sistema anterior nesse ponto.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>🚀 Mais agilidade</h3>
                  <p>Atualizações automáticas sem impacto nos usuários.</p>
                </S.Card>

                <S.Card>
                  <h3>💾 Backup automatizado</h3>
                  <p>
                    Sem necessidade de rotinas manuais ou risco de falhas. Os
                    dados ficam protegidos automaticamente na nuvem.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>⚡ Suporte mais ágil</h3>
                  <p>
                    Fim da dificuldade de atendimento. Suporte rápido, direto e
                    sem burocracia.
                  </p>
                </S.Card>


              </S.Grid>
            </MotionReveal>
          </S.Highlight>

          {/* 🖥️ NA PRÁTICA */}
          <S.Warning>
            <MotionReveal>
              <h2>
                Nem sempre trocar de sistema é sobre melhorar — às vezes é sobre
                simplificar a operação
              </h2>

              <p>
                A DATRON já tinha um sistema eficiente. A mudança não foi por
                falha, mas por estratégia.
              </p>

              <p>
                Reduzir custos, eliminar complexidade e manter a eficiência da
                operação.
              </p>

              <p>
                E isso só é possível quando a escolha e a implantação são feitas
                da forma correta.
              </p>
            </MotionReveal>
          </S.Warning>

          {/* 🚀 CTA */}
          <S.CTA>
            <S.FormArea>
              <MotionReveal>
                <h2>Quer entender qual é a melhor decisão para sua empresa?</h2>

                <p>
                  Nem sempre a melhor decisão é trocar de sistema — mas quando
                  é, precisa ser feita da forma certa.
                </p>

                <FormContactERP />
              </MotionReveal>
            </S.FormArea>
          </S.CTA>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
