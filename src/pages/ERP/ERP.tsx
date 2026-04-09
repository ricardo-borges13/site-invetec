import heroImage from '@/assets/images/PagesHero-ERP.jpg'; // pode trocar depois
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { useNavigate } from 'react-router-dom';
import * as S from './ERP.styles';

export const ERP = () => {
  const navigate = useNavigate();

  return (
    <PageHeroSection
      title="Sistema ERP para sua empresa crescer com controle"
      subTitle="Descubra qual solução faz sentido para o seu momento"
      image={heroImage}
    >
      <S.Container>
        {/* 🔥 DOR */}
        <S.Section>
          <MotionReveal>
            <h2>Você está perdendo controle da sua empresa?</h2>
            <p>Planilhas, retrabalho, falta de integração entre setores...</p>
            <p> Esses problemas travam o crescimento e aumentam custos.</p>
          </MotionReveal>
        </S.Section>

        {/* 🧠 AUTORIDADE */}
        <S.Section>
          <MotionReveal delay={0.2}>
            <h2>Experiência real com ERP</h2>
            <p>
              Após mais de 20 anos atuando na área de TI e gestão empresarial,
              implementei sistemas robustos como TOTVS e atualmente trabalho com
              soluções modernas e eficientes como W3ERP e TagPlus.
            </p>
          </MotionReveal>
        </S.Section>

        {/* ⚖️ COMPARAÇÃO */}
        <S.Section>
          <S.Title>
            Compare as opções e escolha o ERP ideal para sua empresa
          </S.Title>

          <S.Grid>
            {/* TAGPLUS */}
            <MotionReveal>
              <S.Card>
                <S.Badge>Para quem está começando</S.Badge>
                <h3>TagPlus ERP</h3>

                <ul>
                  <li>✔ Simples e fácil de usar</li>
                  <li>✔ Implantação rápida</li>
                  <li>✔ Baixo custo mensal</li>
                  <li>✔ Ideal para pequenas empresas</li>
                </ul>

                <S.Price>Planos a partir de R$ 65,90/mês</S.Price>

                <CustomButton
                  variant="primary"
                  onClick={() => navigate('/servicos/erp/tagplus')}
                >
                  Quero começar com TagPlus
                </CustomButton>
              </S.Card>
            </MotionReveal>

            {/* W3ERP */}
            <MotionReveal delay={0.2}>
              <S.Card $highlight>
                <S.Badge>Empresas estruturadas</S.Badge>
                <h3>W3ERP</h3>

                <ul>
                  <li>✔ Controle completo da empresa</li>
                  <li>✔ Integração entre setores</li>
                  <li>✔ Escalável e robusto</li>
                  <li>✔ Implantação personalizada</li>
                </ul>

                <S.Price>Investimento sob consulta</S.Price>

                <CustomButton
                  variant="primary"
                  onClick={() => navigate('/servicos/erp/w3erp')}
                >
                  Quero entender o W3ERP
                </CustomButton>
              </S.Card>
            </MotionReveal>
          </S.Grid>
        </S.Section>

        {/* 🎯 DECISÃO */}
        <S.Section>
          <MotionReveal>
            <h2>Não tem certeza qual ERP escolher?</h2>
            <p>
              Eu analiso sua empresa e indico a melhor solução para o seu
              cenário.
            </p>
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
    </PageHeroSection>
  );
};
