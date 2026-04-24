import heroImage from '@/assets/images/PagesHero-Email.jpg';
import imageZimbraFull from '@/assets/images/Zimbra-Full.jpg'; // pesada (~200kb+)
import imageZimbra from '@/assets/images/Zimbra-Leve.jpg'; // leve (~60–100kb)
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { SEO } from '@/components/SEO/Seo';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Zimbra.styles';

export const Zimbra = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const formRef = useRef<HTMLElement | null>(null);

  const scrollToForm = () => {
    if (!formRef.current) return;

    const headerOffset = 24;
    const formTop =
      formRef.current.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: formTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SEO
        title="E-mail Corporativo Zimbra | Mais controle e economia | INVETEC Mail"
        description="Tenha um e-mail corporativo profissional com tecnologia Zimbra. Mais organização, segurança e controle para sua empresa — sem pagar caro como Google ou Microsoft."
        image="https://www.invetec.com.br/images/SEO-Invetec-Mail.jpg"
        url="https://www.invetec.com.br/servicos/invetec-mail"
      />

      <PageHeroSection
        title="Pare de improvisar no e-mail da sua empresa"
        subTitle="Tenha um e-mail corporativo com organização, segurança e suporte real para sua empresa funcionar sem riscos."
        image={heroImage}
      >
        <S.Container>
          <S.Section>
            <MotionReveal>
              <h2>Seu e-mail já começou a causar problemas na empresa?</h2>
              <p>
                Quando o e-mail deixa de acompanhar a rotina do negócio, a
                empresa perde agilidade, passa menos credibilidade e começa a
                ter falhas no atendimento.
              </p>

              <S.PainGrid>
                <MotionReveal delay={0.04}>
                  <S.PainCard>
                    <h3>❌ E-mails se perdem e atrasam o atendimento</h3>
                    <p>
                      E-mail misturado, sem organização e com dificuldade para
                      achar o que foi tratado.
                    </p>
                  </S.PainCard>
                </MotionReveal>

                <MotionReveal delay={0.08}>
                  <S.PainCard>
                    <h3>
                      ❌ Informações ficam desencontradas entre dispositivos
                    </h3>
                    <p>
                      A equipe responde em lugares diferentes e a informação
                      fica desencontrada.
                    </p>
                  </S.PainCard>
                </MotionReveal>

                <MotionReveal delay={0.12}>
                  <S.PainCard>
                    <h3>❌ Falhas e lentidão afetam a imagem da empresa</h3>
                    <p>
                      Falhas, lentidão e falta de padrão no e-mail afetam a
                      percepção de clientes e parceiros.
                    </p>
                  </S.PainCard>
                </MotionReveal>

                <MotionReveal delay={0.2}>
                  <S.PainCard>
                    <h3>❌ Sem controle sobre contas e acessos</h3>
                    <p>
                      Quando alguém entra ou sai da empresa, tudo depende de
                      ajustes improvisados.
                    </p>
                  </S.PainCard>
                </MotionReveal>
              </S.PainGrid>
            </MotionReveal>
          </S.Section>

          <S.ConversionIntro>
            <MotionReveal delay={0.05}>
              <S.ConversionIntroContent>
                <S.Eyebrow>E-mail corporativo com migração assistida</S.Eyebrow>
                <h2>
                  Profissionalize o e-mail da sua empresa sem parar a operação
                </h2>
                <p>
                  Você não precisa trocar tudo de uma vez ou correr riscos.
                  Cuidamos da migração e organização do seu e-mail com
                  acompanhamento técnico do início ao funcionamento, sem
                  interromper a rotina da empresa.
                </p>
                <p>
                  Assim, sua empresa ganha mais controle, organização e
                  segurança na comunicação do dia a dia.
                </p>

                <S.ConversionList>
                  <li>
                    Diagnóstico do ambiente atual e recomendação do melhor
                    formato
                  </li>
                  <li>
                    Migração planejada para preservar histórico, contatos e
                    continuidade
                  </li>
                  <li>
                    Acesso por navegador, celular e Outlook quando fizer sentido
                  </li>
                </S.ConversionList>

                <S.ConversionActions>
                  <CustomButton variant="cta" onClick={scrollToForm}>
                    Quero melhorar o e-mail da minha empresa
                  </CustomButton>
                  <span>
                    Análise consultiva para empresas que querem sair do
                    improviso
                  </span>
                </S.ConversionActions>
              </S.ConversionIntroContent>
            </MotionReveal>
          </S.ConversionIntro>

          <S.CompareSection>
            <MotionReveal>
              <h2>E-mail básico vs corporativo (Zimbra)</h2>
              <p>
                Uma estrutura profissional com tecnologia Zimbra pensada para
                empresas.
              </p>
              <p>
                A maioria das empresas usa e-mail simples sem perceber os
                riscos. Veja a diferença na prática:
              </p>
              <S.CompareGrid>
                <MotionReveal direction="left" delay={0.08}>
                  <S.CompareCard type="bad">
                    <h3>❌ E-mail comum de hospedagem</h3>
                    <ul>
                      <li>Focado apenas em enviar e receber mensagens</li>
                      <li>Poucos recursos para organização e colaboração</li>
                      <li>Maior dependência de configurações locais</li>
                      <li>Baixo controle administrativo e de segurança</li>
                    </ul>
                  </S.CompareCard>
                </MotionReveal>

                <MotionReveal direction="right" delay={0.14}>
                  <S.CompareCard type="good">
                    <h3>✅ E-mail corporativo com a INVETEC Mail</h3>
                    <ul>
                      <li>
                        Comunicação organizada por usuário, equipe e processo
                      </li>
                      <li>
                        Acesso web, mobile e desktop com mais flexibilidade
                      </li>
                      <li>
                        Gestão centralizada de contas, políticas e acessos
                      </li>
                      <li>Recursos compartilhados para ganhar produtividade</li>
                    </ul>
                  </S.CompareCard>
                </MotionReveal>
              </S.CompareGrid>
            </MotionReveal>
          </S.CompareSection>

           <S.SystemSection>
            <MotionReveal>
              <h2>
                Veja como funciona o <span>INVETEC Mail</span> na prática
              </h2>
              <p>
                Sua equipe passa a trabalhar com mais organização, menos
                retrabalho e mais controle sobre as informações.
              </p>
            </MotionReveal>

            <S.SystemImage>
              <img
                src={imageZimbra}
                alt="Interface do Zimbra"
                loading="lazy"
                onClick={() => setSelectedImage(imageZimbraFull)}
                style={{ cursor: 'zoom-in' }}
              />
            </S.SystemImage>

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

          <MotionReveal>
            <S.InfoBox>
              <h2>Uma estrutura corporativa com suporte próximo</h2>
              <p>
                Sua empresa pode contar com uma estrutura robusta de e-mail corporativo, com suporte próximo e acompanhamento técnico — sem depender de soluções genéricas ou caras demais para sua realidade.
              </p>
            </S.InfoBox>
          </MotionReveal>


          <MotionReveal>
            <CTASection
              variant="infrastructure"
              badge="INFRAESTRUTURA DE ALTO NÍVEL"
              title="Infraestrutura pensada para confiabilidade e segurança"
              subtitle="Essa é a base que garante segurança, estabilidade e confiança no dia a dia da sua empresa — sem você precisar se preocupar com infraestrutura."
              items={[
                '99,9% de disponibilidade',
                '+ de 1.600 empresas atendidas',
                '5 data centers TIER III',
                'Segurança certificada ISO 27001',
                'Antispam avançado',
                'Conformidade total com a LGPD',
                'Suporte especializado',
                'Plataforma Zimbra NE',
              ]}
            />
          </MotionReveal>

          <MotionReveal>
            <S.ValueHighlight>
              <h2>
                Você não compra só e-mail — você tem acompanhamento completo
              </h2>
              <p>Diferente de serviços comuns, aqui você não fica sozinho.</p>
              <p>
                Você recebe acompanhamento desde a implantação até o uso no dia
                a dia —<strong>sem custo de mão de obra</strong>.
              </p>
            </S.ValueHighlight>
          </MotionReveal>

          <S.FormArea id="email-contact-form" ref={formRef}>
            <MotionReveal>
              <S.MeiHelper>
                Trabalha sozinho ou tem poucos e-mails?{' '}
                <Link to="/servicos/invetec-mail-mei">
                  Veja uma solução mais simples →
                </Link>
              </S.MeiHelper>
              <h2>Vamos organizar o e-mail da sua empresa</h2>
              <p>
                Em poucos minutos você recebe uma orientação clara do que
                precisa ser feito.
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
