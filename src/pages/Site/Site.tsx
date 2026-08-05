import heroImage from '@/assets/images/PagesHero-Site.jpg';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import {
  BenefitsBar,
  DeliverablesSection,
  GoogleAdsBonus,
  HeroActions,
  ProblemsSection,
  ProcessTimeline,
  ProjectsCarousel,
  SiteBudgetForm,
  SiteFaq,
  TechnologyHighlight,
  WhyInvetec,
} from './SiteSections';
import * as S from './Site.styles';

export const Site = () => (
  <>
    <SEO
      title="Criação de Sites Profissionais para Empresas | INVETEC"
      description="Criação de sites institucionais rápidos, responsivos e preparados para SEO e geração de leads. Projeto sob medida, WhatsApp, formulário e apoio inicial em Google Ads."
      image="https://www.invetec.com.br/images/SEO-Site.jpg"
      url="https://www.invetec.com.br/servicos/criacao-de-sites"
    />

    <PageHeroSection
      title="Criação de sites profissionais para empresas que querem gerar mais oportunidades"
      subTitle="Desenvolvemos sites rápidos, responsivos e estruturados para transmitir confiança, aparecer no Google e transformar visitas em contatos comerciais."
      image={heroImage}
      overlayOpacity={0.72}
      heroContent={<HeroActions />}
    >
      <S.Container>
        <BenefitsBar />
        <GoogleAdsBonus />
        <ProjectsCarousel />
        <ProblemsSection />
        <DeliverablesSection />
        <TechnologyHighlight />
        <WhyInvetec />
        <ProcessTimeline />
        <SiteFaq />
        <SiteBudgetForm />
      </S.Container>
    </PageHeroSection>
  </>
);
