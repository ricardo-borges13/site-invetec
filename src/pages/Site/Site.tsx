// Site.tsx

import heroImage from '@/assets/images/PagesHeroSite2.jpg';
import projectImage from '@/assets/images/SITE-JPM.jpg';
import { FormContactSite } from '@/components/FormContactSite/FormContactSite';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import * as S from './Site.styles';

export const Site = () => {
  return (
    <>
   <SEO
  title="Criação de Sites Profissionais em Ubá, Zona da Mata e Belo Horizonte | INVETEC"
  description="Desenvolvimento de sites profissionais para empresas que desejam crescer com mais presença digital, SEO, performance e estrutura moderna. Atendemos Ubá, Zona da Mata Mineira, Belo Horizonte e todo Brasil."
  image="https://www.invetec.com.br/images/SEO-Site.jpg"
  url="https://www.invetec.com.br/servicos/criacao-de-sites"
  keywords="
  criação de sites ubá,
  criação de sites belo horizonte,
  criação de sites zona da mata,
  desenvolvimento de sites profissionais,
  site para empresas,
  empresa de criação de sites,
  SEO para empresas,
  criação de landing pages,
  desenvolvimento web react,
  sites profissionais para indústria,
  presença digital empresarial,
  invetec
  "
/>

      <PageHeroSection
        title="Sites Profissionais para Empresas que Querem Crescer"
        subTitle="Estrutura moderna, performance, SEO e foco em geração de oportunidades para sua empresa."
        image={heroImage}
        overlayOpacity={0.72}

      >
        <S.Container>
          {/* HERO INTRO */}
          <S.Section>
            <MotionReveal>
              <S.Tag>TECNOLOGIA + ESTRATÉGIA + RESULTADO</S.Tag>

              <h2>Seu site pode virar uma ferramenta de vendas</h2>

              <p>
                Hoje, muitas empresas possuem um site apenas por obrigação. Mas
                um site profissional precisa transmitir confiança, posicionar
                sua empresa e gerar oportunidades reais.
              </p>

              <p>
                A INVETEC desenvolve sites modernos e estruturados para empresas
                que querem crescer de forma profissional no digital.
              </p>
            </MotionReveal>
          </S.Section>

          {/* DOR */}
          <S.QuestionBox>
            <MotionReveal>
              <span>🤔</span>

              <h2>
                Seu site gera oportunidades...
                <br />
                <strong>ou só ocupa espaço na internet?</strong>
              </h2>

              <p>
                Muitos sites são visualmente bonitos, mas não conseguem
                transmitir confiança, aparecer no Google ou gerar contatos.
              </p>

              <S.List>
                <li>❌ Site que não gera contatos</li>
                <li>❌ Visual antigo ou pouco profissional</li>
                <li>❌ Lentidão e experiência ruim no celular</li>
                <li>❌ Empresa não aparece nas pesquisas do Google</li>
                <li>❌ Cliente entra e não entende o que a empresa faz</li>
              </S.List>
            </MotionReveal>
          </S.QuestionBox>

          {/* DIFERENCIAL */}
          <S.Highlight>
            <MotionReveal>
              <h2>
                Você não precisa apenas de um site bonito. Precisa de uma
                estrutura digital profissional.
              </h2>

              <S.Grid>
                <S.Card>
                  <h3>📈 Estrutura Comercial</h3>
                  <p>Sites pensados para transformar visitantes em contatos.</p>
                </S.Card>

                <S.Card>
                  <h3>⚡ Alta Performance</h3>
                  <p>Carregamento rápido e experiência moderna.</p>
                </S.Card>

                <S.Card>
                  <h3>📱 Responsivo</h3>
                  <p>Funciona perfeitamente em celulares e tablets.</p>
                </S.Card>

                <S.Card>
                  <h3>🔎 SEO Estruturado</h3>
                  <p>Organização técnica pensada para o Google.</p>
                </S.Card>
              </S.Grid>
            </MotionReveal>
          </S.Highlight>

          {/* TECNOLOGIA */}
          <S.TechnologySection>
            <MotionReveal>
              <h2>Tecnologia moderna para empresas que querem crescer</h2>

              <p>
                Os projetos desenvolvidos pela INVETEC utilizam tecnologias
                modernas utilizadas por grandes empresas no mundo todo.
              </p>

              <S.TechGrid>
                <S.TechCard>
                  <h3>⚛ React</h3>
                  <p>Tecnologia moderna focada em performance e experiência.</p>
                </S.TechCard>

                <S.TechCard>
                  <h3>⚡ Performance</h3>
                  <p>Estrutura otimizada para velocidade e estabilidade.</p>
                </S.TechCard>

                <S.TechCard>
                  <h3>📱 Mobile First</h3>
                  <p>
                    Sites preparados para funcionar perfeitamente no celular.
                  </p>
                </S.TechCard>

                <S.TechCard>
                  <h3>🔍 SEO</h3>
                  <p>
                    Estrutura organizada para melhorar posicionamento no Google.
                  </p>
                </S.TechCard>
              </S.TechGrid>

              <S.TechInfo>
                Empresas como Facebook, Instagram, Netflix e WhatsApp utilizam
                tecnologias modernas baseadas em React.
              </S.TechInfo>
            </MotionReveal>
          </S.TechnologySection>

          {/* PORTFÓLIO */}
          <S.ProjectSection>
            <MotionReveal>
              <h2>Projetos desenvolvidos</h2>

              <p>
                Estruturas modernas, rápidas e desenvolvidas com foco em
                posicionamento e resultado.
              </p>

              <S.ProjectCard>
                <S.ProjectImageLink
                  href="https://grupojpm.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={projectImage} alt="Projeto desenvolvido" />
                </S.ProjectImageLink>

                <div>
                  <h3>GRUPO JPM</h3>

                  <p>
                    Site institucional desenvolvido em React com foco em
                    performance, SEO, posicionamento profissional e geração de
                    oportunidades comerciais.
                  </p>

                  <ul>
                    <li>✔ Estrutura moderna</li>
                    <li>✔ SEO otimizado</li>
                    <li>✔ Performance avançada</li>
                    <li>✔ Responsividade completa</li>
                  </ul>
                </div>
              </S.ProjectCard>
            </MotionReveal>
          </S.ProjectSection>

          {/* SOBRE INVETEC */}
          <S.Warning>
            <MotionReveal>
              <h2>Mais do que criação de sites</h2>

              <p>Aqui você não contrata apenas um desenvolvedor.</p>

              <p>
                Com mais de 20 anos atuando diretamente com tecnologia,
                infraestrutura, ERP e gestão de TI em empresas, a INVETEC
                entende a realidade empresarial e desenvolve soluções focadas em
                crescimento e organização.
              </p>

              <S.List>
                <li>✔ Experiência real em empresas</li>
                <li>✔ Visão estratégica de negócio</li>
                <li>✔ Acompanhamento próximo</li>
                <li>✔ Estrutura profissional</li>
                <li>✔ Tecnologia aplicada ao crescimento</li>
              </S.List>
            </MotionReveal>
          </S.Warning>

          {/* REGIONAL */}
          <S.RegionSection>
            <MotionReveal>
              <h2>Soluções Digitais para Empresas em Todo Brasil</h2>

              <p>
                A INVETEC atua no desenvolvimento de estruturas digitais
                modernas para empresas que desejam crescer com mais organização,
                posicionamento e presença profissional.
              </p>

              <p>
                Com projetos atendidos em diferentes regiões do país, possuímos
                forte presença em Belo Horizonte, Ubá e Zona da Mata Mineira.
              </p>
            </MotionReveal>
          </S.RegionSection>

          {/* PROCESSO */}
          <S.Section>
            <MotionReveal>
              <h2>Como funciona o desenvolvimento</h2>

              <S.Steps>
                <div>1. Entendimento da empresa</div>
                <div>2. Planejamento da estrutura</div>
                <div>3. Desenvolvimento visual</div>
                <div>4. Desenvolvimento técnico</div>
                <div>5. SEO e otimizações</div>
                <div>6. Publicação e acompanhamento</div>
              </S.Steps>
            </MotionReveal>
          </S.Section>

          {/* CTA */}
          <S.FormArea>
            <MotionReveal>
              <h2>Vamos estruturar o site ideal para sua empresa?</h2>

              <p>
                Preencha as informações abaixo e vamos entender a melhor
                estrutura digital para seu negócio.
              </p>

              <FormContactSite />
            </MotionReveal>
          </S.FormArea>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
