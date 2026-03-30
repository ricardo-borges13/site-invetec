import { PageHeroSection } from "@/components/PageHeroSection/PageHeroSection"
import heroImage from "@/assets/images/PagesHero-Contato.jpg"
import { contactData } from "./contactData"
import * as S from './Contato.styles';
import { SectionsContactus } from "@/components/Sections/SectionsContactUs/SectionsContactUs";

export const Contato = () => {
  return(
    <PageHeroSection
      title="Contato"
      subTitle="Entre em contato conosco"
      image={heroImage}
    >
      <S.Container>
          <header>
            <h2>Fale com um especialista em TI</h2>
            <p>
                Conte rapidamente o que sua empresa precisa. Vamos analisar e te responder com a melhor solução.
            </p>
          </header>
        </S.Container>

        <S.Form>
          <SectionsContactus {...contactData} />
        </S.Form>
    </PageHeroSection>

  )
}
