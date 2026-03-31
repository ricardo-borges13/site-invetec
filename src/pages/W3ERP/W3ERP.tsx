import heroImage from '@/assets/images/PagesHero-Sobre2.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import * as S from './W3ERP.styles';
import { useNavigate } from 'react-router-dom';

export const W3ERP = () => {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      title="ERP completo para empresas que precisam de controle real"
      subTitle="Implantação personalizada, integração total e crescimento estruturado"
      image={heroImage}
    >
      <S.Container>
        {/* 🔥 DOR */}
        <S.Section>
          <MotionReveal>
            <h2>Sua empresa está crescendo, mas a gestão não acompanha?</h2>
            <ul>
              <li>❌ Informações desencontradas</li>
              <li>❌ Retrabalho entre setores</li>
              <li>❌ Falta de controle financeiro</li>
              <li>❌ Sistemas que não conversam</li>
            </ul>
          </MotionReveal>
        </S.Section>

        {/* ⚙️ SOBRE */}
        <S.Section>
          <MotionReveal>
            <h2>O que é o W3ERP?</h2>
            <p>
              Um sistema completo, escalável e configurado sob medida para cada
              empresa. Não é uma solução pronta — é adaptada ao seu negócio.
            </p>
          </MotionReveal>
        </S.Section>

        <S.Section>
          <MotionReveal>
            <h2>O que muda na sua empresa com o W3ERP</h2>

            <S.Grid>
              <S.Card>
                <h3>Gestão integrada e automatizada</h3>
                <p>
                  Todos os setores conectados em um único sistema, eliminando
                  retrabalho e informações desencontradas.
                </p>
              </S.Card>

              <S.Card>
                <h3>Controle em tempo real</h3>
                <p>
                  Dashboards, indicadores e dados atualizados para tomada de
                  decisão rápida e segura.
                </p>
              </S.Card>

              <S.Card>
                <h3>100% web e acessível</h3>
                <p>
                  Acesse de qualquer lugar, sem necessidade de servidores ou
                  estrutura complexa.
                </p>
              </S.Card>

              <S.Card>
                <h3>Sistema adaptado ao seu negócio</h3>
                <p>
                  O ERP é configurado conforme seus processos, não o contrário.
                </p>
              </S.Card>

              <S.Card>
                <h3>Integração total</h3>
                <p>
                  Conecta com outros sistemas e centraliza todas as operações da
                  empresa.
                </p>
              </S.Card>

              <S.Card>
                <h3>Escalabilidade e segurança</h3>
                <p>
                  Estrutura preparada para crescimento, com segurança nível
                  bancário.
                </p>
              </S.Card>
              <S.Card>
                <h3>💰 Redução de custos</h3>
                <p>
                  Elimine gastos com servidores, licenças e atualizações. O
                  sistema já funciona na nuvem, sem necessidade de estrutura
                  interna.
                </p>
              </S.Card>

              <S.Card>
                <h3>🔒 Backup e segurança</h3>
                <p>
                  Seus dados ficam protegidos sem necessidade de rotinas
                  manuais. Backup e segurança são responsabilidade do sistema.
                </p>
              </S.Card>
            </S.Grid>
          </MotionReveal>
        </S.Section>

        {/* ⚠️ REALIDADE DO ERP */}
        <S.Warning>
          <MotionReveal>
            <h2>O sistema não é o problema — a implantação é</h2>

            <p>
              Muitas empresas trocam de ERP várias vezes e continuam com os
              mesmos problemas. Isso acontece porque o erro não está no sistema,
              mas na forma como ele é implantado e utilizado no dia a dia.
            </p>

            <p>
              Sem acompanhamento, treinamento da equipe e adaptação dos
              processos, até o melhor software do mercado pode se tornar um
              prejuízo.
            </p>

            <p>
              <strong>É exatamente aqui que eu entro:</strong> garantindo que o
              sistema funcione na prática, com processos bem definidos e equipe
              preparada — e não vire mais um investimento perdido.
            </p>
          </MotionReveal>
        </S.Warning>

        <S.Case>
          <MotionReveal>
            <h2>Aplicação real do sistema em empresas</h2>

            <p>
              Atualmente sou responsável pela área de TI de empresas que
              utilizam o W3ERP na operação real, como controle financeiro,
              estoque, faturamento e processos internos.
            </p>

            <p>
              Isso me permite entender na prática o que funciona, o que precisa
              ser ajustado e como adaptar o sistema à realidade de cada negócio.
            </p>

            <S.ButtonGroup>
              <CustomButton
                variant="primary"
                onClick={() => navigate('/cases')}
              >
                Ver como empresas usam o sistema
              </CustomButton>
            </S.ButtonGroup>
          </MotionReveal>
        </S.Case>

        {/* 🎯 QUALIFICAÇÃO */}
        <S.Section>
          <MotionReveal>
            <h2>Para quem é indicado</h2>
            <ul>
              <li>✔ Empresas em crescimento ou já estruturadas</li>
              <li>✔ Negócios com operação distribuída entre setores</li>
              <li>✔ Empresas que enfrentam retrabalho e falta de integração</li>
              <li>
                ✔ Quem busca controle financeiro confiável e visão gerencial
              </li>
            </ul>
          </MotionReveal>
        </S.Section>

        {/* 🚫 FILTRO */}
        <S.Section>
          <MotionReveal>
            <h2>Não é para todo mundo</h2>
            <ul>
              <li>✖ Empresas muito pequenas</li>
              <li>✖ Quem busca solução barata</li>
              <li>✖ Quem não quer mudar processos</li>
            </ul>
          </MotionReveal>
        </S.Section>

        {/* 🤝 SEU DIFERENCIAL */}
        <S.Highlight>
          <MotionReveal>
            <h2>Implantação com acompanhamento real</h2>
            <p>
              Eu analiso seu cenário, participo das reuniões com a W3 e
              acompanho a implantação para garantir que tudo funcione
              corretamente.
            </p>

            <S.Grid>
              <S.Card>
                <h3>Análise do cenário</h3>
                <p>Entendo sua operação antes de qualquer decisão.</p>
              </S.Card>

              <S.Card>
                <h3>Tradução técnica</h3>
                <p>Transformo o sistema em algo aplicável ao seu negócio.</p>
              </S.Card>

              <S.Card>
                <h3>Intermediação com a W3</h3>
                <p>Evita ruído e garante alinhamento correto.</p>
              </S.Card>

              <S.Card>
                <h3>Acompanhamento</h3>
                <p>Suporte durante toda a implantação.</p>
              </S.Card>
            </S.Grid>
          </MotionReveal>
        </S.Highlight>

        {/* 🧠 PROCESSO */}
        <S.Section>
          <MotionReveal>
            <h2>Como funciona o processo</h2>
            <ol>
              <li>Você preenche o diagnóstico</li>
              <li>Eu analiso sua operação</li>
              <li>Agendamos uma conversa</li>
              <li>Apresentação com a W3ERP</li>
              <li>Proposta personalizada</li>
            </ol>
          </MotionReveal>
        </S.Section>

        {/* 📋 FORM */}
        <S.FormArea>
          <MotionReveal>
            <h2>Solicitar diagnóstico</h2>
            <FormContactERP />
          </MotionReveal>
        </S.FormArea>
      </S.Container>

      <S.Section>
        <MotionReveal>
          <h2>
            Saiba como sua empresa pode diminuir custos e aumentar o lucro
          </h2>

          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/-ljZXEjkMpE"
              title="W3ERP"
              frameBorder="0"
              allowFullScreen
            />
          </S.VideoWrapper>
        </MotionReveal>
      </S.Section>
    </PageHeroSection>
  );
};
