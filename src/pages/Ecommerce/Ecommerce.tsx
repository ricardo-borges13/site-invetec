import image3 from '@/assets/images//JOIAS-MOOVIN.webp';
import image1 from '@/assets/images/BEBIDAS-MOOVIN.webp';
import image5 from '@/assets/images/COMIDA-MOOVIN.webp';
import image4 from '@/assets/images/MODA-MOOVIN.webp';
import heroImage from '@/assets/images/PagesHero-Ecommerce.webp';
import image2 from '@/assets/images/ROUPAS-MOOVIN.webp';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './Ecommerce.styles';

const benefits = [
  {
    title: 'Loja responsiva',
    description:
      'Experiência adequada para celular, tablet e computador, sem comprometer a navegação.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    title: 'Operação integrada',
    description:
      'Organize produtos, pedidos, pagamentos e opções de entrega em uma única plataforma.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v10H4z" />
        <path d="M4 10h16M8 14h3" />
      </svg>
    ),
  },
  {
    title: 'Estrutura personalizável',
    description:
      'Configure a loja de acordo com a identidade visual e as necessidades da sua empresa.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 9 9c0-1.1-.9-2-2-2h-2.2a2 2 0 0 1-2-2V5c0-1.1-.9-2-2-2Z" />
        <circle cx="7.5" cy="11.5" r="1" />
        <circle cx="10" cy="7.5" r="1" />
        <circle cx="7.5" cy="15.5" r="1" />
      </svg>
    ),
  },
];

const platformFeatures = [
  {
    title: 'Plataforma estável e segura',
    description: 'Base profissional para manter a operação disponível e protegida.',
  },
  {
    title: 'Layout responsivo',
    description: 'Navegação consistente em diferentes tamanhos de tela.',
  },
  {
    title: 'Pagamentos e fretes',
    description: 'Recursos para configurar meios de pagamento e opções de entrega.',
  },
  {
    title: 'Estrutura para crescer',
    description: 'Uma solução preparada para evoluir junto com a operação da empresa.',
  },
];

const implementationItems = [
  'Configuração inicial da loja',
  'Configuração dos meios de pagamento',
  'Regras e opções de frete',
  'Apoio no cadastro dos primeiros produtos',
  'Orientação para o início da operação',
];

const stores = [
  {
    image: image1,
    alt: 'Exemplo de loja virtual do segmento de bebidas',
    label: 'Bebidas',
  },
  {
    image: image2,
    alt: 'Exemplo de loja virtual do segmento de vestuário',
    label: 'Vestuário',
  },
  {
    image: image3,
    alt: 'Exemplo de loja virtual do segmento de joias',
    label: 'Joias',
  },
  {
    image: image4,
    alt: 'Exemplo de loja virtual do segmento de moda',
    label: 'Moda',
  },
  {
    image: image5,
    alt: 'Exemplo de loja virtual do segmento de alimentos',
    label: 'Alimentos',
  },
];

