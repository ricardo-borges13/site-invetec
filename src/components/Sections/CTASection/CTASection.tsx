import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../CustomButton/CustomButton';
import { MotionReveal } from '../../Motion/MotionReveal/MotionReveal';
import * as S from './CTASection.styles';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.Content>
        <MotionReveal delay={0.6}>
          <span>VAMOS CRESCER JUNTOS</span>
          <h2>
            Sua empresa está pronta para crescer com mais tecnologia e
            eficiência?
          </h2>
          <h4>
            Implantação, suporte e soluções completas para otimizar seus
            processos e reduzir custos
          </h4>

          <CustomButton
            text="Fale com um especialista"
            variant="cta"
            type="submit"
            onClick={() => navigate('/contato')}
          />
        </MotionReveal>
      </S.Content>
    </S.Section>
  );
};
