import heroImage from '@/assets/images/PagesHero-Sobre.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { Link } from 'react-router-dom';
import * as S from './Sobre.styles';

const diferenciais = [
  {
    title: 'Experiência real dentro de empresas',
    content:
      'Mais de 20 anos atuando na prática, resolvendo problemas reais do dia a dia empresarial.',
  },
  {
    title: 'Tecnologia com visão de negócio',
    content:
      'Não focamos apenas na parte técnica — entendemos financeiro, fiscal, comercial e operação.',
  },
  {
    title: 'Soluções completas em um único parceiro',
    content:
      'ERP, infraestrutura, sites, marketing e suporte — tudo integrado e funcionando junto.',
  },
  {
    title: 'Foco em resultado, não só em tecnologia',
    content:
      'Cada solução é pensada para organizar sua empresa e gerar crescimento real.',
  },
  {
    title: 'Atendimento direto e sem burocracia',
    content:
      'Contato próximo, respostas rápidas e soluções práticas para o seu dia a dia.',
  },
  {
    title: 'Sem soluções genéricas',
    content:
      'Cada empresa é única — adaptamos a tecnologia à sua realidade, não o contrário.',
  },
];

export const Sobre = () => {
  return (
    <>
      <SEO
        title="Sobre a Invetec | Especialista em ERP, TI, Sites e Soluções para Empresas"
        description="Mais de 20 anos ajudando empresas a organizar processos, implantar ERP e crescer com tecnologia. Conheça a Invetec e nossas soluções completas em TI, sites e marketing digital."
        image="https://www.invetec.com.br/images/SEO-Sobre.jpg"
        url="https://www.invetec.com.br/sobre"
      />

      <PageHeroSection
        title="Sobre a Invetec"
        subTitle="Mais de 20 anos ajudando empresas a crescer com tecnologia"
        image={heroImage}
        overlayOpacity={0.7}
      >
        <S.Container>
          {/* INTRO */}
          <S.Intro>
            <MotionReveal>
              <h2>Tecnologia que organiza sua empresa e gera resultado real</h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="lead">
                A <strong>INVETEC</strong> nasce de um princípio simples:
                <strong>
                  {' '}
                  investir tecnologia onde ela realmente gera resultado
                </strong>
                .
              </p>

              <p>
                Ajudamos empresas a saírem do improviso e terem controle real da
                operação, com soluções que organizam processos, reduzem erros e
                trazem clareza para a gestão.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p>
                Atuamos desde a base — com estruturação e implantação de
                sistemas — até a geração de novos negócios com presença digital
                e vendas online.
              </p>

              <S.Highlight>
                Primeiro estruturamos sua empresa. Depois aceleramos o
                crescimento.
              </S.Highlight>
            </MotionReveal>

          </S.Intro>

          {/* EXPERIÊNCIA */}
          <S.Block>
            <MotionReveal>
              <S.SectionTitle>
                Experiência que vai além do técnico
              </S.SectionTitle>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p>
                A <strong>INVETEC</strong> nasceu da prática, não da teoria. São
                mais de 20 anos atuando diretamente dentro de empresas,
                resolvendo problemas reais do dia a dia.
              </p>
            </MotionReveal>

            <S.List>
              <li>Implantação e gestão de ERP (TOTVS, W3ERP e TagPlus)</li>

              <li>Organização e suporte completo da infraestrutura de TI</li>

              <li>
                Gestão de servidores e ambientes corporativos com segurança e
                estabilidade
              </li>

              <li>
                Proteção de dados e segurança da informação (controle de
                acessos, políticas e firewall)
              </li>

              <li>
                Integração entre setores da empresa: financeiro, fiscal,
                comercial, logística e faturamento
              </li>

              <li>
                Desenvolvimento de sites modernos focados em gerar contatos e
                novos clientes
              </li>
            </S.List>
          </S.Block>

          {/* SOLUÇÕES */}
          <S.Block>
            <MotionReveal>
              <S.SectionTitle>
                Soluções completas para organizar e crescer
              </S.SectionTitle>
            </MotionReveal>

            <S.Grid3>
              <S.SolutionCard>
                <strong>Gestão empresarial com ERP</strong>
                <p>
                  Controle financeiro, fiscal e operacional em um único sistema,
                  trazendo organização e clareza para a empresa.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>Infraestrutura e Cloud</strong>
                <p>
                  Ambientes seguros, estáveis e preparados para crescer junto
                  com o seu negócio.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>E-mail corporativo profissional</strong>
                <p>
                  Comunicação segura, confiável e com a identidade da sua
                  empresa.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>Proteção e backup de dados</strong>
                <p>
                  Segurança das informações com rotinas de backup e recuperação
                  rápida.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>Criação de sites que geram clientes</strong>
                <p>
                  Mais do que presença online — sites pensados para atrair,
                  converter e gerar oportunidades.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>Marketing digital e presença online</strong>
                <p>
                  Redes sociais, conteúdo e campanhas para aumentar visibilidade
                  e atrair novos clientes.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>E-commerce pronto para vender</strong>
                <p>
                  Lojas virtuais integradas com pagamentos e marketplaces,
                  preparadas para escalar vendas.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>Suporte e gestão de TI</strong>
                <p>
                  Acompanhamento contínuo para manter tudo funcionando com
                  segurança e eficiência.
                </p>
              </S.SolutionCard>

              <S.SolutionCard>
                <strong>Integração entre sistemas e áreas</strong>
                <p>
                  Conexão entre setores da empresa para eliminar retrabalho e
                  melhorar a produtividade.
                </p>
              </S.SolutionCard>
            </S.Grid3>
          </S.Block>

          {/* DIFERENCIAIS */}
          <S.Block>
            <S.SectionTitle>Diferenciais</S.SectionTitle>

            <S.Grid3>
              {diferenciais.map((item, index) => (
                <MotionReveal key={item.title} delay={index * 0.2}>
                  <S.Card>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </S.Card>
                </MotionReveal>
              ))}
            </S.Grid3>
          </S.Block>

          {/* CTA FINAL */}
          <S.CTA>
            <h2>Sua empresa está pronta para evoluir com tecnologia?</h2>
            <p>Fale comigo e veja como organizar sua empresa com tecnologia</p>

            <Link to="/contato">Falar com especialista</Link>
          </S.CTA>
        </S.Container>
      </PageHeroSection>
    </>
  );
};
