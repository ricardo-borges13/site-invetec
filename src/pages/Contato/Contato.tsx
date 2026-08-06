import heroImage from '@/assets/images/PagesHero-Contato.jpg';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { SEO } from '@/components/SEO/Seo';
import { SectionsContactus } from '@/components/Sections/SectionsContactUs/SectionsContactUs';
import { contactData } from './contactData';
import * as S from './Contato.styles';

export const Contato = () => (
  <>
    <SEO
      title="Contato | Fale com um especialista em tecnologia | INVETEC"
      description="Entre em contato com a INVETEC e encontre a solução ideal para sua empresa em sites, ERP, e-mail corporativo, infraestrutura, cloud e suporte de TI."
      image="https://www.invetec.com.br/images/SEO-Contato.jpg"
      url="https://www.invetec.com.br/contato"
    />
    <PageHeroSection
      title="Vamos entender a necessidade da sua empresa"
      subTitle="Explique seu cenário e receba uma orientação objetiva sobre a solução mais adequada para o seu negócio."
      brandContent={<S.Eyebrow>FALE COM A INVETEC</S.Eyebrow>}
      benefit={<S.HeroBenefits><span>Atendimento direto com especialista</span><span>Resposta rápida</span><span>Soluções para empresas</span></S.HeroBenefits>}
      contentAlign="left"
      backgroundPosition="center"
      contentMaxWidth="620px"
      heroTopPadding="clamp(122px, 9vw, 140px)"
      startContentOnShortViewport
      heroMinHeight="560px"
      subtleTextShadow
      compactMobile
      overlayOpacity={0.48}
      image={heroImage}
    >
      <MotionReveal>
      <S.Intro>
        <header>
          <h2>Conte um pouco sobre sua necessidade</h2>
          <p>Preencha o formulário ou utilize um dos nossos canais de atendimento. Com algumas informações sobre sua empresa, conseguimos analisar melhor o cenário e orientar o próximo passo.</p>
          <strong>Resposta rápida e sem compromisso.</strong>
        </header>
      </S.Intro>
      </MotionReveal>
      <S.ContactSection><SectionsContactus {...contactData} /></S.ContactSection>
    </PageHeroSection>
  </>
);
