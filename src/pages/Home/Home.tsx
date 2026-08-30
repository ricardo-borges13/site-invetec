import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { Hero } from '@/components/Sections/Hero/hero';
import { SectionInfo } from '@/components/Sections/SectionInfo/SectionInfo';
import { CardService } from '@/components/Sections/ServiceSection/CardService/CardService';
import { ServiceSection } from '@/components/Sections/ServiceSection/ServiceSection';
import { SEO } from '@/components/SEO/Seo';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { servicesData, sobreData } from './Home.data';
import * as S from './Home.styles';
import { DepoimentosSection } from '@/components/Depoimentos/DepoimentosSection';
import { Depoimentos } from '@/components/Depoimentos/Depoimentos';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';

const imgHero = "/images/BannerPrincipalHero.webp";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleInvetecMailClick = useCallback(() => {
    navigate('/servicos/invetec-mail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          onHighlightClick={handleInvetecMailClick}
        />

        <SectionInfo {...sobreData} />

        <div id="servicos">
          <ServiceSection
            eyebrow="Soluções para empresas"
            title="Nossos Serviços"
            description="A INVETEC oferece soluções práticas em tecnologia, presença digital, operação, cloud e suporte para impulsionar o crescimento da sua empresa."
          >
            {servicesData.map((service, index) => (
              <MotionReveal key={service.title} direction="up" distance={18} delay={index * 0.05}>
                <CardService {...service} />
              </MotionReveal>
            ))}
          </ServiceSection>
        </div>
        <CTASection
          variant="default"
          badge="VAMOS CRESCER JUNTOS"
          title="Sua empresa está usando a tecnologia certa para crescer?"
          subtitle="Analisamos sua realidade e indicamos a melhor solução para organizar, reduzir custos e acelerar seus resultados."
          buttonText="Fale com um especialista"
          onClick={handleSecondaryClick}
        />

        <DepoimentosSection>
          <Depoimentos />
        </DepoimentosSection>
      </S.HomeWrapper>
    </>
  );
};
