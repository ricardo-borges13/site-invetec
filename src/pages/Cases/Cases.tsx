import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/images/PagesHero-Case.jpg';
import * as S from './Cases.styles';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';

export const Cases = () => {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      title="Casos reais de empresas que organizaram sua gestão com ERP"
      subTitle="Cada empresa tem um cenário — e a solução certa depende disso"
      image={heroImage}
      overlayOpacity={0.7}
    >
      <S.Container>

        {/* 🧠 INTRO */}
        <S.Section>
          <MotionReveal>
            <h2>Nem toda empresa precisa da mesma solução</h2>

            <p>
              Algumas empresas precisam sair do controle manual e organizar a operação.
              Outras já têm um sistema estruturado, mas precisam reduzir custos e simplificar.
            </p>

            <p>
              Veja abaixo exemplos reais de cada cenário.
            </p>
          </MotionReveal>
        </S.Section>

        {/* 🔥 CENÁRIOS */}
        <S.Grid>

          {/* 🟥 JPM */}
          <S.Card>
            <h3>Empresa sem sistema integrado</h3>

            <p>
              Operação baseada em planilhas, retrabalho entre setores e falta de controle financeiro.
            </p>

            <ul>
              <li>❌ Pedidos em Excel</li>
              <li>❌ Financeiro manual</li>
              <li>❌ Estoque sem integração</li>
            </ul>

            <S.ButtonGroup>
              <CustomButton
                variant="primary"
                onClick={() => navigate('/cases/jpm')}
              >
                Ver case JPM
              </CustomButton>
            </S.ButtonGroup>
          </S.Card>

          {/* 🟦 DATRON */}
          <S.Card>
            <h3>Empresa com sistema robusto</h3>

            <p>
              Operação já estruturada, mas com alto custo de infraestrutura e complexidade.
            </p>

            <ul>
              <li>💰 Alto custo com servidores e licenças</li>
              <li>⚙️ Manutenção constante</li>
              <li>🖥️ Dependência de estrutura local</li>
            </ul>

            <S.ButtonGroup>
              <CustomButton
                variant="primary"
                onClick={() => navigate('/cases/datron')}
              >
                Ver case DATRON
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
  );
};
