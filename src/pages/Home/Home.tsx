import imgHero from '@/assets/images/BannerPrincipalHero.jpg';
import cloud from '@/assets/images/Card-Cloud.jpg';
import ecommerce from '@/assets/images/Card-E-commerce.jpg';
import email from '@/assets/images/Card-E-mail.jpg';
import ti from '@/assets/images/Card-TI.jpg';
import erpImg from '@/assets/images/Card-W3.jpg';
import web from '@/assets/images/Card-Web.jpg';
import { BusinessPartner } from '@/components/Sections/BusinessPartner/BusinessPartner';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { Hero } from '@/components/Sections/Hero/hero';
import { SectionInfo } from '@/components/Sections/SectionInfo/SectionInfo';
import { CardService } from '@/components/Sections/ServiceSection/CardService/CardService';
import { ServiceSection } from '@/components/Sections/ServiceSection/ServiceSection';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sobreData } from './Home.data';
import * as S from './Home.styles';

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

  // Memoize event handlers with useCallback
  const handlePrimaryClick = useCallback(() => {
    navigate('/orcamento');
  }, [navigate]);

  const handleSecondaryClick = useCallback(() => {
    navigate('/contato');
  }, [navigate]);

  return (
    <S.HomeWrapper>
      <Hero
        title="Tecnologia e gestão para empresas"
        subtitle="Soluções em ERP, Cloud, Infraestrutura e Desenvolvimento Web"
        primaryButtonText="Ver Serviços"
        image={imgHero}
        secondaryButtonText="Fale com um especialista"
        onPrimaryClick={handlePrimaryClick} // Use memoized handler
        onSecondaryClick={handleSecondaryClick} // Use memoized handler
      />

      <SectionInfo {...sobreData} />

      <ServiceSection title="Nossos Serviços">
        <CardService
          image={erpImg}
          title="ERP"
          subtitle="Implantação e suporte W3 ERP"
        />

        <CardService
          image={cloud}
          title="Infraestrutura e Cloud"
          subtitle="Servidores, backup e virtualização"
        />

        <CardService
          image={email}
          title="E-mail Corporativo"
          subtitle="Zimbra empresarial"
        />

        <CardService
          image={ecommerce}
          title="E-commerce"
          subtitle="Implantação e suporte W3 ERP"
        />

        <CardService
          image={web}
          title="Desenvolvimento Web"
          subtitle="Sites Institucionais e Portfólios"
        />

        <CardService
          image={ti}
          title="Suporte TI"
          subtitle="Implantação e suporte W3 ERP"
        />
      </ServiceSection>

      <CTASection />

      <div id="parceiros">
        <BusinessPartner />
      </div>

    </S.HomeWrapper>
  );
};
