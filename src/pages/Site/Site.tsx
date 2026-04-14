import heroImage from '@/assets/images/PagesHero-Site.jpg';
import { FormContactSite } from '@/components/FormContactSite/FormContactSite';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import * as S from './Site.styles';

export const Site = () => {
  return (
    <>
      <SEO
        title="Criação de Sites que Geram Clientes | Sites Profissionais para Empresas | Invetec"
        description="Seu site não gera clientes? Criação de sites profissionais com foco em conversão, presença no Google e estratégias para atrair contatos."
        image="https://www.invetec.com.br/images/SEO-Site.jpg"
        url="https://www.invetec.com.br/servicos/criacao-de-sites"
      />

      <PageHeroSection
        title="Criação de Sites que Geram Clientes"
        subTitle="Mais do que presença online — sites profissionais feitos para atrair e converter clientes"
        image={heroImage}
        overlayOpacity={0.7}
      >
        <S.Container>
          {/* 🟠 DOR */}
          <S.Section>
            <MotionReveal>
              <h2>Seu site traz clientes… ou só ocupa espaço?</h2>
              <p>
                A maioria dos sites institucionais não gera resultado. São
                bonitos, mas não recebem contatos, não explicam bem o serviço e
                não ajudam a vender.
              </p>

              <ul>
                <li>❌ Site que não gera contato</li>
                <li>❌ Visual antigo ou pouco profissional</li>
                <li>❌ Não funciona bem no celular</li>
                <li>❌ Cliente entra e não entende o que você faz</li>
              </ul>
            </MotionReveal>
          </S.Section>

          <S.Section>
            <MotionReveal>
              <h2>Por que um site profissional precisa gerar clientes?</h2>

              <p>
                Porque um site que não gera contato não traz retorno. Ele vira
                apenas um cartão de visita online, sem impacto real no
                crescimento da empresa.
              </p>
              <p>
                E é por isso que muitos sites acabam não trazendo nenhum
                resultado real.
              </p>
            </MotionReveal>
          </S.Section>

          {/* ⚪ IDENTIFICAÇÃO */}
          <S.Section>
            <MotionReveal>
              <h2>
                Se você se identifica com isso, seu site pode estar te
                prejudicando
              </h2>

              <ul>
                <li>✔ Você depende só de indicação ou WhatsApp</li>
                <li>✔ Já pensou em refazer o site, mas nunca saiu do papel</li>
                <li>✔ Seu site não transmite confiança</li>
                <li>✔ Você não tem controle para atualizar conteúdo</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* 🟢 SOLUÇÃO */}
          <S.Highlight>
            <MotionReveal>
              <h2>
                Você não precisa de um site bonito. Precisa de um site que
                funcione.
              </h2>

              <S.Grid>
                <S.Card>
                  <h3>📈 Geração de contatos</h3>
                  <p>Estruturado para transformar visitantes em clientes.</p>
                </S.Card>

                <S.Card>
                  <h3>📱 Responsivo</h3>
                  <p>Funciona perfeitamente no celular.</p>
                </S.Card>

                <S.Card>
                  <h3>⚡ Performance</h3>
                  <p>Carregamento rápido e navegação leve.</p>
                </S.Card>

                <S.Card>
                  <h3>🧠 Clareza</h3>
                  <p>Explica seu serviço de forma simples e direta.</p>
                </S.Card>
              </S.Grid>
            </MotionReveal>
          </S.Highlight>

          <S.Highlight>
            <MotionReveal>
              <h2>Seu site precisa de tráfego para gerar resultado</h2>

              <p>
                ✔ Um site bem feito é essencial, mas sozinho não gera clientes.
              </p>

              <p>
                ✔ Para ter resultado, é preciso que as pessoas encontrem sua
                empresa.
              </p>

              <p>✔ Por isso, além da criação do site, também atuo com:</p>

              <S.Grid>
                <S.Card>
                  <h3>🔎 Presença no Google</h3>
                  <p>
                    Configuração e otimização para sua empresa aparecer nas
                    buscas.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>📍 Google Empresa</h3>
                  <p>
                    Cadastro e estruturação para melhorar visibilidade local.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>📢 Tráfego pago</h3>
                  <p>Campanhas direcionadas para gerar visitas qualificadas.</p>
                </S.Card>

                <S.Card>
                  <h3>📈 Estratégia</h3>
                  <p>Definição de como transformar acesso em contato.</p>
                </S.Card>
              </S.Grid>

              <p style={{ marginTop: '1.5rem' }}>
                👉 Ou seja: não apenas criar o site, mas fazer ele gerar
                resultado.
              </p>
            </MotionReveal>
          </S.Highlight>

          {/* 🔵 DIFERENCIAL */}
          <S.Warning>
            <MotionReveal>
              <h2>Desenvolvimento com visão de negócio</h2>

              <p>Aqui você não contrata apenas um desenvolvedor.</p>

              <p>
                Com mais de 20 anos de experiência em TI e implantação de
                sistemas, entendemos o funcionamento real das empresas e
                construímos o site com foco em resultado.
              </p>

              <ul>
                <li>Entendimento do seu negócio</li>
                <li>Estrutura pensada para conversão</li>
                <li>Acompanhamento direto</li>
                <li>Solução prática, não só visual</li>
              </ul>
            </MotionReveal>
          </S.Warning>

          {/* ⚪ PROCESSO */}
          <S.Section>
            <MotionReveal>
              <h2>Como funciona o desenvolvimento</h2>

              <S.Steps>
                <div>1. Entendimento do seu negócio</div>
                <div>2. Definição da estrutura do site</div>
                <div>3. Criação do layout</div>
                <div>4. Desenvolvimento</div>
                <div>5. Ajustes finais</div>
                <div>6. Publicação</div>
              </S.Steps>
            </MotionReveal>
          </S.Section>

          {/* 🟢 FORMULÁRIO / CTA */}
          <S.FormArea>
            <MotionReveal>
              <h2>Vamos entender o site ideal para sua empresa?</h2>

              <p>
                Preencha as informações abaixo e eu analiso seu cenário para
                montar a melhor estrutura para o seu site.
              </p>

              <FormContactSite />
            </MotionReveal>
          </S.FormArea>
        </S.Container>

        <S.Section>
          <MotionReveal>
            <h2>
              Depois do site, o próximo passo é crescer sua presença digital
            </h2>

            <p>
              Com um site bem estruturado, sua empresa passa a ter uma base
              sólida para gerar contatos e transmitir confiança.
            </p>

            <p>
              A partir daí, é possível evoluir para estratégias de visibilidade,
              atraindo mais pessoas e fortalecendo sua marca no digital.
            </p>

            <ul>
              <li>
                ✔ Redes sociais organizadas (Instagram, Facebook, LinkedIn)
              </li>
              <li>✔ Conteúdo alinhado com seu negócio</li>
              <li>✔ Fortalecimento da marca</li>
              <li>✔ Maior conexão com clientes</li>
            </ul>

            <p>
              Esse é um processo natural: primeiro estruturamos o site, depois
              ampliamos sua presença e alcance.
            </p>
          </MotionReveal>
        </S.Section>
      </PageHeroSection>
    </>
  );
};
