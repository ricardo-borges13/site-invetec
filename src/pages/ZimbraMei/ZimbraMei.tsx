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
              <h2>Você ainda usa e-mail pessoal para trabalhar?</h2>

              <ul>
                <li>❌ Passa menos credibilidade para clientes</li>
                <li>❌ Mistura vida pessoal com trabalho</li>
                <li>❌ Falta organização nas conversas</li>
                <li>❌ Dificulta o atendimento e histórico</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* 💡 VIRADA */}
          <S.SubHighlight>
            <h2>Você não precisa ser uma empresa grande</h2>
            <p>
              Mesmo trabalhando sozinho, você já pode ter um e-mail profissional,
              organizado e com a mesma estrutura utilizada por empresas maiores.
            </p>
          </S.SubHighlight>

          {/* 💎 DIFERENCIAL */}
          <S.Highlight>
            <h2>Comece com apenas 1 e-mail — sem complicação</h2>

            <p>
              Você pode começar com uma única conta e ainda assim ter acesso a uma
              estrutura corporativa completa.
            </p>

            <ul>
              <li>✔ Ideal para MEI e autônomos</li>
              <li>✔ Estrutura profissional desde o início</li>
              <li>✔ Evolua conforme seu negócio cresce</li>
            </ul>
          </S.Highlight>

          {/* 🖥️ FUNCIONALIDADES */}
          <S.Section>
            <MotionReveal>
              <h2>Você terá a mesma estrutura de empresas maiores</h2>
            </MotionReveal>
          </S.Section>

          <S.Grid>
            <S.Card>
              <h3>📥 Caixa de entrada organizada</h3>
              <p>Encontre e-mails rapidamente com filtros e busca</p>
            </S.Card>

            <S.Card>
              <h3>📅 Agenda integrada</h3>
              <p>Organize compromissos e rotina</p>
            </S.Card>

            <S.Card>
              <h3>👥 Contatos organizados</h3>
              <p>Tenha seus clientes sempre à mão</p>
            </S.Card>

            <S.Card>
              <h3>✅ Tarefas e lembretes</h3>
              <p>Controle atividades do dia a dia</p>
            </S.Card>

            <S.Card>
              <h3>📁 Arquivos</h3>
              <p>Armazene documentos com segurança</p>
            </S.Card>

            <S.Card>
              <h3>📱 Acesso em qualquer lugar</h3>
              <p>Use no celular, computador ou navegador</p>
            </S.Card>
          </S.Grid>

          {/* 💰 PREÇO */}
          <S.SubHighlight>
            <h2>Um investimento acessível para profissionalizar seu negócio</h2>

            <p>
              Com cerca de <strong>R$ 16 por mês</strong>, você já pode ter seu e-mail
              principal com estrutura completa, sem pesar no seu orçamento.
            </p>

            <p>
              Conforme sua empresa crescer, você pode adicionar novos e-mails
              de forma simples.
            </p>
          </S.SubHighlight>

          {/* 🌐 DOMÍNIO */}
          <S.Highlight>
            <h2>Tenha seu próprio domínio profissional</h2>

            <p>Tenha um e-mail com o nome da sua empresa, como:</p>

            <strong>contato@suaempresa.com.br</strong>

            <p>
              Nós cuidamos de todo o processo de registro e configuração para
              você começar sem complicação.
            </p>
          </S.Highlight>

          {/* 🧠 ANCORAGEM */}
          <S.InfoBox>
            <h2>Estrutura profissional sem complexidade</h2>

            <p>
              Grandes empresas utilizam soluções robustas de e-mail.
              Hoje você também pode ter essa estrutura, de forma simples e acessível.
            </p>
          </S.InfoBox>

          {/* 📋 FORM */}
          <S.FormArea>
            <MotionReveal>
              <h2>Criar meu e-mail profissional</h2>
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
