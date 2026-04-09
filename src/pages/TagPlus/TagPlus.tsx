import heroImage from '@/assets/images/PagesHero-TagPlus.jpg'; // depois pode trocar
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import * as S from './TagPlus.styles';

export const TagPlus = () => {
  const handleStart = () => {
    window.open(
      'https://sistema.tagplus.com.br/checkout/?ref=sistema_parceiros&id_funcionario=1464',
      '_blank'
    );
  };

  const handleHelp = () => {
  const phone = '5531997101336'; // ou usa seu contactData

  const message = encodeURIComponent(
    'Olá, quero ajuda para configurar o TagPlus e começar corretamente.'
  );

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

  return (
    <PageHeroSection
      title="ERP simples e eficiente para pequenas empresas"
      subTitle="Comece a organizar sua empresa em poucos minutos"
      image={heroImage}
    >
      <S.Container>
        {/* 🔥 INTRO */}
        <S.Section>
          <MotionReveal>
            <h2>O sistema ideal para quem está começando</h2>
            <p>
              O <strong>TagPlus</strong> é um ERP simples, rápido e acessível, ideal para
              empresas que precisam organizar financeiro, vendas e estoque sem
              complicação.
            </p>
          </MotionReveal>
        </S.Section>

        {/* ⚡ BENEFÍCIOS */}
        <S.Section>
          <S.Grid>
            <MotionReveal>
              <S.Card>
                <h3>Fácil de usar</h3>
                <p>
                  Interface simples e intuitiva, sem necessidade de conhecimento
                  técnico.
                </p>
              </S.Card>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <S.Card>
                <h3>Implantação rápida</h3>
                <p>Em poucos minutos você já começa a usar o sistema.</p>
              </S.Card>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <S.Card>
                <h3>Baixo custo</h3>
                <p>Planos acessíveis para empresas que estão começando.</p>
              </S.Card>
            </MotionReveal>
          </S.Grid>
        </S.Section>

        {/* 💎 SEU DIFERENCIAL */}
    <S.Highlight>
  <MotionReveal>
    <h2>Você pode começar sozinho — ou com minha ajuda</h2>

    <p>
      O <strong>TagPlus</strong> é simples e você pode começar sozinho.
      Mas se quiser acelerar o processo e evitar erros, eu posso te ajudar na configuração inicial.
    </p>

    <ul>
      <li>✔ Criação imediata do sistema</li>
      <li>✔ Teste grátis por 15 dias</li>
      <li>✔ Configuração inicial orientada</li>
      <li>✔ Suporte direto comigo</li>
      <li>✔ Implantação sem complicação</li>
    </ul>

    <S.ButtonGroup>
      {/* <CustomButton variant="cta" onClick={handleStart}>
        Quero testar grátis
      </CustomButton> */}

      <CustomButton variant="cta" onClick={handleHelp}>
        Quero ajuda na implantação
      </CustomButton>
    </S.ButtonGroup>
  </MotionReveal>
</S.Highlight>

        {/* 🚀 CTA FINAL */}
        <S.CTA>
          <MotionReveal>
            <h2>Teste grátis por 15 dias</h2>
            <p>
              Comece agora e veja como é fácil organizar sua empresa com o
              TagPlus.
            </p>

            <CustomButton variant="cta" onClick={handleStart}>
              Quero testar grátis
            </CustomButton>
          </MotionReveal>
        </S.CTA>
      </S.Container>
    </PageHeroSection>
  );
};

