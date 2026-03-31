import heroImage from '@/assets/images/PagesHero-Sobre2.jpg';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import * as S from './Cases.styles';

export const Cases = () => {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      title="Casos reais"
      subTitle="Veja como empresas utilizam o ERP na prática"
      image={heroImage}
    >
      <S.Container>
        <S.Section>
          <MotionReveal>
            <h2>Aplicação real em empresas</h2>
            <p>
              Conheça exemplos práticos de empresas que organizaram seus processos,
              ganharam controle e melhoraram a gestão utilizando ERP de forma estratégica.
            </p>
          </MotionReveal>
        </S.Section>

        <S.Grid>
          <MotionReveal>
            <S.Card>
              <h3>DATRON</h3>
              <p>
                Empresa de locação de radiocomunicação com controle total de contratos,
                estoque e faturamento recorrente.
              </p>

              <CustomButton
                variant="primary"
                onClick={() => navigate('/cases/datron')}
              >
                Ver case
              </CustomButton>
            </S.Card>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <S.Card>
              <h3>JPM</h3>
              <p>
                Comércio de borrachas e materiais elétricos com gestão integrada
                de vendas, estoque e financeiro.
              </p>

              <CustomButton
                variant="primary"
                onClick={() => navigate('/cases/jpm')}
              >
                Ver case
              </CustomButton>
            </S.Card>
          </MotionReveal>
        </S.Grid>
      </S.Container>
    </PageHeroSection>
  );
};
