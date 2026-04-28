import logoInvetecMail from '@/assets/images/INVETEC-Mail-site.png';
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
            <S.ConversionIntroContent>
              <S.HeaderRow>
                <S.Logo src={logoInvetecMail} alt="Invetec Mail" />
                <S.Eyebrow>E-mail corporativo profissional</S.Eyebrow>
              </S.HeaderRow>
              <h2>
                Você não contrata só e-mail —<br />
                organiza a comunicação da sua empresa
              </h2>

              <p>
                Antes de implementar, entendemos como sua empresa trabalha e
                configuramos o e-mail da forma correta, utilizando todos os
                recursos para melhorar a organização e os processos internos.
              </p>

              <p>
                Implantação, suporte e acompanhamento já estão inclusos — você
                não fica sozinho.
              </p>

              <S.ConversionList>
                <li>Implantação completa e configuração personalizada</li>
                <li>Organização de e-mails, pastas e usuários</li>
                <li>Agenda e recursos compartilhados entre equipes</li>
                <li>Suporte direto e acompanhamento no dia a dia</li>
              </S.ConversionList>

              <S.ConversionActions>
                <S.Price>
                  Planos a partir de <strong>R$ 14,90</strong> por usuário
                  <span>* Implantação e suporte já inclusos</span>
                </S.Price>
                <CustomButton variant="cta" onClick={scrollToForm}>
                  Quero organizar o e-mail da minha empresa
                </CustomButton>
                <span>Resposta rápida • Sem compromisso</span>{' '}
              </S.ConversionActions>
            </S.ConversionIntroContent>
          </S.ConversionIntro>

          <S.CompareSection>
            <MotionReveal>
              <h2>
                E-mail básico
                <span className="vs">VS</span>
                E-mail corporativo profissional (Zimbra)
              </h2>
              <p>
                Uma estrutura profissional com tecnologia Zimbra e suporte
                INVETEC.
              </p>
              <p>
                A maioria das empresas usa e-mail simples sem perceber os
                riscos. Veja a diferença na prática:
              </p>
              <S.CompareGrid>
                <MotionReveal direction="left" delay={0.08}>
                  <S.CompareCard type="bad">
                    <h3>❌ E-mail comum de hospedagem</h3>
                    <p className="highlight-bad">
                      <strong>
                        Funciona… mas não acompanha o crescimento da empresa
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Interface Web simples e limitada (serve só para enviar e
                        receber)
                      </li>
                      <li>Falta de organização entre usuários e equipes </li>
                      <li>
                        Pouco controle sobre acessos, permissões e segurança
                      </li>
                      <li>Dificuldade para padronizar o uso na empresa </li>
                      <li>Perda de tempo com e-mails desorganizados </li>
                      <li>
                        Informações importantes se perdem no meio dos e-mails
                      </li>
                    </ul>
                  </S.CompareCard>
                </MotionReveal>

                <MotionReveal direction="right" delay={0.14}>
                  <S.CompareCard type="good">
                    <h3>✅ E-mail corporativo com a INVETEC Mail</h3>
                    <p className="highlight-good">
                      Mais controle, organização e ganho real de produtividade
                    </p>
                    <ul>
                      <li>Equipes mais organizadas e comunicação sem ruído</li>
                      <li>
                        Acesso de qualquer lugar (web, celular ou computador)
                      </li>
                      <li>
                        Gestão centralizada de contas, permissões e segurança
                      </li>
                      <li>
                        Recursos compartilhados que aumentam a produtividade
                      </li>
                      <li>Estrutura pronta para crescer junto com a empresa</li>
                      <li>Suporte humano - não é atendimento robotizado </li>
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
                Sua empresa pode contar com uma estrutura robusta de e-mail
                corporativo, com suporte próximo e acompanhamento técnico — sem
                depender de soluções genéricas ou caras demais para sua
                realidade.
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
                Não é só e-mail — antes de contratar, entendemos o seu processo
              </h2>

              <p>
                Cada empresa usa e-mail de um jeito. Por isso, não fazemos
                configuração padrão.
              </p>

              <p>
                Antes de criar qualquer conta, analisamos como sua empresa
                trabalha e estruturamos o ambiente para melhorar a comunicação,
                o controle e a rotina da equipe.
              </p>

              <p>
                <strong>Na prática, isso significa:</strong>
              </p>

              <ul>
                <li>
                  Estudamos como sua empresa utiliza o e-mail no dia a dia
                </li>
                <li>
                  Configuramos tudo conforme sua realidade (acesso remoto ou
                  local)
                </li>
                <li> Organizamos usuários, pastas e fluxos de comunicação</li>
                <li>
                  Implantamos padrões para evitar bagunça e perda de informação
                </li>
                <li>
                  {' '}
                  Suporte humano, próximo e contínuo — não é atendimento
                  automático
                </li>
              </ul>
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
