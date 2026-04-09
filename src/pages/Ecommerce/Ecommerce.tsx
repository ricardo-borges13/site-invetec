import image3 from '@/assets/images//JOIAS-MOOVIN.jpg';
import image1 from '@/assets/images/BEBIDAS-MOOVIN.jpg';
import image5 from '@/assets/images/COMIDA-MOOVIN.jpg';
import image4 from '@/assets/images/MODA-MOOVIN.jpg';
import heroImage from '@/assets/images/PagesHero-Ecommerce.jpg';
import image2 from '@/assets/images/ROUPAS-MOOVIN.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { Carousel } from 'react-bootstrap';
import * as S from './Ecommerce.styles';

export const Ecommerce = () => {
  const handleStart = () => {
    window.open('https://id.moovin.app/register?reseller=invetec', '_blank');
  };

  const handleHelp = () => {
    const phone = '5531997101336';

    const message = encodeURIComponent(
      'Olá, quero ajuda para montar minha loja virtual e começar a vender online.'
    );

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <SEO
        title="Criação de Loja Virtual para Vender Online | E-commerce Profissional | Invetec"
        description="Monte sua loja virtual com estrutura profissional e comece a vender online de verdade. Plataforma completa, integração com pagamentos e suporte para acelerar seus resultados."
        image="https://www.invetec.com.br/images/ecommerce.jpg"
        url="https://www.invetec.com.br/servicos/e-commerce"
      />
      <PageHeroSection
        title="Venda todos os dias com uma loja virtual profissional"
        subTitle="Plataforma completa + acompanhamento para você vender online com segurança"
        image={heroImage}
      >
        <S.Container>
          {/* 🔥 INTRO */}
          <S.Section>
            <MotionReveal>
              <h2>Venda seus produtos pela internet de forma profissional</h2>
              <p>
                Ter uma loja virtual hoje não é mais diferencial — é
                necessidade.
              </p>

              <p>
                Com a plataforma certa, você consegue vender 24h por dia,
                alcançar novos clientes e expandir seu negócio.
              </p>
            </MotionReveal>
          </S.Section>

          <S.Highlight>
            <MotionReveal>
              <h2>Uma plataforma pronta para vender de verdade</h2>

              <p>
                Você não precisa começar do zero — com a Moovin, você já começa
                com uma estrutura profissional, pronta para crescer, integrar e
                vender com segurança.
              </p>

              <ul>
                <li>✔ Plataforma estável e profissional</li>
                <li>✔ Alta performance e segurança</li>
                <li>✔ Personalização completa</li>
                <li>✔ Estrutura pronta para crescimento</li>
              </ul>
            </MotionReveal>
          </S.Highlight>

          {/* ⚡ BENEFÍCIOS */}
          <S.Section>
            <S.Grid>
              <MotionReveal>
                <S.Card>
                  <h3>🛒 Estrutura pronta para vender</h3>
                  <p>
                    Você já começa com uma loja preparada para receber pedidos e
                    escalar.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <S.Card>
                  <h3>📱 Venda pelo celular</h3>
                  <p>
                    A maioria das compras acontece no mobile — sua loja funciona
                    perfeitamente.
                  </p>
                </S.Card>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <S.Card>
                  <h3>💳 Tudo integrado</h3>
                  <p>Pagamentos, frete e pedidos organizados em um só lugar.</p>
                </S.Card>
              </MotionReveal>
            </S.Grid>
          </S.Section>

          <S.Section>
            <MotionReveal>
              <h2>Veja exemplos de lojas na prática</h2>
              <S.CarouselWrapper>
                <Carousel interval={3000} controls indicators>
                  <Carousel.Item>
                    <img src={image1} alt="Loja virtual exemplo 1" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={image2} alt="Loja virtual exemplo 2" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={image3} alt="Loja virtual exemplo 3" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={image4} alt="Loja virtual exemplo 3" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={image5} alt="Loja virtual exemplo 3" />
                  </Carousel.Item>
                </Carousel>
              </S.CarouselWrapper>
            </MotionReveal>
          </S.Section>

          {/* 💎 DIFERENCIAL */}
          <S.Highlight>
            <MotionReveal>
              <h2>
                Você pode montar sozinho — ou evitar erros e acelerar resultados
              </h2>

              <p>
                A plataforma permite que você crie sua loja por conta própria.
              </p>

              <p>
                Mas sem orientação, é comum perder tempo, configurar errado e
                não gerar vendas.
              </p>

              <p>
                Com minha ajuda, você já começa com tudo estruturado para
                vender.
              </p>

              <ul>
                <li>✔ Criação da loja</li>
                <li>✔ Configuração de pagamentos</li>
                <li>✔ Configuração de frete</li>
                <li>✔ Cadastro inicial de produtos</li>
                <li>✔ Orientação para começar a vender</li>
              </ul>

              <S.ButtonGroup>
                <CustomButton variant="cta" onClick={handleHelp}>
                  Quero ajuda na implantação
                </CustomButton>
              </S.ButtonGroup>
            </MotionReveal>
          </S.Highlight>

          {/* 🚀 CTA FINAL */}
          <S.CTA>
            <MotionReveal>
              <h2>Comece agora sua loja virtual</h2>

              <p>
                Dê o primeiro passo para vender online com uma estrutura
                profissional.
              </p>

              <CustomButton variant="cta" onClick={handleStart}>
                Quero testar grátis
              </CustomButton>
            </MotionReveal>
          </S.CTA>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
