import heroImage from '@/assets/images/PagesHero-Email.jpg';
import imageZimbra from '@/assets/images/Zimbra-Painel.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import * as S from './Zimbra.styles';

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
        description="Sua empresa ainda usa um e-mail limitado? Tenha uma estrutura profissional com organizacao, seguranca e mais controle sobre a comunicacao."
        image="https://www.invetec.com.br/images/zimbra.jpg"
        url="https://www.invetec.com.br/servicos/zimbra"
      />

      <PageHeroSection
        title="E-mail corporativo de verdade para sua empresa"
        subTitle="Saia do e-mail basico e tenha uma estrutura profissional, segura e preparada para o ritmo da sua equipe"
        image={heroImage}
      >
        <S.Container>
          <S.Section>
            <MotionReveal>
              <S.Header>
                <h2>Seu e-mail ja comecou a atrapalhar a empresa?</h2>
                <p>
                  Quando o e-mail deixa de acompanhar a rotina do negocio, a
                  empresa perde agilidade, passa menos credibilidade e comeca a
                  correr riscos desnecessarios no dia a dia.
                </p>
              </S.Header>

              <S.PainGrid>
                <S.PainCard>
                  <h3>Mensagens importantes se perdem</h3>
                  <p>E-mail misturado, sem organizacao e com dificuldade para achar o que foi tratado.</p>
                </S.PainCard>

                <S.PainCard>
                  <h3>Celular, computador e Outlook nao conversam bem</h3>
                  <p>A equipe responde em lugares diferentes e a informacao fica desencontrada.</p>
                </S.PainCard>

                <S.PainCard>
                  <h3>A empresa passa imagem pouco profissional</h3>
                  <p>Falhas, lentidao e falta de padrao no e-mail afetam a percepcao de clientes e parceiros.</p>
                </S.PainCard>

                <S.PainCard>
                  <h3>Troca de maquina vira dor de cabeca</h3>
                  <p>Configuracoes manuais e arquivos locais aumentam o risco de perda de historico.</p>
                </S.PainCard>

                <S.PainCard>
                  <h3>Falta controle sobre contas e acessos</h3>
                  <p>Quando alguem entra ou sai da empresa, tudo depende de ajustes improvisados.</p>
                </S.PainCard>

                <S.PainCard>
                  <h3>A comunicacao da equipe fica espalhada</h3>
                  <p>Contatos, agendas e atendimentos ficam sem padrao e sem continuidade entre setores.</p>
                </S.PainCard>
              </S.PainGrid>
            </MotionReveal>
          </S.Section>

          <S.ConversionIntro>
            <MotionReveal>
              <S.ConversionIntroGrid>
                <S.ConversionIntroContent>
                  <S.Eyebrow>E-mail corporativo com migracao assistida</S.Eyebrow>
                  <h2>Profissionalize o e-mail da sua empresa sem travar a operacao</h2>
                  <p>
                    Organize contas, centralize a comunicacao da equipe e ganhe
                    mais controle sobre seguranca, historico e acessos com apoio
                    tecnico para configuracao, migracao e implantacao.
                  </p>

                  <S.ConversionList>
                    <li>Diagnostico do ambiente atual e recomendacao do melhor formato</li>
                    <li>Migracao planejada para preservar historico, contatos e continuidade</li>
                    <li>Acesso por navegador, celular e Outlook quando fizer sentido</li>
                  </S.ConversionList>

                  <S.ConversionActions>
                    <CustomButton variant="cta" onClick={scrollToForm}>
                      Quero um diagnostico do meu e-mail
                    </CustomButton>
                    <span>Analise consultiva para empresas que querem sair do improviso</span>
                  </S.ConversionActions>
                </S.ConversionIntroContent>

                <S.ConversionIntroAside>
                  <h3>Quando essa solucao faz mais sentido</h3>

                  <S.ConversionMiniGrid>
                    <S.ConversionMiniCard>
                      <strong>Equipe perdendo tempo com caixas confusas</strong>
                      <p>Pastas, filtros, pesquisa e recursos compartilhados deixam a rotina mais organizada.</p>
                    </S.ConversionMiniCard>

                    <S.ConversionMiniCard>
                      <strong>Dependencia de Outlook e arquivos locais</strong>
                      <p>Reduza o risco de perder historico e tenha acesso mais seguro em qualquer lugar.</p>
                    </S.ConversionMiniCard>

                    <S.ConversionMiniCard>
                      <strong>Falta de controle sobre contas e informacoes</strong>
                      <p>Centralize a administracao, padronize o ambiente e acompanhe o crescimento da empresa.</p>
                    </S.ConversionMiniCard>
                  </S.ConversionMiniGrid>
                </S.ConversionIntroAside>
              </S.ConversionIntroGrid>
            </MotionReveal>
          </S.ConversionIntro>

          <S.SubHighlight>
            <h2>O problema nao e usar e-mail</h2>
            <p>
              O problema e continuar operando com uma estrutura limitada para
              uma empresa que ja precisa de controle, historico e colaboracao.
            </p>
          </S.SubHighlight>

          <S.CompareSection>
            <h2>E-mail basico vs e-mail corporativo com estrutura</h2>

            <S.CompareGrid>
              <S.CompareCard type="bad">
                <h3>E-mail comum de hospedagem</h3>
                <ul>
                  <li>Focado apenas em enviar e receber mensagens</li>
                  <li>Poucos recursos para organizacao e colaboracao</li>
                  <li>Maior dependencia de configuracoes locais</li>
                  <li>Baixo controle administrativo e de seguranca</li>
                </ul>
              </S.CompareCard>

              <S.CompareCard type="good">
                <h3>E-mail corporativo com a Invetec</h3>
                <ul>
                  <li>Comunicacao organizada por usuario, equipe e processo</li>
                  <li>Acesso web, mobile e desktop com mais flexibilidade</li>
                  <li>Gestao centralizada de contas, politicas e acessos</li>
                  <li>Recursos compartilhados para ganhar produtividade</li>
                </ul>
              </S.CompareCard>
            </S.CompareGrid>
          </S.CompareSection>

          <S.Highlight>
            <h2>Quando a empresa cresce, o e-mail precisa evoluir junto</h2>
            <p>
              O e-mail deixa de ser apenas um canal de mensagens e passa a fazer
              parte da operacao comercial, administrativa e financeira da empresa.
            </p>
            <p>
              Com a estrutura certa, sua equipe trabalha com mais rapidez, mais
              previsibilidade e menos dependencia de improviso.
            </p>
          </S.Highlight>

          <S.SystemSection>
            <MotionReveal>
              <h2>Mais do que contas de e-mail: uma plataforma de comunicacao corporativa</h2>
              <p>
                Sua equipe ganha uma experiencia mais profissional e a empresa
                passa a contar com recursos que ajudam na rotina operacional.
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
                <h3>Caixa de entrada organizada</h3>
                <p>Use pastas, filtros e busca rapida para localizar informacoes sem perder tempo.</p>
              </S.Card>

              <S.Card>
                <h3>Agenda compartilhada</h3>
                <p>Coordene compromissos da equipe com mais visibilidade e sincronizacao entre dispositivos.</p>
              </S.Card>

              <S.Card>
                <h3>Contatos centralizados</h3>
                <p>Mantenha informacoes internas e recorrentes organizadas para agilizar o atendimento.</p>
              </S.Card>

              <S.Card>
                <h3>Tarefas e lembretes</h3>
                <p>Acompanhe atividades ligadas a processos, clientes e responsabilidades do time.</p>
              </S.Card>

              <S.Card>
                <h3>Arquivos corporativos</h3>
                <p>Compartilhe documentos com mais ordem e menos dependencia de anexos espalhados.</p>
              </S.Card>

              <S.Card>
                <h3>Comunicacao interna mais alinhada</h3>
                <p>Reduza a dispersao entre canais e concentre a rotina em um ambiente corporativo.</p>
              </S.Card>

              <S.Card>
                <h3>Recursos integrados para reunioes</h3>
                <p>Facilite conversas e alinhamentos sem depender de varias ferramentas desconectadas.</p>
              </S.Card>

              <S.Card>
                <h3>Liberdade de acesso</h3>
                <p>Trabalhe pelo navegador, celular ou Outlook, conforme a rotina da empresa exigir.</p>
              </S.Card>
            </S.Grid>
          </S.SystemSection>

          <S.SubHighlight>
            <h2>Voce nao precisa ser uma grande empresa para ter estrutura profissional</h2>
            <p>
              Pequenas e medias empresas tambem precisam de seguranca,
              organizacao e padrao para crescer com menos risco.
            </p>
          </S.SubHighlight>

          <S.InfoBox>
            <h2>Uma alternativa corporativa com suporte proximo</h2>
            <p>
              Sua empresa pode contar com uma estrutura robusta de e-mail
              corporativo, sem ficar presa a uma solucao cara ou distante da
              sua realidade operacional.
            </p>
          </S.InfoBox>

          <S.SubHighlight>
            <h2>Infraestrutura pensada para confiabilidade e seguranca</h2>
            <ul>
              <li>99,9% de disponibilidade</li>
              <li>5 data centers TIER III</li>
              <li>Seguranca com ISO 27001</li>
              <li>Antispam avancado</li>
              <li>Autenticacao em dois fatores</li>
              <li>Conformidade com LGPD</li>
              <li>Suporte especializado</li>
              <li>Plataforma Zimbra NE</li>
            </ul>
          </S.SubHighlight>

          <S.SubHighlight>
            <h2>Migracao planejada para reduzir impacto na rotina</h2>
            <p>
              Conduzimos o processo com cuidado para preservar historico,
              orientar a equipe e evitar paradas desnecessarias.
            </p>
          </S.SubHighlight>

          <S.FormArea id="email-contact-form">
            <MotionReveal>
              <h2>Solicite uma avaliacao do seu ambiente de e-mail</h2>
              <p>
                Vamos entender como sua empresa trabalha hoje e indicar a melhor
                forma de migrar para uma estrutura corporativa mais segura e organizada.
              </p>

              <FormContactEmail />
            </MotionReveal>
          </S.FormArea>
        </S.Container>

        {selectedImage && (
          <S.Lightbox onClick={() => setSelectedImage(null)}>
            <S.CloseButton onClick={() => setSelectedImage(null)}>
              x
            </S.CloseButton>
            <img src={selectedImage} alt="Preview" />
          </S.Lightbox>
        )}
      </PageHeroSection>
    </>
  );
};
