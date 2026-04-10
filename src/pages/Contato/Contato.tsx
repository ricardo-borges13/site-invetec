import heroImage from '@/assets/images/PagesHero-Contato.jpg';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SectionsContactus } from '@/components/Sections/SectionsContactUs/SectionsContactUs';
import { SEO } from '@/components/SEO/Seo';
import { contactData } from './contactData';
import * as S from './Contato.styles';

export const Contato = () => {
  return (
    <>
      <SEO
        title="Contato | Fale com um especialista em TI, ERP e Sites - Invetec"
        description="Entre em contato com a Invetec e descubra como organizar sua empresa com ERP, e-mail corporativo, sites e soluções em TI. Atendimento rápido e personalizado."
        image="https://www.invetec.com.br/images/contato.jpg"
        url="https://www.invetec.com.br/contato"
      />
      <PageHeroSection
        title="Fale com um especialista"
        subTitle="Explique sua necessidade e receba a melhor solução para sua empresa"
        image={heroImage}
      >
        <S.Container>
          <header>
            <h2>Vamos entender o que sua empresa precisa</h2>
            <p>
              Explique rapidamente sua necessidade e eu analiso o cenário para
              indicar a melhor solução. 
            </p>
            <p><strong>Resposta rápida e sem compromisso.</strong></p>
          </header>
        </S.Container>

        <S.Form>
          <SectionsContactus {...contactData} />
        </S.Form>
      </PageHeroSection>
    </>
  );
};
