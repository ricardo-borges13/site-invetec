import heroImage from '@/assets/images/PagesHero-Email.jpg';
import imageZimbra from '@/assets/images/Zimbra-Painel.jpg';
import { FormContactEmail } from '@/components/FormContactEmail/FormContactEmail';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { useState } from 'react';
import * as S from './Zimbra.styles';
import { SEO } from '@/components/SEO/Seo';

export const Zimbra = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="E-mail Corporativo Profissional | Zimbra para Empresas | Invetec"
        description="Cansado do Outlook? Tenha e-mail corporativo profissional com Zimbra: seguro, com backup automático, acesso de qualquer lugar e migração sem perda de dados."
        image="https://www.invetec.com.br/images/zimbra.jpg"
        url="https://www.invetec.com.br/servicos/zimbra"
      />

      <PageHeroSection
        title="E-mail corporativo sem dor de Outlook"
        subTitle="Sem perda de dados, sem configuração manual e com acesso de qualquer lugar"
        image={heroImage}
      >
        <S.Container>
          {/* 🔥 DOR */}
          <S.Section>
            <MotionReveal>
              <h2>Problemas comuns com e-mail corporativo</h2>

              <ul>
                <li>❌ Perda de e-mails por arquivo corrompido</li>
                <li>❌ Backup pesado e demorado</li>
                <li>❌ Configuração manual em cada computador</li>
                <li>❌ Dependência do Outlook instalado</li>
                <li>❌ Dificuldade ao trocar de máquina</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* ⚖️ COMPARAÇÃO */}
          <S.CompareSection>
            <h2>Outlook vs Zimbra na prática</h2>

            <S.CompareGrid>
              <S.CompareCard type="bad">
                <h3>❌ Outlook (modelo tradicional)</h3>
                <ul>
                  <li>Arquivo local pode corromper</li>
                  <li>Backup manual e pesado</li>
                  <li>Configuração em cada máquina</li>
                  <li>Dependência de instalação</li>
                  <li>Dificuldade na troca de computador</li>
                </ul>
              </S.CompareCard>

              <S.CompareCard type="good">
                <h3>✅ Zimbra (modelo moderno)</h3>
                <ul>
                  <li>100% web — sem instalação</li>
                  <li>Backup automático</li>
                  <li>Acesso de qualquer lugar</li>
                  <li>Sem risco de perda de dados</li>
                  <li>Pronto para uso imediato</li>
                </ul>
              </S.CompareCard>
            </S.CompareGrid>
          </S.CompareSection>

          {/* 💡 BENEFÍCIOS */}
          <S.Section>
            <MotionReveal>
              <h2>O que você ganha na prática com o Zimbra</h2>

              <p>
                Com o Zimbra, seu e-mail funciona direto no navegador, com
                segurança, backup automático e acesso de qualquer lugar.
              </p>
            </MotionReveal>
          </S.Section>

          <S.Grid>
            <S.Card>
              <h3>💻 100% Web</h3>
              <p>Sem necessidade de instalar programas</p>
            </S.Card>

            <S.Card>
              <h3>🔐 Backup automático</h3>
              <p>Seus e-mails protegidos sem depender de rotina manual</p>
            </S.Card>

            <S.Card>
              <h3>📱 Acesso de qualquer lugar</h3>
              <p>Funciona em qualquer dispositivo</p>
            </S.Card>

            <S.Card>
              <h3>⚙️ Sem configuração por máquina</h3>
              <p>Elimina retrabalho no TI</p>
            </S.Card>
          </S.Grid>

          {/* 🔥 DIFERENCIAL */}
          <S.Highlight>
            <h2>Você não está contratando só e-mail</h2>
            <p>
              Está centralizando comunicação, organização e produtividade da sua
              equipe em um único sistema.
            </p>
          </S.Highlight>

          {/* 🖥️ SISTEMA */}
          <S.SystemSection>
            <MotionReveal>
              <h2>Veja como funciona na prática</h2>

              <p>
                O Zimbra reúne e-mail, agenda, tarefas e comunicação em um único
                ambiente.
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

            {/* 🚀 FUNCIONALIDADES */}
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
                <p>Preenchimento automático com e-mails internos da empresa</p>
              </S.Card>

              <S.Card>
                <h3>✅ Gestão de tarefas</h3>
                <p>
                  Controle suas atividades com lembretes e organização diária
                </p>
              </S.Card>

              <S.Card>
                <h3>📁 Porta-arquivos corporativo</h3>
                <p>Armazene e compartilhe documentos com a equipe</p>
              </S.Card>

              <S.Card>
                <h3>💬 Chat interno</h3>
                <p>
                  Comunicação rápida entre a equipe sem depender de WhatsApp
                </p>
              </S.Card>

              <S.Card>
                <h3>🎥 Reuniões integradas</h3>
                <p>
                  Realize reuniões direto no sistema sem ferramentas externas
                </p>
              </S.Card>

              <S.Card>
                <h3>🔄 Liberdade de uso</h3>
                <p>
                  Use no navegador ou continue com Outlook — sem obrigatoriedade
                </p>
              </S.Card>
            </S.Grid>
          </S.SystemSection>

          <S.InfoBox>
            <h2>Segurança nível corporativo</h2>
            <p>
              Plataforma com padrão de segurança ISO 27001, proteção contra spam
              e conformidade com LGPD.
            </p>
          </S.InfoBox>

          {/* 🤝 MIGRAÇÃO */}
          <S.SubHighlight>
            <MotionReveal>
              <h2>Migração sem dor</h2>
              <p>
                Nós cuidamos de todos os detalhes, processo de migração,
                configuração e adaptação, garantindo que sua equipe continue
                trabalhando sem interrupções.
              </p>
            </MotionReveal>
          </S.SubHighlight>

          {/* ⚠️ AVISO */}
          <S.Warning>
            <h2>O problema não é o e-mail — é como ele é utilizado</h2>

            <p>
              Muitas empresas continuam usando ferramentas antigas e enfrentando
              os mesmos problemas todos os dias.
            </p>

            <p>
              A mudança para um sistema moderno elimina riscos, reduz trabalho
              do TI e melhora a produtividade da equipe.
            </p>
          </S.Warning>

          {/* 📋 FORM */}
          <S.FormArea>
            <MotionReveal>
              <h2>Solicitar diagnóstico de e-mail</h2>
              <p>
                Leva menos de 1 minuto. Vou analisar seu cenário e indicar a
                melhor solução.
              </p>

              <FormContactEmail />
            </MotionReveal>
          </S.FormArea>
        </S.Container>

        {/* 🔍 LIGHTBOX */}
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
