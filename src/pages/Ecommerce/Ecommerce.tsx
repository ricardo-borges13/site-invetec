import image3 from '@/assets/images//JOIAS-MOOVIN.jpg';
import image1 from '@/assets/images/BEBIDAS-MOOVIN.jpg';
import image5 from '@/assets/images/COMIDA-MOOVIN.jpg';
import image4 from '@/assets/images/MODA-MOOVIN.jpg';
import heroImage from '@/assets/images/PagesHero-Ecommerce.jpg';
import image2 from '@/assets/images/ROUPAS-MOOVIN.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
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
    <PageHeroSection
      title="Crie sua loja virtual com estrutura profissional"
      subTitle="Plataforma completa + acompanhamento para você vender online com segurança"
      image={heroImage}
    >
      <S.Container>
        {/* 🔥 INTRO */}
        <S.Section>
          <MotionReveal>
            <h2>Venda seus produtos pela internet de forma profissional</h2>
            <p>
              Ter uma loja virtual hoje não é mais diferencial — é necessidade.
            </p>

            <p>
              Com a plataforma certa, você consegue vender 24h por dia, alcançar
              novos clientes e expandir seu negócio.
            </p>
          </MotionReveal>
        </S.Section>

        <S.Highlight>
          <MotionReveal>
            <h2>Plataforma profissional para e-commerce</h2>

            <p>
              Trabalho com a plataforma Moovin, uma solução completa para
              criação de lojas virtuais com alta performance, segurança e
              escalabilidade.
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
                <h3>🛒 Loja completa</h3>
                <p>Estrutura pronta para vender online com segurança.</p>
              </S.Card>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <S.Card>
                <h3>📱 Responsivo</h3>
                <p>Funciona perfeitamente no celular.</p>
              </S.Card>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <S.Card>
                <h3>💳 Integrações</h3>
                <p>Pagamentos, frete e gestão de pedidos integrados.</p>
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
            <h2>Você pode montar sozinho — ou com minha ajuda</h2>

            <p>
              A plataforma é simples e você pode criar sua loja por conta
              própria.
            </p>

            <p>
              Mas se quiser evitar erros e acelerar o processo, posso te ajudar
              na configuração completa.
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
  );
};
