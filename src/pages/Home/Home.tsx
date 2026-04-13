import imgHero from '@/assets/images/BannerPrincipalHero.jpg';
import { BusinessPartner } from '@/components/Sections/BusinessPartner/BusinessPartner';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { Hero } from '@/components/Sections/Hero/hero';
import { SectionInfo } from '@/components/Sections/SectionInfo/SectionInfo';
import { CardService } from '@/components/Sections/ServiceSection/CardService/CardService';
import { ServiceSection } from '@/components/Sections/ServiceSection/ServiceSection';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { servicesData, sobreData } from './Home.data';
import * as S from './Home.styles';
import { SEO } from '@/components/SEO/Seo';

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'parceiros') {
      const section = document.getElementById('parceiros');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo === 'servicos') {
      const section = document.getElementById('servicos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Memoize event handlers with useCallback
  const handlePrimaryClick = useCallback(() => {
    if (location.pathname === '/') {
      const section = document.getElementById('servicos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'servicos' } });
    }
  }, [navigate, location]);

  const handleSecondaryClick = useCallback(() => {
    navigate('/contato');
  }, [navigate]);

  return (
    <>
     <SEO
        title="Invetec | ERP, E-mail Corporativo, Sites e Soluções em TI"
        description="Mais de 20 anos ajudando empresas a se organizar e crescer com ERP, e-mail corporativo profissional, sites e soluções digitais. Estrutura, segurança e resultado."
        image="https://www.invetec.com.br/images/SEO-Home.jpg"
        url="https://www.invetec.com.br"
      />

    <S.HomeWrapper>
      <Hero
        title="Tecnologia que organiza sua empresa e acelera resultados"
        subtitle="ERP, e-mail corporativo profissional, sites e soluções digitais para organizar sua empresa e fortalecer sua presença no mercado"
        primaryButtonText="Ver Serviços"
        image={imgHero}
        secondaryButtonText="Fale com um especialista"
        onPrimaryClick={handlePrimaryClick} // Use memoized handler
        onSecondaryClick={handleSecondaryClick} // Use memoized handler
      />

      <SectionInfo {...sobreData} />

      <div id="servicos">
        <ServiceSection title="Nossos Serviços">
          {servicesData.map(service => (
            <CardService
              key={service.title}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
              path={service.path}
            />
          ))}
        </ServiceSection>
      </div>
      <CTASection />

      <div id="parceiros">
        <BusinessPartner />
      </div>
    </S.HomeWrapper>
    </>
  );
};
