import heroImage from '@/assets/images/PagesHero-TagPlus.jpg'; // depois pode trocar
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { FiThumbsUp } from 'react-icons/fi';
import { FiZap } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
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
    <>
      <SEO
        title="ERP para Pequenas Empresas | Teste Grátis TagPlus | Invetec"
        description="Organize sua empresa com um ERP simples e rápido. Teste o TagPlus grátis por 15 dias e controle financeiro, vendas e estoque sem complicação."
        image="https://www.invetec.com.br/images/SEO-TagPlus.jpg"
        url="https://www.invetec.com.br/servicos/erp/tagplus"
      />
      <PageHeroSection
        title="ERP simples para organizar sua empresa sem complicação"
        subTitle="Controle financeiro, vendas e estoque com teste grátis imediato"
        image={heroImage}
      >
        <S.Container>
          {/* 🔥 INTRO */}
          <S.Section>
            <MotionReveal>
              <h2>O sistema ideal para quem precisa organizar a empresa sem complicação</h2>
              <p>
                O <strong>TagPlus</strong> é um ERP simples, rápido e acessível,
                ideal para empresas que precisam organizar financeiro, vendas e
                estoque sem complicação.
              </p>
            </MotionReveal>
          </S.Section>

          {/* ⚡ BENEFÍCIOS */}
          <S.Section>
            <S.Grid>
              <MotionReveal>
                <S.Card>
                  <h3><FiThumbsUp /> Fácil de usar</h3>
                  <p>
                    Interface simples e intuitiva, sem necessidade de
                    conhecimento técnico.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <S.Card>
                  <h3><FiZap /> Implantação rápida</h3>
                  <p>Crie sua conta e comece a usar em poucos minutos</p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <S.Card>
                  <h3><FiDollarSign /> Baixo custo</h3>
                  <p>Ideal para pequenas empresas que precisam de controle sem alto investimento</p>
                </S.Card>
              </MotionReveal>
            </S.Grid>
          </S.Section>

          {/* 💎 SEU DIFERENCIAL */}
          <S.Highlight>
            <MotionReveal>
              <h2>Comece sozinho ou com acompanhamento desde o início</h2>

              <p>
              Você pode criar sua conta e começar sozinho em poucos minutos.
Mas se quiser fazer da forma certa desde o início, eu te ajudo na configuração.
              </p>

              <ul>
                <li>✔ Criação imediata do sistema</li>
                <li>✔ Teste grátis por 15 dias</li>
                <li>✔ Emissão de nota fiscal</li>
                 <li>✔ Controle financeiro e estoque</li>
                 <li>✔ Sistema de caixa (PDV) com funcionamento offline</li>
                <li>✔ Configuração inicial orientada</li>
                <li>✔ Suporte direto comigo</li>

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
              <h2>Teste grátis e comece hoje mesmo</h2>
              <p>
                Crie sua conta em minutos e comece a organizar sua empresa agora.
              </p>

              <CustomButton variant="cta" onClick={handleStart}>
                Quero testar grátis
              </CustomButton>
            </MotionReveal>
          </S.CTA>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
