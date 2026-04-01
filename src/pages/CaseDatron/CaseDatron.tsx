import heroImage from '@/assets/images/PagesHero-Sobre2.jpg';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import * as S from './CaseDatron.styles';

export const CaseDatron = () => {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      title="Como a DATRON ganhou controle total da operação com ERP"
      subTitle="Da falta de integração e retrabalho para uma gestão organizada e eficiente"
      image={heroImage}
    >
      <S.Container>

        {/* 🔥 CONTEXTO */}
        <S.Section>
          <MotionReveal>
            <h2>Sobre a empresa</h2>
            <p>
              A DATRON atua no segmento de locação de radiocomunicação,
              com operações que envolvem controle de equipamentos,
              contratos recorrentes, faturamento e gestão financeira.
            </p>
          </MotionReveal>
        </S.Section>

        {/* ❌ ANTES */}
        <S.Section>
          <MotionReveal>
            <h2>O cenário antes da organização</h2>

            <ul>
              <li>❌ Informações descentralizadas</li>
              <li>❌ Controle manual de processos</li>
              <li>❌ Retrabalho entre setores</li>
              <li>❌ Falta de visibilidade financeira</li>
            </ul>
          </MotionReveal>
        </S.Section>

        {/* ⚙️ SOLUÇÃO */}
        <S.Section>
          <MotionReveal>
            <h2>O que foi feito</h2>

            <ul>
              <li>✔ Implantação do ERP W3ERP</li>
              <li>✔ Mapeamento e organização dos processos</li>
              <li>✔ Integração entre setores</li>
              <li>✔ Treinamento da equipe</li>
            </ul>
          </MotionReveal>
        </S.Section>

        {/* 📊 RESULTADOS */}
        <S.Highlight>
          <MotionReveal>
            <h2>Resultados alcançados</h2>

            <S.Grid>
              <S.Card>
                <h3>📊 Controle financeiro</h3>
                <p>Visão clara de entradas, saídas e fluxo de caixa.</p>
              </S.Card>

              <S.Card>
                <h3>⚙️ Processos integrados</h3>
                <p>Setores conectados sem retrabalho.</p>
              </S.Card>

              <S.Card>
                <h3>📦 Controle de estoque</h3>
                <p>Gestão precisa dos equipamentos.</p>
              </S.Card>

              <S.Card>
                <h3>⚡ Mais eficiência</h3>
                <p>Redução de erros e ganho de produtividade.</p>
              </S.Card>
            </S.Grid>
          </MotionReveal>
        </S.Highlight>

        {/* 🖥️ NA PRÁTICA */}
        <S.Section>
          <MotionReveal>
            <h2>Como funciona na prática</h2>
            <p>
              Hoje a operação é integrada, com controle financeiro,
              estoque, faturamento e relatórios em tempo real,
              permitindo decisões mais rápidas e seguras.
            </p>
          </MotionReveal>
        </S.Section>

        {/* 🧠 DIFERENCIAL */}
        <S.Warning>
          <MotionReveal>
            <h2>O sistema não é o problema — a implantação é</h2>

            <p>
              Muitas empresas já trocaram de sistema várias vezes
              e continuam enfrentando os mesmos problemas.
            </p>

            <p>
              O que faz a diferença não é apenas o software,
              mas a forma como ele é implantado, adaptado e utilizado.
            </p>

            <p>
              Foi exatamente esse acompanhamento que garantiu o sucesso
              da implantação na DATRON.
            </p>
          </MotionReveal>
        </S.Warning>

        {/* 🚀 CTA */}
        <S.CTA>
          <MotionReveal>
            <h2>Quer esse nível de controle na sua empresa?</h2>

            <CustomButton
              variant="cta"
              onClick={() => navigate('/contato')}
            >
              Solicitar diagnóstico
            </CustomButton>
          </MotionReveal>
        </S.CTA>

      </S.Container>
    </PageHeroSection>
  );
};
