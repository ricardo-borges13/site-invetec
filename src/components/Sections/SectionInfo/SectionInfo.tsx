import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { useNavigate } from 'react-router-dom';
import * as S from './SectionInfo.styles';

export type SectionInfoProps = {
  title: string;
  description: string;
  image1: string;
  buttonText?: string;
  path?: string;
};

export const SectionInfo = ({
  title,
  description,
  image1,
  buttonText,
  path,
}: SectionInfoProps) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.TextArea>
        <MotionReveal delay={0.2}>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {buttonText && (
            <CustomButton
              onClick={() => navigate(`${path}`)}
              text={buttonText}
              variant="primary"
            />
          )}
        </MotionReveal>
      </S.TextArea>
      <MotionReveal delay={0.5}>
        <S.ImagesArea>
          <S.LogoWrapper>
            <img src={image1} alt="Invetec" />
          </S.LogoWrapper>
        </S.ImagesArea>
      </MotionReveal>
    </S.Container>
  );
};
