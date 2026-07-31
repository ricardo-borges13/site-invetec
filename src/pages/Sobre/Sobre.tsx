import heroImage from '@/assets/images/PagesHero-Sobre.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import {
  FiBriefcase,
  FiCloud,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiLock,
  FiMessageCircle,
  FiMonitor,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';
import * as S from './Sobre.styles';

const indicators = [
  ['Mais de 20 anos', 'Experiência prática em tecnologia para empresas', FiBriefcase],
  ['Atuação integrada', 'Sistemas, infraestrutura, cloud e presença digital', FiLayers],
  ['Atendimento consultivo', 'Soluções de acordo com a realidade de cada negócio', FiMessageCircle],
  ['Atendimento nacional', 'Projetos e suporte para empresas em diferentes regiões', FiGlobe],
] as const;

const pillars = [
  ['Organizar', 'Sistemas e processos integrados', 'ERP, gestão financeira, estoque, vendas, faturamento e integração entre setores para reduzir erros e melhorar o controle da operação.', FiLayers],
  ['Proteger', 'Infraestrutura, cloud e segurança', 'Ambientes de TI mais estáveis, backup, servidores, e-mail corporativo, proteção de dados e suporte técnico.', FiShield],
  ['Crescer', 'Presença digital e geração de negócios', 'Sites profissionais, SEO, Google Ads e e-commerce estruturados para aumentar visibilidade, contatos e oportunidades comerciais.', FiTrendingUp],
] as const;

const experience = [
  ['Gestão e operação', 'Implantação e acompanhamento de ERP, integração entre áreas e melhoria do controle financeiro, fiscal, comercial e operacional.', FiCpu],
  ['Infraestrutura e continuidade', 'Organização de redes, servidores, estações, segurança, backup e suporte para manter a empresa funcionando.', FiLock],
  ['Cloud e comunicação', 'Soluções de e-mail corporativo, armazenamento, acesso remoto e ambientes em nuvem com mais controle e disponibilidade.', FiCloud],
  ['Presença digital', 'Criação de sites, SEO, Google Ads e canais digitais preparados para gerar contatos e apoiar o crescimento comercial.', FiMonitor],
] as const;

const differentials = [
  ['Visão técnica e empresarial', 'A solução é avaliada não apenas pelo funcionamento técnico, mas pelo impacto na operação e na gestão.', FiBriefcase],
  ['Soluções integradas', 'Sistemas, infraestrutura, cloud e presença digital podem trabalhar de forma conectada, evitando fornecedores isolados e retrabalho.', FiLayers],
  ['Atendimento direto', 'O cliente conversa com quem entende o projeto e participa das decisões, sem estruturas excessivamente burocráticas.', FiMessageCircle],
  ['Tecnologia proporcional à necessidade', 'Não recomendamos complexidade desnecessária. A solução deve fazer sentido para o tamanho, a realidade e os objetivos da empresa.', FiTrendingUp],
] as const;

