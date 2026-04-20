import heroImage from '@/assets/images/PagesHero-Bling.jpg'; // pode trocar depois
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { FiThumbsUp, FiZap, FiDollarSign } from 'react-icons/fi';
import * as S from './Bling.styles';

export const Bling = () => {
  const handleStart = () => {
    window.open(
      'https://www.bling.com.br/planos-e-precos/INVETEC',
      '_blank'
    );
  };

  const handleHelp = () => {
    const phone = '5531997101336';

    const message = encodeURIComponent(
      'Olá, quero ajuda para configurar o Bling e começar corretamente.'
    );

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <SEO
        title="ERP Bling para Pequenas Empresas | Teste Grátis 30 Dias | Invetec"
        description="Organize sua empresa com o ERP Bling. Emita nota fiscal, controle financeiro, estoque e vendas com 30 dias grátis. Implantação com suporte especializado."
        image="https://www.invetec.com.br/images/SEO-Bling.jpg"
        url="https://www.invetec.com.br/servicos/erp/bling"
      />

      <PageHeroSection
        title="ERP completo para organizar sua empresa e emitir notas sem complicação"
        subTitle="Controle financeiro, estoque, vendas e emissão de notas com 30 dias grátis"
        image={heroImage}
      >
        <S.Container>

          {/* 🔥 INTRO */}
          <S.Section>
            <MotionReveal>
              <h2>O sistema ideal para quem quer profissionalizar a empresa de verdade</h2>
              <p>
                O <strong>Bling</strong> é um ERP completo e acessível, ideal para empresas que precisam
                organizar processos, emitir notas fiscais e ter controle real do negócio sem complicação.
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
                    Interface intuitiva para você controlar sua empresa sem depender de conhecimento técnico.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <S.Card>
                  <h3><FiZap /> Comece rápido</h3>
                  <p>
                    Crie sua conta e comece a usar em poucos minutos com estrutura pronta.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <S.Card>
                  <h3><FiDollarSign /> Excelente custo-benefício</h3>
                  <p>
                    Mais recursos por um custo acessível, ideal para pequenas e médias empresas.
                  </p>
                </S.Card>
              </MotionReveal>
            </S.Grid>
          </S.Section>

          {/* 💎 DIFERENCIAL */}
          <S.Highlight>
            <MotionReveal>
              <h2>Comece sozinho ou com acompanhamento desde o início</h2>

              <p>
                Você pode criar sua conta e começar sozinho.
                Mas se quiser fazer da forma certa desde o início, eu te ajudo na configuração.
              </p>

              <ul>
                <li>✔ Teste grátis por 30 dias</li>
                <li>✔ Emissão de nota fiscal eletrônica (NF-e e NFS-e)</li>
                <li>✔ Controle financeiro completo</li>
                <li>✔ Gestão de estoque</li>
                <li>✔ Integração com e-commerce e marketplaces</li>
                <li>✔ Controle de vendas e pedidos</li>
                <li>✔ Configuração inicial orientada</li>
                <li>✔ Suporte direto comigo</li>
              </ul>

              <S.ButtonGroup>
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
                Crie sua conta em minutos e tenha controle total da sua empresa.
              </p>

              <CustomButton variant="cta" onClick={handleStart}>
                Quero testar grátis por 30 dias
              </CustomButton>
            </MotionReveal>
          </S.CTA>

        </S.Container>
      </PageHeroSection>
    </>
  );
};
