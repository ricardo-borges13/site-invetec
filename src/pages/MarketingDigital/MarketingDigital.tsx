import heroImage from '@/assets/images/PagesHero-Marketing.jpg';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';

export const MarketingDigital = () => {
  return (
    <>
      <SEO
        title="Marketing Digital para Empresas - Invetec"
        description="Página em desenvolvimento. Em breve soluções completas de marketing digital para gerar clientes e crescimento para sua empresa."
        url="https://www.invetec.com.br/marketing-digital"
        noindex={true}
        nofollow={true}
      />
      <PageHeroSection
        title="Marketing Digital para Empresas de Tecnologia"
        subTitle="Soluções estratégicas para atrair clientes e fortalecer sua marca no ambiente digital"
        image={heroImage}
      >
        <h1>Marketing Digital</h1>
        <p>
          Em breve, mais informações sobre nossos serviços de Marketing Digital.
        </p>
      </PageHeroSection>
    </>
  );
};
