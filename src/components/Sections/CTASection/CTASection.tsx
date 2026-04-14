import { CustomButton } from '../../CustomButton/CustomButton';
import { MotionReveal } from '../../Motion/MotionReveal/MotionReveal';
import * as S from './CTASection.styles';

type CTASectionProps = {
  variant?: 'default' | 'infrastructure';
  badge?: string;
  title: string;
  subtitle?: string;
  items?: string[];
  buttonText?: string;
  onClick?: () => void;
};

export const CTASection = ({
  variant = 'default',
  badge,
  title,
  subtitle,
  items,
  buttonText,
  onClick,
}: CTASectionProps) => {
  return (
    <S.Section variant={variant}>
      <S.Content>
        <MotionReveal delay={0.6}>
          {badge && <span>{badge}</span>}
          <h2>{title}</h2>
          {subtitle && <h4>{subtitle}</h4>}

          {items && (
  <S.ListWrapper>
    <S.List>
      {items.map((item, index) => (
        <S.ListItem key={index}>
          <span>✔</span>
          {item}
        </S.ListItem>
      ))}
    </S.List>
  </S.ListWrapper>
)}

          {buttonText && (
            <CustomButton
              text={buttonText}
              variant="cta"
              type="button"
              onClick={onClick}
            />
          )}
        </MotionReveal>
      </S.Content>
    </S.Section>
  );
};
