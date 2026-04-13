import heroImage from '@/assets/images/PagesHero-Email.jpg';
import imageZimbra from '@/assets/images/Zimbra-Painel.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { useState } from 'react';
import * as S from './Zimbra.styles';
import { SEO } from '@/components/SEO/Seo';

export const Zimbra = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollToForm = () => {
    document
      .getElementById('email-contact-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEO
        title="E-mail Corporativo Profissional | Organize sua empresa | Invetec"
        description="Sua empresa ainda usa e-mail básico? Tenha uma estrutura profissional com organização, segurança e controle total da comunicação."
        image="https://www.invetec.com.br/images/zimbra.jpg"
        url="https://www.invetec.com.br/servicos/zimbra"
      />

      <PageHeroSection
        title="E-mail corporativo de verdade para sua empresa"
        subTitle="Saia do e-mail básico e tenha uma estrutura profissional, segura e organizada para sua equipe"
        image={heroImage}
      >
        <S.Container>
          <S.ConversionIntro>
            <MotionReveal>
              <S.ConversionIntroGrid>
                <S.ConversionIntroContent>
                  <S.Eyebrow>E-mail corporativo com implantação assistida</S.Eyebrow>
                  <h2>Estruture seu e-mail sem complicar a rotina da empresa</h2>
                  <p>
                    Centralize caixas, organize equipes, proteja informações e
                    tenha acesso profissional em qualquer lugar, com apoio para
                    migração e configuração.
                  </p>

                  <S.ConversionList>
                    <li>Implantação orientada para o seu cenário atual</li>
                    <li>Migração de e-mails antigos sem perder histórico</li>
                    <li>Acesso no navegador, celular e Outlook quando necessário</li>
                  </S.ConversionList>

                  <S.ConversionActions>
                    <CustomButton variant="cta" onClick={scrollToForm}>
                      Quero avaliar meu cenário
                    </CustomButton>
                    <span>Resposta focada na sua estrutura atual e no número de contas</span>
                  </S.ConversionActions>
                </S.ConversionIntroContent>

                <S.ConversionIntroAside>
                  <h3>O que sua empresa ganha</h3>

                  <S.ConversionMiniGrid>
                    <S.ConversionMiniCard>
                      <strong>Mais organização</strong>
                      <p>Pastas, busca, agenda e compartilhamento em um só ambiente.</p>
                    </S.ConversionMiniCard>

                    <S.ConversionMiniCard>
                      <strong>Mais segurança</strong>
                      <p>Menos dependência de arquivos locais e mais controle sobre os dados.</p>
                    </S.ConversionMiniCard>

                    <S.ConversionMiniCard>
                      <strong>Mais produtividade</strong>
                      <p>Equipe alinhada com contatos, tarefas e comunicação centralizada.</p>
                    </S.ConversionMiniCard>
                  </S.ConversionMiniGrid>
                </S.ConversionIntroAside>
              </S.ConversionIntroGrid>
            </MotionReveal>
          </S.ConversionIntro>

      {/* 🔥 DOR */}
<S.Section>
  <MotionReveal>
    <S.Header>
      <h2>Sua empresa ainda usa um e-mail básico?</h2>
      <p>
        Isso pode estar causando problemas diários sem você perceber — desde perda de informações até dificuldade para acompanhar clientes.
      </p>
    </S.Header>

    <S.PainGrid>
      <S.PainCard>
        <h3>❌ Caixa de entrada desorganizada</h3>
        <p>
          Seus e-mails ficam misturados e difíceis de encontrar no dia a dia.
        </p>
      </S.PainCard>

      <S.PainCard>
        <h3>❌ Dificuldade para acompanhar conversas</h3>
        <p>
          Você não consegue ver facilmente tudo que já foi tratado com clientes.
        </p>
      </S.PainCard>

      <S.PainCard>
        <h3>❌ Dependência de Outlook e arquivos locais</h3>
        <p>
          Problemas no computador podem causar perda de e-mails importantes.
        </p>
      </S.PainCard>

      <S.PainCard>
        <h3>❌ Dificuldade de acesso fora do escritório</h3>
        <p>
          Acesso limitado quando você está no celular ou fora da empresa.
        </p>
      </S.PainCard>

      <S.PainCard>
        <h3>❌ Falta de integração entre equipe</h3>
        <p>
          Informações ficam espalhadas e não são compartilhadas corretamente.
        </p>
      </S.PainCard>
    </S.PainGrid>
  </MotionReveal>
</S.Section>

          {/* 💡 VIRADA */}
          <S.SubHighlight>
            <h2>O problema não é o e-mail</h2>
            <p>
              É usar uma ferramenta que não acompanha o crescimento da sua empresa.
            </p>
          </S.SubHighlight>

          {/* ⚖️ COMPARAÇÃO */}
          <S.CompareSection>
            <h2>E-mail básico vs estrutura corporativa</h2>

            <S.CompareGrid>
              <S.CompareCard type="bad">
                <h3>❌ E-mail comum (hospedagem)</h3>
                <ul>
                  <li>Apenas envio e recebimento</li>
                  <li>Sem organização real</li>
                  <li>Dependência de Outlook</li>
                  <li>Baixo controle e segurança</li>
                </ul>
              </S.CompareCard>

              <S.CompareCard type="good">
                <h3>✅ E-mail corporativo (Invetec)</h3>
                <ul>
                  <li>Organização completa da comunicação</li>
                  <li>Acesso de qualquer lugar</li>
                  <li>Controle centralizado</li>
                  <li>Integração entre equipe</li>
                </ul>
              </S.CompareCard>
            </S.CompareGrid>
          </S.CompareSection>

          {/* 🧠 CONTEXTO REGIONAL */}
          <S.Highlight>
            <h2>Empresas em crescimento precisam de estrutura</h2>
            <p>
              Regiões com grande volume empresarial, como o polo moveleiro de Ubá,
              já enfrentam desafios de organização e comunicação interna.
            </p>
            <p>
              O e-mail deixa de ser apenas uma ferramenta e passa a ser parte da
              estrutura do negócio.
            </p>
          </S.Highlight>

          {/* 🖥️ SISTEMA */}
          <S.SystemSection>
            <MotionReveal>
              <h2>Uma plataforma completa para sua empresa</h2>
              <p>
                Muito além de e-mail: um sistema integrado para organizar a comunicação e a rotina da sua equipe.
              </p>
            </MotionReveal>

            <S.SystemImage>
              <img
                src={imageZimbra}
                alt="Interface do Zimbra"
                onClick={() => setSelectedImage(imageZimbra)}
                style={{ cursor: 'zoom-in' }}
              />
            </S.SystemImage>

            <S.Grid>

              <S.Card>
                <h3>📥 Caixa de entrada inteligente</h3>
                <p>Organização por pastas, filtros e busca rápida</p>
              </S.Card>

              <S.Card>
                <h3>📅 Agenda integrada</h3>
                <p>Compartilhe compromissos e sincronize com celular</p>
              </S.Card>

              <S.Card>
                <h3>👥 Contatos organizados</h3>
                <p>Preenchimento automático com e-mails internos</p>
              </S.Card>

              <S.Card>
                <h3>✅ Gestão de tarefas</h3>
                <p>Controle atividades com lembretes e organização</p>
              </S.Card>

              <S.Card>
                <h3>📁 Porta-arquivos corporativo</h3>
                <p>Armazene e compartilhe documentos com a equipe</p>
              </S.Card>

              <S.Card>
                <h3>💬 Chat interno</h3>
                <p>Comunicação rápida sem depender de WhatsApp</p>
              </S.Card>

              <S.Card>
                <h3>🎥 Reuniões integradas</h3>
                <p>Realize reuniões direto na plataforma</p>
              </S.Card>

              <S.Card>
                <h3>🔄 Liberdade de uso</h3>
                <p>Use no navegador ou com Outlook</p>
              </S.Card>

            </S.Grid>
          </S.SystemSection>

          {/* 💎 POSICIONAMENTO */}
          <S.SubHighlight>
            <h2>Você não precisa ser uma grande empresa</h2>
            <p>
              Hoje qualquer empresa pode ter uma estrutura organizada,
              segura e preparada para crescer.
            </p>
          </S.SubHighlight>

          {/* 💰 ANCORAGEM */}
          <S.InfoBox>
            <h2>Estrutura de grandes empresas, acessível para você</h2>
            <p>
              Grandes empresas utilizam soluções como Google e Microsoft.
              Mas existem alternativas com a mesma estrutura, mais acessíveis e com suporte próximo.
            </p>
          </S.InfoBox>

          {/* 🔐 SEGURANÇA */}



          <S.SubHighlight>
            <h2>Infraestrutura de nível corporativo</h2>
            <ul>
              <li> 99,9% de disponibilidade</li>
              <li> 5 Datas centers TIER III</li>
              <li> Segurança com ISO 27001</li>
              <li> Antispam avançado</li>
              <li> Autenticação em dois fatores</li>
              <li> Conformidade com LGPD</li>
              <li> Suporte avançado</li>
              <li> Plataforma Zimbra NE</li>
            </ul>
          </S.SubHighlight>


          {/* 🤝 MIGRAÇÃO */}
          <S.SubHighlight>
            <h2>Migração sem impacto</h2>
            <p>
              Processo completo sem perda de dados e sem interromper sua operação.
            </p>
          </S.SubHighlight>

          {/* 📋 FORM */}
          <S.FormArea id="email-contact-form">
            <MotionReveal>
              <h2>Vamos organizar o e-mail da sua empresa?</h2>
              <p>
                Vou analisar seu cenário atual e mostrar como profissionalizar sua estrutura.
              </p>

              <FormContactEmail />
            </MotionReveal>
          </S.FormArea>

        </S.Container>

        {selectedImage && (
          <S.Lightbox onClick={() => setSelectedImage(null)}>
            <S.CloseButton onClick={() => setSelectedImage(null)}>
              ✕
            </S.CloseButton>
            <img src={selectedImage} alt="Preview" />
          </S.Lightbox>
        )}
      </PageHeroSection>
    </>
  );
};
