import heroImage from '@/assets/images/PagesHero-Case.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useNavigate } from 'react-router-dom';
import * as S from './Cases.styles';

export const Cases = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Casos de Sucesso com ERP | Empresas que Ganharam Controle e Organização | Invetec"
        description="Veja exemplos reais de empresas que saíram do controle manual ou reduziram custos com ERP. Descubra qual solução faz sentido para o seu cenário."
        image="https://www.invetec.com.br/images/cases.jpg"
        url="https://www.invetec.com.br/cases"
      />
      <PageHeroSection
        title="Casos reais de empresas que organizaram sua gestão com ERP"
        subTitle="Veja na prática como diferentes cenários foram resolvidos"
        image={heroImage}
        overlayOpacity={0.7}
      >
        <S.Container>
          {/* 🧠 INTRO */}
          <S.Section>
            <MotionReveal>
              <h2>Nem toda empresa precisa da mesma solução</h2>

              <p>
                Algumas empresas precisam sair do controle manual e organizar a
                operação. Outras já têm um sistema estruturado, mas precisam
                reduzir custos e simplificar.
              </p>

              <p>
                Veja abaixo exemplos reais de cada cenário e como foram
                resolvidos.
              </p>
            </MotionReveal>
          </S.Section>

          {/* 🔥 CENÁRIOS */}
          <S.Grid>
            {/* 🟥 JPM */}
            <S.Card>
              <h3>Empresa sem sistema integrado (controle manual)</h3>

              <p>
                Operação baseada em planilhas, retrabalho entre setores e falta
                de controle financeiro.
              </p>

              <ul>
                <li>❌ Pedidos em Excel</li>
                <li>❌ Financeiro manual</li>
                <li>❌ Estoque sem integração</li>
              </ul>
                <p>👉 Resultado: mais controle e integração entre setores</p>
              <S.ButtonGroup>
                <CustomButton
                  variant="primary"
                  onClick={() => navigate('/cases/jpm')}
                >
                  Ver como foi resolvido
                </CustomButton>
              </S.ButtonGroup>
            </S.Card>

            {/* 🟦 DATRON */}
            <S.Card>
              <h3>Empresa com sistema robusto e alto custo</h3>

              <p>
                Operação já estruturada, mas com alto custo de infraestrutura e
                complexidade.
              </p>


              <ul>
                <li>💰 Alto custo com servidores e licenças</li>
                <li>⚙️ Manutenção constante</li>
                <li>🖥️ Dependência de estrutura local</li>
              </ul>
              <p>👉 Resultado: redução de custo e simplificação da operação</p>
              <S.ButtonGroup>
                <CustomButton
                  variant="primary"
                  onClick={() => navigate('/cases/datron')}
                >
                  Ver como foi resolvido
                </CustomButton>
              </S.ButtonGroup>
            </S.Card>
          </S.Grid>

          {/* 📋 FORM */}
          <S.FormArea>
            <MotionReveal>
              <h2>Solicitar diagnóstico</h2>
              <FormContactERP />
            </MotionReveal>
          </S.FormArea>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