export const Sobre = () => (
  <>
    <SEO
      title="Sobre a INVETEC | Tecnologia para empresas há mais de 20 anos"
      description="Conheça a INVETEC, empresa especializada em ERP, infraestrutura, cloud, e-mail corporativo, criação de sites e suporte de TI para empresas."
      image="https://www.invetec.com.br/images/SEO-Sobre.jpg"
      url="https://www.invetec.com.br/sobre"
    />
    <PageHeroSection
      title="Tecnologia aplicada à realidade das empresas"
      subTitle="Há mais de 20 anos ajudando empresas a organizar processos, proteger informações e crescer com mais eficiência."
      image={heroImage}
      overlayOpacity={0.7}
    >
      <S.Container>
        <S.IntroSection>
          <MotionReveal direction="left"><S.Copy><S.Eyebrow>QUEM É A INVETEC</S.Eyebrow><h2>Tecnologia precisa resolver problemas reais</h2><p>A INVETEC é especializada em soluções de tecnologia para empresas, atuando com sistemas de gestão, infraestrutura, cloud, e-mail corporativo, desenvolvimento web e suporte técnico.</p><p>Nossa atuação combina conhecimento técnico com experiência prática dentro das empresas. Antes de recomendar uma solução, buscamos entender a operação, as dificuldades e os objetivos do negócio.</p><S.Highlight>Investimos tecnologia onde ela realmente gera resultado: mais organização, controle, segurança, produtividade e capacidade de crescimento.</S.Highlight></S.Copy></MotionReveal>
          <MotionReveal direction="right" delay={0.12}><S.IndicatorPanel>{indicators.map(([title, text, Icon]) => <S.Indicator key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></S.Indicator>)}</S.IndicatorPanel></MotionReveal>
        </S.IntroSection>

        <S.LightSection>
          <S.SectionHeading><MotionReveal><h2>Tecnologia para organizar, proteger e crescer</h2><p>A INVETEC atua em diferentes áreas da tecnologia, mas sempre com o mesmo objetivo: melhorar a operação da empresa e gerar resultados concretos.</p></MotionReveal></S.SectionHeading>
          <S.Pillars>{pillars.map(([title, subtitle, text, Icon], index) => <MotionReveal key={title} delay={index * 0.1}><S.Pillar><Icon aria-hidden="true" /><h3>{title}</h3><strong>{subtitle}</strong><p>{text}</p></S.Pillar></MotionReveal>)}</S.Pillars>
        </S.LightSection>

        <S.ContentSection>
          <S.SectionHeading><MotionReveal><h2>Experiência construída dentro das empresas</h2><p>A experiência da INVETEC não vem apenas da tecnologia. Ela foi construída acompanhando o funcionamento real de empresas, seus setores, processos e dificuldades diárias.</p></MotionReveal></S.SectionHeading>
          <S.ExperienceGrid>{experience.map(([title, text, Icon], index) => <MotionReveal key={title} delay={index * 0.08}><S.ExperienceItem><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></S.ExperienceItem></MotionReveal>)}</S.ExperienceGrid>
        </S.ContentSection>

        <S.CasesCallout>
          <MotionReveal direction="left">
            <S.CasesCopy>
              <S.CasesEyebrow>PROJETOS REAIS</S.CasesEyebrow>
              <h2>Resultados construídos em projetos reais</h2>
              <p>Conheça projetos em que a INVETEC aplicou tecnologia para melhorar a organização, a segurança e a presença digital de empresas.</p>
              <S.CasesLink to="/cases">Conhecer nossos cases</S.CasesLink>
            </S.CasesCopy>
          </MotionReveal>
          <MotionReveal direction="right" delay={0.1}>
            <S.CasesHighlights>
              <S.CaseHighlight><FiLayers aria-hidden="true" /><span>ERP e organização da operação</span></S.CaseHighlight>
              <S.CaseHighlight><FiShield aria-hidden="true" /><span>Infraestrutura, segurança e suporte de TI</span></S.CaseHighlight>
              <S.CaseHighlight><FiTrendingUp aria-hidden="true" /><span>Sites, SEO e geração de oportunidades</span></S.CaseHighlight>
            </S.CasesHighlights>
          </MotionReveal>
        </S.CasesCallout>

        <S.ContentSection>
          <S.SectionHeading><MotionReveal><h2>Por que trabalhar com a INVETEC</h2></MotionReveal></S.SectionHeading>
          <S.DifferentialGrid>{differentials.map(([title, text, Icon], index) => <MotionReveal key={title} delay={index * 0.08}><S.Differential><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></S.Differential></MotionReveal>)}</S.DifferentialGrid>
        </S.ContentSection>

        <MotionReveal><S.CTA><div><h2>Sua empresa precisa de mais organização, segurança ou presença digital?</h2><p>Converse com a INVETEC e entenda quais soluções fazem sentido para o momento da sua empresa.</p></div><S.CTALink to="/contato">Falar com um especialista</S.CTALink></S.CTA></MotionReveal>
      </S.Container>
    </PageHeroSection>
  </>
);