export const Ecommerce = () => {
  const openExternalUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleStart = () => {
    openExternalUrl('https://id.moovin.app/register?reseller=invetec');
  };

  const handleHelp = () => {
    const phone = '5531997101336';
    const message = encodeURIComponent(
      'Olá, quero estruturar uma loja virtual para minha empresa e gostaria de conversar sobre a implantação.'
    );

    openExternalUrl(`https://wa.me/${phone}?text=${message}`);
  };

  return (
    <>
      <SEO
        title="Criação de Loja Virtual Profissional | E-commerce para Empresas | INVETEC"
        description="Estruture uma loja virtual profissional com tecnologia Moovin, implantação orientada, pagamentos, frete e suporte da INVETEC para começar a vender online."
        image="https://www.invetec.com.br/images/SEO-E-commerce.jpg"
        url="https://www.invetec.com.br/servicos/e-commerce"
      />

      <PageHeroSection
        title="Loja virtual profissional para vender e crescer online"
        subTitle="Plataforma completa, implantação orientada e estrutura integrada para sua empresa operar vendas pela internet."
        image={heroImage}
      >
        <S.Container>
          <S.IntroSection aria-labelledby="ecommerce-intro-title">
            <MotionReveal>
              <S.Eyebrow>E-COMMERCE PARA EMPRESAS</S.Eyebrow>
              <h2 id="ecommerce-intro-title">
                Estruture uma operação de vendas online adequada ao seu negócio
              </h2>
              <p>
                Uma loja virtual profissional reúne catálogo, pedidos,
                pagamentos e frete em um ambiente preparado para atender seus
                clientes em diferentes dispositivos.
              </p>
              <p>
                A INVETEC auxilia na implantação e configuração da plataforma
                para que sua empresa comece com uma base organizada e pronta
                para evoluir.
              </p>

              <S.ButtonGroup>
                <CustomButton variant="cta" onClick={handleHelp}>
                  Solicitar uma proposta
                </CustomButton>
                <CustomButton variant="secondary" onClick={handleStart}>
                  Testar grátis
                </CustomButton>
              </S.ButtonGroup>
            </MotionReveal>
          </S.IntroSection>

          <S.BenefitsSection aria-labelledby="benefits-title">
            <MotionReveal>
              <S.SectionHeader>
                <S.Eyebrow>ESTRUTURA PARA OPERAR</S.Eyebrow>
                <h2 id="benefits-title">
                  Recursos essenciais para uma loja profissional
                </h2>
                <p>
                  Uma base organizada para apresentar produtos, receber pedidos
                  e administrar a rotina de vendas online.
                </p>
              </S.SectionHeader>
            </MotionReveal>

            <S.BenefitsGrid>
              {benefits.map((benefit, index) => (
                <MotionReveal key={benefit.title} delay={index * 0.1}>
                  <S.BenefitCard>
                    <S.IconWrapper>{benefit.icon}</S.IconWrapper>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </S.BenefitCard>
                </MotionReveal>
              ))}
            </S.BenefitsGrid>
          </S.BenefitsSection>

          <S.PlatformSection aria-labelledby="platform-title">
            <MotionReveal>
              <S.PlatformContent>
                <S.PlatformIntro>
                  <S.Eyebrow>TECNOLOGIA MOOVIN</S.Eyebrow>
                  <h2 id="platform-title">
                    Uma plataforma pronta para implantação e crescimento
                  </h2>
                  <p>
                    A INVETEC trabalha com a tecnologia Moovin para oferecer uma
                    estrutura profissional de e-commerce, preparada para
                    personalização, integrações e evolução da operação.
                  </p>
                </S.PlatformIntro>

                <S.FeatureGrid>
                  {platformFeatures.map((feature) => (
                    <S.FeatureItem key={feature.title}>
                      <S.CheckIcon aria-hidden="true">✓</S.CheckIcon>
                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </S.FeatureItem>
                  ))}
                </S.FeatureGrid>
              </S.PlatformContent>
            </MotionReveal>
          </S.PlatformSection>

          <S.ShowcaseSection aria-labelledby="showcase-title">
            <MotionReveal>
              <S.SectionHeader>
                <S.Eyebrow>EXEMPLOS DA PLATAFORMA</S.Eyebrow>
                <h2 id="showcase-title">
                  Veja aplicações de lojas virtuais em diferentes segmentos
                </h2>
                <p>
                  As telas abaixo demonstram possibilidades de apresentação e
                  organização de produtos dentro da plataforma.
                </p>
              </S.SectionHeader>

              <S.CarouselWrapper>
                <Carousel
                  interval={4500}
                  controls
                  indicators
                  pause="hover"
                  touch
                  aria-label="Exemplos de lojas virtuais"
                >
                  {stores.map((store) => (
                    <Carousel.Item key={store.label}>
                      <S.StorePreview>
                        <S.BrowserBar aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </S.BrowserBar>
                        <img src={store.image} alt={store.alt} loading="lazy" />
                      </S.StorePreview>
                      <S.StoreLabel>{store.label}</S.StoreLabel>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </S.CarouselWrapper>
            </MotionReveal>
          </S.ShowcaseSection>

          <S.ImplementationSection aria-labelledby="implementation-title">
            <MotionReveal>
              <S.ImplementationGrid>
                <S.ImplementationContent>
                  <S.Eyebrow>IMPLANTAÇÃO INVETEC</S.Eyebrow>
                  <h2 id="implementation-title">
                    Comece com uma estrutura configurada e mais segurança na
                    operação
                  </h2>
                  <p>
                    A plataforma permite diferentes níveis de configuração.
                    Para reduzir retrabalho e organizar a etapa inicial, a
                    INVETEC pode apoiar sua empresa na implantação da loja.
                  </p>

                  <S.ButtonGroup $align="left">
                    <CustomButton variant="cta" onClick={handleHelp}>
                      Falar sobre a implantação
                    </CustomButton>
                  </S.ButtonGroup>
                </S.ImplementationContent>

                <S.ImplementationList>
                  {implementationItems.map((item) => (
                    <li key={item}>
                      <S.CheckIcon aria-hidden="true">✓</S.CheckIcon>
                      <span>{item}</span>
                    </li>
                  ))}
                </S.ImplementationList>
              </S.ImplementationGrid>
            </MotionReveal>
          </S.ImplementationSection>

          <S.FinalCTA aria-labelledby="final-cta-title">
            <MotionReveal>
              <S.Eyebrow>PRÓXIMO PASSO</S.Eyebrow>
              <h2 id="final-cta-title">
                Quer estruturar uma loja virtual para sua empresa?
              </h2>
              <p>
                Converse com a INVETEC para avaliar a plataforma, a implantação
                e as configurações necessárias para a sua operação.
              </p>

              <S.ButtonGroup>
                <CustomButton variant="cta" onClick={handleHelp}>
                  Solicitar uma proposta
                </CustomButton>
                <CustomButton variant="secondary" onClick={handleStart}>
                  Testar grátis
                </CustomButton>
              </S.ButtonGroup>
            </MotionReveal>
          </S.FinalCTA>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
