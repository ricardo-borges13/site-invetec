import heroImage from '@/assets/images/PagesHero-Suporte.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useNavigate } from 'react-router-dom';
import * as S from './SuporteTI.styles';

export const SuporteTI = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO
        title="Gestão e Suporte de TI para Empresas | Organização e Segurança | Invetec"
        description="Sua TI é desorganizada? Tenha gestão e suporte de TI com foco em segurança, estabilidade e controle. Reduza falhas e melhore a operação da sua empresa."
        image="https://www.invetec.com.br/images/SEO-SuporteTI.jpg"
        url="https://www.invetec.com.br/servicos/suporte-ti"
      />

      <PageHeroSection
        title="Muitas empresas dependem da TI… mas ainda operam no improviso."
        subTitle="Organize sua TI, reduza problemas e tenha mais estabilidade na operação"
        image={heroImage}
        overlayOpacity={0.7}
      >
        <S.Container>
          {/* 🟠 DOR */}
          <S.Section>
            <MotionReveal>
              <h2>Sua empresa depende da TI… mas ela está organizada?</h2>

              <p>Muitas empresas funcionam com a TI no improviso.</p>

              <ul>
                <li>❌ Problemas recorrentes</li>
                <li>❌ Falta de padrão</li>
                <li>❌ Riscos de segurança</li>
                <li>❌ Resolver apenas quando quebra</li>
              </ul>

              <p>
                👉 Isso gera retrabalho, perda de tempo e risco para o negócio.
              </p>
            </MotionReveal>
          </S.Section>

          {/* ⚪ IDENTIFICAÇÃO */}
          <S.Section>
            <MotionReveal>
              <h2>Se isso acontece na sua empresa, sua TI precisa evoluir</h2>

              <ul>
                <li>✔ Cada computador funciona de um jeito</li>
                <li>✔ Não existe padrão ou documentação</li>
                <li>✔ Problemas aparecem com frequência</li>
                <li>✔ Não há controle de usuários e acessos</li>
                <li>✔ Backup não é confiável</li>
                <li>✔ Segurança é uma preocupação constante</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* 🟢 SOLUÇÃO */}
          <S.Highlight>
            <MotionReveal>
              <h2>Mais do que suporte: uma estrutura de TI organizada e previsível</h2>

              <p>O objetivo não é apenas resolver problemas.</p>

              <p>
                É estruturar sua TI para funcionar de forma estável, segura e
                previsível.
              </p>

              <p>
                👉 Isso reduz falhas, melhora produtividade e traz controle.
              </p>
            </MotionReveal>
          </S.Highlight>

          {/* 🔵 DIFERENCIAL */}
          <S.Warning>
            <MotionReveal>
              <h2>Experiência real em gestão de TI dentro de empresas</h2>

              <p>Não atuo apenas como suporte técnico.</p>

              <p>
                Foram mais de 20 anos como responsável por toda a área de TI,
                atuando diretamente na operação e nos processos do negócio.
              </p>

              <ul>
                <li> ERP (W3ERP, TAGPLUS, TOTVS e processos empresariais)</li>
                <li> Redes e servidores</li>
                <li> Segurança da informação</li>
                <li> Integração entre setores</li>
                <li> Operação real do dia a dia</li>
              </ul>

              <p>
                👉 Isso permite entender o impacto da TI no negócio, não apenas
                no sistema.
              </p>
            </MotionReveal>
          </S.Warning>

          {/* 🟢 SERVIÇOS */}
          <S.Highlight>
            <MotionReveal>
              <h2>O que está incluído</h2>

              <S.Grid>
                <S.Card>
                  <h3>🖥️ Servidores</h3>
                  <p>Ambiente organizado e estável para sua operação funcionar sem falhas</p>
                </S.Card>

                <S.Card>
                  <h3>🌐 Redes</h3>
                  <p>Conectividade segura e sem interrupções no dia a dia</p>
                </S.Card>

                <S.Card>
                  <h3>🔐 Segurança</h3>
                  <p>Proteção contra acessos indevidos e riscos para o negócio</p>
                </S.Card>

                <S.Card>
                  <h3>☁️ Backup</h3>
                  <p>Seus dados protegidos e recuperáveis quando necessário</p>
                </S.Card>

                <S.Card>
                  <h3>📧 E-mail</h3>
                  <p>Comunicação profissional e confiável</p>
                </S.Card>

                <S.Card>
                  <h3>🧠 Suporte</h3>
                  <p>Atendimento rápido para manter sua operação funcionando</p>
                </S.Card>
              </S.Grid>
            </MotionReveal>
          </S.Highlight>

          {/* ⚪ MODELO */}
          <S.Section>
            <MotionReveal>
              <h2>Atendimento contínuo, sem depender de emergência</h2>

              <p>
                O suporte é feito de forma remota, com acompanhamento constante
                do ambiente.
              </p>

              <ul>
                <li>✔ Monitoramento contínuo</li>
                <li>✔ Ajustes preventivos</li>
                <li>✔ Suporte rápido no dia a dia</li>
                <li>✔ Visitas presenciais periódicas</li>
              </ul>

              <p>
                👉 A ideia é evitar problemas, não apenas resolver quando
                acontecem.
              </p>
            </MotionReveal>
          </S.Section>

          {/* 🟠 OBJEÇÃO */}
          <S.Section>
            <MotionReveal>
              <h2>Não é só para empresas grandes</h2>

              <p>
                Empresas pequenas e médias também precisam de organização na TI.
              </p>

              <p>👉 Muitas vezes, é onde o impacto é maior.</p>
            </MotionReveal>
          </S.Section>

          {/* 🟢 CTA */}
          <S.FormArea>
            <MotionReveal>
              <h2>Vamos avaliar como está a TI da sua empresa?</h2>

              <p>
                Preencha o diagnóstico e eu analiso seu ambiente para
                identificar melhorias e oportunidades.
              </p>

              <CustomButton
                variant="cta"
                text="Solicitar análise de TI"
                onClick={() => navigate('/contato')}
              />
            </MotionReveal>
          </S.FormArea>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
