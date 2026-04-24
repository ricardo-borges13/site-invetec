import heroImage from '@/assets/images/PagesHero-Email.jpg';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import * as S from './ZimbraMei.styles';

export const ZimbraMei = () => {
  return (
    <>
      <SEO
        title="E-mail profissional para MEI | Seu domínio e mais credibilidade | Invetec"
        description="Tenha um e-mail profissional com seu domínio, mais organização e credibilidade para seu negócio. Ideal para MEI e autônomos."
        image="https://www.invetec.com.br/images/email-mei.jpg"
        url="https://www.invetec.com.br/servicos/email-profissional-mei"
      />

      <PageHeroSection
        title="E-mail profissional para quem trabalha por conta própria"
        subTitle="Tenha um e-mail com seu domínio, mais credibilidade e organização no seu dia a dia"
        image={heroImage}
      >
        <S.Container>
          {/* 🔥 DOR */}
          <S.Section>
            <MotionReveal>
              <h2>
                Usar e-mail pessoal no trabalho pode estar te fazendo perder
                clientes
              </h2>

              <ul>
                <li>❌ Passa menos credibilidade para quem entra em contato</li>
                <li>❌ Mistura mensagens pessoais com clientes</li>
                <li>❌ Dificulta encontrar conversas importantes</li>
                <li>❌ Falta organização no atendimento</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* 💡 VIRADA */}
          <S.SubHighlight>
            <h2>Você não precisa ser uma empresa grande</h2>
            <p>
              Mesmo trabalhando sozinho, você já pode ter um e-mail
              profissional, organizado e com a mesma estrutura que empresas usam
              para atender clientes.
            </p>
          </S.SubHighlight>

          {/* 💎 DIFERENCIAL */}
          <S.Highlight>
            <h2>Comece com apenas 1 e-mail — sem complicação</h2>

            <p>
              Você não precisa contratar vários e-mails ou montar estrutura
              complexa. Comece com uma única conta e tenha um ambiente
              profissional desde o primeiro cliente.
            </p>

            <ul>
              <li>Ideal para MEI e autônomos</li>
              <li>Estrutura profissional desde o início</li>
              <li>Evolua conforme seu negócio cresce</li>
            </ul>
          </S.Highlight>

          {/* 🖥️ FUNCIONALIDADES */}
          <S.SystemSection>
            <MotionReveal>
              <h2>Você terá a mesma estrutura de empresas maiores</h2>
            </MotionReveal>

            <S.Grid>
              <MotionReveal delay={0.04}>
                <S.Card>
                  <h3>📥 Caixa de entrada organizada</h3>
                  <p>
                    Use pastas, filtros e busca rápida para localizar
                    informações sem perder tempo.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.08}>
                <S.Card>
                  <h3>📅 Agenda compartilhada</h3>
                  <p>
                    Coordene compromissos da equipe com mais visibilidade e
                    sincronização entre dispositivos.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.12}>
                <S.Card>
                  <h3>👥 Contatos centralizados</h3>
                  <p>
                    Mantenha informações internas e recorrentes organizadas para
                    agilizar o atendimento.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.16}>
                <S.Card>
                  <h3>✅ Tarefas e lembretes</h3>
                  <p>
                    Acompanhe atividades ligadas a processos, clientes e
                    responsabilidades do time.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <S.Card>
                  <h3>📁 Arquivos corporativos</h3>
                  <p>
                    Compartilhe documentos com mais ordem e menos dependência de
                    anexos espalhados.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.24}>
                <S.Card>
                  <h3>💬 Comunicação interna mais alinhada</h3>
                  <p>
                    Reduza a dispersão entre canais e concentre a rotina em um
                    ambiente corporativo.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.28}>
                <S.Card>
                  <h3>🎥 Recursos integrados para reuniões</h3>
                  <p>
                    Facilite conversas e alinhamentos sem depender de várias
                    ferramentas desconectadas.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.32}>
                <S.Card>
                  <h3>🔄 Liberdade de acesso</h3>
                  <p>
                    Trabalhe pelo navegador, celular ou Outlook, conforme a
                    rotina da empresa exigir.
                  </p>
                </S.Card>
              </MotionReveal>
            </S.Grid>
          </S.SystemSection>

          {/* 💰 PREÇO */}
          <S.SubHighlight>
            <h2>Um investimento acessível para profissionalizar seu negócio</h2>

            <p>
              Por cerca de <strong>R$ 16 por mês</strong>, você já tem um e-mail
              profissional com estrutura completa — sem precisar investir alto
              no início.
            </p>

            <p>
              Conforme sua empresa crescer, você pode adicionar novos e-mails de
              forma simples.
            </p>
          </S.SubHighlight>

          {/* 🌐 DOMÍNIO */}
          <S.DomainHighlight>
            <h2>Seu e-mail com o nome da sua empresa</h2>

            <p className="sub">
              Passe mais credibilidade com um e-mail profissional desde o
              início.
            </p>

            <div className="example">contato@suaempresa.com.br</div>

            <p className="desc">
              Nós cuidamos de tudo para você — registro do domínio, configuração
              e ativação. Você não precisa se preocupar com parte técnica.
            </p>

            <span className="badge">✔ Configuração completa incluída</span>
          </S.DomainHighlight>

          {/* 🧠 ANCORAGEM */}
          <S.ValueHighlight>
            <h2>
              Você não compra só e-mail — você tem acompanhamento completo
            </h2>
            <p>Diferente de serviços comuns, aqui você não fica sozinho.</p>
            <p>
              Você recebe acompanhamento desde a criação até o uso no dia a dia
              —<strong>sem custo de mão de obra</strong>.
            </p>
          </S.ValueHighlight>

          {/* 📋 FORM */}
          <S.FormArea>
            <MotionReveal>
              <h2>Quero criar meu e-mail profissional</h2>
              <p>
                Leva menos de 1 minuto. Vou te orientar na criação do seu e-mail
                com domínio próprio.
              </p>

              <FormContactEmail />
            </MotionReveal>
          </S.FormArea>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
